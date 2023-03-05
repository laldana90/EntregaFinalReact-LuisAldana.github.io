import { Item } from "./Item"
//import { Link } from "react-router-dom";

export const ItemList = ({items})=>{

    return(
        <div className="styles-listed">
            <div style={{width:"100%"}}></div>
            {
                items.map(product=>(
                    //<Link key={producto.id} to={`/item/${producto.id}`}>
                        <Item key={product.id} item={product}/>
                    //</Link>
                ))
            }
        </div>
    )
}