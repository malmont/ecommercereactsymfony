import styled from "styled-components";
import React, { useEffect, useContext } from "react";
import AnimateHeight from "react-animate-height";
import { NavLink } from 'react-router-dom';
import { observer } from "mobx-react-lite";
const Navbar = _ref => {
  let {
    ResumeCart,
    AuthContext,
    useDependencies
  } = _ref;
  const authContext = useContext(AuthContext);
  const {
    navbarViewModel: navbarVM
  } = useDependencies();
  useEffect(() => {
    const changeWidth = () => {
      navbarVM.updateWidth();
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, [navbarVM]);
  return /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement("div", {
    className: "row d-flex justify-content-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "divMenu"
  }, navbarVM.shouldShowShoppingCart() && /*#__PURE__*/React.createElement("div", {
    className: "shopping-cart"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row mt-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement(navbarVM.icons.CategoryIcon, {
    className: 'colorIcon'
  }), /*#__PURE__*/React.createElement(NavLink, {
    to: navbarVM.categoriesPath,
    className: _ref2 => {
      let {
        isActive
      } = _ref2;
      return navbarVM.getNavLinkClass(isActive);
    }
  }, "Categories")), /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dropdown"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary dropdown-toggle",
    type: "button",
    id: "currencyDropdown",
    "data-bs-toggle": "dropdown",
    "aria-expanded": "false"
  }, navbarVM.selectedCurrency), /*#__PURE__*/React.createElement("ul", {
    className: "dropdown-menu",
    "aria-labelledby": "currencyDropdown"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", {
    className: "dropdown-item",
    onClick: () => navbarVM.handleCurrencyChange('USD')
  }, "USD")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", {
    className: "dropdown-item",
    onClick: () => navbarVM.handleCurrencyChange('EUR')
  }, "EUR")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", {
    className: "dropdown-item",
    onClick: () => navbarVM.handleCurrencyChange('GBP')
  }, "GBP")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", {
    className: "dropdown-item",
    onClick: () => navbarVM.handleCurrencyChange('CAD')
  }, "CAD"))))), /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dropdown"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary dropdown-toggle colorIcon",
    type: "button",
    id: "languageDropdown",
    "data-bs-toggle": "dropdown",
    "aria-expanded": "false"
  }, navbarVM.selectedLanguage), /*#__PURE__*/React.createElement("ul", {
    className: "dropdown-menu",
    "aria-labelledby": "languageDropdown"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", {
    className: "dropdown-item",
    onClick: () => navbarVM.handleLanguageChange('English')
  }, "English")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", {
    className: "dropdown-item",
    onClick: () => navbarVM.handleLanguageChange('French')
  }, "French")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", {
    className: "dropdown-item",
    onClick: () => navbarVM.handleLanguageChange('Spanish')
  }, "Spanish")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", {
    className: "dropdown-item",
    onClick: () => navbarVM.handleLanguageChange('German')
  }, "German"))))))), /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, navbarVM.user ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement(navbarVM.icons.DashboardCustomizeIcon, {
    className: 'colorIcon'
  }), /*#__PURE__*/React.createElement(NavLink, {
    to: navbarVM.dashboardPath,
    className: _ref3 => {
      let {
        isActive
      } = _ref3;
      return navbarVM.getNavLinkClass(isActive);
    }
  }, "Dashboard")), /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement(navbarVM.icons.PeopleAltIcon, {
    className: 'colorIcon'
  }), /*#__PURE__*/React.createElement(NavLink, {
    to: navbarVM.profilePath,
    className: _ref4 => {
      let {
        isActive
      } = _ref4;
      return navbarVM.getNavLinkClass(isActive);
    }
  }, "Profile")), /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement(navbarVM.icons.LogoutIcon, {
    className: 'colorIcon'
  }), /*#__PURE__*/React.createElement("button", {
    onClick: authContext.logout,
    className: "logoutButton"
  }, "Logout"))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement(navbarVM.icons.PersonIcon, {
    className: 'colorIcon'
  }), /*#__PURE__*/React.createElement(NavLink, {
    to: navbarVM.loginPath,
    className: _ref5 => {
      let {
        isActive
      } = _ref5;
      return navbarVM.getNavLinkClass(isActive);
    }
  }, "Login")), /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement(navbarVM.icons.HowToRegIcon, {
    className: 'colorIcon'
  }), /*#__PURE__*/React.createElement(NavLink, {
    to: navbarVM.registerPath,
    className: _ref6 => {
      let {
        isActive
      } = _ref6;
      return navbarVM.getNavLinkClass(isActive);
    }
  }, "Register"))), /*#__PURE__*/React.createElement("div", {
    className: "section-sign-card col shopping-cart-container"
  }, /*#__PURE__*/React.createElement(navbarVM.icons.ShoppingCartIcon, {
    className: 'colorIcon',
    onClick: navbarVM.navigateToCart
  }), /*#__PURE__*/React.createElement("p", null, navbarVM.getTotalQuantity() || 0), /*#__PURE__*/React.createElement("div", {
    className: "cartVisible"
  }, /*#__PURE__*/React.createElement(ResumeCart, {
    className: "cart"
  }))))))), /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, navbarVM.shouldShowMobileMenu() && /*#__PURE__*/React.createElement("ul", {
    className: "ulListeMobile"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement(navbarVM.icons.HomeIcon, {
    className: 'colorIconBlack'
  }), /*#__PURE__*/React.createElement(NavLink, {
    to: navbarVM.homePath,
    className: _ref7 => {
      let {
        isActive
      } = _ref7;
      return navbarVM.getNavLinkCategoryClass(isActive);
    }
  }, "Home")), /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement(navbarVM.icons.CategoryIcon, {
    className: 'colorIconBlack'
  }), /*#__PURE__*/React.createElement(NavLink, {
    to: navbarVM.categoriesPath,
    className: _ref8 => {
      let {
        isActive
      } = _ref8;
      return navbarVM.getNavLinkCategoryClass(isActive);
    }
  }, "Categories")), navbarVM.user ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement(navbarVM.icons.DashboardCustomizeIcon, {
    className: 'colorIconBlack'
  }), /*#__PURE__*/React.createElement(NavLink, {
    to: navbarVM.dashboardPath,
    className: _ref9 => {
      let {
        isActive
      } = _ref9;
      return navbarVM.getNavLinkCategoryClass(isActive);
    }
  }, "Dashboard")), /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement(navbarVM.icons.PeopleAltIcon, {
    className: 'colorIconBlack'
  }), /*#__PURE__*/React.createElement(NavLink, {
    to: navbarVM.profilePath,
    className: _ref10 => {
      let {
        isActive
      } = _ref10;
      return navbarVM.getNavLinkCategoryClass(isActive);
    }
  }, "Profile")), /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement(navbarVM.icons.LogoutIcon, {
    className: 'colorIconBlack'
  }), /*#__PURE__*/React.createElement("button", {
    onClick: authContext.logout,
    className: "logoutButton"
  }, "Logout"))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement(navbarVM.icons.PersonIcon, {
    className: 'colorIconBlack'
  }), /*#__PURE__*/React.createElement(NavLink, {
    to: navbarVM.loginPath,
    className: _ref11 => {
      let {
        isActive
      } = _ref11;
      return navbarVM.getNavLinkCategoryClass(isActive);
    }
  }, "Login")), /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement(navbarVM.icons.HowToRegIcon, {
    className: 'colorIconBlack'
  }), /*#__PURE__*/React.createElement(NavLink, {
    to: navbarVM.registerPath,
    className: _ref12 => {
      let {
        isActive
      } = _ref12;
      return navbarVM.getNavLinkCategoryClass(isActive);
    }
  }, "Register"))))), /*#__PURE__*/React.createElement("div", {
    className: "section-sign-card-mobile mt-4"
  }, /*#__PURE__*/React.createElement(navbarVM.icons.ShoppingCartIcon, {
    className: 'colorIcon',
    onClick: navbarVM.navigateToCart
  }), /*#__PURE__*/React.createElement("p", null, navbarVM.getTotalQuantity() || 0), /*#__PURE__*/React.createElement("div", {
    className: "cartVisible"
  }, /*#__PURE__*/React.createElement(ResumeCart, {
    className: "cart"
  }))), /*#__PURE__*/React.createElement(AnimateHeight, {
    duration: 500,
    height: navbarVM.height
  }, /*#__PURE__*/React.createElement("div", {
    className: "MenuMobile activeLink",
    onClick: navbarVM.toogleMenu
  }, /*#__PURE__*/React.createElement("span", {
    className: "spanMenu"
  }, "Menu"), /*#__PURE__*/React.createElement(navbarVM.icons.MenuIcon, {
    className: 'colorIcon'
  })))), /*#__PURE__*/React.createElement("div", {
    className: "ulMenu"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "ulListe"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(NavLink, {
    to: navbarVM.homePath,
    className: _ref13 => {
      let {
        isActive
      } = _ref13;
      return navbarVM.getNavLinkCategoryClass(isActive);
    }
  }, "Home")), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(NavLink, {
    to: navbarVM.categoriesPath,
    className: _ref14 => {
      let {
        isActive
      } = _ref14;
      return navbarVM.getNavLinkCategoryClass(isActive);
    }
  }, "Categories")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(NavLink, {
    to: navbarVM.registerPath,
    className: _ref15 => {
      let {
        isActive
      } = _ref15;
      return navbarVM.getNavLinkCategoryClass(isActive);
    }
  }, "Register")))))));
};
const Wrapper = styled.header.withConfig({
  displayName: "Wrapper",
  componentId: "sc-sgm7jh-0"
})([".separator{display:inline-block;border-left:1px solid white;height:150%;margin:0 10px;vertical-align:middle;}.MenuMobile{display:none;}.section-sign-card-mobile{display:none;}.burgerMenu{}.ulMenuMobile{}.ulListeMobile{list-style-type:none;}.ulListe{list-style-type:none;background:white;height:100px;display:flex;justify-content:left;align-items:center;}.colorIconBlack{margin-right:5px;margin-bottom:5px;color:black;}.align-cart-quantity{display:flex;cursor:pointer;}.divMenu{background:#262626;height:120px;width:100%;}.Menu{height:40px;display:none;}.colorBorder{background-color:black;}.spanMenu{padding:5px;}.ulMenu{width:100%;}.activeLink{padding:7px;text-decoration:none;color:orange;}.noActiveLink{text-decoration:none;color:white;&:hover{color:orange;}}.noActiveLinkCategory{text-decoration:none;color:black;&:hover{color:orange;}}ul{& li{width:60px;margin-right:20px;margin-left:20px;margin-bottom:10px;color:#e4ecec;cursor:pointer;}}.shopping-cart{padding:15px;border-radius:100px;}.shopping-cart-container{position:relative;}.cartVisible{visibility:hidden;position:absolute;top:100%;right:0;background-color:white;width:300px;box-shadow:0 4px 8px rgba(0,0,0,0.1);z-index:10;}.shopping-cart-container:hover .cartVisible{visibility:visible;}.cart{background-color:white;position:absolute;height:550px;top:50px;right:80px;z-index:1;overflow-y:scroll;}.colorIcon{margin-right:5px;margin-bottom:5px;color:white;}.shopping-cart:active{box-shadow:0 4px 4px gray;}.section-sign-card{display:flex;align-items:center;}.section-sign-card > p{top:0;right:0;background-color:red;padding:0px 6px;margin:5px;color:white;border-radius:50px;}@media screen and (max-width:800px){.burgerMenu{display:block;}.ulListe{display:none;}.shopping-cart{width:60px;left:150%;z-index:1;}.MenuMobile{display:inline-block;}}@media screen and (max-width:800px){.shopping-cart{left:190%;}.section-sign-card-mobile{display:flex;align-items:center;justify-content:end;}.section-sign-card-mobile > p{top:0;right:0;background-color:red;padding:0px 6px;margin:5px;color:white;border-radius:50px;}}.logoutButton{background:none;border:none;color:white;cursor:pointer;font-size:1em;}@media screen and (max-width:800px){.ulListeMobile{display:block;position:absolute;top:100px;left:0;width:90%;background-color:white;z-index:10;padding:20px;margin:0 auto;border-radius:15px;box-shadow:0 4px 8px rgba(0,0,0,0.1);}.Menu{position:relative;z-index:20;}.ulListeMobile li{width:100%;padding:10px 0;text-align:center;}}"]);
export default observer(Navbar);