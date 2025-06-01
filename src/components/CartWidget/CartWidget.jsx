import React from 'react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    Button,
    Box,
    Text,
    Flex,
    IconButton,
    } from "@chakra-ui/react";
    import { LuShoppingCart, LuX } from "react-icons/lu";
    import { useCart } from '../../context/CartContext';

    const CartWidget = () => {
    const { cart, removeItem } = useCart();

    const total = cart.reduce(
        (acc, item) => acc + Number(item.precio.replace(/\./g, '')) * item.cantidad,
        0
    );

    return (
        <Menu>
        <MenuButton as={Button} rightIcon={<LuShoppingCart />} colorScheme="teal">
            Carrito ({cart.reduce((acc, item) => acc + item.cantidad, 0)})
        </MenuButton>
        <MenuList minW="300px" maxW="400px">
            {cart.length === 0 ? (
            <Box p={4}>El carrito está vacío.</Box>
            ) : (
            <>
                {cart.map((item) => (
                <MenuItem key={item.id} justifyContent="space-between" alignItems="center">
                    <Box>
                    <Text fontWeight="bold">{item.nombre}</Text>
                    <Text fontSize="sm">
                        Cantidad: {item.cantidad} x ${item.precio}
                    </Text>
                    </Box>
                    <IconButton
                    aria-label="Eliminar producto"
                    icon={<LuX />}
                    size="sm"
                    colorScheme="red"
                    onClick={() => removeItem(item.id)}
                    />
                </MenuItem>
                ))}

                <MenuDivider />
                <Box p={3} fontWeight="bold" textAlign="right">
                Total: ${total.toLocaleString('es-AR')}
                </Box>
            </>
            )}
        </MenuList>
        </Menu>
    );
};

export default CartWidget;
