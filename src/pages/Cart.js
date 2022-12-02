import React from "react";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Cart = () => {
  const { cart } = useGlobalContext();

  if (cart.length === 0) {
    return (
      <section>
        <h2>Cart</h2>
        <h4>Your cart is currently empty</h4>
        <Link to="/products">Continue Shopping</Link>
      </section>
    );
  }
  return (
    <section>
      <h2>Cart</h2>
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Cart;
