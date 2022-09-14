//import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:idCategory' element={<ItemListContainer />} />
        <Route path='/item/:idItem' element={<ItemDetailContainer /> }/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
