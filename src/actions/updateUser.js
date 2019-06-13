import { push } from "connected-react-router";
export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE";


const kwitterURL = "https://kwitter-api.herokuapp.com";

 const updateUser = userData => (dispatch, getState) => {
    const token = getState().authentication.token;
    if (userData.displayName === "") {
      delete userData.displayName;
    }
    if (userData.password === "") {
      delete userData.password;
    }
    dispatch({ type: UPDATE_USER });
    fetch(`${kwitterURL}/users`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    })
      .then(response => {
        if (!response.ok) {
          response.json().then(err => {
            throw err;
          });
        }
        return response.json();
      })
      .then(data => {
        dispatch({ type: UPDATE_USER_SUCCESS, data: data.user });
        dispatch(push("/UserProfile"));
      })
      .catch(err => {
        dispatch({ type: UPDATE_USER_FAILURE, err });
      });
  };
  export default updateUser;