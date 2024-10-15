import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { observer } from "mobx-react-lite"

const NavbarContainer = styled.nav`
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  padding: 0.5rem 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`

const Logo = styled(NavLink)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`

const NavItem = styled(NavLink)`
  color: #333;
  text-decoration: none;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  border-radius: 20px;
  transition: all 0.3s ease;

  &:hover, &.active {
    background-color: #007bff;
    color: #fff;
  }
`

const NavButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #333;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`

const MobileMenu = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'block' : 'none'};
  }
`

const MobileNavItem = styled(NavItem)`
  display: block;
  margin: 0.5rem 0;
`

const CartIcon = styled.div`
  position: relative;
  cursor: pointer;
  margin-left: 1rem;
`

const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #dc3545;
  color: #fff;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 0.75rem;
`

const Select = styled.select`
  background-color: #f8f9fa;
  color: #333;
  border: 1px solid #ced4da;
  padding: 0.5rem;
  margin-left: 1rem;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover, &:focus {
    border-color: #007bff;
    outline: none;
  }
`

const Navbar_e = observer(({ ResumeCart, AuthContext, useDependencies }) => {
  const { navbarViewModel: vm } = useDependencies()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <NavbarContainer style={{ boxShadow: isScrolled ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none' }}>
      <NavbarContent>
        <Logo to={vm.homePath}>
          {React.createElement(vm.icons.HomeIcon, { color: '#007bff', size: 24 })}
          <span style={{ marginLeft: '0.5rem' }}>MyStore</span>
        </Logo>
        <NavLinks>
          <NavItem to={vm.homePath}>Home</NavItem>
          <NavItem to={vm.categoriesPath}>Categories</NavItem>
          {vm.user ? (
            <>
              <NavItem to={vm.dashboardPath}>Dashboard</NavItem>
              <NavItem to={vm.profilePath}>Profile</NavItem>
              <NavButton onClick={vm.logout}>Logout</NavButton>
            </>
          ) : (
            <>
              <NavItem to={vm.loginPath}>Login</NavItem>
              <NavItem to={vm.registerPath}>Register</NavItem>
            </>
          )}
          <Select value={vm.selectedCurrency} onChange={(e) => vm.handleCurrencyChange(e.target.value)}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </Select>
          <Select value={vm.selectedLanguage} onChange={(e) => vm.handleLanguageChange(e.target.value)}>
            <option value="English">EN</option>
            <option value="French">FR</option>
            <option value="Spanish">ES</option>
          </Select>
          <CartIcon onClick={() => vm.navigateToCart()}>
            {React.createElement(vm.icons.ShoppingCartIcon, { color: '#333', size: 24 })}
            {vm.getTotalQuantity() > 0 && (
              <CartCount>{vm.getTotalQuantity()}</CartCount>
            )}
          </CartIcon>
        </NavLinks>
        <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {React.createElement(vm.icons.MenuIcon, { color: '#333', size: 24 })}
        </MobileMenuButton>
      </NavbarContent>
      <MobileMenu isOpen={isMobileMenuOpen}>
        <MobileNavItem to={vm.homePath}>Home</MobileNavItem>
        <MobileNavItem to={vm.categoriesPath}>Categories</MobileNavItem>
        {vm.user ? (
          <>
            <MobileNavItem to={vm.dashboardPath}>Dashboard</MobileNavItem>
            <MobileNavItem to={vm.profilePath}>Profile</MobileNavItem>
            <NavButton onClick={vm.logout}>Logout</NavButton>
          </>
        ) : (
          <>
            <MobileNavItem to={vm.loginPath}>Login</MobileNavItem>
            <MobileNavItem to={vm.registerPath}>Register</MobileNavItem>
          </>
        )}
        <Select value={vm.selectedCurrency} onChange={(e) => vm.handleCurrencyChange(e.target.value)}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </Select>
        <Select value={vm.selectedLanguage} onChange={(e) => vm.handleLanguageChange(e.target.value)}>
          <option value="English">EN</option>
          <option value="French">FR</option>
          <option value="Spanish">ES</option>
        </Select>
        <CartIcon onClick={() => vm.navigateToCart()}>
          {React.createElement(vm.icons.ShoppingCartIcon, { color: '#333', size: 24 })}
          {vm.getTotalQuantity() > 0 && (
            <CartCount>{vm.getTotalQuantity()}</CartCount>
          )}
        </CartIcon>
      </MobileMenu>
    </NavbarContainer>
  )
})

export default Navbar_e