import React, { useContext, useReducer, useEffect } from "react";
import Items from "../data";
import Reducer from "../components/Reducer";
import { toast } from "react-toastify";

const AppContext = React.createContext();

const initialState = {
  loading: false,
  cartItems: Items,
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const Message = (msg) => {
    toast.error(msg, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const clearCart = () => {
    Message("Cart Cleared");
    dispatch({ type: "CLEAR_CART" });
  };

  const removeItem = (id) => {
    Message("Item Removed");
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const increaseItem = (id) => {
    dispatch({ type: "INCREASE_ITEM", payload: id });
  };

  const decreaseItem = (id) => {
    dispatch({ type: "DECREASE_ITEM", payload: id });
  };

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cartItems]);

  return (
    <AppContext.Provider
      value={{ ...state, clearCart, removeItem, increaseItem, decreaseItem }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
