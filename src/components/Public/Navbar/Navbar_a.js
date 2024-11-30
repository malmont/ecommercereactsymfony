import styled from "styled-components";
import React, { useEffect, useContext } from "react";
import AnimateHeight from "react-animate-height";
import { NavLink } from 'react-router-dom';
import { observer } from "mobx-react-lite";
import { useAdminContext } from '../../../theme/AdminContext';


const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  height: 55px;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media screen and (max-width: 800px) {
    flex-grow: 1;
  }
`;

const CartPreview = styled.div`
  visibility: hidden;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

const CartContainer = styled.div`
  position: relative;
  &:hover ${CartPreview} {
    visibility: visible;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.navLinkText};
  &:hover, &.active {
    color: orange;
  }
`;

const MainMenu = styled.div`

  height: 45px;
  overflow: hidden;
`;

const MobileCartContainer = styled(CartContainer)`
  display: none;
  @media screen and (max-width: 800px) {
     display: flex;
  align-items: center;
  justify-content: end;
  }
`;

const CurrencyLanguageSelect = styled.div`
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
const AdminToggleButton = styled.button`
  background-color: ${props => (props.active ? '#ff6600' : '#007bff')};
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;

  /* Masquer le bouton en mode mobile et tablette (moins de 800px de largeur) */
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
const Navbar_a = ({ ResumeCart, AuthContext, useDependencies, selectedStyle }) => {
  const authContext = useContext(AuthContext);
  const { navbarViewModel: navbarVM } = useDependencies();
  const { toggleAdminSettings, showAdminSettings } = useAdminContext();
  console.log(selectedStyle);
  useEffect(() => {
    const changeWidth = () => {
      navbarVM.updateWidth();
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, [navbarVM]);

  return (
    <selectedStyle.NavbarContainer>
      <selectedStyle.TopNavbar>
        <NavbarContent className="row">
          <LeftSection className="col-md-4">
            <selectedStyle.Logo to={navbarVM.homePath}>
              {React.createElement(navbarVM.icons.HomeIcon, { className: 'colorIcon' })}
              MyStore
            </selectedStyle.Logo>
            <CurrencyLanguageSelect>
              <selectedStyle.Select value={navbarVM.selectedCurrency} onChange={(e) => navbarVM.handleCurrencyChange(e.target.value)}>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="CAD">CAD</option>
              </selectedStyle.Select>
              <selectedStyle.Select value={navbarVM.selectedLanguage} onChange={(e) => navbarVM.handleLanguageChange(e.target.value)}>
                <option value="English">English</option>
                <option value="French">French</option>
                <option value="Spanish">Spanish</option>
                <option value="German">German</option>
              </selectedStyle.Select>
            </CurrencyLanguageSelect>
          </LeftSection>
          <RightSection className="col-md-8">
            <AdminToggleButton onClick={toggleAdminSettings} active={showAdminSettings}>
              {showAdminSettings ? 'Admin' : 'Admin'}
            </AdminToggleButton>
            {navbarVM.user ? (
              <>
                <selectedStyle.NavButton as={StyledNavLink} to={navbarVM.dashboardPath}>
                  {React.createElement(navbarVM.icons.DashboardCustomizeIcon, { className: 'colorIcon' })}
                  Dashboard
                </selectedStyle.NavButton>
                <selectedStyle.NavButton as={StyledNavLink} to={navbarVM.profilePath}>
                  {React.createElement(navbarVM.icons.PeopleAltIcon, { className: 'colorIcon' })}
                  Profile
                </selectedStyle.NavButton>
                <selectedStyle.NavButton onClick={authContext.logout}>
                  {React.createElement(navbarVM.icons.LogoutIcon, { className: 'colorIcon' })}
                  Logout
                </selectedStyle.NavButton>
              </>
            ) : (
              <>
                <selectedStyle.NavButton as={StyledNavLink} to={navbarVM.loginPath}>
                  {React.createElement(navbarVM.icons.PersonIcon, { className: 'colorIcon' })}
                  Login
                </selectedStyle.NavButton>
                <selectedStyle.NavButton as={StyledNavLink} to={navbarVM.registerPath}>
                  {React.createElement(navbarVM.icons.HowToRegIcon, { className: 'colorIcon' })}
                  Register
                </selectedStyle.NavButton>
              </>
            )}
            <CartContainer >
              <selectedStyle.CartIcon onClick={navbarVM.navigateToCart}>
                {React.createElement(navbarVM.icons.ShoppingCartIcon, { className: 'colorIcon' })}
                <selectedStyle.CartCount>{navbarVM.getTotalQuantity() || 0}</selectedStyle.CartCount>
              </selectedStyle.CartIcon>
              <CartPreview>
                <ResumeCart className="cart" />
              </CartPreview>
            </CartContainer>
          </RightSection>
          <MobileCartContainer >
            <selectedStyle.CartIcon onClick={navbarVM.navigateToCart}>
              {React.createElement(navbarVM.icons.ShoppingCartIcon, { className: 'colorIcon' })}
              <selectedStyle.CartCount>{navbarVM.getTotalQuantity() || 0}</selectedStyle.CartCount>
            </selectedStyle.CartIcon>
          </MobileCartContainer>
          <selectedStyle.MobileMenuButton className="MenuMobile" onClick={navbarVM.toogleMenu}>
            <span className="spanMenu">Menu</span>
            {React.createElement(navbarVM.icons.MenuIcon, { className: 'colorIcon' })}
          </selectedStyle.MobileMenuButton>
        </NavbarContent>
      </selectedStyle.TopNavbar>
      <MainMenu>
        <selectedStyle.NavLinks className="ulListe">
          <selectedStyle.NavItem>
            <StyledNavLink to={navbarVM.homePath} className={({ isActive }) => navbarVM.getNavLinkCategoryClass(isActive)}>Home</StyledNavLink>
          </selectedStyle.NavItem>
          <selectedStyle.NavItem>
            <StyledNavLink to={navbarVM.categoriesPath} className={({ isActive }) => navbarVM.getNavLinkCategoryClass(isActive)}>Categories</StyledNavLink>
          </selectedStyle.NavItem>
          <selectedStyle.NavItem>
            <StyledNavLink to={navbarVM.registerPath} className={({ isActive }) => navbarVM.getNavLinkCategoryClass(isActive)}>Register</StyledNavLink>
          </selectedStyle.NavItem>
        </selectedStyle.NavLinks>
      </MainMenu>
      <AnimateHeight duration={500} height={navbarVM.toggleMenuMobile ? 'auto' : 0} easing={'ease-in-out'}>
        <selectedStyle.MobileMenu isOpen={navbarVM.toggleMenuMobile} className="ulListeMobile">
          <selectedStyle.MobileNavItem>
            <StyledNavLink to={navbarVM.homePath} ismobile="true" className={({ isActive }) => navbarVM.getNavLinkCategoryClass(isActive)}>
              {React.createElement(navbarVM.icons.HomeIcon, { className: 'colorIconBlack' })}
              Home
            </StyledNavLink>
          </selectedStyle.MobileNavItem>
          <selectedStyle.MobileNavItem>
            <StyledNavLink to={navbarVM.categoriesPath} ismobile="true" className={({ isActive }) => navbarVM.getNavLinkCategoryClass(isActive)}>
              {React.createElement(navbarVM.icons.CategoryIcon, { className: 'colorIconBlack' })}
              Categories
            </StyledNavLink>
          </selectedStyle.MobileNavItem>
          {navbarVM.user ? (
            <>
              <selectedStyle.MobileNavItem>
                <StyledNavLink to={navbarVM.dashboardPath} ismobile="true" className={({ isActive }) => navbarVM.getNavLinkCategoryClass(isActive)}>
                  {React.createElement(navbarVM.icons.DashboardCustomizeIcon, { className: 'colorIconBlack' })}
                  Dashboard
                </StyledNavLink>
              </selectedStyle.MobileNavItem>
              <selectedStyle.MobileNavItem>
                <StyledNavLink to={navbarVM.profilePath} ismobile="true" className={({ isActive }) => navbarVM.getNavLinkCategoryClass(isActive)}>
                  {React.createElement(navbarVM.icons.PeopleAltIcon, { className: 'colorIconBlack' })}
                  Profile
                </StyledNavLink>
              </selectedStyle.MobileNavItem>
              <selectedStyle.MobileNavItem>
                <selectedStyle.NavButton onClick={authContext.logout} style={{ color: 'black' }}>
                  {React.createElement(navbarVM.icons.LogoutIcon, { className: 'colorIconBlack' })}
                  Logout
                </selectedStyle.NavButton>
              </selectedStyle.MobileNavItem>
            </>
          ) : (
            <>
              <selectedStyle.MobileNavItem>
                <StyledNavLink to={navbarVM.loginPath} ismobile="true" className={({ isActive }) => navbarVM.getNavLinkCategoryClass(isActive)}>
                  {React.createElement(navbarVM.icons.PersonIcon, { className: 'colorIconBlack' })}
                  Login
                </StyledNavLink>
              </selectedStyle.MobileNavItem>
              <selectedStyle.MobileNavItem>
                <StyledNavLink to={navbarVM.registerPath} ismobile="true" className={({ isActive }) => navbarVM.getNavLinkCategoryClass(isActive)}>
                  {React.createElement(navbarVM.icons.HowToRegIcon, { className: 'colorIconBlack' })}
                  Register
                </StyledNavLink>
              </selectedStyle.MobileNavItem>
            </>
          )}
        </selectedStyle.MobileMenu>
      </AnimateHeight>
    </selectedStyle.NavbarContainer>
  );
};

export default observer(Navbar_a);