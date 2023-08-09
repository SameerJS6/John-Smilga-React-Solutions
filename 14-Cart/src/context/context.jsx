import React, { useContext, useState, useReducer } from "react";
import Items from "../data";
import Reducer from "../components/Reducer";

const AppContext = React.createContext();

const initialState = {
  loading: false,
  cartItems: Items,
  total: "3000.00",
  amount: 5,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  return (
    <AppContext.Provider value={{ ...state, clearCart, removeItem }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
