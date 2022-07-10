import ItemList from "./ItemList";
import React, { useEffect, useState } from 'react'
import LoadingSpinner from "./LoadingSpinner";
import { useParams } from "react-router-dom";

function ItemListContainer()
{
    const [product, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        fetch(`https://my-json-server.typicode.com/matidsc/SampleJSONPlaceholder/cakes`)
        .then((response) => response.json())
        .then((data) => {
            setProduct(data)
            setIsLoading(false)
        })
    }, []);
    
    return (
        <div>
            {isLoading && <LoadingSpinner />}
            {!isLoading && <ItemList items={product}/>}
        </div>
    );
}

export default ItemListContainer;