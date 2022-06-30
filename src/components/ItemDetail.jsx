import ItemCount from './ItemCount';
 
function ItemDetail(props) {
    return (
        <div className='item__box'>
                <picture className='item__box__picture'>
                    <img className='item__box__picture--img' src={props.cakes.image} alt={'cake-picture'} />
                </picture>
                <div className='item__box__details'>
                    <h2 className='item__box__details--title'>{props.cakes.title}</h2>
                    <p className='item__box__details--description'>{props.cakes.previewDescription}</p>
                    <ItemCount stock={props.cakes.stock} />
                </div>
        </div>
    );
}

export default ItemDetail;