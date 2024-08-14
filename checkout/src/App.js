import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import itemList from './inventory.json';

import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Confirmation from "./pages/Confirmation";
import HomePage from "./pages/HomePage";

function App() {
  const [cart, setCart] = useState([]); // Array of Cart Data
  const [items, setItems] = useState([]); // List of Items
  
  useEffect(() => {
    setItems(itemList)
  }, []);
 
  // only supports one item at a time
  const addToCart = (item) => {
    const itemExists = cart.find(cartItem => cartItem.id === item.id); // check if item exists
    
    // if item doesn't already exist in cart, immutable state update, trigger re-render with new array reference
    if(!itemExists) {
      setCart([...cart, item])
    } else {
      // some kind of error handling
    }
  }
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage items={items} addToCart={addToCart}/>} />
        <Route path="/cart" element={<Cart cart={cart}/>} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </Router>
  );
}

export default App;
