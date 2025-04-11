import { Flex } from "@chakra-ui/react";
import { LuShoppingCart } from "react-icons/lu";

export const CartWidget = () => {
    return (
        <Flex alignItems={"center"} fontSize={20} marginRight={"10px"}>
            <LuShoppingCart />
            <div>0</div>
        </Flex>
    );
}