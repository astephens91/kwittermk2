import { domain, handleJsonResponse, jsonHeaders } from "./constants";
import { getLoggedInUsersMessages } from ".";
import { push } from "connected-react-router";
import users from "../reducers/users";

export const GET_USER = "GET_USER";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAIL = "GET_USER_FAIL";
export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAIL = "UPDATE_USER_FAIL";

const url = domain + "/users";

export const getUser = userId => dispatch => {
  dispatch({
    type: GET_USER
  });

  return fetch(url + "/" + userId)
    .then(handleJsonResponse)
    .then(result => {
      dispatch({
        type: GET_USER_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      dispatch({
        type: GET_USER_FAIL,
        payload: err
      });
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
  fetch(url).then(res => res.json()).then(response => {
    console.log(response.users)
      const userId = response.users.filter(user => {
          return user.username === "testuser1"
      })
      console.log(userId)
  })
  
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

export const getLoggedInUser = () => (dispatch, getState) => {
  const userId = getState().auth.login.id;
  return dispatch(getUser(userId));
};

export const getUserProfile = () => dispatch => {
  dispatch(getLoggedInUser()).then(() => dispatch(getLoggedInUsersMessages()));
};
