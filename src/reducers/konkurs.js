import {
  GET_KONKURS_LIST_SUCCESS,
  KONKURS_LIST_IS_LOADING,
  GET_FAKS_LIST_FOR_KONKURS,
  GET_EDU_FORMS_LIST_FOR_KONKURS,
  GET_BASE_FOR_KONKURS,
  SET_KONKURS_LIST,
  KONKURS_RESET
} from '../constants/actionTypes';
import { konkursInitialState } from '../constants/konkursInitialState';


export const konkurs = (state=konkursInitialState, action) => {
  switch(action.type) {
    case GET_KONKURS_LIST_SUCCESS:
      return {
        ...state,
        konkurs: action.konkurs
      }


    case KONKURS_LIST_IS_LOADING:
      return {
        ...state,
        isLoading: action.bool
      }


    case GET_FAKS_LIST_FOR_KONKURS:
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


    case GET_EDU_FORMS_LIST_FOR_KONKURS:
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


    case GET_BASE_FOR_KONKURS:
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


    case SET_KONKURS_LIST:
      const konkursList = state.currBaseSnapshot.filter(item => {
        if(item.name === action.base) {
          return item;
        }
      });

      return {
        ...state,
        currList: konkursList[0].file
      }


    case KONKURS_RESET:
      return {
        ...state,
        konkurs: {},
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