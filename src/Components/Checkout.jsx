import {useState,useContext } from 'react';
import { collection, addDoc} from "firebase/firestore";
import { Link } from 'react-router-dom';
import {db} from '.././FirebaseConfig/fireBase';
import { useCartContext } from "../Context/CartContext";
import Spinner from './Spinner';

const Checkout = () => {

    const {cart,getTotal,clear}= useContext(useCartContext)

    const [load, setLoad] = useState(false)
    const [orderID, setOrderID] = useState()
    
    const [buyer, setBuyer] = useState({
        Name:'',
        Email:'',
        Phone:''
    })

    const {Name, Email, Phone} = buyer

    const handleInputChange = (e) => {
        setBuyer(({
            ...buyer,
            [e.target.name]:e.target.value
        }))
    }

    const generateOrder = async(data) => {
        setLoad(true)
        try {
            const col = collection(db,"Orders")
            const order = await addDoc(col,data) 
            setOrderID(order.id)
            clear()
            setLoad(false)
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const day = new Date()
        const items = cart.map(e=> {return {id:e.id,title:e.name,price:e.price,amount:e.amount}})        
        const total = getTotal()
        const data = {buyer,items,day,total}
        console.log("data",data)  
        generateOrder(data)
        
        
    }
    

    return (
        <>
            <h1>Finalizando Compra</h1>
            <hr />
            
            {load ? <Spinner />
                : (!orderID&&<div>
                    <h4>Completar Datos:</h4>
                    <br />
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="Name"
                            placeholder="Name"
                            value={Name}
                            onChange={handleInputChange}
                            required
                        />
                        <br />
                        <input
                            type="email"
                            name="Email"
                            placeholder="Email"
                            value={Email}
                            onChange={handleInputChange}
                            required
                        />
                        <br />
                        <input
                            type="number"
                            name="Phone"
                            placeholder="Phone"
                            value={Phone}
                            onChange={handleInputChange}
                            required
                        />
                        <br /><br />
                        <input
                            type="submit"
                            value="Complete Order"
                            className="btn btn-success"
                        />
                    </form>
                </div>)
            }

            <div>
            {
                orderID&&(
                    <div>
                        <h4>Your order has been placed successfully!</h4>
                        <h4>{`Your order number is: ${orderID}`}</h4>
                        <Link to="/"><h5>Continue Shopping</h5></Link>
                    </div>
                    )
            }
            </div>

        </>
    )
}

export default Checkout