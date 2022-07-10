import React, { useContext, useState } from "react";
import ItemCount from './ItemCount';
import {BsFillCartCheckFill} from 'react-icons/bs';
import {Link} from 'react-router-dom';
import { contexto } from "../context/context";
function ItemDetail(props) {
    const [itemCount, setItemCount] = useState();
    const { addToCart } = useContext(contexto);
    const onAdd = (num) => {
        setItemCount(num);
        addToCart(props, num);
    };

    return (
        <div className='item__box'>
                <picture className='item__box__picture'>
                    <img className='item__box__picture--img' src={props.cakes.image} alt={'cake-picture'} />
                </picture>
                <div className='item__box__details'>
                    <h2 className='item__box__details--title'>{props.cakes.title}</h2>
                    <p className='item__box__details--description'>{props.cakes.previewDescription}</p>
                    <p className='item__box__details--price'><span>$</span>{props.cakes.price}</p>
                    {itemCount > 0 ? (
                        <Link to={'/cart'} className='item__box__details--button'><BsFillCartCheckFill/> Finalizar la compra</Link>
                    ) : (
                        <ItemCount onAdd={onAdd} stock={props.cakes.stock} initial={0} />
                    )}

                </div>
        </div>
    );
}

export default ItemDetail;