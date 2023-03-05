import { useState, useEffect } from "react";
import { productsArray } from "./DataBase";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

export const ItemDetailContainer = ()=>{
    const {productId} = useParams();

    const [item, setItem] = useState({});


    useEffect(()=>{
        const querydb = getFirestore();
        const queryDoc = doc(querydb, "GameZone", "1");
        getDoc(queryDoc)
        .then(res => setItem( {id: res.id, ...res.item()}))
    },[])

    return(
        <div className="item-detail-container">
            <p style={{width:"100%", color: "white"}}>item detail container</p>
            <ItemDetail item={item}/>
        </div>
    )
}

