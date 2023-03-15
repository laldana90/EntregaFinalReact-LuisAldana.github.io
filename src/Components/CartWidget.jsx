import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
const {totalProducts} = useCartContext();
    return (
        <div className="cart-widget">
            <FontAwesomeIcon icon={faCartShopping} size="2x" color="black"/>
            <Link to="/cart" className="qty-display">{totalProducts() || ''}</Link>
        </div>
    )
}

export default CartWidget