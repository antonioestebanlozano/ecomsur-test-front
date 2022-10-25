import { takeLatest, put, all, call } from "redux-saga/effects";
import { handleFetchProducts, handleFetchProduct } from "./helpers";
import {
  setProducts,
  setProduct,
  productLoading,
  productsLoading,
} from "./actions";
import productsTypes from "./types";

export function* fetchProducts({ payload }) {
  let isLoading = true;

  try {
    yield put(productLoading(isLoading));

    const products = yield handleFetchProducts(payload);

    yield put(setProducts(products));

    yield put(productsLoading(!isLoading));
  } catch (err) {
    console.log(err);
  }
}

export function* onFetchProductsStart() {
  yield takeLatest(productsTypes.FETCH_PRODUCTS_START, fetchProducts);
}

export function* fetchProduct({ payload }) {
  let isLoading = true;

  try {
    yield put(productLoading(isLoading));

    const product = yield handleFetchProduct(payload);

    yield put(setProduct(product));

    yield put(productLoading(!isLoading));
  } catch (err) {
    console.log(err);
  }
}

export function* onFetchProductStart() {
  yield takeLatest(productsTypes.FETCH_PRODUCT_START, fetchProduct);
}

export default function* productsSagas() {
  yield all([call(onFetchProductsStart), call(onFetchProductStart)]);
}
