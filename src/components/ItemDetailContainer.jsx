import ItemDetail from "./ItemDetail";
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import LoadingSpinner from "./LoadingSpinner";
import { getFirestore, doc, getDoc } from 'firebase/firestore';
function ItemDetailContainer()
{   
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        const db = getFirestore();
        const cakesRef = doc(db, "cakes", id);
        getDoc(cakesRef).then(doc => {
            if(doc.exists)
            {
                setProduct({...doc.data(), docId:doc.id})
                setIsLoading(false)
            }
            else {
                console.log('No existe el producto');
            }
        });
    }, [])
    return (
        <div className='item'>
            {isLoading && <LoadingSpinner />}
            {!isLoading && <ItemDetail props={product}/>}
        </div>
    );
}

export default ItemDetailContainer;