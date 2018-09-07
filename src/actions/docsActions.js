import axios from 'axios';
import {
  GET_DOCS_SUCCESS,
  DOCS_IS_LOADING
} from '../constants/actionTypes';
import { API_URL } from '../constants/config';

export const getDocs = (data) => {
  return (dispatch) => {
    dispatch(docsIsLoading(true));
    axios.post(API_URL, data)
      .then((response) => {
        dispatch(getDocsSuccess(response.data));
        dispatch(docsIsLoading(false));
      })
      .catch((error) => {
        console.error("Error", error);
      })
  }
}

const getDocsSuccess = (docs) => {
  return {
    type: GET_DOCS_SUCCESS,
    docs
  }
}

const docsIsLoading = (bool) => {
  return {
    type: DOCS_IS_LOADING,
    bool
  }
}