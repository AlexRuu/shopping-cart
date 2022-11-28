import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { store } from "../data";

const SingleItem = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    let newItem = store.find((item) => parseInt(id) === item.id);
    setItem(newItem);
  }, [id]);

  const { title, price, img, detailTitle, details } = item;
  return (
    <section>
      <div>
        <img src={img} alt={title} />
      </div>
      <h2>{title}</h2>
      <p>${price}</p>
      <div>
        <p>Product Detail</p>
        <p>{detailTitle}</p>
      </div>
      <ul>
        Details:
        {details?.map((detail, index) => {
          return <li key={index}>{detail}</li>;
        })}
      </ul>
    </section>
  );
};

export default SingleItem;
