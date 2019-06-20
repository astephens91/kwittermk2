import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  UPDATE_USER,
  UPDATE_USER_FAIL,
  UPDATE_USER_SUCCESS,
  DELETE_USER,
  DELETE_USER_FAIL,
  DELETE_USER_SUCCESS
} from "../actions";

const initialState = {
  user: {
    id: 0,
    username: "",
    displayName: "",
    about: "",
    createdAt: "",
    updatedAt: "",
    messages: [],
    pictureLocation: "",
    src: ""
  },
  getUserError: null,
  getUserLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        getUserLoading: true,
        getUserError: null
      };
    case GET_USER_SUCCESS:
      return { ...state, user: action.data };
    
    case GET_USER_FAIL:
      return {
        ...state,
        getUserError: action.payload,
        getUserLoading: false
      };
    case UPDATE_USER:
      return { ...state };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        user: action.data
      };
    case UPDATE_USER_FAIL:
      return state;

    case DELETE_USER:
      return state;
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        loggedInUser: { ...state.loggedInUser }
      };
    case DELETE_USER_FAIL:
      return state;

    default:
      return state;
  }
};
