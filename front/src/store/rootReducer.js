import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./cart/reducer";
import productsReducer from "./products/reducer";

export const rootReducer = combineReducers({
  cartData: cartReducer,
  productsData: productsReducer,
});

const configStorage = {
  key: "root",
  storage,
  whitelist: ["cartData"],
};

export default persistReducer(configStorage, rootReducer);
