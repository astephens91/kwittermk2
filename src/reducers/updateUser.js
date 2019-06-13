import {UPDATE_USER_SUCCESS,UPDATE_USER_FAILURE} from "../actions/updateUser"
const updateUserReducer = (state = initialState, action) => {
    switch (action.type) {
case UPDATE_USER:
      return state;
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loggedInUser: { ...state.loggedInUser, ...action.data }
      };
    case UPDATE_USER_FAILURE:
      return state;
    // always need to return somehtign; could combine all of the cases with just the return state, but it doesnt waste that much time to not have it
    default:
      return state;
  }
};
export default updateUserReducer;