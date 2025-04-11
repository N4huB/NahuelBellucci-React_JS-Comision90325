import { Flex } from "@chakra-ui/react"

export const ItemListContainer = ({greeting}) => {
    return (
        <Flex
        alignItems={"center"}
        width={"100%"}
        height={"90vh"}
        fontSize={"70px"}
        justifyContent={"center"}
        >
            {greeting}
        </Flex>
    );
};