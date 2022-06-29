import Item from './Item';
function ItemList(props) {
    return (
        <div className='container'>
            <h2 className='list--title'>Lista de productos</h2>
            <div className='list'>
                {props.items.map((item) =>
                    <Item title={item.title} image={item.image} price={item.price} stock={item.stock} />
                )}
            </div>
        </div>
    );
}
export default ItemList;