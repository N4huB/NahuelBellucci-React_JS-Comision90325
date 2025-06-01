import React from "react";
import { Button, useToast } from "@chakra-ui/react";
import { useCart } from "../../context/CartContext.jsx";

const AddItemButton = ({ producto, cantidad }) => {
    const toast = useToast();
    const { addItem } = useCart();

    const handleAdd = () => {
        addItem(producto, cantidad);
        toast({
            title: `${cantidad} x ${producto.nombre} agregado al carrito.`,
            status: "success",
            duration: 2000,
            isClosable: true,
        });
    };

    return (
        <Button colorScheme="teal" onClick={handleAdd}>
            Agregar al carrito
        </Button>
    );
};

export default AddItemButton;
