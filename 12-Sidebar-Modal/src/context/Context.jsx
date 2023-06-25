import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const Provider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const OpenModal = () => {
    setShowModal(true);
  };
  const OpenSidebar = () => {
    setShowSidebar(true);
  };
  const CloseSidebar = () => {
    setShowSidebar(false);
  };
  const CloseModal = () => {
    setShowModal(false);
  };
  return (
    <AppContext.Provider
      value={{
        showModal,
        showSidebar,
        OpenModal,
        OpenSidebar,
        CloseModal,
        CloseSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { Provider, useGlobalContext };
