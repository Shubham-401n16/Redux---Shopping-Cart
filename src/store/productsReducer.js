const initState = {
    allProducts: []
  };
  
  const reducer = (state = initState, action) => {
    console.log("products reducer called");
    let newState = { ...state };
  
    switch (action.type) {
      // define our application's acceptable actions
      case "GET_PRODUCTS":
        newState.allProducts = [...action.payload];
        break;
      case "ADD_PRODUCT":
        newState.allProducts.push(action.payload);
        break;
      case "CONSOLE_LOG":
        console.log("products");
        break;
      case "ADD_TO_CART":
        for (let i = 0; i < newState.allProducts.length; i++) {
          if (action.payload.name === newState.allProducts[i].name) {
            newState.allProducts[i].inStock = newState.allProducts[i].inStock - 1;
            newState.allProducts = [...newState.allProducts];
            break;
          }
        }
        break;
      case "REMOVE_FROM_CART":
        for (let i = 0; i < newState.allProducts.length; i++) {
          if (action.payload.name === newState.allProducts[i].name) {
            newState.allProducts[i].inStock = newState.allProducts[i].inStock + 1;
            newState.allProducts = [...newState.allProducts];
            break;
          }
        }
        break;
      default:
        break;
    }
  
    return newState;
  };
  
  export default reducer;
  