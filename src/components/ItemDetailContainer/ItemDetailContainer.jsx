import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Box, Text, Image, Button } from "@chakra-ui/react";

const ItemDetailContainer = () => {
    const { id } = useParams(); 
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        fetch("/productos.json")
        .then((res) => res.json())
        .then((data) => {
            const productoEncontrado = data.find((p) => p.id === parseInt(id));
            setProducto(productoEncontrado);
        })
        .catch((error) => console.error("Error al cargar productos:", error));
    }, [id]);

    if (!producto) {
        return <Text textAlign="center" mt={6}>Producto no encontrado</Text>;
    }

    return (
        <Box p={6} textAlign="center">
        <Image
            src={producto.imagen}
            alt={producto.nombre}
            maxW="300px"
            mx="auto"
            mb={4}
            borderRadius="md"
        />
        <Text fontSize="3xl" mb={2}>{producto.nombre}</Text>
        <Text fontSize="md" mb={2}>{producto.descripcion}</Text>
        <Text fontSize="xl" fontWeight="bold" mb={4}>{producto.precio}</Text>
        <Link to="/">
            <Button colorScheme="teal">Volver al catálogo</Button>
        </Link>
        </Box>
    );
};

export default ItemDetailContainer;
