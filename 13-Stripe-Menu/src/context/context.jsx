import React, { useState, useContext } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const OpenSidebar = () => {
    setIsSidebarOpen(true);
  };
  const OpenMenu = () => {
    setIsMenuOpen(true);
  };
  const CloseMenu = () => {
    setIsMenuOpen(false);
  };
  const CloseSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        OpenMenu,
        OpenSidebar,
        CloseMenu,
        CloseSidebar,
        isSidebarOpen,
        isMenuOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
