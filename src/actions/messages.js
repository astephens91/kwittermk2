import { domain, handleJsonResponse, jsonHeaders } from "./constants";
import { store } from "../index";

const url = domain + "/messages";

export const GET_MESSAGES = "GET_MESSAGES";
export const GET_MESSAGES_SUCCESS = "GET_MESSAGES_SUCCESS";
export const GET_MESSAGES_FAIL = "GET_MESSAGES_FAIL";
export const GET_USER_MESSAGES = "GET_USER_MESSAGES";
export const GET_USER_MESSAGES_SUCCESS = "GET_USER_MESSAGES_SUCCESS";
export const GET_USER_MESSAGES_FAIL = "GET_USER_MESSAGES_FAIL";
export const CREATE_KWEET = "CREATE_KWEET";
export const CREATE_KWEET_SUCCESS = "CREATE_KWEET_SUCCESS";
export const CREATE_KWEET_FAIL = "CREATE_KWEET_FAIL";

export const getMessages = (limit = 100, offset = 0, userId) => dispatch => {
    dispatch({ type: GET_MESSAGES });

// https://kwitter-api.herokuapp.com/message?limit=100&offset=0
// What we are fetching specifically
    fetch(url + `?limit=${limit}&offset=${offset}` + (userId ? `&userId=${userId}`: ""))
    .then(handleJsonResponse)
    .then(result => {
        dispatch({
            type: userId ? GET_USER_MESSAGES_SUCCESS : GET_MESSAGES_SUCCESS,
            payload: result
        });
    })
    .catch(err => {
        dispatch({
            type: userId ? GET_USER_MESSAGES_FAIL : GET_MESSAGES_FAIL,
            payload: err
        })
    })
}


export const getLoggedInUsersMessages = () => (dispatch, getState) => {
    const userId = getState().auth.login.id
    dispatch(getMessages(10000, 0, userId))
}

export const handleCreateKweet = text => dispatch => {
    const token = store.getState().auth.login.token

    return fetch(url, {
        method: "POST",
        headers: {
            ...jsonHeaders,
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({text})
    })
    .then(handleJsonResponse)
    .then(result => {
        // console.log(result)
        dispatch({
            type: CREATE_KWEET_SUCCESS,
            payload: result
        });
    })
    .catch(err => {
        dispatch({
            type: CREATE_KWEET_FAIL,
            payload: err
        });
    })
};
