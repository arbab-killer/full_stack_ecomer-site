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
import { Context } from "./Context";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Singleproduct from "./Pages/Singleproduct";

function App() {
  const [token, settoken] = useState(null);

  return (
    <>
      <div>
        <Toaster position="top-center" />
      </div>
      <Router>
        <Context.Provider value={{ token, settoken }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />

            <Route path="/home" element={<Home />} />

            <Route path="/count" element={<Account />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contect />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="products/:id" element={<Singleproduct />} />
            <Route path="/products" element={<Shop />} />
          </Routes>
          <Footer />
        </Context.Provider>
      </Router>
    </>
  );
}

export default App;
