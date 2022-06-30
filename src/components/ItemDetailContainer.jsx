import ItemDetail from "./ItemDetail";
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
function ItemDetailContainer()
{   
    const [product, setProduct] = useState()
    const {id} = useParams();
    useEffect(() => {
            fetch(`https://my-json-server.typicode.com/matidsc/SampleJSONPlaceholder/cakes/${id}`)
            .then((response) => response.json())
            .then((data) => setProduct(data))
    }, [id]);
    return (
        <div className='item'>
            <ItemDetail cakes={product}/>
        </div>
    );
}

export default ItemDetailContainer;