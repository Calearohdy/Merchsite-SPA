import React, { Component } from 'react'
import './NavBar.css';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from '../Util/Button';
export default class NavBar extends Component {

  // buttonTest = () => {
  //   fetch(`${process.env.REACT_APP_API}/api/data`)
  //   .then(res => res.json())
  //   .then(result => {
  //     console.log({...result.products})
  //   })
  // }

  render() {
    return (
      <NavWrapper className={"navbar navbar-expand-sm navbar-dark sticky-top px-sm-5"}>
        <Link to='/'>
        <div style={{color:'white',fontSize: '30px', float:'left',fontFamily: 'Playfair Display'}}>My Merch</div>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link" style={{fontFamily: 'Playfair Display'}} >
              Products
            </Link>
          </li>
          {/* <li className="nav-item ml-5 btn btn-dark">
            <button onClick={() => this.buttonTest()} >
              API
            </button>
          </li> */}
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
background: #136a8a;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #267871, #136a8a);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #267871, #136a8a); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
.nav-link {
  color: var(--mainWhite) !important;
  font-size: 1.3rem;
  text-transform: capitalize;
}
`
