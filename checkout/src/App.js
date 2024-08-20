import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import itemList from './inventory.json';

import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Confirmation from "./pages/Confirmation";
import HomePage from "./pages/HomePage";
import item from "./components/Item";

function App() {
  const [cart, setCart] = useState([]); // Array of Cart Data
  const [items, setItems] = useState([]); // List of Items
  
  useEffect(() => {
    setItems(itemList)
  }, []);
 
  // Add item to cart
  const addToCart = (item) => {
    setCart(prevCart => {
      const itemExists = prevCart.find(cartItem => cartItem.id === item.id);
      
      if (itemExists) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      } else {
        return [...prevCart, { ...item, quantity: 1}];
      }
    })
  }
  
  // Remove item from cart
  const removeFromCart = (itemId) => {
    setCart(cart.filter(cartItem => cartItem.id !== item.id));
  }
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage items={items} addToCart={addToCart} removeFromCart={removeFromCart}/>} />
        <Route path="/cart" element={<Cart cart={cart}/>} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </Router>
  );
}

export default App;
