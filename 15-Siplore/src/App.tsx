import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Import Components
import Navbar from "./components/Navbar";
// Import Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Errorpage from "./pages/Errorpage";
import Cocktail from "./pages/Cocktail";

type Props = {};

export default function App({}: Props) {
  return (
    <>
      <Router>
        <Navbar />
        {/* <Drawer/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cocktail/:id" element={<Cocktail />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </Router>
    </>
  );
}
