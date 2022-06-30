import { Link } from 'react-router-dom';
function Item(props) {
    return (
        <div className='list__item'>
            <Link to={`/products/${props.id}`}>
                <h3 className='list__item--title'>{props.title}</h3>
                <picture className='list__item__picture'>
                    <img className='list__item__picture--image' src={props.image} alt={'Item-picture'} />
                </picture>
                <p className='list__item--price'><span>$</span> {props.price} </p>
                <p className='list__item--stock'>Stock: {props.stock}</p>
            </Link>
        </div>
    );
}
export default Item;