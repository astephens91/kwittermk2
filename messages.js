import { domain, jsonHeaders, handleJsonResponse } from "./constants";

// action types
export const GET_MESSAGES = "GET_MESSAGES";
export const GET_MESSAGES_SUCCESS = "GET_MESSAGES_SUCCESS";
export const GET_MESSAGES_FAIL = "GET_MESSAGES_FAIL";

const url = domain + "/messages";

// action creators
export const getMessages = () => dispatch => {
  dispatch({
    type: GET_MESSAGES
  });

  return fetch(url, {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GET_MESSAGES_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: GET_MESSAGES_FAIL, payload: err.message })
      );
    });
};

