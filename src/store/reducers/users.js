import * as types from "../actionTypes";

const initialState = {
  list: [],
  user: null,
  currentUrl: null,
  nextUrl: null,
};

const users = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_USERS: {
      return {
        ...state,
        list: payload.users,
        currentUrl: payload.currentUrl,
        nextUrl: payload.nextUrl,
      };
    }
    case types.SET_USER: {
      return {
        ...state,
        user: payload,
      };
    }
    case types.CLEAR_USER: {
      return {
        ...state,
        user: null,
      };
    }
    default:
      break;
  }
  return state;
};

export default users;
