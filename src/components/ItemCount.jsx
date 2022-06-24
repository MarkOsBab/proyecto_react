import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";
function ItemCount({stock}) {
    const [num, setNum] = useState(0);
    const sumar = () => {
        if (num <= stock) {
            setNum(num + 1);
            console.log(num);
        }
    }
    const resta = () => {
        if (num > 0) {
            setNum(num - 1);
        }
    }
    return (
        <div className='list__item__buttons'>
            <button className='list__item--button' onClick={sumar}>
                <FontAwesomeIcon icon={faPlusCircle} />
            </button>
            <p className='list__item__buttons--count'>#{num}</p>
            <button className='list__item--button' onClick={resta}>
                <FontAwesomeIcon icon={faCircleMinus} />
            </button>
        </div>
    );
}

export default ItemCount;