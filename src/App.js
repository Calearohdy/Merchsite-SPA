import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import NavBar from '../src/components/Nav/NavBar';
import ProductList from '../src/components/Products/ProductList';
import Details from '../src/components/Products/Details';
import Cart from '../src/components/Cart/Cart';
import Default from '../src/components/Error/Default';
import Main from '../src/components/Main/Main';
import Modal from './components/Modals/Modal';
import ComingSoon from '../src/components/Error/ComingSoon';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar store={this.props.store} />
        <Switch>
        <Route 
              exact path="/" 
              component={Main}/>
          <Route 
              path="/products" 
              component={ProductList}/>
          <Route 
              path="/details" 
              component={Details}/>
          <Route 
              path="/cart" 
              component={Cart}/>
              <Route 
              path="/blog" 
              component={ComingSoon}/>              
          <Route 
              component={Default}/>                                          
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
