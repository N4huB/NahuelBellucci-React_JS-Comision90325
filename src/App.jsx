import React from "react";
import { ChakraProvider } from '@chakra-ui/react';
import { NavBar, ItemListContainer} from "./components";

const App = () => {
  return (
    <ChakraProvider>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos"}/>
    </ChakraProvider>
  )
}

export default App
