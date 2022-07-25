import React, { useEffect,useState } from 'react'
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { useSelector,useDispatch} from "react-redux";
import {
  setTokenHandler, setIdHandler,setNameHandler
} from "./store/auth";
import Navbar from "./components/navbar/Navbar";
import TopNavbar from "./components/navbar/TopNavbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import './css/style.css'
import Footer from "./components/footer/Footer";
import ShoppingCart from "./pages/ShoppingCart";
import ProductDetail from './pages/ProductDetail'
import Checkout from "./pages/Checkout";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";

function App() {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
 let isLogin= useSelector((state) => state.authData.isLogin);
 
useEffect(() => {
  const dataaa=async()=>{
    console.log("first")
    const { data } = await axios.get("http://localhost:5000/users/login/success")
    console.log("yup")
    console.log(data.succes)
    if(data.success){
      isLogin=true
    }
  }
  dataaa();
}, [])

  
  useEffect(() => {
    const userData=JSON.parse(localStorage.getItem('userData'))
    if(userData&&userData.token&&new Date(userData.expiration)>new Date()){
      dispatch(setTokenHandler(userData.token));
      dispatch(setIdHandler(userData.userId));
      dispatch(setNameHandler(userData.userName));
    }
  }, [dispatch ])
  return (
   <>
   <div className="body">
   <TopNavbar/>
   <Navbar/>
   <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/detail" element={<ProductDetail/>}/>
        <Route path="/shop" element={<Shop />} />
       <Route path="/cart" element={<ShoppingCart/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
       
        
      </Routes>
  <Footer/>
   </div>
   </>
  );
}

export default App;
