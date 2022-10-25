import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import createSagaMiddle from "redux-saga";
import { persistStore } from "redux-persist";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddle();
export const middlewares = [thunk, sagaMiddleware];

//export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const store = configureStore({
  reducer: rootReducer,
  middleware: [...middlewares],
});
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
