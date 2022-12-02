import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { store } from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

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
