import React, { useContext, useState } from "react";
import Items from "../data";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(Items);

  return (
    <AppContext.Provider value={{ cartItems }}>{children}</AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
