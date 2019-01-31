import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import NavBar from '../src/components/NavBar';
import ProductList from '../src/components/ProductList';
import Details from '../src/components/Details';
import Cart from '../src/components/Cart';
import Default from '../src/components/Default';
import Modal from './components/Modal';
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
