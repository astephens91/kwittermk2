import {domain} from "./constants"
import ostrichAvatar from "../img/ostrichAvatar.png"
import { store } from "../index";
export const UPLOAD_IMAGE_SUCCESS = "UPLOAD_IMAGE_SUCCESS";
export const UPLOAD_IMAGE_FAILURE = "UPLOAD_IMAGE_FAILURE";
export const GET_IMAGE = "GET_IMAGE";
export const GET_IMAGE_LOCATION_SUCCESS = "GET_IMAGE_LOCATION_SUCCESS"
export const GET_IMAGE_LOCATION_FAIL = "GET_IMAGE_LOCATION_FAILT"


export const uploadImage = imageData => dispatch => {
    const token = store.getState().auth.login.token;
    const userId = store.getState().auth.login.id
    
    
    
    fetch(`${domain}/users/${userId}/picture`, {
      method: "PUT",
      headers: {
        "Authorization": "Bearer " + token
      },
      body:  imageData
      
    })
      .then(result => {
        
        window.location.reload()
        return result
      })
      
      .then(() => {
      const url2 = domain + "/users/"
      fetch(url2 + userId + "/picture", {
        method: "GET",
        headers: {
        "Authorization": "Bearer " + token,
        "Content-Type": "multipart/form-data"
      }
    }).then(res => {
      if(res.status === 404){
      return store.dispatch({
        type: UPLOAD_IMAGE_FAILURE,
        payload: {pictureLocation:ostrichAvatar}
      })
     
    } else{
          return store.dispatch({
            type:UPLOAD_IMAGE_SUCCESS,
            payload: {pictureLocation: res.url}
          })
      }
    })
      
    })
    .catch(er => console.assert(er))
  }

  export const getImage = imageData => dispatch =>{
    fetch(`${domain}/users/${this.props.userId}/picture`).then(response => {
      if (response.ok && response.status !== 404) {
        this.setState({
          src: `${domain}/users/${this.props.userId}/picture`
        });
      }})
  }

    