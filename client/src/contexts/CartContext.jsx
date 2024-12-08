import { useState, createContext, useContext } from 'react'

const CartContext = createContext({})

export const CartContextProvider = ({children}) => {
    const [cart, _setCart] = useState(JSON.parse(localStorage.getItem('cart')))

    const setCart = (value) => {
        var item = {
            data: [],
            cartValue: 0
        }
        if (cart == null || cart == "" || cart == undefined || cart == {} || cart == []) {
            item.data.push(value)
            item.cartValue += value.quantity * value.price
        } else {
            item = cart;
            var exist = false;

            cart?.data?.map((item) => {
                if (item.id == value.id) {
                    exist = true;
                    item.quantity += value.quantity;
                }
            })

            if (exist == false) {
                item.data.push(value);
            }

            item.cartValue += value.quantity * value.price
        }
        _setCart(item);
        localStorage.setItem("cart", JSON.stringify(item));
    }

    const updateCart = (data) => {
        _setCart(data)
    }

    const removeCartItem = (id) => {
        const updatedItem = {
            data: [],
            cartValue: 0
        };
        
        const removedItem = cart?.data?.filter((item) => item.id == id)
        const filteredItems = cart?.data?.filter((item) => item.id != id)
        updatedItem.cartValue = cart?.cartValue - (removedItem[0]?.quantity * removedItem[0]?.price)
        updatedItem.data = filteredItems

        updateCart(updatedItem)
        localStorage.setItem("cart", JSON.stringify(updatedItem));
    }


    return (
        <CartContext.Provider value={{ cart, setCart, removeCartItem }}>{children}</CartContext.Provider>
    )
}

export const useCartContext = () => useContext(CartContext)