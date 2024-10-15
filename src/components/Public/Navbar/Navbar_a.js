import styled from "styled-components";
import React, { useEffect, useContext } from "react";
import AnimateHeight from "react-animate-height";
import { NavLink } from 'react-router-dom';
import { observer } from "mobx-react-lite";

// const NavbarContainer = styled.header`
//   width: 100%;
// `;

const TopNavbar = styled.div`
  background: #262626;
  padding: 15px;
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

// const Logo = styled(NavLink)`
//   font-size: 1.5rem;
//   font-weight: bold;
//   color: white;
//   text-decoration: none;
// `;

// const NavLinks = styled.ul`
//   list-style-type: none;
//   background: white;
//   height: 100px;
//   display: flex;
//   justify-content: left;
//   align-items: center;
//   padding: 0;
//   margin: 0;
// `;

// const NavItem = styled(NavLink)`
//   color: white;
//   text-decoration: none;
//   padding: 0.5rem 1rem;
//   &:hover {
//     color: orange;
//   }
//   &.active {
//     color: orange;
//   }
// `;

// const NavButton = styled.button`
//   background: none;
//   border: none;
//   color: white;
//   cursor: pointer;
//   font-size: 1em;
// `;

// const MobileMenuButton = styled.div`
//   display: none;
//   @media screen and (max-width: 800px) {
//     display: inline-block;
//     color: white;
//     cursor: pointer;
//   }
// `;

// const MobileMenu = styled.ul`
//   list-style-type: none;
//   display: none;
//   @media screen and (max-width: 800px) {
//     display: ${props => props.isOpen ? 'block' : 'none'};
//     position: absolute;
//     top: 100px;
//     left: 0;
//     width: 90%;
//     background-color: white;
//     z-index: 10;
//     padding: 20px;
//     margin: 0 auto;
//     border-radius: 15px;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   }
// `;

// const MobileNavItem = styled(NavItem)`
//   @media screen and (max-width: 800px) {
//     width: 100%;
//     padding: 10px 0;
//     text-align: center;
//   }
// `;

// const CartIcon = styled.div`
//   cursor: pointer;
//   color: white;
// `;

// const CartCount = styled.p`
//   background-color: red;
//   color: white;
//   border-radius: 50%;
//   padding: 0 6px;
//   margin: 5px;
//   display: inline-block;
// `;

// const Select = styled.select`
//   background-color: #333;
//   color: white;
//   border: none;
//   padding: 0.5rem;
//   margin-right: 1rem;
// `;

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
  color: ${props => props.ismobile === "true" ? 'black' : 'white'};
  &:hover, &.active {
    color: orange;
  }
`;

const MainMenu = styled.div`
  background: white;
  height: 100px;
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

const Navbar_a = ({ ResumeCart, AuthContext, useDependencies,selectedStyle }) => {
  const authContext = useContext(AuthContext);
  const { navbarViewModel: navbarVM } = useDependencies();
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
      <TopNavbar>
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
      </TopNavbar>
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