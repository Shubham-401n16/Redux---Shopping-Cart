import { combineReducers } from "redux";
import {configureStore} from '@reduxjs/toolkit'
import cartReducer from "./cartReducer";
import categoriesReducer from "./categoriesReducer";
import productsReducer from "./productsReducer";

let allReducers = combineReducers({
  cart: cartReducer,
  categories: categoriesReducer,
  products: productsReducer
});

const store = configureStore({ reducer: allReducers})

