// import { domain, jsonHeaders, handleJsonResponse } from "./constants";
// import { store } from "../index";

// export const ADD_LIKE = "ADD_LIKE";
// export const REMOVE_LIKE = "REMOVE_LIKE";

// const url = domain + "/likes/";

// export const handleAddLike = e => dispatch => {
//     const token = store.getState().auth.login.token

//     return fetch(url, {
//         method: "POST",
//         headers: {
//             ...jsonHeaders,
//             Authorization: `Bearer ${token}`
//         },
//         body: JSON.stringify({token})
//     })
//     .then(handleJsonResponse)
//     .then(result => {
//         return dispatch({
//             type: ADD_LIKE,
//             payload: result
//         });
//     })
//     // .catch(err => {
//     //     return Promise.reject(
//     //         dispatch({ type: })
//     //     )
//     // })
// }