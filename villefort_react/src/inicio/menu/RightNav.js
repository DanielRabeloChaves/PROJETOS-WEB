import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }

  a {
    font-family: SignikaBold,sans-serif;
    font-weight: bold;
    color: black;
    text-decoration: none; 
    font-size: 13px;
  }
  li:hover a{
    color: dimgray;
}

  @media (max-width: 1000px){
    flex-flow: column nowrap;
    background-color: #ffdd00;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
  <div>
      <Ul open={open}>
        <div className="navBarButton">
          <button className="StyleButtonNavBar">Entrar</button>
          <button className="StyleButtonNavBar">Criar Conta</button>
        </div>
        <li><a href="#">DEPARTAMENTO</a></li>
        <li><a href="#">OFERTAS</a></li>
        <li><a href="#">COLEÇÕES</a></li>
        <li><a href="#">RECEITAS</a></li>
        <li><a href="#">MAIS VENDIDOS</a></li>
     </Ul>
  </div>
    
  )
}

export default RightNav