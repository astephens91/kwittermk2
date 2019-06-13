import {
  GET_MESSAGES,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_FAIL,
  GET_USER_MESSAGES,
  GET_USER_MESSAGES_SUCCESS,
  GET_USER_MESSAGES_FAIL,
  CREATE_KWEET,
  CREATE_KWEET_SUCCESS,
  CREATE_KWEET_FAIL
} from "../actions";

const initialState = {
  getMessagesLoading: false,
  messages: [],
  getMessagesError: null,
  getUserMessagesLoading: false,
  userMessages: [],
  getUserMessagesError: null,
  getKweetLoading: false,
  getKweetError: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return {
        ...state,
        getMessagesLoading: true
      };
    case GET_MESSAGES_SUCCESS:
      return {
        ...state,
        messages: action.payload.messages,
        getMessagesLoading: false
      };
    case GET_MESSAGES_FAIL:
      return {
        ...state,
        getMessagesError: action.payload,
        getMessagesLoading: false
      };
    case GET_USER_MESSAGES:
      return {
        ...state,
        getUserMessagesLoading: true,
        getUserMessagesError: null
      };
    case GET_USER_MESSAGES_SUCCESS:
      return {
        ...state,
        userMessages: action.payload.messages,
        getUserMessagesLoading: false
      };
    case GET_USER_MESSAGES_FAIL:
      return {
        ...state,
        getUserMessagesError: action.payload,
        getUserMessagesLoading: false
      };
    case CREATE_KWEET:
      return {
        ...state,
        getKweetLoading: true
      };
    case CREATE_KWEET_SUCCESS:
      return {
        ...state,
        messages: [
          action.payload.message,
          ...state.message
        ],
        getKweetLoading: false
      };
    case CREATE_KWEET_FAIL:
      return {
        ...state,
        getKweetError: action.payload,
        getKweetLoading: false
      };
    default:
      return state;
  }
};
