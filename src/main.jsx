import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'; 
import App from './App.jsx';
import { CartProvider } from './context/CartContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ChakraProvider>
  </StrictMode>
);
