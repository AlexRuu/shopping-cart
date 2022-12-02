import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const CartItem = ({ id, img, title, price, amount }) => {
  return (
    <article>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4>${price}</h4>
      </div>
      <div>
        <button>
          <FaMinus />
        </button>
        <p>{amount}</p>
        <button>
          <FaPlus />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
