import {
  GET_DOCS_SUCCESS,
  DOCS_IS_LOADING
} from '../constants/actionTypes';

const initialState = {
  docs: [],
  isLoading: true
}

export const docs = (state=initialState, action) => {
  switch(action.type) {
    case GET_DOCS_SUCCESS:
      return {
        ...state,
        docs: action.docs
      }
    
    case DOCS_IS_LOADING:
      return {
        ...state,
        isLoading: action.bool
      }

    default: return state;
  }
}