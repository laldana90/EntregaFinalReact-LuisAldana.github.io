import React from 'react';
import { NavLink, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from '../imgs/logo.jpg';
import CartWidget from './CartWidget';
import { useEffect, useState } from "react";
import { productsArray } from './DataBase';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {
    const {productType} = useParams();

    const [products, setProducts] = useState([]);

    let promise = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(productsArray);
        }, 0);
    })

    useEffect(()=>{
        promise.then(resultado=>{
            if(!productType){
                setProducts(resultado)
            } else{
                const nuevaLista = resultado.filter(item=>item.category === productType);
                setProducts(nuevaLista)
            }
        })
    },[productType]);

    return(
        <>

<header className='header'>
    <Navbar className="navi" bg="light" expand="lg">
      <Container>
      <Link to={'/'}><img className="logo" src={Logo} alt=""/></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <div className='navegacion'>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/">Inicio</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/products/ps5">PS5</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/products/xbox">XBOX</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/products/nintendo">Nintendo</NavLink>
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
      <CartWidget/>
    </div>
    </header>

    <div className="item-list-container">
            <p>{ItemList.productId}</p>
            <h2></h2>
            <ItemList items={products}/>
        </div>

    <div>
    <Link to={'/'} className="back-btn btn-dark">Volver a Inicio</Link>
    </div>

    </>
)
}

