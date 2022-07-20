import ItemList from "./ItemList";
import React, { useEffect, useState } from 'react'
import LoadingSpinner from "./LoadingSpinner";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
function ItemListContainer()
{
    const [product, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    /* useEffect(() => {
        setIsLoading(true);
        fetch(`https://my-json-server.typicode.com/matidsc/SampleJSONPlaceholder/cakes`)
        .then((response) => response.json())
        .then((data) => {
            setProduct(data)
            setIsLoading(false)
        })
    }, []);*/
    useEffect(() => {
        setIsLoading(true);
        const db = getFirestore();
        const cakesRef = collection(db, 'cakes');
        getDocs(cakesRef).then((snapshot) => {
            let list = snapshot.docs.map((doc) => {
                return{docId:doc.id, ...doc.data()}
            })
            setProduct(list)
            setIsLoading(false)
        })
    }, [])
    return (
        <div>
            {isLoading && <LoadingSpinner />}
            {!isLoading && <ItemList items={product}/>}
        </div>
    );
}

export default ItemListContainer;