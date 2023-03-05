import React, { useState, useEffect } from 'react';
import { Item } from "./Item"
import { db } from '../FirebaseConfig/fireBase';
//import { Link } from "react-router-dom";

export const ItemList = ({category}) => {
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      let query = db.collection('items');
      if (category) {
        query = query.where('category', '==', category);
      }
      const unsubscribe = query.onSnapshot(snapshot => {
        const newItems = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
  
        setItems(newItems);
      });
  
      return () => unsubscribe();
    }, [category]);
  
    return (
      <div>
        {items.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    );
  };