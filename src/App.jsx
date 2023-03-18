import "./App.css";
import Navbar from "./Navbar1";
import {Routes , Route, json} from "react-router-dom"
import Products from "./Products";
import Product from "./Product";
import Home from "./Home";
import { useSelector } from "react-redux";
import Cart from "./cart"


function App() {

  const cart = useSelector((state) => state.cart.cart);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  console.log("cart", cart);
  console.log("totalAmount", totalAmount);
  console.log("totalPrice", totalPrice);


  return (
    <>
      <Navbar />
    
     
      <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/cart" element={ <Cart /> } />

      <Route path="/products" element={<Products />} />

      <Route path="/products/:id" element={<Product />} />
      
    </Routes>
    </>
  );
}

export default App;
