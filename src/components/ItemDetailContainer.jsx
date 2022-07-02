import ItemDetail from "./ItemDetail";
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import LoadingSpinner from "./LoadingSpinner";
function ItemDetailContainer()
{   
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
            setIsLoading(true);
            fetch(`https://my-json-server.typicode.com/matidsc/SampleJSONPlaceholder/cakes/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setProduct(data)
                setIsLoading(false)
            })
    }, [id]);
    return (
        <div className='item'>
            {isLoading && <LoadingSpinner />}
            {!isLoading && <ItemDetail cakes={product}/>}
        </div>
    );
}

export default ItemDetailContainer;