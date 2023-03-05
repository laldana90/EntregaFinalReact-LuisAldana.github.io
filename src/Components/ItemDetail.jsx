import React from 'react';
import { NavLink, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from '../imgs/logo.jpg';
import CartWidget from './CartWidget';




export const ItemDetail = ({item})=>{
   
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
                 to={`/products/${item.category}`}>PS5</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to={`/products/${item.category}`}>XBOX</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to={`/products/${item.category}`}>Nintendo</NavLink>
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
      <CartWidget/>
    </div>
    </header>

        
        <div className='detail-container'>
            <h2 style={{width: "100%"}}>{item.title}</h2>
            <div className='img-container'>
                <img src={item.picture} alt={item.title}/>
            </div>
            <div className='img-container'>
                <h3>{item.title}</h3>
                <h4>$ {item.price}</h4>
            </div>
           
            {
               
                <Link to="/">
                    <button>Ir al carrito(En Progreso)</button>
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