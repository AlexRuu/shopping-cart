import React from "react";
import { useGlobalContext } from "../context";
import Items from "./Items";

const ProductsList = () => {
  const { items } = useGlobalContext();

  return (
    <section className="section">
      <div className="item-center">
        {items.map((item) => {
          return <Items key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default ProductsList;
