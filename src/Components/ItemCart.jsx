import React from "react";
import { useCartContext } from "../Context/CartContext";

import "bootstrap/dist/css/bootstrap.min.css";


const ItemCart = ({item}) => {
    const { removeProduct } = useCartContext();

    return (
        <>
        <div className="itemCart">
            <img src={item.pictureURL} alt={item.title}/>
        
        
                <p className="cart-title">{item.title}</p>
                
                <p className="cart-quantity">Quantity: {item.quantity}</p>
                <p className="cart-subtotal">Subtotal: ${item.quantity * item.price}</p>
                <button className="cart-delete" onClick={() => removeProduct(item.id)}>Delete</button>
            </div>
            </>
    )
}

export default ItemCart