import React from "react";
import { useCartContext } from "../Context/CartContext";

import "bootstrap/dist/css/bootstrap.min.css";


const ItemCart = ({item}) => {
    const { removeProduct } = useCartContext();

    return (
        <>
        <div className="itemCart">
            <img src={item.pictureURL} alt={item.title}/>
        
        
                <h3>{item.title}</h3>
                <h4>$ {item.price}</h4>
                <p>{item.quantity}</p>
                <p>Subtotal: ${item.quantity * item.price}</p>
                <button onClick={() => removeProduct(item.id)}>Delete</button>
            </div>
            </>
    )
}

export default ItemCart