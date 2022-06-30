import React from 'react'
import logo from './../images/logo.png';
import CartWidget from './CartWidget';
import {NavLink} from 'react-router-dom';
function Navbar()
{
    return (
        <nav className='navbar'>
            <NavLink to={'/home'} className='navbar__box__list__item'>
                <picture className='navbar__logo'>
                    <img src={logo} alt={'logo-image'} className='navbar__logo__image' />
                    <p className='navbar__logo--title'>Repostería beula</p>
                </picture>
            </NavLink>
            <ul className='navbar__box'>
                <li className='navbar__box__list'>
                    <NavLink to={'#'} className='navbar__box__list__item'>Nosotros</NavLink >
                </li>
                <li className='navbar__box__list'>
                    <NavLink to={'/products'} className='navbar__box__list__item'>Productos</NavLink>
                </li>
                <li className='navbar__box__list'>
                    <NavLink to={'#'} className='navbar__box__list__item'>Destacados</NavLink>
                </li>
            </ul>
            <a href={'#'} className='navbar__box__list__item__cart'>
                <CartWidget />
            </a>
            
        </nav>
    );
}

export default Navbar;