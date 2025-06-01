import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Box, Text, Button } from "@chakra-ui/react";
import ItemDetail from "../ItemDetail";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        fetch("/productos.json")
        .then(res => res.json())
        .then(data => {
            const prod = data.find(p => p.id === parseInt(id));
            setProducto(prod);
        })
        .catch(err => console.error("Error al cargar productos:", err));
    }, [id]);

    if (!producto) {
        return <Text textAlign="center" mt={6}>Producto no encontrado</Text>;
    }

    return (
        <Box p={6} textAlign="center">
            <ItemDetail producto={producto} />
            <Link to="/">
                <Button colorScheme="teal" mt={4}>Volver al catálogo</Button>
            </Link>
        </Box>
    );
};

export default ItemDetailContainer;
