import React, { useEffect, useState } from 'react'
import Item from './Item';
function ItemList() {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('cakes.json', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
            .then((response) => response.json())
            .then((data) => setProduct(data.cakes))
    }, []);
    return (
        <div className='container'>
            <h2 className='list--title'>Lista de productos</h2>
            <div className='list'>
                {product.map((item) =>
                    <Item title={item.title} image={item.image} desc={item.previewDescription} price={item.price} stock={item.stock} />
                )}
            </div>
        </div>
    );
}
export default ItemList;