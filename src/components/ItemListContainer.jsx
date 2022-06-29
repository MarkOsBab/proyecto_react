import ItemList from "./ItemList";
import React, { useEffect, useState } from 'react'

function ItemListContainer()
{
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('cakes.json')
            .then((response) => response.json())
            .then((data) => setProduct(data.cakes))
    }, []);
    
    return (
        <ItemList items={product}/>
    );
}

export default ItemListContainer;