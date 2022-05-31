import { createContext, useState, useEffect } from "react";

const addCardItem = (cartItems, productToAdd) => {
    //find if cardItems contains productToAdd
    const exists = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
        );

    //if found, increment quantity
    if(exists)
    {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
            {...cartItem, quantity: cartItem.quantity + 1}: cartItem
        )
    }

    //return new array with modified cartItems
    return [...cartItems, {...productToAdd, quantity: 1}];
}



export const CartContext = createContext({
    isOpen: false,
    setIsOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    totalItems: 0,
})

export const CartProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [totalItems, setTotalItems] = useState(0)

    useEffect(() =>{
        const newCartCount = cartItems.reduce((total, cartItem)=> total+cartItem.quantity, 0)
        setTotalItems(newCartCount);
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCardItem(cartItems, productToAdd))

    }


    const value = {isOpen, setIsOpen, addItemToCart,  cartItems, totalItems}
    return (
        <CartContext.Provider value={value} >{children}</CartContext.Provider>
    )
}