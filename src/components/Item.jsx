function Item(props) {
    return (
        <div className='list__item'>
            <h3 className='list__item--title'>{props.title}</h3>
            <picture className='list__item__picture'>
                <img className='list__item__picture--image' src={props.image} alt={'Item-picture'} />
            </picture>
            <p className='list__item--price'><span>$</span> {props.price} </p>
            <p className='list__item--stock'>Stock: {props.stock}</p>
        </div>
    );
}
export default Item;