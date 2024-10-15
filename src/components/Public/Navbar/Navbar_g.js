import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { observer } from "mobx-react-lite"

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`

const NavbarContainer = styled.nav`
  background: #1a1a2e;
  padding: 0.75rem 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`

const Logo = styled(NavLink)`
  font-size: 1.75rem;
  font-weight: bold;
  color: #16dae0;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(22, 218, 224, 0.4), transparent);
    animation: ${shimmer} 2s infinite;
  }

  &:hover {
    color: #e94560;
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
  color: #ecf0f1;
  text-decoration: none;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover, &.active {
    background-color: #34495e;
    color: #3498db;
  }
`

const NavButton = styled.button`
  background-color: #e94560;
  color: #fff;
  border: none;
  padding: 0.5rem 1.25rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: all 0.3s ease;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    background-color: #d13652;
  }
`

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #16dae0;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #e94560;
  }

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
  background: #1a1a2e;
  padding: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'block' : 'none'};
  }
`

const MobileNavItem = styled(NavItem)`
  display: block;
  margin: 0.75rem 0;
  text-align: center;
`

const CartIcon = styled.div`
  position: relative;
  cursor: pointer;
  margin-left: 1rem;
  transition: all 0.3s ease;

  &:hover {
    color: #e94560;
  }
`

const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #e94560;
  color: #fff;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 0.75rem;
  font-weight: bold;
`

const Select = styled.select`
  background-color: #16213e;
  color: #fff;
  border: 1px solid #e94560;
  padding: 0.5rem 1rem;
  margin-left: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url('data:image/svg+xml;utf8,<svg fill="%23ffffff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>');
  background-repeat: no-repeat;
  background-position: right 10px center;

  &:hover {
    background-color: #1f2b4d;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(233, 69, 96, 0.5);
  }
`

const Navbar_g = observer(({ ResumeCart, AuthContext, useDependencies }) => {
  const { navbarViewModel: vm } = useDependencies()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <NavbarContainer style={{ padding: isScrolled ? '0.5rem 2rem' : '0.75rem 2rem' }}>
      <NavbarContent>
        <Logo to={vm.homePath}>
          {React.createElement(vm.icons.HomeIcon, { color: '#16dae0', size: 28 })}
          <span style={{ marginLeft: '0.5rem' }}>FutureStore</span>
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
            {React.createElement(vm.icons.ShoppingCartIcon, { color: '#fff', size: 24 })}
            {vm.getTotalQuantity() > 0 && (
              <CartCount>{vm.getTotalQuantity()}</CartCount>
            )}
          </CartIcon>
        </NavLinks>
        <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {React.createElement(vm.icons.MenuIcon, { color: '#16dae0', size: 24 })}
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
          {React.createElement(vm.icons.ShoppingCartIcon, { color: '#fff', size: 24 })}
          {vm.getTotalQuantity() > 0 && (
            <CartCount>{vm.getTotalQuantity()}</CartCount>
          )}
        </CartIcon>
      </MobileMenu>
    </NavbarContainer>
  )
})

export default Navbar_g