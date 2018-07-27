import axios from 'axios';
import {
  GET_ENROLLED_LIST_SUCCESS,
  ENROLLED_LIST_IS_LOADING,
  GET_FAKS_LIST_FOR_ENROLLED,
  GET_EDU_FORMS_LIST_FOR_ENROLLED,
  GET_BASE_FOR_ENROLLED,
  SET_ENROLLED_LIST,
  ENROLLED_RESET
} from '../constants/actionTypes';
import { API_URL } from '../constants/config';

const enrolledListIsLoading = (bool) => {
  return {
    type: ENROLLED_LIST_IS_LOADING,
    bool
  }
}

export const getFaksList = (grad) => {
  return {
    type: GET_FAKS_LIST_FOR_ENROLLED,
    grad
  }
}

export const getEduFormsList = (fac) => {
  return {
    type: GET_EDU_FORMS_LIST_FOR_ENROLLED,
    fac
  }
}

export const getBase = (form) => {
  return {
    type: GET_BASE_FOR_ENROLLED,
    form
  }
}

export const setEnrolledList = (base) => {
  return {
    type: SET_ENROLLED_LIST,
    base
  }
}

export const getEnrolledList = (data) => {
  return (dispatch) => {
    dispatch(enrolledListIsLoading(true));
    axios.post(API_URL, data)
      .then((response) => {
        dispatch(getEnrolledListSuccess(response.data));
        dispatch(enrolledListIsLoading(false));
      })
      .catch((error) => {
        console.error("Error", error);
      })
  }
}

export const getEnrolledListSuccess = (enrolled) => {
  return {
    type: GET_ENROLLED_LIST_SUCCESS,
    enrolled
  }
}

export const resetToDefault = (bool) => {
  return {
    type: ENROLLED_RESET,
    bool
  }
}


