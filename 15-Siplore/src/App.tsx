import { Routes, Route } from "react-router-dom";
// Import Components
import Navbar from "./components/Header/Navbar";
// Import Pages
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import CocktailPage from "./pages/CocktailPage";

type Props = {};

export default function App({}: Props) {
  return (
    <>
      <Navbar />
      {/* <Drawer/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cocktail/:id" element={<CocktailPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
