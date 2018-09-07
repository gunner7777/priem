import {
  GET_SVEDEN_SUCCESS,
  SVEDEN_IS_LOADING
} from '../constants/actionTypes';

const initialState = {
  sveden: [],
  isLoading: true
}

export const sveden = (state=initialState, action) => {
  switch(action.type) {
    case GET_SVEDEN_SUCCESS:
      return {
        ...state,
        sveden: action.sveden
      }

    case SVEDEN_IS_LOADING:
      return {
        ...state,
        isLoading: action.bool
      }

    default: return state;
  }
}