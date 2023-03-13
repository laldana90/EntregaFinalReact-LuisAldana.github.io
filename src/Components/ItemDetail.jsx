import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useCartContext } from '../Context/CartContext';

import "bootstrap/dist/css/bootstrap.min.css";



export const Counter = () => {

    
    const[count, setCount] = useState(0)

    return (
        <>
        <p className="counter">Quantity: {count}</p>
        
        <div className="counter-buttons">
        <button className="button-add" onClick={()=> setCount(count-1)}>-</button>
        <button className="button-remove" onClick={()=> setCount(count+1)}>+</button>
        </div>
        </>
    )
}

export const ItemDetail = ({item})=>{
    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(item, quantity);
    }
   
    return(

        <>
   

        
        <div className='detail-container'>
            <h2 style={{width: "100%"}}>{item.title}</h2>
            <div className='img-container'>
                <img src={item.pictureURL} alt={item.title}/>
            </div>
            <div className='img-container'>
                <h3>{item.title}</h3>
                <h4>$ {item.price}</h4>
                <p>{item.description}</p>
            </div>
            <Counter/>
           
            {
               
                <Link to="/cart">
                    <button onClick={goToCart} className='add-to-cart'>Go to Cart</button>
                </Link>
               
            }
        </div>


        <div>
    <Link to={'/products/ps5'} className="back-btn btn-dark">PS5</Link>
    <Link to={'/products/xbox'} className="back-btn btn-dark">XBOX</Link>
    <Link to={'/products/nintendo'} className="back-btn btn-dark">Nintendo</Link>
    </div>


        </>
    )
}