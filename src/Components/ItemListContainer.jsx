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
import {db} from "../FirebaseConfig/fireBase";
import { collection, getDocs, doc} from "@firebase/firestore";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { getFirestore } from '../FirebaseConfig/fireBase'



export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const db = getFirestore();
  
    useEffect(() => {
      const itemsCollection = db.collection('items');
      itemsCollection.get().then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log('No items found');
        } else {
          const fetchedItems = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setItems(fetchedItems);
        }
      });
    }, [db]);

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
    <h2>ItemListContainer</h2>
      <ItemList items={items} />
        </div>

    <div>
    <Link to={'/'} className="back-btn btn-dark">Volver a Inicio</Link>
    </div>

    </>
)
}

export default ItemListContainer;