import React from "react";
import { Button, HStack, Text } from "@chakra-ui/react";

const ItemQuantitySelector = ({ cantidad, setCantidad, max = 10 }) => {

    const incrementar = () => {
        if (cantidad < max) setCantidad(cantidad + 1);
    };

    const decrementar = () => {
        if (cantidad > 1) setCantidad(cantidad - 1);
    };

    return (
        <HStack spacing={4} justifyContent="center" mb={4}>
            <Button onClick={decrementar} colorScheme="teal">-</Button>
            <Text>{cantidad}</Text>
            <Button onClick={incrementar} colorScheme="teal">+</Button>
        </HStack>
    );
};

export default ItemQuantitySelector;
