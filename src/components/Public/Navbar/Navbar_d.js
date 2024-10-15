import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { observer } from "mobx-react-lite"

// const NavbarContainer = styled.nav`
//   background-color: #2c3e50;
//   padding: 1rem 2rem;
//   position: fixed;
//   width: 100%;
//   top: 0;
//   left: 0;
//   z-index: 1000;
//   transition: all 0.3s ease;
// `

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`

// const Logo = styled(NavLink)`
//   font-size: 1.5rem;
//   font-weight: bold;
//   color: #ecf0f1;
//   text-decoration: none;
//   transition: color 0.3s ease;

//   &:hover {
//     color: #3498db;
//   }
// `

// const NavLinks = styled.div`
//   display: flex;
//   align-items: center;

//   @media (max-width: 768px) {
//     display: none;
//   }
// `

// const NavItem = styled(NavLink)`
//   color: #ecf0f1;
//   text-decoration: none;
//   padding: 0.5rem 1rem;
//   margin: 0 0.5rem;
//   border-radius: 4px;
//   transition: all 0.3s ease;

//   &:hover, &.active {
//     background-color: #34495e;
//     color: #3498db;
//   }
// `

// const NavButton = styled.button`
//   background-color: #3498db;
//   color: #fff;
//   border: none;
//   padding: 0.5rem 1rem;
//   border-radius: 4px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #2980b9;
//   }
// `

// const MobileMenuButton = styled.button`
//   display: none;
//   background: none;
//   border: none;
//   color: #ecf0f1;
//   font-size: 1.5rem;
//   cursor: pointer;

//   @media (max-width: 768px) {
//     display: block;
//   }
// `

// const MobileMenu = styled.div`
//   display: none;
//   position: absolute;
//   top: 100%;
//   left: 0;
//   right: 0;
//   background-color: #34495e;
//   padding: 1rem;
  
//   @media (max-width: 768px) {
//     display: ${props => props.isOpen ? 'block' : 'none'};
//   }
// `

// const MobileNavItem = styled(NavItem)`
//   display: block;
//   margin: 0.5rem 0;
// `

// const CartIcon = styled.div`
//   position: relative;
//   cursor: pointer;
//   margin-left: 2rem;
// `

// const CartCount = styled.span`
//   position: absolute;
//   top: -8px;
//   right: -8px;
//   background-color: #e74c3c;
//   color: #fff;
//   border-radius: 50%;
//   padding: 2px 6px;
//   font-size: 0.75rem;
// `

// const Select = styled.select`
//   background-color: #34495e;
//   color: #ecf0f1;
//   border: none;
//   padding: 0.5rem;
//   margin-left: 1rem;
//   border-radius: 4px;
//   cursor: pointer;
// `

const Navbar_d = observer(({ ResumeCart, AuthContext, useDependencies,selectedStyle  }) => {
  const { navbarViewModel: vm } = useDependencies()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)


  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <selectedStyle.NavbarContainer style={{ backgroundColor: isScrolled ? '#34495e' : '#2c3e50' }}>
      <NavbarContent>
        <selectedStyle.Logo to={vm.homePath}>MyStore</selectedStyle.Logo>
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