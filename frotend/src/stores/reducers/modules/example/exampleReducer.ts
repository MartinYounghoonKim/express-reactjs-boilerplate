import { AJAX_STATUS } from "../../../../@types/utils/ajax";
import {
  FETCH_EXAMPLE_REQUEST,
  FETCH_EXAMPLE_SUCCESS,
  FETCH_EXAMPLE_FAILURE,
  IExampleActionTypes
} from "../../../actions/example/exampleAction";

export const initialState = {
  status: AJAX_STATUS.INITIAL,
  message: "",
  items: []
};

const exampleReducer = (state = initialState, actions: IExampleActionTypes) => {
  switch (actions.type) {
    case FETCH_EXAMPLE_REQUEST:
      return {
        ...state,
        status: AJAX_STATUS.PENDING
      };
    case FETCH_EXAMPLE_SUCCESS:
      return {
        ...state,
        status: AJAX_STATUS.SUCCESS,
        items: actions.payload,
      };
    case FETCH_EXAMPLE_FAILURE:
      return {
        ...state,
        message: actions.message,
        status: AJAX_STATUS.FAILURE
      };
    default:
      return state;
  }
};

export default exampleReducer;
