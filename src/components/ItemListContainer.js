import service1 from './../images/services/service1.png';
import service2 from './../images/services/service2.png';
import service3 from './../images/services/service3.png';
function ItemListContainer()
{
    return (
        <div className='container'>
            <h2 className='list--title'>Lista de servicios</h2>
            <div className='list'>
                <div className='list__item'>
                    <h3 className='list__item--title'>Landing page</h3>
                    <picture className='list__item__picture'>
                        <img className='list__item__picture--image' src={service1} alt={'Item-picture'} />
                    </picture>
                    <ul className='list__item__list'>
                        <li className='list__item__list--item'>
                            <p>Diseño del sitio web</p>
                        </li>
                        <li className='list__item__list--item'>
                            <p>Gestión del proyecto a su mando</p>
                        </li>
                        <li className='list__item__list--item'>
                            <p>SEO</p>
                        </li>
                        <li className='list__item__list--item'>
                            <p>Subida al servidor</p>
                        </li>
                        <li className='list__item__list--item'>
                            <p>Mantenimiento del sitio</p>
                        </li>
                    </ul>
                    <p className='list__item--price'><span>US$</span> 700 </p>
                    <small className='list__item--note'>El precio puede variar segun lo que el cliente solicite</small>
                    <button className='list__item--button' type={'submit'}>Contratar servicio</button>
                </div>
                <div className='list__item'>
                    <h3 className='list__item--title'>Funcional website</h3>
                    <picture className='list__item__picture'>
                        <img className='list__item__picture--image' src={service2} alt={'Item-picture'} />
                    </picture>
                    <ul className='list__item__list'>
                        <li className='list__item__list--item'>
                            <p>Diseño del sitio web</p>
                        </li>
                        <li className='list__item__list--item'>
                            <p>Diseño de funciones para la web</p>
                        </li>
                        <li className='list__item__list--item'>
                            <p>Seguridad de la base de datos</p>
                        </li>
                        <li className='list__item__list--item'>
                            <p>SEO</p>
                        </li>
                        <li className='list__item__list--item'>
                            <p>Subida al servidor</p>
                        </li>
                        <li className='list__item__list--item'>
                            <p>Mantenimiento del sitio</p>
                        </li>
                    </ul>
                    <p className='list__item--price'><span>US$</span> 2000</p>
                    <small className='list__item--note'>El precio puede variar segun lo que el cliente solicite</small>
                    <button className='list__item--button' type={'submit'}>Contratar servicio</button>
                </div>
                <div className='list__item'>
                    <h3 className='list__item--title'>Marketing service</h3>
                    <picture className='list__item__picture'>
                        <img className='list__item__picture--image' src={service3} alt={'Item-picture'} />
                    </picture>
                    <ul className='list__item__list'>
                        <li className='list__item__list--item'>
                            <p>Diseño de plan de marketing</p>
                        </li>
                        <li className='list__item__list--item'>
                            <p>Creación de publicaciones llamativas en redes sociales</p>
                        </li>
                        <li className='list__item__list--item'>
                            <p>Enseñanza básica de uso de redes sociales</p>
                        </li>
                    </ul>
                    <p className='list__item--price'><span>US$</span> 2000</p>
                    <small className='list__item--note'>El precio puede variar segun lo que el cliente solicite</small>
                    <button className='list__item--button' type={'submit'}>Contratar servicio</button>
                </div>
            </div>
        </div>
    );
}

export default ItemListContainer;