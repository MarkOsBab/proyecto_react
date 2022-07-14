import Cart from './../images/cart.png';
import React, {useContext} from 'react';
import { contexto } from "../context/context";
function CartWidget() {
    const { countCartItems } = useContext(contexto);
    return (
        <picture className='navbar__box__list__item__cart__box'>
            <img className='navbar__box__list__item__cart__box__image' src={Cart} alt={'Cart-image'} />
            <span className='navbar__box__list__item__cart__box__count'>{countCartItems()}</span>
        </picture>
    );
}

export default CartWidget;