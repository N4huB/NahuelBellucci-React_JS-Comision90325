import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem("carrito");
        return storedCart ? JSON.parse(storedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(cart));
    }, [cart]);

    const addItem = (producto, cantidad) => {
        setCart((currCart) => {
        const existingIndex = currCart.findIndex(item => item.id === producto.id);
        if (existingIndex !== -1) {
            const updatedCart = [...currCart];
            updatedCart[existingIndex].cantidad += cantidad;
            return updatedCart;
        } else {
            return [...currCart, { ...producto, cantidad }];
        }
        });
    };

    const removeItem = (id) => {
        setCart((currCart) => {
            const updatedCart = currCart.filter(item => item.id !== id);
            localStorage.setItem("carrito", JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    const clearCart = () => setCart([]);

    const cartItemCount = cart.reduce((acc, item) => acc + item.cantidad, 0);

    const cartTotal = cart.reduce((acc, item) => acc + (Number(item.precio) * item.cantidad), 0);

    return (
        <CartContext.Provider value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        cartItemCount,
        cartTotal
        }}>
        {children}
        </CartContext.Provider>
    );
};
