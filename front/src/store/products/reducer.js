import productsTypes from "./types";

const INITIAL_STATE = {
  products: [],
  product: {},
  isLoading: false,
  areLoading: false,
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case productsTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case productsTypes.SET_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    case productsTypes.PRODUCT_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case productsTypes.PRODUCTS_LOADING:
      return {
        ...state,
        areLoading: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
