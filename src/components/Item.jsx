import ItemCount from "./ItemCount";
function Item({title, image, desc, price, stock}) {
    return (
        <div className='list__item'>
            <h3 className='list__item--title'>{title}</h3>
            <picture className='list__item__picture'>
                <img className='list__item__picture--image' src={image} alt={'Item-picture'} />
            </picture>
            <p className='list__item--description'>{desc}</p>
            <p className='list__item--price'><span>$</span> {price} </p>
            <ItemCount stock={stock}/>
        </div>
    );
}
export default Item;