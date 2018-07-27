import {
  TOGGLE_MENU
} from '../constants/actionTypes';

const initialState = {
  isShow: true
}

export const menu = (state=initialState, action) => {
  switch(action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        isShow: action.bool
      }

    default: return state;
  }
}