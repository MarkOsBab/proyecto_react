import React, { useState, useEffect } from "react";
import { CgTrash } from 'react-icons/cg';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
function CartItem({ id,stock,title,image, removeItem, updateStockItem}){
    const [cartCantidad, setCartCantidad] = useState(stock);
  useEffect(() => {
    updateStockItem(id,cartCantidad)
  }, [cartCantidad])
    return(
        <div className='cart__wrapper__item'>
            <picture className="cart__wrapper__item__picture">
                <img className='cart__wrapper__item__picture--img' src={image} alt={'item-image'} />
            </picture>
            <h4 className='cart__wrapper__item--title'>{title}</h4>
            <p className='cart__wrapper__item--stock'>Cantidad: {stock} </p>
            <div className='cart__wrapper__item__box'>
                <button onClick={() => removeItem(id)} className='cart__wrapper__item__box--btn-delete'><CgTrash size={20}/></button>
                <Link to={'/tortas/'+id} className="cart__wrapper__item__box--btn-add"><BsFillCartPlusFill size={20}/></Link>
            </div>
        </div>
    );
}

export default CartItem;