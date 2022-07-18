import ItemList from "./ItemList";
import React, { useEffect, useState } from 'react'
import LoadingSpinner from "./LoadingSpinner";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc, collection, getDocs } from 'firebase/firestore';
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
            setProduct(snapshot.docs.map((doc) => doc.data()))
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