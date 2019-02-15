import React, { Component } from 'react'
import './NavBar.css';
import {NavLink} from 'react-router-dom';
import { Icon, Menu } from 'semantic-ui-react'
export default class NavBar extends Component {

  // TODO: fix issue with OnClick Navbar function - should show 
  // pointers to the specific item 


  state = { activeItem: 'home' }

  handleItemClick = node => {
    console.log(node.metaKeys)
  }

  render() {
    const { activeItem } = this.state
    return (
      <div >
      <Menu size="huge" secondary className="ui top fixed inverted navProps">
          <Menu.Item 
            onClick={this.handleItemClick}
            href="/"
            >
            <div style={{fontFamily: 'Rock Salt', marginRight: '3px', fontSize: '20px'}} >
              CR
            </div>
            <div className="navPop" >
              Merch
            </div>
          </Menu.Item>
          {/* <Menu.Item active={activeItem === 'blog'} name='blog' >
            <NavLink to="/blog" className="link" activeClassName="activeLink" >
            <div onClick={e => this.handleItemClick(e)} name="blog" >
              Blog
              </div> 
            </NavLink>
          </Menu.Item>
          <Menu.Item active={activeItem === 'products'}>
            <NavLink to="/products" className="link" activeClassName="activeLink">
            <div onClick={e => this.handleItemClick(e)} >
            Products
            </div>
            </NavLink>
          </Menu.Item>
          <Menu.Menu className='right'>
          <Menu.Item active={activeItem === 'cart'}>
          <NavLink to="/cart" className="cart" activeClassName="activeLink">
            <Icon name='shopping cart' />
            Cart
            </NavLink>
          </Menu.Item>
          </Menu.Menu> */}
        </Menu>
      </div>
    )
  }
}

