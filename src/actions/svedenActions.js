import axios from 'axios';
import {
  GET_SVEDEN_SUCCESS,
  SVEDEN_IS_LOADING
} from '../constants/actionTypes';
import { API_URL } from '../constants/config';

export const getSveden = (data) => {
  return (dispatch) => {
    dispatch(svedenIsLoading(true));
    axios.post(API_URL, data)
      .then((response) => {
        dispatch(getSvedenSuccess(response.data));
        dispatch(svedenIsLoading(false));
      })
      .catch((error) => {
        console.error(error);
      })
  }
}

const getSvedenSuccess = (sveden) => {
  return {
    type: GET_SVEDEN_SUCCESS,
    sveden
  }
}

const svedenIsLoading = (bool) => {
  return {
    type: SVEDEN_IS_LOADING,
    bool
  }
}