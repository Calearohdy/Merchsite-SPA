import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
background: #00b4db;
border:0.05rem solid var(--lightBlue);
border-color: "#00b4db"};
color: ${prop => prop.cart ? "var(--mainWhite)": "var(--mainWhite)"};
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0;
transition: all 0.2s ease-in-out;
  &:hover {
    background: ${prop => prop.cart ? "linear-gradient(to right, #00b4db, #0083b0)": "linear-gradient(to left, #00b4db, #0083b0)"};
    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
  }

background: #00b4db;

`;
