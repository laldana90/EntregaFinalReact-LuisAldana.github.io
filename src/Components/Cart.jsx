import React from "react";
import { Link } from 'react-router-dom';
import { useCartContext } from "../Context/CartContext";
import ItemCart from "./ItemCart";

const Cart = () => {
    const { cart, totalPrice, clearCart } = useCartContext();

    const handleClearCart = () => {
        clearCart();
    }

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
            <p className="cart-total">
                Total: ${totalPrice()}  
            </p>
            <button className="clear-cart" onClick={handleClearCart}>Clear Cart</button>
            
            <Link className="continue-shopping" to='/'>Continue Shopping</Link>
        </>
    )
}

export default Cart