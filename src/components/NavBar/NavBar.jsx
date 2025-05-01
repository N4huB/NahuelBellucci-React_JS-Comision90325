import React from "react";
import { Box, Flex, Button, Stack, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom"; // Importamos Link para navegación
import CartWidget from "../CartWidget";  

const NavBar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                {/* Título de la tienda y enlaces de navegación */}
                <Box>
                    <Link to="/">
                        <Button variant="link" fontSize="xl" colorScheme="teal">
                            Genesis2815 Store
                        </Button>
                    </Link>
                </Box>

                <Flex alignItems={'center'}>
                    <Stack direction={'row'} spacing={7}>
                        {/* Widget de carrito */}
                        <CartWidget />
                        {/* Botón para cambiar el color del modo */}
                        <Button onClick={toggleColorMode}>
                            {colorMode === 'light' ? '🌙' : '☀️'}
                        </Button>
                    </Stack>
                </Flex>
            </Flex>
        </Box>
    );
};

export default NavBar;
