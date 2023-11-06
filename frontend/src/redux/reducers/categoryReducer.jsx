import {
  CATEGORY_REQUEST,
  CATEGORY_SUCCESS,
  CATEGORY_FAIL,
  GETALL_CATEGORY_REQUEST,
  GETALL_CATEGORY_SUCCESS,
  GETALL_CATEGORY_FAIL,
} from "../constants/categoryConstant";
export const categoryReducer = (state = { category: {} }, action) => {
  switch (action.type) {
    case CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        category: action.payload.data,
      };

    case CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        category: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export const allCategoryReducer = (state = { category: [] }, action) => {
  switch (action.type) {
    case GETALL_CATEGORY_REQUEST:
      return {
        loading: true,
        category: [],
      };

    case GETALL_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        category: action.payload,
      };

    case GETALL_CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        category: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
