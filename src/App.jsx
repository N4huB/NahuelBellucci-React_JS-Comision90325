import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Checkout from './components/Checkout/Checkout';
import { useCart } from './context/CartContext.jsx';

function App() {
  const { cartItemCount } = useCart();

  return (
    <BrowserRouter>
      <NavBar cartItemCount={cartItemCount} />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenido al catálogo" />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
