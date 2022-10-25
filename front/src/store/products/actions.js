import productTypes from "./types";

export const fetchProductsStart = (filters = {}) => ({
  type: productTypes.FETCH_PRODUCTS_START,
  payload: filters,
});

export const setProducts = (products) => ({
  type: productTypes.SET_PRODUCTS,
  payload: products,
});

export const fetchProductStart = (productID) => ({
  type: productTypes.FETCH_PRODUCT_START,
  payload: productID,
});

export const setProduct = (product) => ({
  type: productTypes.SET_PRODUCT,
  payload: product,
});

export const productLoading = (status) => ({
  type: productTypes.PRODUCT_LOADING,
  payload: status,
});

export const productsLoading = (status) => ({
  type: productTypes.PRODUCT_LOADING,
  payload: status,
});
