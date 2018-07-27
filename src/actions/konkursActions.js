import axios from 'axios';
import {
  GET_KONKURS_LIST_SUCCESS,
  KONKURS_LIST_IS_LOADING,
  SET_KONKURS_LIST,
  GET_FAKS_LIST_FOR_KONKURS,
  GET_EDU_FORMS_LIST_FOR_KONKURS,
  GET_BASE_FOR_KONKURS,
  KONKURS_RESET
} from '../constants/actionTypes';
import { API_URL } from '../constants/config';

const konkursListIsLoading = (bool) => {
  return {
    type: KONKURS_LIST_IS_LOADING,
    bool
  }
}

export const getFaksList = (grad) => {
  return {
    type: GET_FAKS_LIST_FOR_KONKURS,
    grad
  }
}

export const getEduFormsList = (fac) => {
  return {
    type: GET_EDU_FORMS_LIST_FOR_KONKURS,
    fac
  }
}

export const getBase = (form) => {
  return {
    type: GET_BASE_FOR_KONKURS,
    form
  }
}

export const setKonkursList = (base) => {
  return {
    type: SET_KONKURS_LIST,
    base
  }
}

export const getKonkursList = (data) => {
  return (dispatch) => {
    dispatch(konkursListIsLoading(true));
    axios.post(API_URL, data)
      .then((response) => {
        dispatch(getKonkursListSuccess(response.data));
        dispatch(konkursListIsLoading(false));
      })
      .catch((error) => {
        console.error("Error", error);
      })
  }
}

export const getKonkursListSuccess = (konkurs) => {
  return {
    type: GET_KONKURS_LIST_SUCCESS,
    konkurs
  }
}

export const resetToDefault = (bool) => {
  return {
    type: KONKURS_RESET,
    bool
  }
}
