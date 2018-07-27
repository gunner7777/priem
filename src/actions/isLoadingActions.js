import {
  IS_LOADING
} from '../constants/actionTypes';

export const infoIsLoading = (bool) => {
  return {
    type: IS_LOADING,
    bool
  }
}