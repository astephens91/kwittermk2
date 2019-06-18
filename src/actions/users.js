import { domain } from "./constants";
import { logout } from "./auth.js";
import { push } from "connected-react-router";
import { getLoggedInUsersMessages } from ".";


export const GET_USER = "GET_USER";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAIL = "GET_USER_FAIL";
export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAIL = "UPDATE_USER_FAIL";
export const DELETE_USER = "DELETE_USER";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAIL = "DELETE_USER_FAIL";

const url = domain + "/users";

export const getUser = () => (dispatch, getState) => {
  const userId = getState().auth.login.id;
  dispatch({ type: GET_USER });
  return fetch(url + "/" + userId)
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
      return dispatch({ type: GET_USER_SUCCESS, data: data.user });
    })
    .catch(err => {
      return dispatch({ type: GET_USER_FAIL, err });
    });
};

export const updateUser = userData => (dispatch, getState) => {
  const token = getState().auth.login.token;
  let userDataOriginal = userData;
  if (userData.displayName === "") {
    delete userData.displayName;
  }
  if (userData.displayName !== undefined) {
    if (userData.displayName.length < 4 || userData.displayName.length > 20) {
      alert("Your display name must be between 4 and 20 characters long");
    }
  }
  if (userData.password !== undefined) {
    if (userData.password.length < 4 || userData.password.length > 20) {
      alert("Your password must be between 4 and 20 characters long");
    }
  }
  if (userData.about !== undefined) {
    if (userData.about.length > 260) {
      alert("Your.about must be no longer than 260 characters");
    }
  }
  if (userData.password === "") {
    delete userData.password;
  }
  if (userData.about === "") {
    delete userData.about;
  }
  dispatch({ type: UPDATE_USER });
  console.log(userDataOriginal)
//   fetch(url).then(res => res.json()).then(response => {
//     console.log(response.users)
//       const userId = response.users.filter(user => {
//           return user.username === "testuser1"
//       })
//       console.log(userId)
//   })
  
  fetch(url + "/" + getState().auth.login.id, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
        password: userData.password,
        about: userData.bio,
        displayName: userData.displayName
    })
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data.user)
      dispatch({ type: UPDATE_USER_SUCCESS, data: data.user });
    //   dispatch(push("/profile"));
    })
    .catch(err => {
      dispatch({ type: UPDATE_USER_FAIL, err });
    });
};

export const deleteUserProfile = token => (dispatch, getState) => {
  const userId = getState().auth.login.id
  console.log(url + "/" + userId)
  dispatch({ type: DELETE_USER });
  fetch(url + "/" + userId, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`
    }
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
    dispatch({ type: DELETE_USER_SUCCESS, data: data.user })
    dispatch(push("/"))
    return dispatch(logout())
  })
  .catch(err => {
    dispatch({ type: DELETE_USER_FAIL, err })
  });
};


export const getUserProfile = () => dispatch => {
  dispatch(getUser()).then(() => dispatch(getLoggedInUsersMessages()));
};


