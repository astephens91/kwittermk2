import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { push } from "connected-react-router";

// action types
export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const LOGOUT = "LOGOUT";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const REGISTER = "REGISTER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

const authUrl = domain + "/auth";
const regUrl = domain + "/users"

// action creators
const login = loginData => dispatch => {
  dispatch({
    type: LOGIN
  });

  return fetch(authUrl + "/login", {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(loginData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: LOGIN_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: LOGIN_FAIL, payload: err.message })
      );
    });
};

const logout = () => (dispatch, getState) => {
  const token = getState().auth.login.token;
  dispatch({
    type: LOGOUT
  });
  return fetch(authUrl + "/logout", {
    method: "GET",
    headers: { jsonHeaders, Authorization: `Bearer ${token}` }
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: LOGOUT_SUCCESS
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: LOGOUT_FAILURE, err });
    });
};

const register = registerData => dispatch => {
  dispatch({
    type: REGISTER
  });

  return fetch(regUrl, {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(registerData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: REGISTER_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: REGISTER_FAIL, payload: err.message })
      );
    });
};

export const loginThenGoToUserProfile = loginData => dispatch => {
  return dispatch(login(loginData)).then(() => dispatch(push("/home")));
};

export const logoutThenGoToLogin = () => dispatch => {
  dispatch(push("/"));
  return dispatch(logout());
};

export const registerThenGoToUserProfile = registerData => dispatch => {
  return dispatch(register(registerData)).then(() =>
    dispatch(push("/postreg"))
  );
};

