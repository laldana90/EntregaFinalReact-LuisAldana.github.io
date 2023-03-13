import { Item } from "./Item"
import { Row, Col } from 'react-bootstrap';
//import { Link } from "react-router-dom";

export const ItemList = ({items})=>{

    return(
        
        <Row className="styles-listed">
            <div style={{width:"100%"}}></div>
            {
                items.map(product=>(
                    <Col lg={4} md={6} className='mb-4'>
                    
                        <Item key={product.id} item={product}/>
                   
                    </Col>
                ))
            }
        </Row>
    )
}