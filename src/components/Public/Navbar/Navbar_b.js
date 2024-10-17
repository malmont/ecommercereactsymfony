import React, { useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { observer } from "mobx-react-lite";
import { useAdminContext } from '../../../theme/AdminContext';


const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

const CartContainer = styled.div`
  position: relative;
`;

const CartPreview = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1rem;
  display: none;
  z-index: 1000;

  ${CartContainer}:hover & {
    display: block;
  }
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

const Navbar_b = ({ ResumeCart, AuthContext, useDependencies, selectedStyle }) => {
  const authContext = useContext(AuthContext);
  const { navbarViewModel: vm } = useDependencies();
  const { toggleAdminSettings, showAdminSettings } = useAdminContext();
  useEffect(() => {
    const changeWidth = () => {
      vm.updateWidth();
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, [vm]);

  return (
    <selectedStyle.NavbarContainer>
      <NavbarContent>
        <div>
          <selectedStyle.Logo to={vm.homePath}>
            {React.createElement(vm.icons.HomeIcon)} MyStore
          </selectedStyle.Logo>
          <selectedStyle.NavLinks>
            <selectedStyle.NavItem to={vm.homePath}>
              {React.createElement(vm.icons.HomeIcon)} Accueil
            </selectedStyle.NavItem>
            <selectedStyle.NavItem to={vm.categoriesPath}>
              {React.createElement(vm.icons.CategoryIcon)} Catégories
            </selectedStyle.NavItem>
            {vm.user ? (
              <>
                <selectedStyle.NavItem to={vm.dashboardPath}>
                  {React.createElement(vm.icons.DashboardCustomizeIcon)} Tableau de bord
                </selectedStyle.NavItem>
                <selectedStyle.NavItem to={vm.profilePath}>
                  {React.createElement(vm.icons.PeopleAltIcon)} Profil
                </selectedStyle.NavItem>
                <selectedStyle.NavButton onClick={authContext.logout}>
                  {React.createElement(vm.icons.LogoutIcon)} Déconnexion
                </selectedStyle.NavButton>
              </>
            ) : (
              <>
                <selectedStyle.NavItem to={vm.loginPath}>
                  {React.createElement(vm.icons.PersonIcon)} Connexion
                </selectedStyle.NavItem>
                <selectedStyle.NavItem to={vm.registerPath}>
                  {React.createElement(vm.icons.HowToRegIcon)} Inscription
                </selectedStyle.NavItem>
              </>
            )}
          </selectedStyle.NavLinks>
        </div>
        <RightSection>
        <AdminToggleButton onClick={toggleAdminSettings} active={showAdminSettings}>
          {showAdminSettings ? 'Admin' : 'Admin'}
        </AdminToggleButton>
          <selectedStyle.Select value={vm.selectedCurrency} onChange={(e) => vm.handleCurrencyChange(e.target.value)}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </selectedStyle.Select>
          <selectedStyle.Select value={vm.selectedLanguage} onChange={(e) => vm.handleLanguageChange(e.target.value)}>
            <option value="English">English</option>
            <option value="French">Français</option>
            <option value="Spanish">Español</option>
          </selectedStyle.Select>
          <CartContainer>
            <selectedStyle.CartIcon onClick={vm.navigateToCart}>
              {React.createElement(vm.icons.ShoppingCartIcon)}
              {vm.getTotalQuantity() > 0 && (
                <selectedStyle.CartCount>{vm.getTotalQuantity()}</selectedStyle.CartCount>
              )}
            </selectedStyle.CartIcon>
            <CartPreview>
              <ResumeCart className="cart" />
            </CartPreview>
          </CartContainer>
        </RightSection>
      </NavbarContent>
      <selectedStyle.MobileMenuButton onClick={vm.toogleMenu}>
        {React.createElement(vm.icons.MenuIcon)}
      </selectedStyle.MobileMenuButton>
      <selectedStyle.MobileMenu isOpen={vm.toggleMenuMobile}>
        <selectedStyle.MobileNavItem to={vm.homePath}>Accueil</selectedStyle.MobileNavItem>
        <selectedStyle.MobileNavItem to={vm.categoriesPath}>Catégories</selectedStyle.MobileNavItem>
        {vm.user ? (
          <>
            <selectedStyle.MobileNavItem to={vm.dashboardPath}>Tableau de bord</selectedStyle.MobileNavItem>
            <selectedStyle.MobileNavItem to={vm.profilePath}>Profil</selectedStyle.MobileNavItem>
            <selectedStyle.NavButton onClick={authContext.logout}>Déconnexion</selectedStyle.NavButton>
          </>
        ) : (
          <>
            <selectedStyle.MobileNavItem to={vm.loginPath}>Connexion</selectedStyle.MobileNavItem>
            <selectedStyle.MobileNavItem to={vm.registerPath}>Inscription</selectedStyle.MobileNavItem>
          </>
        )}
   
        <selectedStyle.Select value={vm.selectedCurrency} onChange={(e) => vm.handleCurrencyChange(e.target.value)}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </selectedStyle.Select>
        <selectedStyle.Select value={vm.selectedLanguage} onChange={(e) => vm.handleLanguageChange(e.target.value)}>
          <option value="English">English</option>
          <option value="French">Français</option>
          <option value="Spanish">Español</option>
        </selectedStyle.Select>
      </selectedStyle.MobileMenu>
    </selectedStyle.NavbarContainer>
  );
};

export default observer(Navbar_b);