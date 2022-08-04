import React, { useContext} from "react";
import { Link } from "react-router-dom";
import { contexto } from "../context/context";
import CartItem from "./CartItem";
import { FaStore } from 'react-icons/fa';
import { AiOutlineClear } from 'react-icons/ai';
import { BsFillCartXFill, BsFillCartCheckFill } from 'react-icons/bs';
function Cart(){
    const { items, getTotalPrice, removeItem, updateStockItem, clear} = useContext(contexto);
    return(
        <>
        {items.length > 0 ? (
            <div className='cart'>
                <h2 className='cart--title'>Finaliza la compra</h2>
                <div className='cart__wrapper'>
                    {items.map((item) => {
                        return <CartItem key={item.id} id={item.id} stock={item.stock} cantidad={item.cantidad} title={item.title} image={item.image} price={item.price} removeItem={removeItem} updateStockItem={updateStockItem}/>
                    })}
                </div>
                <p className='cart--total'>Precio final: <b>${getTotalPrice()}</b></p>
                <div className='cart__footer'>
                <Link to={'/checkout'} className='cart__footer--btn-end'><BsFillCartCheckFill/> Finalizar la compra</Link>
                    <Link to={'/tortas'} className='cart__footer--btn'><FaStore/> Sigue comprando</Link>
                    <button onClick={clear} className={'cart__footer--btn-clear'}><AiOutlineClear/> Vaciar el carrito</button>
                </div>
            </div>
        ) : (
            <div className='cart__empty'>
                <h2 className='cart__empty--title'><BsFillCartXFill size={50}/> El carrito se encuentra vacío</h2>
                <Link className='cart__empty--btn' to={'/tortas'}>Ir a comprar</Link>
            </div>
        )}
        </>
    );
}

export default Cart;