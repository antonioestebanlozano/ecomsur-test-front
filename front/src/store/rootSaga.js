import { all, call } from "redux-saga/effects";

import productsSagas from "./products/sagas";

export default function* rootsaga() {
  yield all([call(productsSagas)]);
}
