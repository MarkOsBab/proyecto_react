import React, { createContext, useState } from "react";
export const contexto = createContext([]);
const { Provider } = contexto;
function CustomProvider({children}){
    const [items, setItems] = useState([]);
    const addToCart = (props, num) => {
        if (isInCart(props.id)){
            const index = items.indexOf(items.find((cake) => cake.id === props.id));
            const aux = [...items];
            aux[index].cantidad += num;
            setItems(aux)
        } else{
            props.cantidad = num;
            setItems([...items, props])
        }
    }

    const isInCart = (id) => {
        return items.find((cake) => cake.id === id);
    }

    const removeItem = (id) => {
        const aux = [...items];
        aux.splice(aux.indexOf(aux.find((item) => item.id === id)), 1);
        setItems(aux);
    }

    const clear = () => {
        setItems([]);
    }

    const getTotalPrice = () => {
        var totalPrice = 0;
        items.forEach((item) => {
            totalPrice = item.cantidad * item.price
        });
        return totalPrice;
    }

    const countCartItems = () => {
        var total = 0;
        items.forEach((item) => {
            total += item.cantidad;
        })
        return total;
    }

      const updateStockItem = (id, count) => {

        const index = items.indexOf(items.find((item) => item.id === id));
        const aux = [...items];
        aux[index].cantidad = count;
        setItems(aux);
      };

      return (
        <Provider
        value={{
            items,
            addToCart,
            removeItem,
            clear,
            getTotalPrice,
            countCartItems,
            updateStockItem
        }}
        >{children}</Provider>
      )
}
export default CustomProvider;