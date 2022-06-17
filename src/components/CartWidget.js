import Cart from './../images/cart.png';
function CartWidget()
{
    return (
        <picture className='navbar__box__list__item__cart__box'>
            <img className='navbar__box__list__item__cart__box__image' src={Cart} alt={'Cart-image'} />
            <span className='navbar__box__list__item__cart__box__count'>3</span>
        </picture>
    );
}

export default CartWidget;