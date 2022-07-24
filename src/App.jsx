import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import NotFound from './pages/NotFound';
import ItemListContainer from './components/ItemListContainer';
import Home from './pages/Home';
import Header from './components/Header';
import React from 'react';
import CustomProvider from './context/context';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {

  return (
    <CustomProvider>
      <div className="App">
        <Navbar />
        <Header />
        <Routes>
          <Route path={'*'} element={<NotFound />} />
          <Route path={'/'} element={<Home />} />
          <Route path='/tortas' element={<ItemListContainer />} />
          <Route path={'/tortas/:id'} element={<ItemDetailContainer />} />
          <Route path={'/cart'} element={<Cart />} />
          <Route path={'/checkout'} element={<Checkout/>}/>
        </Routes>
      </div>
  </CustomProvider>
  );
}

export default App;
