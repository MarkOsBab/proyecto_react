import Item from './Item';
function ItemList(props) {
    return (
        <div className='container'>
            <h2 className='list--title'>Tortas comúnes</h2>
            <div className='list'>
                {props.items.map((item) =>
                    <Item key={item.id} id={item.id} title={item.title} image={item.image} price={item.price} stock={item.stock} />
                )}
            </div>
        </div>
    );
}
export default ItemList;