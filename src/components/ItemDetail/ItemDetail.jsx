import React, { useState } from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import ItemQuantitySelector from "./ItemQuantitySelector";
import Description from "./Description";
import AddItemButton from "./AddItemButton";

const ItemDetail = ({ producto }) => {
    const [cantidad, setCantidad] = useState(1);

    return (
        <Box>
            <Image
                src={producto.imagen}
                alt={producto.nombre}
                maxW="300px"
                mx="auto"
                mb={4}
                borderRadius="md"
            />
            <Text fontSize="3xl" mb={2}>{producto.nombre}</Text>
            <Description descripcion={producto.descripcion} />
            <Text fontSize="xl" fontWeight="bold" mb={4}>{producto.precio}</Text>

            <ItemQuantitySelector cantidad={cantidad} setCantidad={setCantidad} max={10} />
            <AddItemButton producto={producto} cantidad={cantidad} />
        </Box>
    );
};

export default ItemDetail;
