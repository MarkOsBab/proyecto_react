import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function ItemCart({service}) {
    const [num, setNum] = useState(0);
    const stock = 9;
    const sumar = () => {
        if (num <= stock) {
            setNum(num + 1);
        }
    }
    const resta = () => {
        if (num > 0) {
            setNum(num - 1);
        }
    }
    return (
        <div className='list__item'>
            <h3 className='list__item--title'>Landing page</h3>
            <picture className='list__item__picture'>
                <img className='list__item__picture--image' src={service} alt={'Item-picture'} />
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
            <div className='list__item__buttons'>
                <button className='list__item--button' onClick={sumar}>
                    <FontAwesomeIcon icon={faPlusCircle} />
                </button>
                <p className='list__item__buttons--count'>#{num}</p>
                <button className='list__item--button' onClick={resta}>
                    <FontAwesomeIcon icon={faCircleMinus} />
                </button>
            </div>
        </div>
    );
}
export default ItemCart;