import ItemList from "./ItemList";
import React, { useEffect, useState } from 'react'

function ItemListContainer()
{
    const [product, setProduct] = useState([])
    useEffect(() => {
        setTimeout(() =>
            fetch('cakes.json')
            .then((response) => response.json())
            .then((data) => setProduct(data.cakes))
        , 2000)
    }, []);
    
    return (
        <ItemList items={product}/>
    );
}

export default ItemListContainer;