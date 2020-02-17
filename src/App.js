import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Productlist from './components/Productlist';
import Details from './components/Details';
import Cart from './components/cart/Cart';
import PageNotFound from './components/PageNotFound';
import Modal from './components/Modal';


function App() {
  return (

    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Productlist} ></Route>
        <Route path='/details' component={Details} ></Route>
        <Route path='/cart' component={Cart} ></Route>
        <Route component={PageNotFound} ></Route>
      </Switch>
      <Modal />
     </>
  );
}

export default App;
