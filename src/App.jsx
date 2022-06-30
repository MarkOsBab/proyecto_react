import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ItemDetailContainer from './components/ItemDetailContainer';
import NotFound from './pages/NotFound';
function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={'*'} element={<NotFound />}></Route>
        <Route path={'/'} element={<Products />}></Route>
        <Route path={'/home'} element={<Home />}></Route>
        <Route path={'/products'} element={<Products />}></Route>
        <Route path={'/products/:id'} element={<ItemDetailContainer />}></Route>
      </Routes>
    </div>
  );
}

export default App;
