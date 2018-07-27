import axios from 'axios';
import {
  GET_DOCS,
  GET_DOCS_SUCCESS,
  GET_EXAM,
  GET_EXAM_SUCCESS,
  IS_LOADING
} from '../constants/actionTypes';

export const infoIsLoading = (bool) => {
  return {
    type: IS_LOADING,
    bool
  }
}


export const getDocs = () => {
  const url = '';
  return (dispatch) => {
    dispatch(infoIsLoading(true));
    axios.get(url)
      .then((response) => {
        dispatch(getDocsSuccess(response.data));
        dispatch(infoIsLoading(false));
      })
      .catch((error) => {
        console.error(error);
      })
  }
}

const getDocsSuccess = (docs) => {
  return {
    type: GET_DOCS_SUCCESS,
    docs
  }
}