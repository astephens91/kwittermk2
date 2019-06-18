import { UPLOAD_IMAGE_SUCCESS, UPLOAD_IMAGE_FAILURE } from "../actions/uploadImage";

const initialState = {
  uploadImageResult: "",

};

const uploadImagereducer = (state = initialState, action) => {
  switch (action.type) {
case UPLOAD_IMAGE_SUCCESS:
    return {
      ...state,
      uploadImageResult: action.uploadImageResult,  
      picture: action.payload.picture
    };

  case UPLOAD_IMAGE_FAILURE:
    return {
      ...state,
      uploadImageResult: action.uploadImageResult
    };

  default:
    return state;
}
};

export default uploadImagereducer;