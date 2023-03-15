import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import  { NavBar } from './Components/NavBar';
import Cart from './Components/Cart';
import { ItemListContainer } from './Components/ItemListContainer';
import { ItemDetailContainer } from './Components/ItemDetailContainer';
import CartProvider from './Context/CartContext';
import Checkout from './Components/Checkout';


import './Components/Styles/NavBar.css';
import './Components/Styles/CartWidget.css';
import './Components/Styles/Categories.css';
import './Components/Styles/ItemDetailContainer.css';
import './Components/Styles/ItemCart.css';
import './Components/Styles/Spinner.css';


export const CartContext = React.createContext('');


function App() {
  return (
    <>
     <BrowserRouter>
    <div className="App">
     
        <div>
        <CartProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path="/products/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/item/:productId" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
        </CartProvider>
        </div>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
