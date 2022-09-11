//import './App.css';
//import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        {/* <center><ItemListContainer greeting="Este es un E-commerce de productos Gringos."/></center> */}
        <ItemDetailContainer />
      </header>
    </div>
  );
}

export default App;
