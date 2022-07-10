import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";
function ItemCount({stock, onAdd, initial}) {
    const [num, setNum] = useState(initial);

    const addToCart = () => {
        onAdd(num);
      };

    const sumar = () => {
        if (num < stock) {
            setNum(num+1);
        }
    }
    const resta = () => {
        if (num > 1) {
            setNum(num - 1);
        }
    }
    return (
        <div className='list__item__buttons'>
            <button className='list__item--button' onClick={resta}>
                <FontAwesomeIcon icon={faCircleMinus} />
            </button>
            <p className='list__item__buttons--count'>#{num}</p>
            <button className='list__item--button' onClick={sumar}>
                <FontAwesomeIcon icon={faPlusCircle} />
            </button>
            <button onClick={addToCart} className='item__box__details--button'>Añadir al carrito</button>
        </div>
    );
}

export default ItemCount;