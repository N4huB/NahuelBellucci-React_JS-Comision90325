import React, { useState, useEffect } from "react";
import { Box, Text, Button, Image, SimpleGrid, Input, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Link, useParams, useNavigate } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [searchTerm, setSearchTerm] = useState(""); // Estado para la búsqueda
  const [productos, setProductos] = useState([]); // Estado para los productos
  const [categoria, setCategoria] = useState(""); // Estado para la categoría seleccionada
  const { categoryId } = useParams(); // Obtén el parámetro de categoría desde la URL
  const navigate = useNavigate(); // Hook para la navegación

  // Actualiza la categoría si es necesario
    useEffect(() => {
        setCategoria(categoryId); // Actualiza el estado de la categoría
    }, [categoryId]);

    useEffect(() => {
        fetch("/productos.json") // Busca el JSON desde la carpeta public
        .then((res) => res.json())
        .then((data) => {
            setProductos(data); // Establecer productos en el estado
        })
        .catch((error) => console.error("Error al cargar productos:", error));
    }, []);

    // Filtrar productos por categoría y búsqueda
    const filteredProducts = productos.filter((producto) => {
        const matchesCategory = categoria ? producto.categoria === categoria : true;
        const matchesSearch = producto.nombre.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <Box p={4}>
        <Text fontSize="3xl" mb={6} textAlign="center">
            {greeting}
        </Text>

        {/* Barra de búsqueda */}
        <Input
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            mb={6}
        />

        {/* Contenedor para el botón de categorías */}
        <Box mb={8}> {/* Este contenedor agrega más margen entre categorías y productos */}
            <Menu>
            <MenuButton as={Button} colorScheme="teal">
                Categorías
            </MenuButton>
            <MenuList>
                <MenuItem onClick={() => navigate("/category/termos")}>Termos</MenuItem>
                <MenuItem onClick={() => navigate("/category/mates")}>Mates</MenuItem>
                <MenuItem onClick={() => navigate("/category/vasos")}>Vasos</MenuItem>
                <MenuItem onClick={() => navigate("/")}>Todos</MenuItem> {/* Cambiado a la ruta raíz */}
            </MenuList>
            </Menu>
        </Box>

        {/* Contenedor de productos */}
        <SimpleGrid columns={[1, 2, 3]} spacing={6}>
            {filteredProducts.length > 0 ? (
            filteredProducts.map((producto) => (
                <Box key={producto.id} p={4} borderWidth="1px" borderRadius="lg" textAlign="center">
                <Image
                    src={producto.imagen}
                    alt={producto.nombre}
                    borderRadius="md"
                    mb={3}
                    mx="auto"
                    maxH="200px"
                    objectFit="cover"
                />
                <Text fontSize="xl" mb={2}>
                    {producto.nombre}
                </Text>
                <Link to={`/item/${producto.id}`}>
                    <Button colorScheme="teal">Ver detalle</Button>
                </Link>
                </Box>
            ))
            ) : (
            <Text>No se encontraron productos.</Text>
            )}
        </SimpleGrid>
        </Box>
    );
};

export default ItemListContainer;
