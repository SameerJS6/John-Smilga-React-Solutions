import React, { useState, useContext } from "react";
import sublinks from "../data";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [coordinates, setCoordinates] = useState({});
  const [page, setPage] = useState({ page: "", links: [] });

  const OpenSidebar = () => {
    setIsSidebarOpen(true);
  };
  const OpenMenu = (text, coordinates) => {
    const currentPage = sublinks.find((link) => link.page === text);
    setPage(currentPage);
    setCoordinates(coordinates);
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
        coordinates,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
