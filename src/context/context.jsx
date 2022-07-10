import React, { createContext, useState } from "react";
export const contexto = createContext([]);
const { Provider } = contexto;
function CustomProvider({children}){
    const [items, setItems] = useState([]);

    const addToCart = (props, num) => {
        if (isInCart(props.cakes.id)){
            const index = items.indexOf(items.find((cake) => cake.id === props.cakes.id));
            const aux = [... items];
            aux[index].stock += num;
            setItems(aux)
        } else{
            props.cakes.stock = num;
            setItems([... items, props.cakes])
        }
    }

    const isInCart = (id) => {
        return items.find((cake) => cake.id === id) !== undefined ? true : false;
    }

    const removeItem = (id) => {
        const aux = [... items];
        aux.splice(aux.indexOf(aux.find((item) => item.id === id)), 1);
        setItems(aux);
        console.log(items)
    }

    const clear = () => {
        setItems([]);
    }

      return (
        <Provider
        value={{
            items,
            addToCart,
            removeItem,
            clear
        }}
        >{children}</Provider>
      )
}
export default CustomProvider;