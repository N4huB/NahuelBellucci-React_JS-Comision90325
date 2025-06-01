import React, { useState, useEffect } from "react";
import { Box, Text, Input, Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import ItemList from "../ItemList";

const ItemListContainer = ({ greeting }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [productos, setProductos] = useState([]);
    const [categoria, setCategoria] = useState("");
    const { categoryId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        setCategoria(categoryId || "");
    }, [categoryId]);

    useEffect(() => {
        fetch("/productos.json")
        .then(res => res.json())
        .then(data => setProductos(data))
        .catch(err => console.error("Error al cargar productos:", err));
    }, []);

    const filteredProducts = productos.filter(producto => {
        const matchesCategory = categoria ? producto.categoria === categoria : true;
        const matchesSearch = producto.nombre.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <Box p={4}>
        <Text fontSize="3xl" mb={6} textAlign="center">{greeting}</Text>

        <Input
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            mb={6}
        />

        <Box mb={8}>
            <Menu>
            <MenuButton as={Button} colorScheme="teal">
                Categorías
            </MenuButton>
            <MenuList>
                <MenuItem onClick={() => navigate("/category/termos")}>Termos</MenuItem>
                <MenuItem onClick={() => navigate("/category/mates")}>Mates</MenuItem>
                <MenuItem onClick={() => navigate("/category/vasos")}>Vasos</MenuItem>
                <MenuItem onClick={() => navigate("/")}>Todos</MenuItem>
            </MenuList>
            </Menu>
        </Box>

        <ItemList productos={filteredProducts} />
        </Box>
    );
};

export default ItemListContainer;
