import {
  GET_TARGETS_SELECT,
  SET_TARGET_SELECT,
  CHECK_TARGET_IS_SELECT
} from '../constants/actionTypes';
import { selectId } from '../constants/config';

const initialState = {
  selectId: selectId,
  targetId: "--",
  onTarget: false,
  isSelect: false,
  prevTargetId: "--"
}

export const select = (state=initialState, action) => {
  switch(action.type) {
    case GET_TARGETS_SELECT:
      return {
        ...state,
        targetId: action.id,
        isSelect: false,
        onTarget: true
      }

    case SET_TARGET_SELECT:
      return {
        ...state,
        targetId: "",
        isSelect: true,
        onTarget: false,
        prevTargetId: action.id,
      }

    case CHECK_TARGET_IS_SELECT:
      let targetClick = false;
      //let isSelect = false;
      if(selectId.indexOf(action.id) !== -1) {
        if((state.prevTargetId === action.id) && (state.onTarget === false)) {
          //second time click
          //console.log(state.isSelect);
          targetClick = false;
          //isSelect = true;
        } else {
          //first time
          //console.log("first");
          targetClick = true;
          //isSelect = false;
        }
        return {
          ...state,
          onTarget: targetClick,
          //isSelect: isSelect
        }
      } else {
        return {
          ...state,
          targetId: "",
          onTarget: false,
          isSelect: false,
          prevTargetId: state.targetId
        };
      }

    default: return state;
  }
}