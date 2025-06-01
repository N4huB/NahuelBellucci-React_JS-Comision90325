import React from "react";
import { Box, Text, VStack, Divider } from "@chakra-ui/react";

const Brief = ({ carrito }) => {
    const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

    return (
        <Box p={6} borderWidth="1px" borderRadius="md" maxW="600px" mx="auto">
            <Text fontSize="2xl" mb={4}>Resumen de compra</Text>
            <VStack spacing={4} align="stretch">
                {carrito.map(item => (
                    <Box key={item.id}>
                        <Text fontWeight="bold">{item.nombre}</Text>
                        <Text>Cantidad: {item.cantidad}</Text>
                        <Text>Precio unitario: ${item.precio}</Text>
                        <Divider my={2} />
                    </Box>
                ))}
            </VStack>
            <Text fontSize="xl" fontWeight="bold" mt={6}>Total: ${total.toFixed(2)}</Text>
        </Box>
    );
};

export default Brief;
