import axios from 'axios';
import {createSlice} from '@reduxjs/toolkit';

let productsSlice = createSlice({
  name: 'products',

  initialState: {
    allProducts: [],
    addButtonDisabled: false,
    currenProduct: {}  
  },

  reducers: {
    loadProducts: (state, action) => {
      state.allProducts = action.payload;
    },

    add: (state, action) => {
      for (let i = 0; i < state.allProducts.length; i++) {
        if (action.payload.name === state.allProducts[i].name) {
          state.allProducts[i].stock--;
          break;
        }
      }
      if (state.currentProduct.name && state.currentProduct.name === action.payload.name) {
        state.currentProduct.stock--;
      }
    },
    remove: (state, action) => {
      for (let i = 0; i < state.allProducts.length; i++) {
        if (action.payload.name === state.allProducts[i].name) {
          state.allProducts[i].stock++;
          break;
        }
      }
    },

    viewOneProduct: (state, action) => {
      state.currentProduct = action.payload;
    }
  }
});

export const {add, viewOneProduct, currentProduct, remove} = productsSlice.actions;

export const getProducts = () => async dispatch => {
  let results = await axios.get('https://js-401-lab-07.herokuapp.com/api/v1/products')
  dispatch(loadProducts(results.data.results))
}

export const addToCart = (payload) => {
  return async dispatch => {
    await axios.put(`https://js-401-lab-07.herokuapp.com/api/v1/products/${payload._id}`, {...payload, stock: payload.stock - 1});
    dispatch(add(payload));
  }
}

export const getOneProduct = (payload) => async dispatch => {
  dispatch(viewOneProduct({}));

  let results = await axios.get(`https://js-401-lab-07.herokuapp.com/api/v1/products/${payload}`);

  dispatch(viewOneProduct(results.data));
}

export default productsSlice.reducer;