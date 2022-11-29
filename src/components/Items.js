import React from "react";
import { Link } from "react-router-dom";

const Items = ({ id, img, title, price }) => {
  return (
    <article className="item">
      <div className="img-container">
        <Link to={`/products/${id}`}>
          <img src={img} alt={title} className="item-image" />
        </Link>
      </div>
      <div className="item-footer">
        <h3>{title}</h3>
        <h4>${price}</h4>
      </div>
    </article>
  );
};

export default Items;
