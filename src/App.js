//import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <ItemListContainer greeting="Este es un E-commerce de productos Gringos."/>
      </header>
    </div>
  );
}

export default App;
