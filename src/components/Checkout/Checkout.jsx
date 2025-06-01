import React from "react";
import Brief from "./Brief";
import { Box, Button, Text } from "@chakra-ui/react";
import { useCart } from "../../context/CartContext.jsx";

const Checkout = () => {
    const { cart, clearCart } = useCart();

    if (cart.length === 0) {
        return <Text textAlign="center" mt={6}>Tu carrito está vacío.</Text>;
    }

    return (
        <Box p={6}>
            <Brief carrito={cart} />
            <Button mt={4} colorScheme="red" onClick={clearCart}>
                Vaciar carrito
            </Button>
        </Box>
    );
};

export default Checkout;
