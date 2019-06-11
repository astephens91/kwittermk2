import { GET_USERS, GET_USERS_SUCCESS, GET_USERS_FAIL } from "../actions";
const initialState = {
  users: {users:[]}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        usersLoading: true,
        usersError: null
      };
    case GET_USERS_SUCCESS:
      return { ...state, users: action.payload, usersLoading: false };
    case GET_USERS_FAIL:
      return { ...state, usersError: action.payload, usersLoading: false };
    default:
      return state;
  }
};
