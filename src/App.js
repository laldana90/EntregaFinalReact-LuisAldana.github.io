import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import  { NavBar } from './Components/NavBar';
import { ItemListContainer } from './Components/ItemListContainer';
import { ItemDetailContainer } from './Components/ItemDetailContainer';


import './Components/Styles/NavBar.css';
import './Components/Styles/CartWidget.css';
import './Components/Styles/Categories.css';
import './Components/Styles/ItemDetailContainer.css';

function App() {
  return (
    <>
     <BrowserRouter>
    <div className="App">
     
        <div>
        
        <Routes>
          <Route path='/' element={<NavBar/>}/>
          <Route path="/products/:productType" element={<ItemListContainer/>}/>
          <Route path="/item/:productId" element={<ItemDetailContainer/>}/>
        </Routes>
        </div>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
