import { AnyAction } from "redux";
import actions from "./constants";
import authState from "./state";

export function reducer(state = authState, action: AnyAction) {
  switch (action.type) {
    case actions.USER: {
      return {
        ...state,
        [action.payload.page]: {
          login: action.payload.value
        }
      };
    }
    case actions.LAYOUT: {
      return {
        ...state,
        [action.payload.page]: {
          layout: action.payload.value
        }
      };
    }
    default:
      return state;
  }
}

