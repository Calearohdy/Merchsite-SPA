import React, { Component } from 'react'
import './NavBar.css';
import {Link} from 'react-router-dom';
import { Icon, Menu } from 'semantic-ui-react'
export default class NavBar extends Component {

  // TODO: fix issue with OnClick Navbar function - should show 
  // pointers to the specific item 


  state = { activeItem: 'home' }

  handleItemClick = (e) => {
    // console.log(e.view)
  }

  render() {
    const { activeItem } = this.state
    return (
      <div>
      <Menu pointing size="huge" stackable>
          <Menu.Item 
            active={activeItem === 'home'} 
            onClick={this.handleItemClick}
            href="/"
            >
            <div style={{fontFamily: 'Rock Salt', marginRight: '3px', fontSize: '20px'}} >
              CR
            </div>
            <div style={{fontFamily: 'Pacifico', fontSize: '25px'}} >
              Merch
            </div>
          </Menu.Item>
          <Menu.Item active={activeItem === 'blog'} name='blog' >
            <Link to="/blog" className="link">
            <div onClick={(e) => this.handleItemClick(e)} name="blog" >
              Blog
              </div> 
            </Link>
          </Menu.Item>
          <Menu.Item active={activeItem === 'products'}>
            <Link to="/products" className="link">
            <div onClick={(e) => this.handleItemClick(e)} >
            Products
            </div>
            </Link>
          </Menu.Item>
          <Menu.Menu className='right'>
          <Menu.Item active={activeItem === 'cart'}>
          <Link to="/cart" className="cart">
            <Icon name='shopping cart' />
            Cart
            </Link>
          </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

