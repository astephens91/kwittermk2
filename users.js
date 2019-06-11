import { domain, jsonHeaders, handleJsonResponse } from "./constants";

// action types
export const GET_USERS = "GET_USERS";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAIL = "GET_USERS_FAIL";

const url = domain + "/users";

// action creators
export const getUsers = () => dispatch => {
  dispatch({
    type: GET_USERS
  });

  return fetch(url, {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GET_USERS_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: GET_USERS_FAIL, payload: err.message })
      );
    });
};

