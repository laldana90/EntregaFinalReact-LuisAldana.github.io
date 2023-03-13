import React, {useContext} from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
//import { CartContext } from '../Context/CartContext';


import "bootstrap/dist/css/bootstrap.min.css";


export const Item = ({item})=>{

 /*    const nombre = useContext(CartContext);
    console.log('Item: ', nombre); */
    return(
        <div className='categories-container'>
        <Card className='categories-card' style={{ width: '18rem' }}>
        <h2 className='card-title'>{item.title}</h2>
          <Card.Img className='categories-img' variant="top" src={item.pictureURL} alt={item.title} />
          <p>$ {item.price}</p>
         {/*  { <Counter/> } */}
          <Card.Body>
          <Link  to={`/item/${item.id}`} className="categories-button" variant="primary">Ver Detalles</Link>
          
          </Card.Body>
        </Card>
        </div>
    )
}