import React from "react";
import { useSelector, useDispatch } from "react-redux";

const NavbarRedux = () => {
  const cartItem = useSelector((store) => store.cartCount);

  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART" });
  };
  const removeFromCart = () => {
    dispatch({ type: "REMOVE_FROM_CART" });
  };

  return (
    <>
      The number of this item in cart is {cartItem}
      <button onClick={addToCart}>Add to cart</button>
      <button onClick={removeFromCart}>Remove cart</button>
    </>
  );
};

export default NavbarRedux;
