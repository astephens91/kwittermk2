import {GET_MESSAGES, GET_MESSAGES_SUCCESS, GET_MESSAGES_FAIL} from "../actions"

const initialState = {
  messages: {messages:[]}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return {
        ...state,
        messageLoading: true,
        messageError: null
      };
    case GET_MESSAGES_SUCCESS:
      return { ...state, messages: action.payload, messageLoading: false };
    case GET_MESSAGES_FAIL:
      return { ...state, messageError: action.payload, messageLoading: false };
    default:
      return state;
  }
};
