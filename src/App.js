import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import NavBar from '../src/components/Nav/NavBar';
import ProductList from '../src/components/Products/ProductList';
import Details from '../src/components/Products/Details';
import Cart from '../src/components/Cart/Cart';
import Default from '../src/components/Error/Default';
import Modal from './components/Modals/Modal';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route 
              exact path="/" 
              component={ProductList}/>
              <Route 
              path="/details" 
              component={Details}/>
              <Route 
              path="/cart" 
              component={Cart}/>
              <Route 
              component={Default}/>                                          
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
