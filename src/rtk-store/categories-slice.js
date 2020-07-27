import axios from 'axios';
import {createSlice} from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',

  initialState: {
    allCategories: [],
    currentCategory: '',  
  },

  reducers: {
    initialCategory: (state, action) => {
      state.allCategories = action.payload;
    },

    changeCategory: (state, action) => {
      state.currentCategory = action.payload;
    }
  }
});

export const {initialCategory, changeCategory} = categoriesSlice.actions;

export const getCategories = () => async dispatch => {
  let results = await axios.get
  ('https://api-js401.herokuapp.com/api/v1/categories');
  dispatch(initialCategory(results.data.results));
}

export default categoriesSlice.reducer;
