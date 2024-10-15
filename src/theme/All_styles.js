import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { shimmer, gradientAnimation } from './animations'; 

export const styles = {
 style1 : {
  NavbarContainer: styled.nav`
    background: ${(props) => props.theme.colors.navbarBackground};
    padding: 0.75rem 2rem;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  `,

  NavbarContent: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  `,

  Logo: styled(NavLink)`
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.logoText};
    text-decoration: none;
  `,

  NavLinks: styled.ul`
    list-style-type: none;
    background: ${(props) => props.theme.colors.navLinksBackground};
    height: 100px;
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 0;
    margin: 0;
  `,

  NavItem: styled(NavLink)`
    color: ${(props) => props.theme.colors.navItemText};
    text-decoration: none;
    padding: 0.5rem 1rem;

    &:hover {
      color: ${(props) => props.theme.colors.navItemHover};
    }

    &.active {
      color: ${(props) => props.theme.colors.navItemActive};
    }
  `,

  NavButton: styled.button`
    background: none;
    border: none;
    color: ${(props) => props.theme.colors.navButtonText};
    cursor: pointer;
    font-size: 1em;
  `,

  MobileMenuButton: styled.div`
    display: none;
    @media screen and (max-width: 800px) {
      display: inline-block;
      color: ${(props) => props.theme.colors.mobileMenuButton};
      cursor: pointer;
    }
  `,

  MobileMenu: styled.ul`
    list-style-type: none;
    display: none;
    @media screen and (max-width: 800px) {
      display: ${(props) => (props.isOpen ? 'block' : 'none')};
      position: absolute;
      top: 100px;
      left: 0;
      width: 90%;
      background-color: ${(props) => props.theme.colors.mobileMenuBackground};
      z-index: 10;
      padding: 20px;
      margin: 0 auto;
      border-radius: 15px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  `,

  MobileNavItem: styled(NavLink)`
    @media screen and (max-width: 800px) {
      width: 100%;
      padding: 10px 0;
      text-align: center;
      color: ${(props) => props.theme.colors.mobileNavItemText};
    }
  `,

  CartIcon: styled.div`
    cursor: pointer;
    color: ${(props) => props.theme.colors.cartIcon};
  `,

  CartCount: styled.p`
    background-color: ${(props) => props.theme.colors.cartCountBackground};
    color: ${(props) => props.theme.colors.cartCountText};
    border-radius: 50%;
    padding: 0 6px;
    margin: 5px;
    display: inline-block;
  `,

  Select: styled.select`
    background-color: ${(props) => props.theme.colors.selectBackground};
    color: ${(props) => props.theme.colors.selectText};
    border: none;
    padding: 0.5rem;
    margin-right: 1rem;
  `
},

 style2 : {
  NavbarContainer: styled.nav`
    background-color: ${(props) => props.theme.colors.navbarBackground};
    color: ${(props) => props.theme.colors.textColor};
    padding: 1rem;
  `,

  NavbarContent: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  Logo: styled(NavLink)`
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.logoColor};
    text-decoration: none;
  `,

  NavLinks: styled.div`
    display: none;
    @media (min-width: 768px) {
      display: flex;
    }
  `,

  NavItem: styled(NavLink)`
    color: ${(props) => props.theme.colors.linkColor};
    text-decoration: none;
    padding: 0.5rem 1rem;

    &:hover {
      color: ${(props) => props.theme.colors.hoverLinkColor};
    }

    &.active {
      color: ${(props) => props.theme.colors.activeLinkColor};
    }
  `,

  NavButton: styled.button`
    background-color: ${(props) => props.theme.colors.buttonBackground};
    border: none;
    color: ${(props) => props.theme.colors.buttonText};
    cursor: pointer;
    font-size: 1rem;
    padding: 0.5rem 1rem;

    &:hover {
      color: ${(props) => props.theme.colors.buttonHover};
    }
  `,

  MobileMenuButton: styled.button`
    background-color: ${(props) => props.theme.colors.mobileMenuButtonBackground};
    border: none;
    color: ${(props) => props.theme.colors.mobileMenuButtonText};
    cursor: pointer;
    font-size: 1.5rem;
    display: none;

    @media (max-width: 767px) {
      display: block;
    }
  `,

  MobileMenu: styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: ${(props) => props.theme.colors.mobileMenuBackground};
    padding: 1rem;
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
  `,

  MobileNavItem: styled(NavLink)`
    display: block;
    padding: 0.5rem 0;
    color: ${(props) => props.theme.colors.mobileNavItemText};

    &:hover {
      color: ${(props) => props.theme.colors.mobileNavItemHover};
    }

    &.active {
      color: ${(props) => props.theme.colors.mobileNavItemActive};
    }
  `,

  CartIcon: styled.div`
    cursor: pointer;
    color: ${(props) => props.theme.colors.cartIconColor};
  `,

  CartCount: styled.span`
    position: absolute;
    top: -8px;
    right: -8px;
    background-color: ${(props) => props.theme.colors.cartCountBackground};
    color: ${(props) => props.theme.colors.cartCountText};
    border-radius: 50%;
    padding: 2px 6px;
    font-size: 0.8rem;
  `,

  Select: styled.select`
    background-color: ${(props) => props.theme.colors.selectBackground};
    color: ${(props) => props.theme.colors.selectText};
    border: none;
    padding: 0.5rem;
    margin-right: 1rem;
  `
},


 style3 :{
  NavbarContainer: styled.nav`
    background-color: ${(props) => props.theme.colors.navbarBackground};
    color: ${(props) => props.theme.colors.logoText};
    padding: 1rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  `,

  NavbarContent: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  Logo: styled(NavLink)`
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.logoText};
    text-decoration: none;
  `,

  NavLinks: styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      display: none;
    }
  `,

  NavItem: styled(NavLink)`
    color: ${(props) => props.theme.colors.navItemText};
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
      background-color: ${(props) => props.theme.colors.navItemText};
      transition: all 0.3s ease;
    }

    &:hover, &.active {
      color: ${(props) => props.theme.colors.navItemHover};
      &:after {
        width: 100%;
        left: 0;
      }
    }
  `,

  NavButton: styled.button`
    background-color: ${(props) => props.theme.colors.buttonBackground};
    border: none;
    color: ${(props) => props.theme.colors.navButtonText};
    cursor: pointer;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${(props) => props.theme.colors.buttonHover};
      color: ${(props) => props.theme.colors.navItemHover};
    }
  `,

  MobileMenuButton: styled.button`
    display: none;
    background: none;
    border: none;
    color: ${(props) => props.theme.colors.mobileMenuButton};
    font-size: 1.5rem;
    cursor: pointer;

    @media (max-width: 768px) {
      display: block;
    }
  `,

  MobileMenu: styled.div`
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    background-color: ${(props) => props.theme.colors.mobileMenuBackground};
    padding: 1rem;
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    z-index: 1000;
  `,

  MobileNavItem: styled(NavLink)`
    margin: 0.5rem 0;
    color: ${(props) => props.theme.colors.mobileNavItemText};
    text-decoration: none;
    padding: 0.5rem 1rem;
    transition: all 0.3s ease;

    &:hover, &.active {
      color: ${(props) => props.theme.colors.navItemHover};
    }
  `,

  CartIcon: styled.div`
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  `,

  CartCount: styled.span`
    position: absolute;
    top: -8px;
    right: -8px;
    background-color: ${(props) => props.theme.colors.cartCountBackground};
    color: ${(props) => props.theme.colors.cartCountText};
    border-radius: 50%;
    padding: 2px 6px;
    font-size: 0.8rem;
    transition: all 0.3s ease;
  `,

  Select: styled.select`
    background-color: ${(props) => props.theme.colors.selectBackground};
    color: ${(props) => props.theme.colors.selectText};
    border: none;
    padding: 0.5rem;
    margin-right: 1rem;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${(props) => props.theme.colors.buttonHover};
    }
  `
},
style4 : {
  NavbarContainer: styled.nav`
    background-color: ${(props) => props.theme.colors.navbarBackground};
    color: ${(props) => props.theme.colors.logoText};
    padding: 1rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  `,

  NavbarContent: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  Logo: styled(NavLink)`
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.logoText};
    text-decoration: none;
  `,

  NavLinks: styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      display: none;
    }
  `,

  NavItem: styled(NavLink)`
    color: ${(props) => props.theme.colors.navItemText};
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
      background-color: ${(props) => props.theme.colors.navItemText};
      transition: all 0.3s ease;
    }

    &:hover, &.active {
      color: ${(props) => props.theme.colors.navItemHover};
      &:after {
        width: 100%;
        left: 0;
      }
    }
  `,

  NavButton: styled.button`
    background-color: ${(props) => props.theme.colors.buttonBackground};
    border: none;
    color: ${(props) => props.theme.colors.navButtonText};
    cursor: pointer;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${(props) => props.theme.colors.buttonHover};
      color: ${(props) => props.theme.colors.navItemHover};
    }
  `,

  MobileMenuButton: styled.button`
    display: none;
    background: none;
    border: none;
    color: ${(props) => props.theme.colors.mobileMenuButton};
    font-size: 1.5rem;
    cursor: pointer;

    @media (max-width: 768px) {
      display: block;
    }
  `,

  MobileMenu: styled.div`
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    background-color: ${(props) => props.theme.colors.mobileMenuBackground};
    padding: 1rem;
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    z-index: 1000;
  `,

  MobileNavItem: styled(NavLink)`
    margin: 0.5rem 0;
    color: ${(props) => props.theme.colors.mobileNavItemText};
    text-decoration: none;
    padding: 0.5rem 1rem;
    transition: all 0.3s ease;

    &:hover, &.active {
      color: ${(props) => props.theme.colors.navItemHover};
    }
  `,

  CartIcon: styled.div`
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  `,

  CartCount: styled.span`
    position: absolute;
    top: -8px;
    right: -8px;
    background-color: ${(props) => props.theme.colors.cartCountBackground};
    color: ${(props) => props.theme.colors.cartCountText};
    border-radius: 50%;
    padding: 2px 6px;
    font-size: 0.8rem;
    transition: all 0.3s ease;
  `,

  Select: styled.select`
    background-color: ${(props) => props.theme.colors.selectBackground};
    color: ${(props) => props.theme.colors.selectText};
    border: none;
    padding: 0.5rem;
    margin-right: 1rem;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${(props) => props.theme.colors.buttonHover};
    }
  `
},


style5 : {
  NavbarContainer: styled.nav`
    background-color: ${(props) => props.theme.colors.navbarBackground};
    backdrop-filter: blur(10px);
    padding: 0.5rem 2rem;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  `,

  NavbarContent: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  `,

  Logo: styled(NavLink)`
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.logoText};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${(props) => props.theme.colors.hoverLink};
    }
  `,

  NavLinks: styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      display: none;
    }
  `,

  NavItem: styled(NavLink)`
    color: ${(props) => props.theme.colors.navItemText};
    text-decoration: none;
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
    border-radius: 20px;
    transition: all 0.3s ease;

    &:hover, &.active {
      background-color: ${(props) => props.theme.colors.buttonBackground};
      color: ${(props) => props.theme.colors.buttonText};
    }
  `,

  NavButton: styled.button`
    background-color: ${(props) => props.theme.colors.buttonBackground};
    color: ${(props) => props.theme.colors.buttonText};
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${(props) => props.theme.colors.buttonHover};
    }
  `,

  MobileMenuButton: styled.button`
    display: none;
    background: none;
    border: none;
    color: ${(props) => props.theme.colors.mobileMenuButton};
    font-size: 1.5rem;
    cursor: pointer;

    @media (max-width: 768px) {
      display: block;
    }
  `,

  MobileMenu: styled.div`
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: ${(props) => props.theme.colors.mobileMenuBackground};
    backdrop-filter: blur(10px);
    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
      display: ${(props) => (props.isOpen ? 'block' : 'none')};
    }
  `,

  MobileNavItem: styled(NavLink)`
    display: block;
    margin: 0.5rem 0;
    color: ${(props) => props.theme.colors.mobileNavItemText};
    text-decoration: none;
    padding: 0.5rem 1rem;
    transition: all 0.3s ease;

    &:hover, &.active {
      color: ${(props) => props.theme.colors.hoverLink};
    }
  `,

  CartIcon: styled.div`
    position: relative;
    cursor: pointer;
    margin-left: 1rem;
  `,

  CartCount: styled.span`
    position: absolute;
    top: -8px;
    right: -8px;
    background-color: ${(props) => props.theme.colors.cartCountBackground};
    color: ${(props) => props.theme.colors.cartCountText};
    border-radius: 50%;
    padding: 2px 6px;
    font-size: 0.75rem;
  `,

  Select: styled.select`
    background-color: ${(props) => props.theme.colors.selectBackground};
    color: ${(props) => props.theme.colors.selectText};
    border: 1px solid ${(props) => props.theme.colors.selectBorder};
    padding: 0.5rem;
    margin-left: 1rem;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover, &:focus {
      border-color: ${(props) => props.theme.colors.hoverLink};
      outline: none;
    }
  `
},
 style6 :{
  NavbarContainer: styled.nav`
    background: linear-gradient(45deg, ${(props) => props.theme.colors.gradientStart}, ${(props) => props.theme.colors.gradientMid}, ${(props) => props.theme.colors.gradientEnd}, ${(props) => props.theme.colors.gradientExtra});
    background-size: 300% 300%;
    animation: ${gradientAnimation} 15s ease infinite;
    padding: 0.75rem 2rem;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  `,

  NavbarContent: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  `,

  Logo: styled(NavLink)`
    font-size: 1.75rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.logoText};
    text-decoration: none;
    transition: all 0.3s ease;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);

    &:hover {
      transform: scale(1.05);
    }
  `,

  NavLinks: styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      display: none;
    }
  `,

  NavItem: styled(NavLink)`
    color: ${(props) => props.theme.colors.navItemText};
    text-decoration: none;
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
    border-radius: 25px;
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
      background: rgba(255, 255, 255, 0.2);
      transition: all 0.3s ease;
    }

    &:hover::before {
      left: 100%;
    }

    &:hover, &.active {
      background-color: ${(props) => props.theme.colors.navItemHoverBackground};
      transform: translateY(-3px);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }
  `,

  NavButton: styled.button`
    background-color: ${(props) => props.theme.colors.buttonBackground};
    color: ${(props) => props.theme.colors.buttonText};
    border: none;
    padding: 0.5rem 1.25rem;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      background-color: ${(props) => props.theme.colors.buttonHover};
    }
  `,

  MobileMenuButton: styled.button`
    display: none;
    background: none;
    border: none;
    color: ${(props) => props.theme.colors.mobileMenuButton};
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: rotate(90deg);
    }

    @media (max-width: 768px) {
      display: block;
    }
  `,

  MobileMenu: styled.div`
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: ${(props) => props.theme.colors.mobileMenuBackground};
    backdrop-filter: blur(10px);
    padding: 1rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    
    @media (max-width: 768px) {
      display: ${(props) => (props.isOpen ? 'block' : 'none')};
    }
  `,

  MobileNavItem: styled(NavLink)`
    display: block;
    margin: 0.75rem 0;
    color: ${(props) => props.theme.colors.mobileNavItemText};
    text-align: center;
  `,

  CartIcon: styled.div`
    position: relative;
    cursor: pointer;
    margin-left: 1rem;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  `,

  CartCount: styled.span`
    position: absolute;
    top: -8px;
    right: -8px;
    background-color: ${(props) => props.theme.colors.cartCountBackground};
    color: ${(props) => props.theme.colors.cartCountText};
    border-radius: 50%;
    padding: 2px 6px;
    font-size: 0.75rem;
    font-weight: bold;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  `,

  Select: styled.select`
    background-color: ${(props) => props.theme.colors.selectBackground};
    color: ${(props) => props.theme.colors.selectText};
    border: none;
    padding: 0.5rem 1rem;
    margin-left: 1rem;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url('data:image/svg+xml;utf8,<svg fill="%23ffffff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>');
    background-repeat: no-repeat;
    background-position: right 10px center;

    &:hover {
      background-color: ${(props) => props.theme.colors.selectHover};
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px ${(props) => props.theme.colors.selectFocusShadow};
    }
  `
},

 style7 : {
  NavbarContainer: styled.nav`
    background: ${(props) => props.theme.colors.navbarBackground};
    padding: 0.75rem 2rem;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  `,

  NavbarContent: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  `,

  Logo: styled(NavLink)`
    font-size: 1.75rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.logoText};
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
      color: ${(props) => props.theme.colors.logoHover};
    }
  `,

  NavLinks: styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      display: none;
    }
  `,

  NavItem: styled(NavLink)`
    color: ${(props) => props.theme.colors.navItemText};
    text-decoration: none;
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
    border-radius: 4px;
    transition: all 0.3s ease;

    &:hover, &.active {
      background-color: ${(props) => props.theme.colors.navItemHoverBackground};
      color: ${(props) => props.theme.colors.navItemHover};
    }
  `,

  NavButton: styled.button`
    background-color: ${(props) => props.theme.colors.buttonBackground};
    color: ${(props) => props.theme.colors.buttonText};
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
      background-color: ${(props) => props.theme.colors.buttonHover};
    }
  `,

  MobileMenuButton: styled.button`
    display: none;
    background: none;
    border: none;
    color: ${(props) => props.theme.colors.mobileMenuButton};
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      color: ${(props) => props.theme.colors.mobileMenuButtonHover};
    }

    @media (max-width: 768px) {
      display: block;
    }
  `,

  MobileMenu: styled.div`
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: ${(props) => props.theme.colors.mobileMenuBackground};
    padding: 1rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    
    @media (max-width: 768px) {
      display: ${(props) => (props.isOpen ? 'block' : 'none')};
    }
  `,

  MobileNavItem: styled(NavLink)`
    display: block;
    margin: 0.75rem 0;
    color: ${(props) => props.theme.colors.mobileNavItemText};
    text-align: center;
  `,

  CartIcon: styled.div`
    position: relative;
    cursor: pointer;
    margin-left: 1rem;
    transition: all 0.3s ease;

    &:hover {
      color: ${(props) => props.theme.colors.cartIconHover};
    }
  `,

  CartCount: styled.span`
    position: absolute;
    top: -8px;
    right: -8px;
    background-color: ${(props) => props.theme.colors.cartCountBackground};
    color: ${(props) => props.theme.colors.cartCountText};
    border-radius: 50%;
    padding: 2px 6px;
    font-size: 0.75rem;
    font-weight: bold;
  `,

  Select: styled.select`
    background-color: ${(props) => props.theme.colors.selectBackground};
    color: ${(props) => props.theme.colors.selectText};
    border: 1px solid ${(props) => props.theme.colors.selectBorder};
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
      background-color: ${(props) => props.theme.colors.selectHover};
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px ${(props) => props.theme.colors.selectFocus};
    }
  `
},

};