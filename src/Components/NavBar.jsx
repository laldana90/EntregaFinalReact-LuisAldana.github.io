import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from '../imgs/logo.jpg';
import CartWidget from './CartWidget';
import { NavLink, Link } from "react-router-dom";


export function NavBar() {
  return (
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


   
    </>
  );
}

