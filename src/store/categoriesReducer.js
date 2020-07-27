const initState = {
    allCategories: [],
    currentCategory: '',
  };
  
  const reducer = (state = initState, action) => {
    console.log("categories reducer called");
    let newState = { ...state };
  
    switch (action.type) {
      case "CONSOLE_LOG":
        console.log("categories");
        break;
      case "GET_CATEGORIES":
        newState.allCategories = [...action.payload];
        break;
      case "CHANGE_CATEGORY":
        newState.currentCategory = action.payload;
        break;
      case "ADD_CATEGORY":
        newState.allCategories.push(action.payload);
        break;
      default:
        break;
    }
  
    return newState;
  };
  
  export default reducer;
  