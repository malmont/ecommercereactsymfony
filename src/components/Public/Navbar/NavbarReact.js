import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import AnimateHeight from 'react-animate-height';
import { NavLink } from 'react-router-dom';
import ResumeCart from "../Cart/ResumeTotal/ResumeCartView";

const NavbarReact = observer(({ viewModel, authContext }) => {
  useEffect(() => {
    const changeWidth = () => {
      viewModel.updateWidth();
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, [viewModel]);

  return (
    <Wrapper>
      <div className="row d-flex justify-content-center">
        <div className="divMenu">
          {viewModel.shouldShowShoppingCart() && (
            <div className='shopping-cart'>
              <div className="row mt-3">
                <div className="col">
                  <div className="row">
                    <div className="col">
                      {React.createElement(viewModel.icons.CategoryIcon, { className: 'colorIcon' })}
                      <NavLink to={viewModel.categoriesPath} className={({ isActive }) => viewModel.getNavLinkClass(isActive)}>Categories</NavLink>
                    </div>
                    <div className="col">
                      <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="currencyDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                          {viewModel.selectedCurrency}
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="currencyDropdown">
                          <li><button className="dropdown-item" onClick={() => viewModel.handleCurrencyChange('USD')}>USD</button></li>
                          <li><button className="dropdown-item" onClick={() => viewModel.handleCurrencyChange('EUR')}>EUR</button></li>
                          <li><button className="dropdown-item" onClick={() => viewModel.handleCurrencyChange('GBP')}>GBP</button></li>
                          <li><button className="dropdown-item" onClick={() => viewModel.handleCurrencyChange('CAD')}>CAD</button></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col">
                      <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle colorIcon" type="button" id="languageDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                          {viewModel.selectedLanguage}
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="languageDropdown">
                          <li><button className="dropdown-item" onClick={() => viewModel.handleLanguageChange('English')}>English</button></li>
                          <li><button className="dropdown-item" onClick={() => viewModel.handleLanguageChange('French')}>French</button></li>
                          <li><button className="dropdown-item" onClick={() => viewModel.handleLanguageChange('Spanish')}>Spanish</button></li>
                          <li><button className="dropdown-item" onClick={() => viewModel.handleLanguageChange('German')}>German</button></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row">
                    {viewModel.user ? (
                      <>
                        <div className="col">
                          {React.createElement(viewModel.icons.DashboardCustomizeIcon, { className: 'colorIcon' })}
                          <NavLink to={viewModel.dashboardPath} className={({ isActive }) => viewModel.getNavLinkClass(isActive)}>Dashboard</NavLink>
                        </div>
                        <div className="col">
                          {React.createElement(viewModel.icons.PeopleAltIcon, { className: 'colorIcon' })}
                          <NavLink to={viewModel.profilePath} className={({ isActive }) => viewModel.getNavLinkClass(isActive)}>Profile</NavLink>
                        </div>
                        <div className="col">
                          {React.createElement(viewModel.icons.LogoutIcon, { className: 'colorIcon' })}
                          <button onClick={authContext.logout} className="logoutButton">Logout</button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="col">
                          {React.createElement(viewModel.icons.PersonIcon, { className: 'colorIcon' })}
                          <NavLink to={viewModel.loginPath} className={({ isActive }) => viewModel.getNavLinkClass(isActive)}>Login</NavLink>
                        </div>
                        <div className="col">
                          {React.createElement(viewModel.icons.HowToRegIcon, { className: 'colorIcon' })}
                          <NavLink to={viewModel.registerPath} className={({ isActive }) => viewModel.getNavLinkClass(isActive)}>Register</NavLink>
                        </div>
                      </>
                    )}
                    <div className="section-sign-card col shopping-cart-container">
                      {React.createElement(viewModel.icons.ShoppingCartIcon, { className: 'colorIcon', onClick: viewModel.navigateToCart })}
                      <p>{viewModel.getTotalQuantity() || 0}</p>
                      <div className="cartVisible">
                        <ResumeCart className="cart" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Menu burger */}
          <div className="col">
            {viewModel.shouldShowMobileMenu() && (
              <ul className="ulListeMobile">
                <div className="col">
                  {React.createElement(viewModel.icons.HomeIcon, { className: 'colorIconBlack' })}
                  <NavLink to={viewModel.homePath} className={({ isActive }) => viewModel.getNavLinkCategoryClass(isActive)}>Home</NavLink>
                </div>
                <div className="col">
                  {React.createElement(viewModel.icons.CategoryIcon, { className: 'colorIconBlack' })}
                  <NavLink to={viewModel.categoriesPath} className={({ isActive }) => viewModel.getNavLinkCategoryClass(isActive)}>Categories</NavLink>
                </div>
                {viewModel.user ? (
                  <>
                    <div className="col">
                      {React.createElement(viewModel.icons.DashboardCustomizeIcon, { className: 'colorIconBlack' })}
                      <NavLink to={viewModel.dashboardPath} className={({ isActive }) => viewModel.getNavLinkCategoryClass(isActive)}>Dashboard</NavLink>
                    </div>
                    <div className="col">
                      {React.createElement(viewModel.icons.PeopleAltIcon, { className: 'colorIconBlack' })}
                      <NavLink to={viewModel.profilePath} className={({ isActive }) => viewModel.getNavLinkCategoryClass(isActive)}>Profile</NavLink>
                    </div>
                    <div className="col">
                      {React.createElement(viewModel.icons.LogoutIcon, { className: 'colorIconBlack' })}
                      <button onClick={authContext.logout} className="logoutButton">Logout</button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col">
                      {React.createElement(viewModel.icons.PersonIcon, { className: 'colorIconBlack' })}
                      <NavLink to={viewModel.loginPath} className={({ isActive }) => viewModel.getNavLinkCategoryClass(isActive)}>Login</NavLink>
                    </div>
                    <div className="col">
                      {React.createElement(viewModel.icons.HowToRegIcon, { className: 'colorIconBlack' })}
                      <NavLink to={viewModel.registerPath} className={({ isActive }) => viewModel.getNavLinkCategoryClass(isActive)}>Register</NavLink>
                    </div>
                  </>
                )}
              </ul>
            )}
          </div>

          <div className="section-sign-card-mobile mt-4">
            {React.createElement(viewModel.icons.ShoppingCartIcon, { className: 'colorIcon', onClick: viewModel.navigateToCart })}
            <p>{viewModel.getTotalQuantity() || 0}</p>
            <div className="cartVisible">
              <ResumeCart className="cart" />
            </div>
          </div>

          <AnimateHeight duration={500} height={viewModel.height}>
            <div className="MenuMobile activeLink" onClick={viewModel.toogleMenu}>
              <span className="spanMenu">Menu</span>
              {React.createElement(viewModel.icons.MenuIcon, { className: 'colorIcon' })}
            </div>
          </AnimateHeight>
        </div>

        <div className="ulMenu">
          <ul className="ulListe">
            <li><NavLink to={viewModel.homePath} className={({ isActive }) => viewModel.getNavLinkCategoryClass(isActive)}>Home</NavLink></li>
            <>
              <li><NavLink to={viewModel.categoriesPath} className={({ isActive }) => viewModel.getNavLinkCategoryClass(isActive)}>Categories</NavLink></li>
              <li><NavLink to={viewModel.registerPath} className={({ isActive }) => viewModel.getNavLinkCategoryClass(isActive)}>Register</NavLink></li>
            </>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
});

const Wrapper = styled.header`
  .separator {
    display: inline-block;
    border-left: 1px solid white;
    height: 150%;
    margin: 0 10px;
    vertical-align: middle; 
  }
  .MenuMobile {
    display: none;
  }
  .section-sign-card-mobile{
    display: none;
  }
  .burgerMenu {
  }
  .ulMenuMobile {
  }
  .ulListeMobile {
    list-style-type: none;
  }
  .ulListe {
    list-style-type: none;
    background: white;
    height: 100px;
    display: flex;
    justify-content: left;
    align-items: center;
  }
  .colorIconBlack { 
    margin-right: 5px;
    margin-bottom: 5px;
    color: black;
  }
  .align-cart-quantity{
    display: flex;
    cursor: pointer;
  }
  .divMenu {
    background: #262626;
    height: 120px;
    width: 100%;
  }
  .Menu {
    height: 40px;
    display: none;
  }
  .colorBorder {
    background-color: black;
  }
  .spanMenu {
    padding: 5px;
  }
  .ulMenu {
    width: 100%;
  }
  .activeLink {
    padding: 7px;
    text-decoration:none;
    color: orange;
  }
  .noActiveLink{
    text-decoration:none;
    color: white;
    &:hover {
      color: orange;
    }
  }
  .noActiveLinkCategory{
    text-decoration:none;
    color: black;
    &:hover {
      color: orange;
    }
  }
  ul {
    & li {
      width: 60px;
      margin-right: 20px;
      margin-left: 20px;
      margin-bottom: 10px;
      color: #e4ecec;
      cursor: pointer;
    }
  }
  .shopping-cart {
    padding: 15px;
    border-radius: 100px;
  }
  .shopping-cart-container {
    position: relative;
  }
  .cartVisible {
    visibility: hidden;
    position: absolute;
    top: 100%;
    right: 0;
    background-color: white;
    width: 300px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 10;
  }
  .shopping-cart-container:hover .cartVisible {
    visibility: visible;
  }
  .cart {
    background-color:white;
    position: absolute;
    height:550px;
    top: 50px;
    right: 80px;
    z-index: 1;
    overflow-y: scroll;
  }
  .colorIcon {
    margin-right: 5px;
    margin-bottom: 5px;
    color: white;
  }
  .shopping-cart:active {
    box-shadow: 0 4px 4px gray;
  }
  .section-sign-card{
    display: flex;
    align-items: center;
  }
  .section-sign-card > p{
    top: 0;
    right:  0;
    background-color: red;
    padding: 0px 6px;
    margin: 5px;
    color: white;
    border-radius: 50px;
  }
  @media screen and (max-width: 800px) {
    .burgerMenu {
      display: block;
    }
    .ulListe {
      display: none;
    }
    .shopping-cart {
      width:60px;
      left: 150%;
      z-index: 1;
    }
    .MenuMobile {
      display: inline-block;
    }
  }
  @media screen and (max-width: 800px) {
    .shopping-cart {
      left: 190%;
    }
    .section-sign-card-mobile{
      display: flex;
      align-items: center;
      justify-content: end;
    }
    .section-sign-card-mobile > p{
      top: 0;
      right: 0;
      background-color: red;
      padding: 0px 6px;
      margin: 5px;
      color: white;
      border-radius: 50px;
    }
  }
  .logoutButton {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 1em;
  }
  @media screen and (max-width: 800px) {
    .ulListeMobile {
      display: block;
      position: absolute;
      top: 100px;
      left: 0;
      width: 90%;
      background-color: white;
      z-index: 10;
      padding: 20px;
      margin: 0 auto;
      border-radius: 15px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    .Menu {
      position: relative;
      z-index: 20;
    }
    .ulListeMobile li {
      width: 100%;
      padding: 10px 0;
      text-align: center;
    }
  }
`;

export default NavbarReact;