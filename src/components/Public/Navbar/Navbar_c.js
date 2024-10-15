import React, { useEffect, useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { observer } from "mobx-react-lite";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const NavbarContainer = styled.nav`
  background-color: #1a1a2e;
  color: #e94560;
  padding: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(NavLink)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #e94560;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled(NavLink)`
  color: #e94560;
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 50%;
    background-color: #e94560;
    transition: all 0.3s ease;
  }

  &:hover, &.active {
    color: white;
    &:after {
      width: 100%;
      left: 0;
    }
  }
`;

const NavButton = styled.button`
  background-color: #0f3460;
  border: none;
  color: #e94560;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e94560;
    color: #0f3460;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #e94560;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  background-color: #1a1a2e;
  padding: 1rem;
  display: ${props => props.isOpen ? 'flex' : 'none'};
  flex-direction: column;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease;
`;

const MobileNavItem = styled(NavItem)`
  margin: 0.5rem 0;
`;

const CartIcon = styled.div`
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #e94560;
  color: #1a1a2e;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 0.8rem;
  transition: all 0.3s ease;
`;

const Select = styled.select`
  background-color: #16213e;
  color: #e94560;
  border: none;
  padding: 0.5rem;
  margin-right: 1rem;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0f3460;
  }
`;

// Nouveaux composants standardisés
const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

const NavbarSection = styled.div`
  display: flex;
  align-items: center;
`;

const CartPreview = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #16213e;
  border: 1px solid #e94560;
  border-radius: 10px;
  padding: 1rem;
  display: none;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease;
`;

const CartContainer = styled.div`
  position: relative;
  margin-left: 1rem;

  &:hover ${CartPreview} {
    display: block;
  }
`;

const Navbar_c = ({ ResumeCart, AuthContext, useDependencies }) => {
  const authContext = useContext(AuthContext);
  const { navbarViewModel: vm } = useDependencies();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const changeWidth = () => {
      vm.updateWidth();
    };
    window.addEventListener("resize", changeWidth);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", changeWidth);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [vm]);

  return (
    <NavbarContainer style={{ backgroundColor: isScrolled ? '#0f3460' : '#1a1a2e' }}>
      <NavbarContent>
        <Logo to={vm.homePath}>
          {React.createElement(vm.icons.HomeIcon)} MyStore
        </Logo>
        <NavLinks>
          <NavbarSection>
            <NavItem to={vm.homePath}>
              {React.createElement(vm.icons.HomeIcon)} Accueil
            </NavItem>
            <NavItem to={vm.categoriesPath}>
              {React.createElement(vm.icons.CategoryIcon)} Catégories
            </NavItem>
          </NavbarSection>
          <NavbarSection>
            {vm.user ? (
              <>
                <NavItem to={vm.dashboardPath}>
                  {React.createElement(vm.icons.DashboardCustomizeIcon)} Tableau de bord
                </NavItem>
                <NavItem to={vm.profilePath}>
                  {React.createElement(vm.icons.PeopleAltIcon)} Profil
                </NavItem>
                <NavButton onClick={authContext.logout}>
                  {React.createElement(vm.icons.LogoutIcon)} Déconnexion
                </NavButton>
              </>
            ) : (
              <>
                <NavItem to={vm.loginPath}>
                  {React.createElement(vm.icons.PersonIcon)} Connexion
                </NavItem>
                <NavItem to={vm.registerPath}>
                  {React.createElement(vm.icons.HowToRegIcon)} Inscription
                </NavItem>
              </>
            )}
          </NavbarSection>
        </NavLinks>
        <RightSection>
          <Select value={vm.selectedCurrency} onChange={(e) => vm.handleCurrencyChange(e.target.value)}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </Select>
          <Select value={vm.selectedLanguage} onChange={(e) => vm.handleLanguageChange(e.target.value)}>
            <option value="English">English</option>
            <option value="French">Français</option>
            <option value="Spanish">Español</option>
          </Select>
          <CartContainer>
            <CartIcon onClick={() => vm.navigateToCart()}>
              {React.createElement(vm.icons.ShoppingCartIcon)}
              {vm.getTotalQuantity() > 0 && (
                <CartCount>{vm.getTotalQuantity()}</CartCount>
              )}
            </CartIcon>
            <CartPreview>
              <ResumeCart className="cart" />
            </CartPreview>
          </CartContainer>
        </RightSection>
        <MobileMenuButton onClick={vm.toogleMenu}>
          {React.createElement(vm.icons.MenuIcon)}
        </MobileMenuButton>
      </NavbarContent>
      <MobileMenu isOpen={vm.toggleMenuMobile}>
        <MobileNavItem to={vm.homePath}>Accueil</MobileNavItem>
        <MobileNavItem to={vm.categoriesPath}>Catégories</MobileNavItem>
        {vm.user ? (
          <>
            <MobileNavItem to={vm.dashboardPath}>Tableau de bord</MobileNavItem>
            <MobileNavItem to={vm.profilePath}>Profil</MobileNavItem>
            <NavButton onClick={authContext.logout}>Déconnexion</NavButton>
          </>
        ) : (
          <>
            <MobileNavItem to={vm.loginPath}>Connexion</MobileNavItem>
            <MobileNavItem to={vm.registerPath}>Inscription</MobileNavItem>
          </>
        )}
        <Select value={vm.selectedCurrency} onChange={(e) => vm.handleCurrencyChange(e.target.value)}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </Select>
        <Select value={vm.selectedLanguage} onChange={(e) => vm.handleLanguageChange(e.target.value)}>
          <option value="English">English</option>
          <option value="French">Français</option>
          <option value="Spanish">Español</option>
        </Select>
        <CartContainer>
          <CartIcon onClick={() => vm.navigateToCart()}>
            {React.createElement(vm.icons.ShoppingCartIcon)}
            {vm.getTotalQuantity() > 0 && (
              <CartCount>{vm.getTotalQuantity()}</CartCount>
            )}
          </CartIcon>
        </CartContainer>
      </MobileMenu>
    </NavbarContainer>
  );
};

export default observer(Navbar_c);