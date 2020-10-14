import React from 'react';
import { Router } from '@reach/router';
import Home from '../containers/Home';
import AddProducto from '../containers/AddProducto';
import BinLayout from '../containers/BinLayout';
import NotFound from '../containers/NotFound';
import Lists from '../containers/Lists';
import PickingList from '../containers/PickingList';
import Packer from '../containers/Packer';
import Log from '../containers/Log';
import BinSection from '../containers/BinSection';
import NavigationBar from '../components/NavigationBar';
import Header from '../components/Header';

const App = () => (
  <>
    <Header />
    <Router>
      <Home exact path='/' />
      <Lists exact path='/lists' />
      <PickingList exact path='/pickinglist/:id' />
      <Packer exact path='/packer' />
      <Log exact path='/log' />
      <BinSection exact path='/binsection/:id' />
      <BinLayout exact path='/binlayout/:id' />
      <AddProducto exact path='/agregarproducto' />
      <NotFound default />
    </Router>
    <NavigationBar />
  </>
);

export default App;
