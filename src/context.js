import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { store } from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    setItems(store);
  }, []);

  return (
    <AppContext.Provider
      value={{
        items,
        setItems,
        cart,
        setCart,
        amount,
        setAmount,
        total,
        setTotal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
