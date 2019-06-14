import { push } from "connected-react-router";
import { jsonHeaders, handleJsonResponse } from "./constants";

export const LOGOUT = "LOGOUT";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

const kwitterURL = "https://kwitter-api.herokuapp.com";
const logout = () => (dispatch, getState) => {
  const token = getState().auth.login.token;
  dispatch({
    type: LOGOUT
  });
  return fetch(`${kwitterURL}/auth/logout`, {
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

export const logoutThenGoToLogin = () => dispatch => {
  dispatch(push("/"));
  return dispatch(logout());
};

// fetch(url + "/logout", {
//   method: "GET",
//   headers: {
//     Authorization: "Bearer" + token
//   },
//   body: JSON.stringify(logoutData)
// })
