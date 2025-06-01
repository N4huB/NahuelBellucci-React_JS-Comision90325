import React from "react";
import { Text } from "@chakra-ui/react";

const Description = ({ descripcion }) => {
    return (
        <Text fontSize="md" mb={2}>{descripcion}</Text>
    );
};

export default Description;
