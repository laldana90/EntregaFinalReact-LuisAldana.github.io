import React from "react";
import { Link } from 'react-router-dom';
import { useCartContext } from "../Context/CartContext";
import ItemCart from "./ItemCart";


const Cart = () => {
    const { cart, totalPrice, clearCart } = useCartContext();

    const handleClearCart = () => {
        clearCart();
    }

    const handleCompleteOrder = () => {
        // logic to complete the order
        // you can redirect the user to a new page or show a modal window
        
      };


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
        <h1 className="your-cart-title">Your Cart</h1>
            {
                cart.map(item => <ItemCart key={item.id} item={item} />)
            }
            <p className="cart-total">
                Total: ${totalPrice()}  
            </p>
            <button className="clear-cart" onClick={handleClearCart}>Clear Cart</button>

            <Link className="place-order" to="/checkout" onClick={handleCompleteOrder}>
        Place Order
      </Link>

            <Link className="continue-shopping" to='/'>Continue Shopping</Link>
        </>
    )
}

export default Cart