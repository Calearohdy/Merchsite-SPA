import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
export default class NavBar extends Component {

  buttonTest = () => {
    fetch(`${process.env.REACT_APP_API}/api/data`)
    .then(res => res.json())
    .then(result => {
      console.log({...result.products})
    })
  }

  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to='/'>
        <div style={{color:'white',fontSize: '30px', float:'left',fontFamily: 'Playfair Display'}}>My Merch</div>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link" style={{fontFamily: 'Playfair Display'}} >
              Products
            </Link>
          </li>
          <li className="nav-item ml-5 btn btn-dark">
            <button onClick={() => this.buttonTest()} >
              API
            </button>
          </li>
          <li className="nav-item ml-5">
            <Link to="/blog" className="nav-link" style={{fontFamily: 'Playfair Display'}}>
              Blog
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="pr-2">
            <i className="fas fa-cart-plus"/>
            </span>
            My Cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link {
  color: var(--mainWhite) !important;
  font-size: 1.3rem;
  text-transform: capitalize;
}
`
