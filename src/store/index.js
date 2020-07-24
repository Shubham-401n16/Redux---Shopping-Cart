import { createStore, combineReducers, applyMiddleware } from "redux";

import cartReducer from "./cartReducer";
import categoriesReducer from "./categoriesReducer";
import productsReducer from "./productsReducer";
import thunk from "./middleware/thunk";

let reducers = combineReducers({
  cart: cartReducer,
  categories: categoriesReducer,
  products: productsReducer
});

export default createStore(reducers, applyMiddleware(thunk));
