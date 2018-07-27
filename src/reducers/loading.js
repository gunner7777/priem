import { 
  IS_LOADING
} from '../constants/actionTypes';

const initialState = {
  isLoading: true
}

export const loading = (state = initialState, action) => {
  switch(action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.bool
      }
    default: return state;
  }
}