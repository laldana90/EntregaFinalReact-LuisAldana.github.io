import React from 'react';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../FirebaseConfig/fireBase';
import CarouselComponent from './Carousel';

export const ItemListContainer = () => {
  const {categoryId} = useParams();

  const [products, setProducts] = useState([]);


  useEffect(()=>{
     const coleccionProductos= categoryId ? query(collection(db, "GameZone"), where("category", "==", categoryId)) : collection(db, "GameZone")
     getDocs(coleccionProductos)
     .then((result)=> {
       const lista = result.docs.map((producto)=>{
         return{
           id:producto.id,
           ...producto.data()
         }
       })
      setProducts(lista)
     })
     .catch((error)=> console.log(error))  
  },[categoryId]);
    console.log(products)

    return(
        <>



<div className="item-list-container">
         {!categoryId && <CarouselComponent/>}
            <ItemList items={products}/>
        </div>

    <div>
    <Link to={'/'} className="back-btn btn-dark">Volver a Inicio</Link>
    </div>

    </>
)
}

