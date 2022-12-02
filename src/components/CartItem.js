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
    <article>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4>${price}</h4>
      </div>
      <div>
        <button onClick={() => decrease(id)}>
          <FaMinus />
        </button>
        <p>{amount}</p>
        <button onClick={() => increase(id)}>
          <FaPlus />
        </button>
        <button onClick={() => remove(id)}>
          <IoClose />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
