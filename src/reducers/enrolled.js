import {
  GET_ENROLLED_LIST_SUCCESS,
  ENROLLED_LIST_IS_LOADING,
  GET_FAKS_LIST_FOR_ENROLLED,
  GET_EDU_FORMS_LIST_FOR_ENROLLED,
  GET_BASE_FOR_ENROLLED,
  SET_ENROLLED_LIST,
  ENROLLED_RESET
} from '../constants/actionTypes';
import { enrolledInitialState } from '../constants/enrolledInitialState';

export const enrolled = (state=enrolledInitialState, action) => {
  switch(action.type) {
    case GET_ENROLLED_LIST_SUCCESS:
      return {
        ...state,
        enrolled: action.enrolled
      }


    case ENROLLED_LIST_IS_LOADING:
      return {
        ...state,
        isLoading: action.bool
      }


    case GET_FAKS_LIST_FOR_ENROLLED:
      const gradInfo = state.dataGrad.filter(item => {
        if(item.graduation === action.grad) {
          return item;
        }
      });

      const facs = gradInfo[0].facultet.map(item => {
        return item.name;
      });

      return {
        ...state,
        currFacsSnapshot: gradInfo[0].facultet,
        currGrad: action.grad,
        currFacs: facs,
        currFormsSnapshot: [],
        currForms: [],
        currBaseSnapshot: [],
        currBase: [],
        currList: ""
      }


    case GET_EDU_FORMS_LIST_FOR_ENROLLED:
      const facInfo = state.currFacsSnapshot.filter(item => {
        if(item.name === action.fac) {
          return item;
        }
      });

      const forms = facInfo[0].forma.map(item => {
        return item.name;
      });

      return {
        ...state,
        currFormsSnapshot: facInfo[0].forma,
        currForms: forms,
        currBaseSnapshot: [],
        currBase: [],
        currList: ""
      }


    case GET_BASE_FOR_ENROLLED:
      const baseInfo = state.currFormsSnapshot.filter(item => {
        if(item.name === action.form) {
          return item;
        }
      });

      const base = baseInfo[0].price.map(item => {
        return item.name;
      });

      return {
        ...state,
        currBaseSnapshot: baseInfo[0].price,
        currBase: base,
        currList: ""
      }


    case SET_ENROLLED_LIST:
      const enrolledList = state.currBaseSnapshot.filter(item => {
        if(item.name === action.base) {
          return item;
        }
      });

      return {
        ...state,
        currList: enrolledList[0].file
      }

    case ENROLLED_RESET:
      return {
        ...state,
        enrolled: {},
        currFacsSnapshot: [],
        currFormsSnapshot: [],
        currBaseSnapshot: [],
        currGrad: "",
        currFacs: [],
        currForms: [],
        currBase: [],
        currList: ""
      }

    default: return state;
  }
}