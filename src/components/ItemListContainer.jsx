import ItemList from "./ItemList";
import React, { useEffect, useState } from 'react'

function ItemListContainer()
{
    const [product, setProduct] = useState([])
    useEffect(() => {
            fetch('https://my-json-server.typicode.com/matidsc/SampleJSONPlaceholder/cakes')
            .then((response) => response.json())
            .then((data) => setProduct(data))
    }, []);
    
    return (
        <ItemList items={product}/>
    );
}

export default ItemListContainer;