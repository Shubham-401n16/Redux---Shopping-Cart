import axios from "axios";

export const getCategories = () => async dispatch => {
  let results = await axios.get(
    "https://api-js401.herokuapp.com/api/v1/categories"
  );
  dispatch(addCategories(results.data.results));
  console.log("results", results);
};

const addCategories = payload => {
  return {
    type: "GET_CATEGORIES",
    payload
  };
};

export const getProducts = () => async dispatch => {
  let results = await axios.get(
    "https://api-js401.herokuapp.com/api/v1/products"
  );
  dispatch(addProducts(results.data.results));
};

const addProducts = payload => {
  return {
    type: "GET_PRODUCTS",
    payload
  };
};

export const changeCategory = payload => {
  return {
    type: "CHANGE_CATEGORY",
    payload
  };
};

export const addToCart = product => {
  return {
    type: "ADD_TO_CART",
    payload: product
  };
};

export const removeFromCart = idx => {
  return {
    type: "REMOVE_FROM_CART",
    payload: idx
  };
};
