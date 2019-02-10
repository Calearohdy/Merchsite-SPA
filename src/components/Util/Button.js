import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
background: transparent;
border:0.05rem solid var(--lightBlue);
border-color: ${prop => prop.cart ? "var(--mainYellow)" : "#00bf8f"};
color: ${prop => prop.cart ? "var(--mainYellow)": "var(--mainWhite)"};
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0;
transition: all 0.2s ease-in-out;
  &:hover {
    background: ${prop => prop.cart ? "var(--mainYellow)": "#43cea2"};
    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
  }

background: #00bf8f;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #001510, #00bf8f);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #001510, #00bf8f); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

`;
