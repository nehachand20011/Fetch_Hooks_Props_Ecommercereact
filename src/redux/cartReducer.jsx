
const initialData = {
    cartCount: 5
  };
  
  function cartReducer(state = initialData, action) {
    switch (action.type) {
      case "ADD_TO_CART":
        return {
          cartCount: state.cartCount + 1
        };
      case "REMOVE_FROM_CART":
        return {
          cartCount: state.cartCount - 1
        };
      default:
        return state;
    }
  }
  
  export default cartReducer;
  