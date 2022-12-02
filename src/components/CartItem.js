import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useGlobalContext } from "../context";
import { IoClose } from "react-icons/io5";

const CartItem = ({ id, img, title, price, amount }) => {
  const { cart, setCart } = useGlobalContext();
  const increase = (id) => {
    let tempCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    setCart(tempCart);
  };

  const decrease = (id) => {
    let tempCart = cart
      .map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      })
      .filter((item) => item.amount !== 0);
    setCart(tempCart);
  };

  const remove = (id) => {
    let tempCart = cart.filter((item) => item.id !== id);
    setCart(tempCart);
  };

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div className="item-buy">
        <h4>{title}</h4>
        <h4 id="item-price">${price.toFixed(2)}</h4>
      </div>
      <div className="upDownButtons">
        <button onClick={() => decrease(id)} className="addRemove">
          <FaMinus />
        </button>
        <h3 className="amount">{amount}</h3>
        <button onClick={() => increase(id)} className="addRemove">
          <FaPlus />
        </button>
      </div>
      <div className="removeButton">
        <button onClick={() => remove(id)} className="remove">
          <IoClose />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
