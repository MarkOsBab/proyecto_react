import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { contexto } from "../context/context";
import {getFirestore,collection,addDoc,updateDoc,doc} from "firebase/firestore";
function Checkout()
{
    const {items, getTotalPrice, clear} = useContext(contexto);
    const [buyer, setBuyer] = useState();
    const [idVenta, setIdVenta] = useState();
    const [showId, setShowId] = useState(false);
    const handleChange = (e) => {
        setBuyer({...buyer, [e.target.name]: e.target.value});
    }

    const backToBuy = (
        <Link to={'/tortas'}>Volver a comprar</Link>
    )

    const endPurchase = (e) => {
        e.preventDefault();
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, {
            buyer:buyer,
            items:items,
            date:new Date(),
            total:getTotalPrice()
        }).then((result) => {
            setIdVenta(result.id);
        })
        items.forEach((item) => {
            const orderDoc = doc(db, 'cakes', item.docId);
            updateDoc(orderDoc, {stock:item.stock - item.cantidad});
        })
        setShowId(true)
        clear()
    }

    return(
        <div className='checkout'>
            {!showId && items.length === 0 ?
                backToBuy
            :(!showId ? (
            <div className='checkout__wrapper'>
                <h1 className='checkout__wrapper--title'>Ya casi terminamos</h1>
                <form onSubmit={endPurchase}>
                    <input
                     type={'text'}
                     required 
                     onChange={handleChange}
                     name={'fullName'} 
                     placeholder={'Nombre completo'} 
                     />
                    <input 
                     type={'text'}
                     required
                     onChange={handleChange}
                     name={'phone'}
                     placeholder={'Celular'}
                     />
                     <input 
                      type={'email'} 
                      required
                      onChange={handleChange}
                      name={'email'}
                      placeholder={'E-mail'}
                      pattern={'[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'}
                      />
                      <div className='checkout__wrapper__footer'>
                        <button className='checkout__wrapper__footer--btn'>Confirmar la compra</button>
                      </div>
                </form>
            </div>
            ) : (
                <div className='checkout__done'>
                    <p>Código de compra: {idVenta}</p>
                </div>
            ))}
        </div>
    );
}
export default Checkout;