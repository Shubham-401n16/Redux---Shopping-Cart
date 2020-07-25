const initState = {
    cartContents: [],
    cartCount: 0
  };
  
  const reducer = (state = initState, action) => {
    console.log("cart reducer called");
  
    let newState = { ...state };
  
    switch (action.type) {
      // define our application's acceptable actions
  
      case "CONSOLE_LOG":
        console.log("cart");
        break;
  
      case "ADD_TO_CART":
        newState.cartContents.push(action.payload);
        newState.cartCount++;
        break;
  
      case "REMOVE_FROM_CART":
        // newState.cartCount--;
        // newState.cartContents = newState.cartContents.filter((val) => {
        //     return val.name !== action.payload;
        // });
        // break;
        for (let i = 0; i < newState.cartContents.length; i++) {
          if (action.payload.name === newState.cartContents[i].name) {
            newState.cartContents.splice(i, 1);
            newState.cartContents = [...newState.cartContents];
  
            newState.cartCount--;
            break;
          }
        }
        break;
      default:
        break;
    }
  
    return newState;
  };
  
  const consoleLog = dispatch => {
    return dispatch({ type: "CONSOLE_LOG" });
  };
  
  const add = product => {
    return { type: "ADD_TO_CART", payload: product };
  };
  
  export default reducer;
  export { consoleLog, add };
  