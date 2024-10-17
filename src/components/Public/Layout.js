import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Public/container'; 
import Footer from './Footer/Footer';
import styled from 'styled-components';
import { useAdminContext } from '../../theme/AdminContext';
import { styles } from '../../theme/All_styles'; 

export default function Layout() {
  const { styleChoice } = useAdminContext(); 
  const selectedStyle = styles[styleChoice];

  const navbarHeight = selectedStyle.navbarHeight || '90px';  

  return (
    <LayoutContainer>
      <NavbarWrapper>
        <Navbar />
      </NavbarWrapper>
      <MainContent navbarHeight={navbarHeight}>
        <Outlet />
      </MainContent>
      <Footer />
    </LayoutContainer>
  );
}

// Styled components
const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const NavbarWrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`;

const MainContent = styled.main`
  margin-top: ${(props) => props.navbarHeight}; 
  padding: 20px;
  flex: 1;
  background-color: #f9f9f9;
`;
