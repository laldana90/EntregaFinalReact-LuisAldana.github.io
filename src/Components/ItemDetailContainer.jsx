import { useState, useEffect } from "react";

import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../FirebaseConfig/fireBase";

export const ItemDetailContainer = ()=>{
    const {productId} = useParams();

    const [item, setItem] = useState({});


    useEffect(()=>{
  
        const queryDoc = doc(db, "GameZone", productId);
        getDoc(queryDoc)
        .then(res => setItem( {id: res.id, ...res.data()}))
    },[])

    return(
        <div className="item-detail-container">
            <p style={{width:"100%", color: "white"}}>item detail container</p>
            <ItemDetail item={item}/>
        </div>
    )
}

