import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import Products from './pages/Products';
import ItemDetailContainer from './components/ItemDetailContainer';
import NotFound from './pages/NotFound';
import ItemListContainer from './components/ItemListContainer';
function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={'*'} element={<NotFound />}></Route>
        <Route path='/:categoryId' element={<ItemListContainer/>}/>
        <Route path={'/tortas'} element={<Products />}></Route>
        <Route path={'/tortas/:id'} element={<ItemDetailContainer />}></Route>
      </Routes>
    </div>
  );
}

export default App;
