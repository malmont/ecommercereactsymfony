import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <FooterContainer>
    <div>
      <a href="#">Accueil</a>
      <a href="#">À propos</a>
      <a href="#">Services</a>
      <a href="#">Contact</a>
    </div>
    <p>&copy; {new Date().getFullYear()} Luminae Store. Tous droits réservés.</p>
  </FooterContainer>
);

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px 0;
  text-align: center;

  a { 
    color: white;
    padding: 0 15px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
    p {
    margin: 10px 0 0;
    font-size: 14px;
    }


`;

export default Footer;
