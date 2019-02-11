import React, { Component } from 'react'
import './NavBar.css';
import { Icon, Menu } from 'semantic-ui-react'
export default class NavBar extends Component {

  // buttonTest = () => {
//  console.log(this.props)
  // }

  // TODO - fix LINK from react-router-dom

  state = { activeItem: 'CR Merch' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
      <Menu pointing secondary size="huge" stackable>
          <Menu.Item 
            active={activeItem === 'CR Merch'} 
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
          <Menu.Item
            name='blog'
            active={activeItem === 'blog'}
            href="/blog"
          />
          <Menu.Item
            name='products'
            active={activeItem === 'products'}
            href="/products"
          />
          <Menu.Menu className='right'>
          <Menu.Item
              name='Cart'
              active={activeItem === 'Cart'}
              href="/cart"
            >
            <Icon name='shopping cart' />
            Cart
          </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

