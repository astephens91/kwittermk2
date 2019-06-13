import { push } from "connected-react-router"
export const LOGOUT = "LOGOUT";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

const kwitterURL = "https://kwitter-api.herokuapp.com";
const logout = () => dispatch => {
    console.log('is this running')
    fetch(`${kwitterURL}/auth/logout`)
      .then(response => {
        if (!response.ok) {
          response.json().then(err => {
            throw err;
          });
        }
        return response.json();
      })
      .then(data => {
        console.log(data)
        dispatch({ type: LOGOUT_SUCCESS });
        dispatch(push("/"));
        // alert("Thanks for visiting KWITTER! Come back soon!");
      })
      .catch(err => {
        console.log(err)
        dispatch({ type: LOGOUT_FAILURE, err });
      });
  };
  
  export const logoutThenGoToLogin = () => dispatch => {
    dispatch(push("/"));
    return dispatch(logout());
  };;

  // fetch(url + "/logout", {
  //   method: "GET",
  //   headers: {
  //     Authorization: "Bearer" + token
  //   },
  //   body: JSON.stringify(logoutData)
  // })