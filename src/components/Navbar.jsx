import React from 'react'
import logo from './../images/logo.png';
import CartWidget from './CartWidget';
function Navbar()
{
    return (
        <nav className='navbar'>
            <a href={'#'} className='navbar__box__list__item'>
                <picture className='navbar__logo'>
                    <img src={logo} alt={'logo-image'} className='navbar__logo__image' />
                    <p className='navbar__logo--title'>Repostería beula</p>
                </picture>
            </a>
            <ul className='navbar__box'>
                <li className='navbar__box__list'>
                    <a href={'#'} className='navbar__box__list__item'>Nosotros</a>
                </li>
                <li className='navbar__box__list'>
                    <a href={'#'} className='navbar__box__list__item'>Productos</a>
                </li>
                <li className='navbar__box__list'>
                    <a href={'#'} className='navbar__box__list__item'>Destacados</a>
                </li>
            </ul>
            <a href={'#'} className='navbar__box__list__item__cart'>
                <CartWidget />
            </a>
        </nav>
    );
}

export default Navbar;