import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL
} from "../actions";

const initialState = {
  loginLoading: false,
  login: null,
  loginError: null,
  registerLoading: false,
  register: null,
  registerError: null,
  username: null,
  displayName: null,
  logoutLoading: null,
  logoutError: null
};

const getInitState = () => {
  return JSON.parse(localStorage.getItem("auth")) || initialState;
};

export default (state = getInitState(), action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loginLoading: true,
        loginError: null
      };
    case LOGIN_SUCCESS:
      return { ...state, login: action.payload, loginLoading: false };
    case LOGIN_FAIL:
      return { ...state, loginError: action.payload, loginLoading: false };
    case REGISTER:
      return {
        ...state,
        registerLoading: true,
        registerError: null
      };
    case REGISTER_SUCCESS:
      return { ...state, registerLoading: false, loginError: null };
    case REGISTER_FAIL:
      return {
        ...state,
        registerError: action.payload,
        registerLoading: false
      };
    case LOGOUT:
      return {
        ...state,
        logoutLoading: true,
        logoutError: null
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        login: null
      };
    case LOGOUT_FAIL:
      return {
        ...state,
        logoutError: action.payload,
        logoutLoading: false
      };
    default:
      return state;
  }
};
