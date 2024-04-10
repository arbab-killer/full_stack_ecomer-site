import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Contect from "./Pages/Contect";
import Shop from "./Pages/Shop";
import Wishlist from "./Pages/Wishlist";
import Blog from "./Pages/Blog";
import Cart from "./Pages/Cart";
import About from "./Pages/About";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import Account from "./Pages/Account";

// import { ToastContainer } from "react-toastify";

import { Toaster } from "react-hot-toast";
import Singleproduct from "./Pages/Singleproduct";
import Try from "./Pages/Try";
import AllProducts from "./Pages/AllProducts";
import Createproduct from "./Pages/Createproduct";

function App() {
  return (
    <>
      <div>
        <Toaster position="top-center" />
      </div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/p" element={<AllProducts  />} />
          <Route path="signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/try" element={<Try />} />
          <Route path="/count" element={<Account />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contect />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="products/:id" element={<Singleproduct />} />
          <Route path="/products" element={<Shop />} />
          <Route path="/createproduct" element={<Createproduct />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
