function Navbar()
{
    return (
        <nav className='navbar'>
            <a href="#" className='navbar__logo'>Logo</a>
            <ul className='navbar__box'>
                <li className='navbar__box__list'>
                    <a href="#" className='navbar__box__list__item'>Inicio</a>
                </li>
                <li className='navbar__box__list'>
                    <a href="#" className='navbar__box__list__item'>Nosotros</a>
                </li>
                <li className='navbar__box__list'>
                    <a href="#" className='navbar__box__list__item'>Productos</a>
                </li>
                <li className='navbar__box__list'>
                    <a href="#" className='navbar__box__list__item'>Destacados</a>
                </li>
            </ul>
            <a href="#" className='navbar__box__list__item'>Carrito</a>
        </nav>
    );
}

export default Navbar;