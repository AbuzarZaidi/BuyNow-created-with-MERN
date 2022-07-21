import { Routes, Route } from "react-router-dom";
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