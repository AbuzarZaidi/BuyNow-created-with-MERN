import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setTokenHandler,
  setIdHandler,
  setNameHandler,
  setLogin,
} from "./store/auth";
import { setInitialProduct } from "./store/cart";
import Navbar from "./components/navbar/Navbar";
import TopNavbar from "./components/navbar/TopNavbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import "./css/style.css";
import Footer from "./components/footer/Footer";
import ShoppingCart from "./pages/ShoppingCart";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";

function App() {
  const dispatch = useDispatch();
  let isLogin = useSelector((state) => state.authData.isLogin);

  useEffect(() => {
    const dataaa = async () => {
      const { data } = await axios.get(
        "http://localhost:5000/users/login/success"
      );
      if (data.success) {
        dispatch(setLogin());
      }
    };
    dataaa();
  }, []);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const productData = JSON.parse(localStorage.getItem("cartProduct"));

    if (
      userData &&
      userData.token &&
      new Date(userData.expiration) > new Date()
    ) {
      dispatch(setTokenHandler(userData.token));
      dispatch(setIdHandler(userData.userId));
      dispatch(setNameHandler(userData.userName));
      if (productData.length > 0) {
        dispatch(setInitialProduct(productData));
      } else {
        dispatch(setInitialProduct([]));
      }
    }
  }, [dispatch]);
  return (
    <>
      <div className="body">
        <TopNavbar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {isLogin && <Route path="/contact" element={<Contact />} />}
          {isLogin && <Route path="/detail" element={<ProductDetail />} />}
          {isLogin && <Route path="/shop" element={<Shop />} />}
          {isLogin && <Route path="/cart" element={<ShoppingCart />} />}
          {isLogin && <Route path="/checkout" element={<Checkout />} />}
          {!isLogin && <Route path="/signup" element={<Signup />} />}
          {!isLogin && <Route path="/signin" element={<Signin />} />}
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
