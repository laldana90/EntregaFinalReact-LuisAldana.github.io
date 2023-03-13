import React from "react";
import { Link } from 'react-router-dom';
import { useCartContext } from "../Context/CartContext";
import ItemCart from "./ItemCart";

const Cart = () => {
    const { cart, totalPrice } = useCartContext();

    if (cart.length === 0)     {
        return (
            <>
                <p>Cart is empty</p>
                <Link to='/'>Continue Shopping</Link>
            </>
        )
    }
    
    return (
        <>
            {
                cart.map(item => <ItemCart key={item.id} item={item} />)
            }
            <p>
                Total: ${totalPrice()}  
            </p>
        </>
    )
}

export default Cart