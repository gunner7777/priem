import {
  VIEW_FILE,
} from '../constants/actionTypes';

export const viewFile = (fileInfo) => {
  return {
    type: VIEW_FILE,
    fileInfo
  }
}