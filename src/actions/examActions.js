import axios from 'axios';
import {
  GET_EXAM_SUCCESS,
  EXAM_IS_LOADING
} from '../constants/actionTypes';
import { API_URL } from '../constants/config';

export const getExam = (data) => {
  return (dispatch) => {
    dispatch(examIsLoading(true));
    axios.post(API_URL, data)
      .then((response) => {
        dispatch(getExamSuccess(response.data));
        dispatch(examIsLoading(false));
      })
      .catch((error) => {
        console.error("Error", error);
      })
  }
}

const getExamSuccess = (exam) => {
  return {
    type: GET_EXAM_SUCCESS,
    exam
  }
}

const examIsLoading = (bool) => {
  return {
    type: EXAM_IS_LOADING,
    bool
  }
}