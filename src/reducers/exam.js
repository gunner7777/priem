import {
  GET_EXAM_SUCCESS,
  EXAM_IS_LOADING
} from '../constants/actionTypes';

const initialState = {
  exam: [],
  isLoading: true
}

export const exam = (state=initialState, action) => {
  switch(action.type) {
    case GET_EXAM_SUCCESS:
      return {
        ...state,
        exam: action.exam
      }

    case EXAM_IS_LOADING:
      return {
        ...state,
        isLoading: action.bool
      }

    default: return state;
  }
}