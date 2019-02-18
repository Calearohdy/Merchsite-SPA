import React, { Component } from 'react'
import './NavBar.css';
import {NavLink} from 'react-router-dom';
import { Menu, Transition } from 'semantic-ui-react'
export default class NavBar extends Component {

  // TODO: fix issue with OnClick Navbar function - should show 
  // pointers to the specific item 


  state = { activeItem: 'home', visible: true }

  render() {
    const { activeItem, visible } = this.state
    return (
      <Transition 
        animation="fly right" 
        duration={1200} 
        visible={visible} 
        transitionOnMount={true} >
      <div >     
      <Menu vertical size="huge" className="ui compact navProps navTop navHide" >
          <Menu.Item>
            <NavLink to="/" className="link" activeClassName="activeLink">
            <div style={{fontFamily: 'Rock Salt', marginRight: '3px', fontSize: '20px'}} >
              CR
            </div>
            <div className="navPop" >
              Merch
            </div>
            </NavLink>
          </Menu.Item>
          <Menu.Item active={activeItem === 'blog'} name='blog' >
            <NavLink to="/blog" className="link" activeClassName="activeLink" >
            <div name="blog" className="navPopLink">
              Blog
              </div> 
            </NavLink>
          </Menu.Item>
          <Menu.Item active={activeItem === 'products'}>
            <NavLink to="/products" className="link" activeClassName="activeLink">
            <div className="navPopLink">
            Products
            </div>
            </NavLink>
          </Menu.Item>
          {/* <Menu.Menu className='right'>
          <Menu.Item active={activeItem === 'cart'}>
          <NavLink to="/cart" className="cart" activeClassName="activeLink">
            <Icon name='shopping cart' className="navPop"/>
            Cart
            </NavLink>
          </Menu.Item>
          </Menu.Menu> */}
        </Menu>
      </div>
      </Transition>
    )
  }
}

