import {domain} from "./constants"
import ostrichAvatar from "../img/ostrichAvatar.png"
import { store } from "../index";
// const url = domain + "/users/picture";
export const UPLOAD_IMAGE_SUCCESS = "UPLOAD_IMAGE_SUCCESS";
export const UPLOAD_IMAGE_FAILURE = "UPLOAD_IMAGE_FAILURE";


export const uploadImage = imageData => dispatch => {
    const token = store.getState().auth.login.token;
    const userId = store.getState().auth.login.id
    
    
    console.log(imageData);
    
    fetch(`${domain}/users/${userId}/picture`, {
    // fetch("https://kwitter-api.herokuapp.com/users/picture", {
      method: "PUT",
      headers: {
        "Authorization": "Bearer " + token
      },
      body:  imageData
      
    })
      .then(result => {
        console.log(result);
        return result
      })
      
      .then(result => {
      const url2 = domain + "/users/"
      fetch(url2 + imageData.id + "/picture", {
        headers: {
        "Authorization": "Bearer " + token
      }
    }).then(res => {
      if(res.status === 404){
      return store.dispatch({
        type: UPLOAD_IMAGE_FAILURE,
        payload: {picture:ostrichAvatar}
      })
    } else{
          return store.dispatch({
            type:UPLOAD_IMAGE_SUCCESS,
            payload: {picture: res.url}
          })
      }
    })
      
    })
    .catch(er => console.log(er))
  }

    