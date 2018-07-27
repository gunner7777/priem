import {
  TOGGLE_MENU
} from '../constants/actionTypes';

export const toggleMenu = (bool) => {
  return {
    type: TOGGLE_MENU,
    bool
  }
}