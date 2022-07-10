import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import NotFound from './pages/NotFound';
import ItemListContainer from './components/ItemListContainer';
import Home from './pages/Home';
import Header from './components/Header';
function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Routes>
        <Route path={'*'} element={<NotFound />}/>
        <Route path={'/'} element={<Home/>}/>
        <Route path='/tortas' element={<ItemListContainer/>}/>
        <Route path={'/tortas/:id'} element={<ItemDetailContainer />}/>
      </Routes>
    </div>
  );
}

export default App;
