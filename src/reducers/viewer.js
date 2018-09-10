import {
  VIEW_FILE
} from '../constants/actionTypes';

const initialState = {
  fileInfo: {
    path: '#',
    name: '',
  }
}

export const viewer = (state=initialState, action) => {
  switch(action.type) {
    case VIEW_FILE:
      return {
        ...state,
        fileInfo: action.fileInfo
      }

    default: return state;
  }
}