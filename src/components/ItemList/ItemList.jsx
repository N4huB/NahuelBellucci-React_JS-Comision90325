import React from "react";
import { Box, Text, Button, Image, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ItemList = ({ productos }) => {
    if (productos.length === 0) {
        return <Text>No se encontraron productos.</Text>;
    }

    return (
        <SimpleGrid columns={[1, 2, 3]} spacing={6}>
            {productos.map(producto => (
                <Box
                    key={producto.id}
                    p={4}
                    borderWidth="1px"
                    borderRadius="lg"
                    textAlign="center"
                >
                    <Image
                        src={producto.imagen}
                        alt={producto.nombre}
                        borderRadius="md"
                        mb={3}
                        mx="auto"
                        maxH="200px"
                        objectFit="cover"
                    />
                    <Text fontSize="xl" mb={2}>{producto.nombre}</Text>
                    <Link to={`/item/${producto.id}`}>
                        <Button colorScheme="teal">Ver detalle</Button>
                    </Link>
                </Box>
            ))}
        </SimpleGrid>
    );
};

export default ItemList;
