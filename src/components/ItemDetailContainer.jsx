import ItemCount from "./ItemCount";

function ItemDetailContainer()
{
    return (
        
        <div className='item'>
            <div className='item__box'>
                <picture className='item__box__picture'>
                    <img className='item__box__picture--img' src={'./../images/cakes/bombones.jpg'} alt={'cake-picture'} />
                </picture>
                <div className='item__box__details'>
                    <h2 className='item__box__details--title'>Titulo de la torta</h2>
                    <p className='item__box__details--description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi labore autem, placeat quisquam saepe eaque illum temporibus optio a officiis iste magnam dolorem veniam minus eveniet eos culpa distinctio neque.</p>
                    <ItemCount stock={10}/>
                    <a href={'#'} className='item__box__details--button'>Añadir al carrito</a>
                </div>
            </div>
        </div>
    );
}

export default ItemDetailContainer;