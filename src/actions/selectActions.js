import {
  GET_TARGETS_SELECT,
  SET_TARGET_SELECT,
  CHECK_TARGET_IS_SELECT
} from '../constants/actionTypes';

export const getTargetsSelect = (id) => {
  return {
    type: GET_TARGETS_SELECT,
    id
  }
}

export const setTargetSelect = (id) => {
  return {
    type: SET_TARGET_SELECT,
    id
  }
}

export const checkTargetIsSelect = (id) => {
  return {
    type: CHECK_TARGET_IS_SELECT,
    id
  }
}