import { combineReducers } from "redux";
import {configureStore} from '@reduxjs/toolkit'
import cartReducer from "./cartReducer";
import categoriesReducer from "./categoriesReducer";
import productsReducer from "./productsReducer";


import products from './products-slice';
import categories from './categories-slice';
import cart from './cart-slice';

let reducer = combineReducers({ categories, products, cart });

const store = configureStore({ reducer });

export default store;
// let allReducers = combineReducers({
//   cart: cartReducer,
//   categories: categoriesReducer,
//   products: productsReducer
// });

// const store = configureStore({ reducer: allReducers})

