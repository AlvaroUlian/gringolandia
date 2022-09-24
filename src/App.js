//import './App.css';
import {BrowserRouter} from 'react-router-dom';
import { Routes, Route } from 'react-router-loading';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Navbar from './components/navbar/Navbar';
import Cart from './components/cart/Cart';
import CartContextProvider from './components/cartContext/CartContext';

function App() {
  
  return (
    <CartContextProvider>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/gringolandia-Ulian' element={<ItemListContainer />} />
        <Route path='/category/:idCategory' element={<ItemListContainer />} />
        <Route path='/item/:idItem' element={<ItemDetailContainer /> }/>
        <Route path='/cart' element={<Cart /> }/>

      </Routes>
    </BrowserRouter>
    </CartContextProvider>
    
  );
}

export default App;
