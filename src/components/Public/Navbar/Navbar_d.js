import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { observer } from "mobx-react-lite"
import { useAdminContext } from '../../../theme/AdminContext';

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;
const AdminToggleButton = styled.button`
  background-color: ${props => (props.active ? '#ff6600' : '#007bff')};
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 1rem;

  /* Masquer le bouton en mode mobile et tablette (moins de 800px de largeur) */
  @media screen and (max-width: 800px) {
    display: none;
  }
`;



const Navbar_d = observer(({ ResumeCart, AuthContext, useDependencies,selectedStyle  }) => {
  const { navbarViewModel: vm } = useDependencies()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { toggleAdminSettings, showAdminSettings } = useAdminContext();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <selectedStyle.NavbarContainer >
      <NavbarContent>
        
        <selectedStyle.Logo to={vm.homePath}>MyStore</selectedStyle.Logo>
        <AdminToggleButton onClick={toggleAdminSettings} active={showAdminSettings}>
          {showAdminSettings ? 'Admin' : 'Admin'}
        </AdminToggleButton>
        <selectedStyle.NavLinks>
          <selectedStyle.NavItem to={vm.homePath}>Home</selectedStyle.NavItem>
          <selectedStyle.NavItem to={vm.categoriesPath}>Categories</selectedStyle.NavItem>
          {vm.user ? (
            <>
              <selectedStyle.NavItem to={vm.dashboardPath}>Dashboard</selectedStyle.NavItem>
              <selectedStyle.NavItem to={vm.profilePath}>Profile</selectedStyle.NavItem>
              <selectedStyle.NavButton onClick={vm.logout}>Logout</selectedStyle.NavButton>
            </>
          ) : (
            <>
              <selectedStyle.NavItem to={vm.loginPath}>Login</selectedStyle.NavItem>
              <selectedStyle.NavItem to={vm.registerPath}>Register</selectedStyle.NavItem>
            </>
          )}
          <selectedStyle.Select value={vm.selectedCurrency} onChange={(e) => vm.handleCurrencyChange(e.target.value)}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </selectedStyle.Select>
          <selectedStyle.Select value={vm.selectedLanguage} onChange={(e) => vm.handleLanguageChange(e.target.value)}>
            <option value="English">EN</option>
            <option value="French">FR</option>
            <option value="Spanish">ES</option>
          </selectedStyle.Select>
          <selectedStyle.CartIcon onClick={() => vm.navigateToCart()}>
            {React.createElement(vm.icons.ShoppingCartIcon, { color: '#ecf0f1', size: 24 })}
            {vm.getTotalQuantity() > 0 && (
              <selectedStyle.CartCount>{vm.getTotalQuantity()}</selectedStyle.CartCount>
            )}
          </selectedStyle.CartIcon>
        </selectedStyle.NavLinks>
        <selectedStyle.MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {React.createElement(vm.icons.MenuIcon, { color: '#ecf0f1', size: 24 })}
        </selectedStyle.MobileMenuButton>
      </NavbarContent>
      <selectedStyle.MobileMenu isOpen={isMobileMenuOpen}>
        <selectedStyle.MobileNavItem to={vm.homePath}>Home</selectedStyle.MobileNavItem>
        <selectedStyle.MobileNavItem to={vm.categoriesPath}>Categories</selectedStyle.MobileNavItem>
        {vm.user ? (
          <>
            <selectedStyle.MobileNavItem to={vm.dashboardPath}>Dashboard</selectedStyle.MobileNavItem>
            <selectedStyle.MobileNavItem to={vm.profilePath}>Profile</selectedStyle.MobileNavItem>
            <selectedStyle.NavButton onClick={vm.logout}>Logout</selectedStyle.NavButton>
          </>
        ) : (
          <>
            <selectedStyle.MobileNavItem to={vm.loginPath}>Login</selectedStyle.MobileNavItem>
            <selectedStyle.MobileNavItem to={vm.registerPath}>Register</selectedStyle.MobileNavItem>
          </>
        )}
        <selectedStyle.Select value={vm.selectedCurrency} onChange={(e) => vm.handleCurrencyChange(e.target.value)}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </selectedStyle.Select>
        <selectedStyle.Select value={vm.selectedLanguage} onChange={(e) => vm.handleLanguageChange(e.target.value)}>
          <option value="English">EN</option>
          <option value="French">FR</option>
          <option value="Spanish">ES</option>
        </selectedStyle.Select>
        <selectedStyle.CartIcon onClick={() => vm.navigateToCart()}>
          {React.createElement(vm.icons.ShoppingCartIcon, { color: '#ecf0f1', size: 24 })}
          {vm.getTotalQuantity() > 0 && (
            <selectedStyle.CartCount>{vm.getTotalQuantity()}</selectedStyle.CartCount>
          )}
        </selectedStyle.CartIcon>
      </selectedStyle.MobileMenu>
    </selectedStyle.NavbarContainer>
  )
})

export default Navbar_d