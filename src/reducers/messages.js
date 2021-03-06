import {
  GET_MESSAGES,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_FAIL,
  GET_USER_MESSAGES,
  GET_USER_MESSAGES_SUCCESS,
  GET_USER_MESSAGES_FAIL,
  CREATE_KWEET,
  CREATE_KWEET_SUCCESS,
  CREATE_KWEET_FAIL,
  UPDATE_MESSAGE_BY_ID,
  UPDATE_MESSAGE_BY_ID_SUCCESS,
  UPDATE_MESSAGE_BY_ID_FAIL
} from "../actions";

const initialState = {
  getMessagesLoading: false,
  messages: [],
  getMessagesError: null,
  getUserMessagesLoading: false,
  userMessages: [],
  getUserMessagesError: null,
  getKweetLoading: false,
  getKweetError: null,
  updateMessageByIdLoading: false,
  updateMessageByIdError: null
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
      const newMessageList = Array.from(state.messages);
      newMessageList.unshift(action.payload.message);

      const userNewMessageList = Array.from(state.userMessages);
      userNewMessageList.unshift(action.payload.message);
      return {
        ...state,
        messages: newMessageList,
        userMessages: userNewMessageList,
        getKweetLoading: false
      };
    case CREATE_KWEET_FAIL:
      return {
        ...state,
        getKweetError: action.payload,
        getKweetLoading: false
      };
    case UPDATE_MESSAGE_BY_ID:
      return {
        ...state,
        updateMessageByIdLoading: true,
        updateMessageByIdError: null
      };
    case UPDATE_MESSAGE_BY_ID_SUCCESS:
      console.log(state.messages);
      const newMessages = state.messages.map(message =>
        message !== undefined && message.id === action.payload.id
          ? action.payload
          : message
      );
      const newUserMessages = state.messages.map(message =>
        message !== undefined && message.id === action.payload.id
          ? action.payload
          : message
      );
      return {
        ...state,
        updateMessageByIdLoading: false,
        messages: newMessages,
        userMessages: newUserMessages,
        updateMessageByIdError: action.payload
      };
    case UPDATE_MESSAGE_BY_ID_FAIL:
      return {
        ...state,
        updateMessageByIdError: action.payload,
        updateMessageByIdLoading: false
      };
    default:
      return state;
  }
};
