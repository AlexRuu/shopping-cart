import React from "react";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Cart = () => {
  const { cart, total, setTotal } = useGlobalContext();

  let cartTotal = cart.reduce((cartTotal, cartItem) => {
    const { price, amount } = cartItem;
    const itemTotal = price * amount;

    cartTotal += itemTotal;
    return cartTotal;
  }, 0);
  setTotal(cartTotal);

  if (cart.length === 0) {
    return (
      <section className="cart">
        <h2>Cart</h2>
        <h4 className="empty-cart">Your cart is currently empty...</h4>
        <Link to="/products" className="btn btn-back">
          Continue Shopping
        </Link>
      </section>
    );
  }
  return (
    <section className="cart">
      <h2>Cart</h2>
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <div className="cart-total">
          <h4>
            <span></span>
            <span></span>Subtotal <span>${total.toFixed(2)}</span>
          </h4>
        </div>
      </footer>
    </section>
  );
};

export default Cart;
