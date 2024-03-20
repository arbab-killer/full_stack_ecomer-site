import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contect from "./Pages/Contect";
import Shop from "./Pages/Shop";
import Wishlist from "./Pages/Wishlist";
import Blog from "./Pages/Blog";
import Cart from "./Pages/Cart";
import About from "./Pages/About";

function App() {
  return (
    <>
      <Router>
        <Home />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contect />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
