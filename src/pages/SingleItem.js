import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { store } from "../data";
import { FaPlus, FaMinus } from "react-icons/fa";

const SingleItem = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    } else {
      return quantity;
    }
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      return quantity;
    }
  };

  useEffect(() => {
    let newItem = store.find((item) => parseInt(id) === item.id);
    setItem(newItem);
  }, [id]);

  const { title, price, img, detailTitle, details } = item;
  return (
    <section className="item-section">
      <div className="pin">
        <div className="pin-img">
          <img src={img} alt={title} />
        </div>
        <div className="item-details">
          <h2 className="item-title">{title}</h2>
          <p className="item-price">${price?.toFixed(2)}</p>
          <div className="product">
            <p id="prodT">Product Detail</p>
            <p>{detailTitle}</p>
          </div>
          <ul>
            <p>Details:</p>
            {details?.map((detail, index) => {
              return <li key={index}>{detail}</li>;
            })}
          </ul>
          <div className="add-cart">
            <p>Quantity:</p>
            <div className="to-buy-container">
              <div className="to-buy">
                <button className="btn-quantity" onClick={decrease}>
                  <FaMinus />
                </button>
                <h3>{quantity}</h3>
                <button className="btn-quantity" onClick={increase}>
                  <FaPlus />
                </button>
              </div>
              <button className="btn-add">Add to Bag</button>
              <button className="btn-add">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleItem;
