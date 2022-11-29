import React from "react";
import { Link } from "react-router-dom";

const Items = ({ id, img, title, price }) => {
  return (
    <Link to={`/products/${id}`}>
      <div className="item-container">
        <div className="item">
          <div className="img-container">
            <img src={img} alt={title} className="item-image" />
          </div>
        </div>
        <div className="item-footer">
          <h3 id="item-title">{title}</h3>
          <h3 id="item-price">${price}</h3>
        </div>
        <button className="btn btn-buy">Buy Now</button>
      </div>
    </Link>
  );
};

export default Items;
