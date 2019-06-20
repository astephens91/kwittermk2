import { UPLOAD_IMAGE_SUCCESS, UPLOAD_IMAGE_FAILURE, GET_IMAGE, GET_IMAGE_LOCATION_SUCCESS, GET_IMAGE_LOCATION_FAIL } from "../actions/uploadImage";

const initialState = {
  uploadImageResult: "",
  pictureLocation: null

};

const uploadImagereducer = (state = initialState, action) => {
  switch (action.type) {
case UPLOAD_IMAGE_SUCCESS:
    console.log(action.payload.pictureLocation);
    return {
      ...state,
      uploadImageResult: action.uploadImageResult,  
      pictureLocation: action.payload.pictureLocation,
    }
    

  case UPLOAD_IMAGE_FAILURE:
    return {
      ...state,
      uploadImageResult: action.uploadImageResult
    };
  case GET_IMAGE:
    return{
      ...state
    }
  case GET_IMAGE_LOCATION_SUCCESS:
    return{
      ...state
    }
  case GET_IMAGE_LOCATION_FAIL:
    return {}

  default:
    return state;
}
};

export default uploadImagereducer;