import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { shimmer, gradientAnimation } from './animations';

export const styles = {
  style1: {
    navbarHeight: '90px',
    TopNavbar: styled.div`
      background: ${(props) => props.theme.colors.TopNavbarBackground};
      padding: 15px;
    `,

    NavbarContainer: styled.nav`
      background: ${(props) => props.theme.colors.navbarContainerBackground};
      padding: 0.75rem 2rem;
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 1000;
      transition: all 0.3s ease;
     
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
      height: 40px;
      display: flex;
      justify-content: left;
      align-items: center;
      padding: 0;
      margin: 0;
  
      @media screen and (max-width: 800px) {
        display: none;
      }
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
        top: 60px;  // Ajuster la hauteur si nécessaire
        left: 0;
        right: 0;
        width: auto;  // Correction ici
        background-color: ${(props) => props.theme.colors.mobileMenuBackground};
        z-index: 10;
        padding: 20px;
        margin: 0 auto;
        border-radius: 15px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
    `,

    MobileNavItem: styled(NavLink)`
      display: block;
      width: 100%;
      padding: 10px 0;
      text-align: center;
      color: ${(props) => props.theme.colors.mobileNavItemText};
      text-decoration: none;
  
      &:hover {
        color: ${(props) => props.theme.colors.navItemHover};
      }
  
      &.active {
        color: ${(props) => props.theme.colors.navItemActive};
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
    ,
    CardContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${(props) => props.theme.colors.cardBackground};
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    height: 520px;
    width: 260px;
    margin-bottom: 5px;
  `,

  CardProperty: styled.div`
    background-color: ${(props) => props.theme.colors.cardPropertyBackground};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,

  CardImage: styled.img`
    width: 100%;
    height: 370px;
  `,

  CardBody: styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    color: ${(props) => props.theme.colors.cardBodyText};
  `,
  DiscountBadge: styled.span`
  background-color: ${(props) => props.theme.colors.discountBadgeBackground};
  color: ${(props) => props.theme.colors.discountBadgeText};
  border-radius: 10%;
  padding: 5px 10px;
  font-size: 12px;
  margin-left: 10px;
  display: inline-block;
`,

Countdown: styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  color: ${(props) => props.theme.colors.countdownText};
  text-align: center;
  padding: 5px 0;
  font-size: 14px;
`,
ColorText: styled.p`
color: ${(props) => props.theme.colors.colorText || 'white'};
`,
Time: styled.div`
  font-weight: bold;
  font-size: 16px;`,

  FeatureWrapper: styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.featureBackground };
`,

FeatureCard: styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 10px;
  background-color: ${(props) => props.theme.colors.cardBackground };
  border: 1px solid ${(props) => props.theme.colors.border };
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: ${(props) => props.theme.colors.cardText };
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`,
StandardCardExploreCard: styled.div`
  max-width: 100%;
  padding: 0px 5px;
  min-height: 400px;
`,


CardExplore: styled.div`
background-color: ${(props) => props.theme.colors.cardBackground };
color: ${(props) => props.theme.colors.cardText };
border: 1px solid ${(props) => props.theme.colors.border };
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
border-radius: 10px;
transition: transform 0.3s ease-in-out;
height: 450px;
&:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.6);
}
`,

RowExplore: styled.div`
display: flex;
gap: 15px;
margin: 4px;
`,

ColumnExplore: styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,

CardBodyExplore: styled.div`
padding: 15px;
text-align: center;
`,
DifferentCardExploreCard: styled.div`
  max-width: 100%;
  padding: 5px 1px;
  min-height: 400px;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20pxrgba(0, 0, 0, 0.6);
  }
`,
ContentExplore: styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: ${(props) =>
  props.theme.colors.differentCardBackground };
color: ${(props) => props.theme.colors.differentCardText };
border: 1px solid ${(props) =>
  props.theme.colors.differentCardBorder };
`,

DetailsExplore: styled.div`
padding: 20px;
text-align: center;
`,

TitleExplore: styled.h3`
font-size: 1.5rem;
margin-bottom: 10px;
`,

DescriptionExplore: styled.p`
font-size: 1rem;
margin-bottom: 15px;
`,

LinkExplore: styled.a`
text-decoration: none;
color: ${(props) => props.theme.colors.linkText };
font-weight: bold;

&:hover {
  color: ${(props) => props.theme.colors.linkHoverText};
}
`,
ImageWrapperExploreDifferent: styled.div`
  width: 300px;
  height: 300px;
  overflow: hidden;
  border-radius: 10px 10px 0 0;
`,

ImageWrapperExploreStandart: styled.div`
  width: 300px;
  height: 500px;
  overflow: hidden;
  border-radius: 10px 10px 0 0;
`,


  
CardImageExploreStandart: styled.img`
  width: 300px;
  height: 400px;
  overflow: hidden;
  border-radius: 10px 10px 0 0;
`,

CardImageExploreDifferent: styled.img`
  width: 300px;
  height: 400px;
  overflow: hidden;
  border-radius: 10px 10px 0 0;
`,

 EmailCardContainer : styled.div`
  max-width: 500px; 
  margin: 20px auto; 
  background-color: ${(props) => props.theme.colors.cardBackground || '#ffffff'};
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`
  
  },


  style2: {
    navbarHeight: '30px',

    TopNavbar: styled.div`
    background: ${(props) => props.theme.colors.TopNavbarBackground};
    padding: 15px;
  `,

    NavbarContainer: styled.nav`
    background: ${(props) => props.theme.colors.navbarContainerBackground};
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
     background: ${(props) => props.theme.colors.navLinksBackground};
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
    border-radius: 10%;
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

    @media screen and (max-width: 800px) {
        display: inline-block;
        color: ${(props) => props.theme.colors.mobileMenuButton};
        cursor: pointer;
      }
  `,

    MobileMenu: styled.div`
  list-style-type: none;
  display: none;
  @media screen and (max-width: 800px) {
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
    position: absolute;
     width: 200px;
    top: 60px;
    left: 0;
    right: 0;
    z-index: 10;
    background-color: ${(props) => props.theme.colors.mobileMenuBackground};
    padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
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
  `,
  CardContainer: styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.cardBackground};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  height: 490px;
  width: 250px;
  margin-bottom: 10px;
`,

CardProperty: styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`,

CardImage: styled.img`
  height: 330px;
  width: 210px;
  cursor: pointer;
  padding-top: 10px;
  border-radius: 30%;
`,

CardBody: styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: ${(props) => props.theme.colors.cardBodyText};
`,

DiscountBadge: styled.span`
  background-color: ${(props) => props.theme.colors.discountBadgeBackground};
  color: ${(props) => props.theme.colors.discountBadgeText};
  border-radius: 10%;
  padding: 5px 10px;
  font-size: 12px;
  margin-left: 10px;
  display: inline-block;
`,

Countdown: styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  color: ${(props) => props.theme.colors.countdownText};
  text-align: center;
  padding: 5px 0;
  font-size: 14px;
`,
ColorText: styled.p`
color: ${(props) => props.theme.colors.colorText || 'white'};
`,

Time: styled.div`
  font-weight: bold;
  font-size: 16px;
`,FeatureWrapper: styled.div`
display: flex;
flex-wrap: wrap; /* Permet aux cartes de s'adapter à plusieurs lignes */
justify-content: space-around; /* Espacement uniforme entre les cartes */
align-items: center;
padding: 30px;
background-color: ${(props) => props.theme.colors.featureBackground || "#f4f4f4"};
border-radius: 15px; /* Ajout d'une bordure arrondie */
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Ombre subtile */
`,

  FeatureCard: styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px;
  margin: 15px;
  background-color: ${(props) => props.theme.colors.cardBackground || "#fff"};
  border: 2px solid ${(props) => props.theme.colors.border || "#ccc"};
  border-radius: 12px; /* Bordures arrondies */
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15); /* Effet de profondeur */
  color: ${(props) => props.theme.colors.cardText || "#444"};
  font-weight: bold;
  text-align: center; /* Centrage du texte */
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-8px); /* Animation de déplacement vers le haut */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Ombre accentuée */
    background-color: ${(props) => props.theme.colors.hoverCardBackground || "#f0f0f0"}; /* Changement de couleur au survol */
  }

  svg {
    margin-bottom: 10px; /* Espacement entre l'icône et le texte */
    color: ${(props) => props.theme.colors.iconColor || "#888"}; /* Couleur des icônes */
    transition: color 0.3s ease;

    &:hover {
      color: ${(props) => props.theme.colors.iconHoverColor || "#555"}; /* Couleur des icônes au survol */
    }
  }
  `,
  StandardCardExploreCard: styled.div`
  max-width: 100%;
  padding: 10px;
  min-height: 500px; /* Hauteur minimale pour les cartes */
  background-color: ${(props) => props.theme.colors.cardBackground};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`,

CardExplore: styled.div`
  background-color: ${(props) => props.theme.colors.cardBackground};
  color: ${(props) => props.theme.colors.cardText};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 12px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.18);
  }
`,

RowExplore: styled.div`
  display: flex;
  gap: 10px;
  margin: 10px 0;
  flex-wrap: wrap;
`,

ColumnExplore: styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,

CardBodyExplore: styled.div`
  padding: 15px;
  text-align: left;
  background-color: ${(props) => props.theme.colors.cardBodyBackground};
  border-top: 1px solid ${(props) => props.theme.colors.border};
`,

DifferentCardExploreCard: styled.div`
  max-width: 100%;
  padding: 15px;
  background-color: ${(props) => props.theme.colors.differentCardBackground};
  border: 1px solid ${(props) => props.theme.colors.differentCardBorder};
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.18);
  }
`,

ContentExplore: styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${(props) => props.theme.colors.contentBackground};
  color: ${(props) => props.theme.colors.differentCardText};
  border-radius: 10px;
  padding: 15px;
`,

ImageWrapperExploreDifferent: styled.div`
  width: 350px;
  height: 305px; 
  overflow: hidden;
  border-radius: 10px 10px 0 0;
  background-color: ${(props) => props.theme.colors.imageWrapperBackground || "#f0f0f0"};
`,

ImageWrapperExploreStandart: styled.div`
  width: 350px;
  height: 360px; 
  overflow: hidden;
  border-radius: 10px 10px 0 0;
  background-color: ${(props) => props.theme.colors.imageWrapperBackground || "#f0f0f0"};
`,

CardImageExploreStandart: styled.img`
   object-position: center; 
  background-color: ${(props) => props.theme.colors.imageBackground};
`,

CardImageExploreDifferent: styled.img`
  object-position: center; 
  background-color: ${(props) => props.theme.colors.imageBackground};
`,

DetailsExplore: styled.div`
  padding: 15px;
  text-align: left;
`,

TitleExplore: styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.titleText};
  margin-bottom: 10px;
`,

DescriptionExplore: styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.descriptionText};
  margin-bottom: 15px;
  max-height: 60px; /* Limite la hauteur de la description */
  overflow: hidden;
  text-overflow: ellipsis;
`,

LinkExplore: styled.a`
  font-size: 0.9rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.linkText || "#0073e6"};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.linkHoverText || "#005bb5"};
    text-decoration: underline;
  }
`,

EmailCardContainer:styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  max-width: 700px;
  margin: 20px auto;
  background-color: ${(props) => props.theme.colors.cardBackground || "#f9f9f9"};
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.colors.border || "#ddd"};
`

  },


  style3: {
    navbarHeight: '50px',

    TopNavbar: styled.div`
    background: ${(props) => props.theme.colors.TopNavbarBackground};
    padding: 15px;
  `,

    NavbarContainer: styled.nav`
    background: ${(props) => props.theme.colors.navbarContainerBackground};
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
 background: ${(props) => props.theme.colors.navLinksBackground};
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
    color: ${(props) => props.theme.colors.cartIconColor};
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
  `,
  
  CardContainer: styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.cardBackground};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  height: 650px;
  width: 250px;
  margin-bottom: 10px;
  
`,

CardProperty: styled.div`
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.colors.cardPropertyBackground || 'black'};
  height: 650px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`,

CardImage: styled.img`
  width: 100%;
  height: 450px;
`,

CardBody: styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  color: ${(props) => props.theme.colors.cardBodyText || 'white'};
`,

ColorText: styled.p`
  color: ${(props) => props.theme.colors.colorText || 'white'};
`,
  DiscountBadge: styled.span`
  background-color: ${(props) => props.theme.colors.discountBadgeBackground};
  color: ${(props) => props.theme.colors.discountBadgeText};
  border-radius: 10%;
  padding: 5px 10px;
  font-size: 12px;
  margin-left: 10px;
  display: inline-block;
`,

Countdown: styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  color: ${(props) => props.theme.colors.countdownText};
  text-align: center;
  padding: 5px 0;
  font-size: 14px;
`,

Time: styled.div`
  font-weight: bold;
  font-size: 16px;
`,
  FeatureWrapper: styled.div`
    display: flex;
    flex-wrap: wrap; /* Permet un alignement flexible des cartes */
    justify-content: space-evenly; /* Espacement uniforme entre les cartes */
    align-items: center;
    padding: 30px;
    background-color: ${(props) => props.theme.colors.featureBackground || "#f0f0f0"};
    border-radius: 20px; /* Coins arrondis pour un aspect élégant */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Ombre subtile */
  `,

  FeatureCard: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 25px;
    margin: 15px;
    background-color: ${(props) => props.theme.colors.cardBackground || "#ffffff"};
    border: 2px dashed ${(props) => props.theme.colors.border || "#bbb"}; /* Bordure en pointillés pour un look distinct */
    border-radius: 15px; /* Coins arrondis */
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15); /* Effet de profondeur */
    color: ${(props) => props.theme.colors.cardText || "#444"};
    font-weight: bold;
    text-align: center; /* Centrage du texte */
    transition: transform 0.4s ease, box-shadow 0.4s ease;

    &:hover {
      transform: translateY(-10px) rotate(3deg); /* Effet de bascule au survol */
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25); /* Ombre accentuée */
      background-color: ${(props) => props.theme.colors.hoverCardBackground || "#f7f7f7"}; /* Couleur d'arrière-plan au survol */
    }

    svg {
      margin-bottom: 10px; /* Espacement entre l'icône et le texte */
      color: ${(props) => props.theme.colors.iconColor || "#888"}; /* Couleur des icônes */
      transition: color 0.3s ease, transform 0.3s ease;

      &:hover {
        color: ${(props) => props.theme.colors.iconHoverColor || "#333"}; /* Couleur des icônes au survol */
        transform: scale(1.2); /* Agrandissement des icônes au survol */
      }
    }
  `,
  StandardCardExploreCard: styled.div`
  max-width: 100%;
  padding: 10px;
  min-height: 500px; /* Hauteur minimale pour les cartes */
  background-color: ${(props) => props.theme.colors.cardBackground};
  border: 2px dashed ${(props) => props.theme.colors.border};
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`,

CardExplore: styled.div`
  background-color: ${(props) => props.theme.colors.cardBackground};
  color: ${(props) => props.theme.colors.cardText};
  border: 2px solid ${(props) => props.theme.colors.border};
  border-radius: 15px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background-color: ${(props) => props.theme.colors.hoverCardBackground};
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.18);
  }
`,

RowExplore: styled.div`
  display: flex;
  gap: 15px;
  margin: 10px 0;
  flex-wrap: wrap; /* S'adapte pour éviter les débordements */
`,

ColumnExplore: styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,

CardBodyExplore: styled.div`
  padding: 20px;
  text-align: left;
  background-color: ${(props) => props.theme.colors.cardBodyBackground};
  border-top: 1px solid ${(props) => props.theme.colors.border};
`,

DifferentCardExploreCard: styled.div`
  max-width: 100%;
  padding: 15px;
  background-color: ${(props) => props.theme.colors.differentCardBackground};
  border: 2px solid ${(props) => props.theme.colors.differentCardBorder};
  border-radius: 15px;
  box-shadow: 0 5px 10px rgba(255, 0, 0, 0.2);
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(255, 0, 0, 0.3);
  }
`,

ContentExplore: styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centré pour le style3 */
  background-color: ${(props) => props.theme.colors.contentBackground};
  color: ${(props) => props.theme.colors.differentCardText};
  border-radius: 15px;
  padding: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.hoverContentBackground};
  }
`,


ImageWrapperExploreDifferent: styled.div`
  width: 100%;
  height: 275px; 
  overflow: hidden;
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.imageWrapperBackground || "#e0e0e0"};
  display: flex;
  justify-content: center;
  align-items: center;
`,

ImageWrapperExploreStandart: styled.div`
width: 100%;
  height: 300px; 
  overflow: hidden;
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.imageWrapperBackground || "#e0e0e0"};
  display: flex;
  justify-content: center;
  align-items: center;
`,


CardImageExploreStandart: styled.img`
width: auto;
  height: 100%;
  object-fit: cover; 
  background-color: ${(props) => props.theme.colors.imageBackground};
`,

CardImageExploreDifferent: styled.img`
 width: auto;
  height: 100%;
  object-fit: cover; 
  background-color: ${(props) => props.theme.colors.imageBackground};
`,

DetailsExplore: styled.div`
  padding: 20px;
  text-align: center;
`,

TitleExplore: styled.h3`
  font-size: 1.6rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.titleText};
  margin-bottom: 12px;
`,

DescriptionExplore: styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${(props) => props.theme.colors.descriptionText};
  margin-bottom: 15px;
  max-height: 80px; /* Limite la hauteur de la description */
  overflow: hidden;
  text-overflow: ellipsis;
`,

LinkExplore: styled.a`
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.linkText};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.linkHoverText};
    text-decoration: underline;
  }
`,
EmailCardContainer : styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 700px;
  margin: 20px auto;
  background-color: ${(props) => props.theme.colors.cardBackground || "#f9f9f9"};
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.colors.border || "#ddd"};
  padding: 20px;
`


  },

  style4: {
    navbarHeight: '50px',
    TopNavbar: styled.div`
    background: ${(props) => props.theme.colors.TopNavbarBackground};
    padding: 15px;
  `,

    NavbarContainer: styled.nav`
     background: ${(props) => props.theme.colors.navbarContainerBackground};
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
 background: ${(props) => props.theme.colors.navLinksBackground};
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
    color: ${(props) => props.theme.colors.cartIconColor};
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
  `,
  CardContainer: styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 656px;
  width: 280px;
  border-radius: 8px;
  overflow: hidden;
  margin: 10px;
`,

CardProperty: styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  background-color: ${(props) => props.theme.colors.cardPropertyBackground };
  height: 650px;
  width: 290px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  padding: 5px;
`,

CardImage: styled.img`
  width: 90%;
  height: 450px;
  object-fit: cover;
`,

CardBody: styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px;
  color: ${(props) => props.theme.colors.cardBodyText };
  background-color: ${(props) => props.theme.colors.cardBodyBackground };
`,

ColorText: styled.p`
  color: ${(props) => props.theme.colors.colorText };
  font-size: 0.95rem;
  margin: 0 0 5px;
`,

DiscountBadge: styled.span`
  background-color: ${(props) => props.theme.colors.discountBadgeBackground };
  color: ${(props) => props.theme.colors.discountBadgeText };
  border-radius: 12px;
  padding: 6px 12px;
  font-size: 0.85rem;
  font-weight: bold;
  margin-left: 5px;
  display: inline-block;
`,

Countdown: styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.countdownBackground || 'rgba(255, 255, 255, 0.85)'};
  color: ${(props) => props.theme.colors.countdownText };
  text-align: center;
  padding: 8px 0;
  font-size: 14px;
  font-weight: bold;
`,

Time: styled.div`
  font-weight: bold;
  font-size: 18px;
  color: ${(props) => props.theme.colors.timeText };
`,
FeatureWrapper: styled.div`
  display: flex;
  flex-wrap: wrap; /* S'adapte aux écrans plus petits */
  justify-content: space-around; /* Espacement uniforme entre les cartes */
  align-items: center;
  padding: 25px;
  background-color: ${(props) => props.theme.colors.featureBackground || "#e8e8e8"};
  border-radius: 15px; /* Coins légèrement arrondis */
  border: 2px solid ${(props) => props.theme.colors.border || "#ccc"}; /* Bordure visible */
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15); /* Effet d'ombre léger */
`,

FeatureCard: styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px;
  margin: 15px;
  background-color: ${(props) => props.theme.colors.cardBackground || "#fefefe"};
  border: 1px solid ${(props) => props.theme.colors.border || "#bbb"}; /* Bordure discrète */
  border-radius: 12px; /* Coins arrondis */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); /* Ombre plus marquée */
  color: ${(props) => props.theme.colors.cardText || "#222"};
  font-size: 1rem; /* Taille du texte */
  font-weight: bold;
  text-align: center; /* Centrage du texte */
  transition: all 0.4s ease;

  &:hover {
    transform: scale(1.05); /* Légère mise en avant au survol */
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3); /* Ombre plus marquée */
    background-color: ${(props) => props.theme.colors.hoverCardBackground || "#fafafa"}; /* Couleur au survol */
  }

  svg {
    margin-bottom: 8px; /* Espacement entre l'icône et le texte */
    color: ${(props) => props.theme.colors.iconColor || "#555"}; /* Couleur des icônes */
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
      color: ${(props) => props.theme.colors.iconHoverColor || "#111"}; /* Couleur au survol */
      transform: rotate(10deg); /* Légère rotation des icônes */
    }
  }
`,
StandardCardExploreCard: styled.div`
  max-width: 100%;
  padding: 15px;
  min-height: 520px; /* Hauteur minimale */
  background-color: ${(props) => props.theme.colors.cardBackground};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 10px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
  }
`,

CardExplore: styled.div`
  background-color: ${(props) => props.theme.colors.cardBackground};
  color: ${(props) => props.theme.colors.cardText};
  border: 2px solid ${(props) => props.theme.colors.border};
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: scale(1.04);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    background-color: ${(props) => props.theme.colors.hoverCardBackground};
  }
`,

RowExplore: styled.div`
  display: flex;
  gap: 20px;
  margin: 15px 0;
  flex-wrap: wrap;
`,

ColumnExplore: styled.div`
  flex: 1;
  min-width: 320px; /* Adaptation responsive */
`,

CardBodyExplore: styled.div`
  padding: 20px;
  text-align: left;
  background-color: ${(props) => props.theme.colors.cardBodyBackground};
  border-top: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 0 0 10px 10px;
`,

DifferentCardExploreCard: styled.div`
  max-width: 100%;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.differentCardBackground};
  border: 2px dashed ${(props) => props.theme.colors.differentCardBorder};
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(255, 0, 0, 0.25);
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 12px 24px rgba(255, 0, 0, 0.35);
  }
`,

ContentExplore: styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.contentBackground};
  color: ${(props) => props.theme.colors.differentCardText};
  border-radius: 15px;
  padding: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.hoverContentBackground};
  }
`,



ImageWrapperExploreDifferent: styled.div`
 width: 100%;
  height: 275px;
  overflow: hidden;
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.imageWrapperBackground || "#e8e8e8"};
  display: flex;
  justify-content: center;
  align-items: center;
`,

ImageWrapperExploreStandart: styled.div`
 width: 100%;
  height: 350px;
  overflow: hidden;
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.imageWrapperBackground || "#e8e8e8"};
  display: flex;
  justify-content: center;
  align-items: center;
`,


CardImageExploreStandart: styled.img`
  width: auto;
  height: 100%;
  object-fit: cover;
  background-color: ${(props) => props.theme.colors.imageBackground};
`,

CardImageExploreDifferent: styled.img`
  width: auto;
  height: 100%;
  object-fit: cover;
  background-color: ${(props) => props.theme.colors.imageBackground};
`,


DetailsExplore: styled.div`
  padding: 20px;
  text-align: left;
`,

TitleExplore: styled.h3`
  font-size: 1.6rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.titleText};
  margin-bottom: 15px;
`,

DescriptionExplore: styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${(props) => props.theme.colors.descriptionText};
  margin-bottom: 20px;
  max-height: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
`,

LinkExplore: styled.a`
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.linkText};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.linkHoverText};
    text-decoration: underline;
  }
`,

EmailCardContainer : styled.div`
    display: flex;
  align-items: center;
  max-width: 800px;
  margin: 20px auto;
  background-color: ${(props) => props.theme.colors.cardBackground || "#f9f9f9"};
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.colors.border || "#ddd"};
`
  },


  style5: {
    navbarHeight: '90px',
    TopNavbar: styled.div`
    background: ${(props) => props.theme.colors.TopNavbarBackground};
    padding: 15px;
  `,

    NavbarContainer: styled.nav`
     background: ${(props) => props.theme.colors.navbarContainerBackground};
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
 background: ${(props) => props.theme.colors.navLinksBackground};
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
    width: 200px;
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
  `,
  CardContainer: styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 660px;
  width: 265px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.colors.cardBackground };
  transition: transform 0.3s, box-shadow 0.3s;
 margin-bottom: 5px;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
`,

CardProperty: styled.div`
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
  background-color: ${(props) => props.theme.colors.cardPropertyBackground };
  height: 660px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 12px;
  padding: 15px;
`,

CardImage: styled.img`
  width: 100%;
  height: 420px;
  object-fit: cover;
  border-bottom: 4px solid ${(props) => props.theme.colors.cardBorder };
`,

CardBody: styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  color: ${(props) => props.theme.colors.cardBodyText };
  background-color: ${(props) => props.theme.colors.cardBodyBackground };
`,

ColorText: styled.p`
  color: ${(props) => props.theme.colors.colorText };
  font-size: 0.9rem;
  font-weight: 500;
  margin: 0 0 8px;
`,

DiscountBadge: styled.span`
  background-color: ${(props) => props.theme.colors.discountBadgeBackground };
  color: ${(props) => props.theme.colors.discountBadgeText };
  border-radius: 16px;
  padding: 8px 14px;
  font-size: 0.8rem;
  font-weight: bold;
  margin-left: 8px;
  display: inline-block;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,

Countdown: styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.countdownBackground };
  color: ${(props) => props.theme.colors.countdownText };
  text-align: center;
  padding: 10px 0;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 0 0 12px 12px;
`,

Time: styled.div`
  font-weight: bold;
  font-size: 20px;
  color: ${(props) => props.theme.colors.timeText };
`,
FeatureWrapper: styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background-color: ${(props) => props.theme.colors.featureBackground || "#e8e8e8"};
  border-radius: 15px;
  border: 1px solid ${(props) => props.theme.colors.border || "#ccc"};
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  max-width: 1600px;
`,

  FeatureCard: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 25px;
    margin: 15px;
    width: 250px; 
    height: 200px; 
    background-color: ${(props) => props.theme.colors.cardBackground || "#fff"};
    border: 2px solid ${(props) => props.theme.colors.cardBorder || "#ddd"};
    border-radius: 12px;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
    color: ${(props) => props.theme.colors.cardText || "#222"};
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    transition: transform 0.4s, box-shadow 0.4s;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      background-color: ${(props) => props.theme.colors.hoverCardBackground || "#fafafa"};
    }

    svg {
      margin-bottom: 10px;
      color: ${(props) => props.theme.colors.iconColor || "#444"};
      transition: color 0.3s ease, transform 0.3s ease;

      &:hover {
        color: ${(props) => props.theme.colors.iconHoverColor || "#111"};
        transform: scale(1.1);
      }
    }
  `,
  StandardCardExploreCard: styled.div`
  max-width: 100%;
  padding: 15px;
  min-height: 520px; /* Hauteur minimale */
  background-color: ${(props) => props.theme.colors.cardBackground};
  border: 1px solid ${(props) => props.theme.colors.cardBorder};
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
  }
`,

CardExplore: styled.div`
  background-color: ${(props) => props.theme.colors.cardBackground};
  color: ${(props) => props.theme.colors.cardText};
  border: 2px solid ${(props) => props.theme.colors.cardBorder};
  border-radius: 15px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: scale(1.04);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    background-color: ${(props) => props.theme.colors.hoverCardBackground};
  }
`,

RowExplore: styled.div`
  display: flex;
  gap: 20px;
  margin: 20px 0;
  flex-wrap: wrap;
`,

ColumnExplore: styled.div`
  flex: 1;
 display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,

CardBodyExplore: styled.div`
  padding: 20px;
  text-align: left;
  background-color: ${(props) => props.theme.colors.cardBodyBackground};
  border-top: 1px solid ${(props) => props.theme.colors.cardBorder};
  border-radius: 0 0 12px 12px;
`,

DifferentCardExploreCard: styled.div`
  max-width: 100%;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.differentCardBackground};
  border: 2px dashed ${(props) => props.theme.colors.differentCardBorder};
  border-radius: 20px;
  box-shadow: 0 6px 12px rgba(255, 0, 0, 0.25);
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 12px 24px rgba(255, 0, 0, 0.35);
  }
`,

ContentExplore: styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.contentBackground};
  color: ${(props) => props.theme.colors.differentCardText};
  border-radius: 15px;
  padding: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.hoverContentBackground};
  }
`,


ImageWrapperExploreDifferent: styled.div`
   width: 100%;
  height: 275px;
  overflow: hidden;
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.imageWrapperBackground || "#e8e8e8"};
  display: flex;
  justify-content: center;
  align-items: center;
`,

ImageWrapperExploreStandart: styled.div`
   width: 100%;
  height: 380px;
  overflow: hidden;
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.imageWrapperBackground || "#e8e8e8"};
  display: flex;
  justify-content: center;
  align-items: center;
`,

CardImageExploreStandart: styled.img`
  width: auto;
  height: 100%;
  object-fit: cover;
  background-color: ${(props) => props.theme.colors.imageBackground};
`,

CardImageExploreDifferent: styled.img`
  width: auto;
  height: 100%;
  object-fit: cover;
  background-color: ${(props) => props.theme.colors.imageBackground};
`,

DetailsExplore: styled.div`
  padding: 20px;
  text-align: left;
`,

TitleExplore: styled.h3`
  font-size: 1.6rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.titleText};
  margin-bottom: 15px;
`,

DescriptionExplore: styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${(props) => props.theme.colors.descriptionText};
  margin-bottom: 20px;
  max-height: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
`,

LinkExplore: styled.a`
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.linkText};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.linkHoverText};
    text-decoration: underline;
  }
`,
EmailCardContainer : styled.div`
   max-width: 600px;
  margin: 20px auto;
  background-color: ${(props) => props.theme.colors.cardBackground || "#f9f9f9"};
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 30px;
  border: 1px solid ${(props) => props.theme.colors.border || "#ddd"};
`

  },


  style6: {
    navbarHeight: '110px',

    TopNavbar: styled.div`
    background: ${(props) => props.theme.colors.TopNavbarBackground};
    padding: 15px;
  `,

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
    padding: 0.3rem 0.2rem;
    display: flex;
    align-items: center;
    background: ${(props) => props.theme.colors.navLinksBackground};
    @media (max-width: 768px) {
      display: none;
    }
  `,

    NavItem: styled(NavLink)`
    color: ${(props) => props.theme.colors.navItemText};
    text-decoration: none;
    padding: 0.2rem 0.5rem;
    margin-top: 0.5rem;
    margin-left: 0.5rem;
    border-radius: 5px;
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
    border-radius: 15px;
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
 color: ${(props) => props.theme.colors.cartIconColor};
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
      box-shadow: 0 0 0 2px ${(props) => props.theme.colors.selectFocusShadow};
    }
  `,
  CardContainer: styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 550px;
  width: 260px;
  border-radius: 16px;
  background-color: ${(props) => props.theme.colors.cardBackground || '#ffffff'};
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
    margin-bottom: 10px;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
`,

CardProperty: styled.div`
  background-color: ${(props) => props.theme.colors.cardPropertyBackground || '#f5f5f5'};
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`,

CardImage: styled.img`
  width: 100%;
  height: 370px;
  object-fit: cover;
  border-bottom: 2px solid ${(props) => props.theme.colors.cardBorder || '#eaeaea'};
`,

CardBody: styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  color: ${(props) => props.theme.colors.cardBodyText || '#333333'};
  background-color: ${(props) => props.theme.colors.cardBodyBackground || '#fafafa'};
  text-align: center;
`,

ColorText: styled.p`
  color: ${(props) => props.theme.colors.colorText || '#555555'};
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 10px;
`,

DiscountBadge: styled.span`
  background-color: ${(props) => props.theme.colors.discountBadgeBackground || '#ff5733'};
  color: ${(props) => props.theme.colors.discountBadgeText || '#ffffff'};
  border-radius: 50px;
  padding: 8px 16px;
  font-size: 0.85rem;
  font-weight: bold;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
`,

Countdown: styled.div`
  width: 90%;
  background: ${(props) => props.theme.colors.countdownBackground || '#000000'};
  color: ${(props) => props.theme.colors.countdownText || '#ffffff'};
  text-align: center;
  padding: 12px;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 8px;
  margin: 15px auto;
`,

Time: styled.div`
  font-weight: bold;
  font-size: 18px;
  color: ${(props) => props.theme.colors.timeText || '#ff0000'};
`,
FeatureWrapper: styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.featureGradientStart || "#e3ffe7"},
    ${(props) => props.theme.colors.featureGradientEnd || "#d9e7ff"}
  );
  border-radius: 20px;
  margin: 20px auto;
  max-width: 1800px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
`,

FeatureCard: styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  margin: 15px;
  width: 280px;
  height: 220px;
  background-color: ${(props) => props.theme.colors.cardBackground || "#ffffff"};
  border: 2px solid ${(props) => props.theme.colors.cardBorder || "#cccccc"};
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  color: ${(props) => props.theme.colors.cardText || "#333333"};
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
  transition: all 0.4s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    background: ${(props) => props.theme.colors.hoverCardBackground || "#f3f3f3"};
  }

  svg {
    margin-bottom: 10px;
    color: ${(props) => props.theme.colors.iconColor || "#666666"};
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
      color: ${(props) => props.theme.colors.iconHoverColor || "#222222"};
      transform: rotate(10deg);
    }
  }
`,
StandardCardExploreCard: styled.div`
  max-width: 100%;
  padding: 25px;
  min-height: 600px; /* Hauteur plus grande pour style6 */
  background: linear-gradient(135deg, ${(props) => props.theme.colors.gradientStart}, ${(props) => props.theme.colors.gradientEnd});
  border: 3px solid ${(props) => props.theme.colors.cardBorder};
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transition: transform 0.5s ease, box-shadow 0.5s ease;

  &:hover {
    transform: translateY(-15px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }
`,

CardExplore: styled.div`
  background: ${(props) => props.theme.colors.cardBackground};
  color: ${(props) => props.theme.colors.cardText};
  border: 2px solid ${(props) => props.theme.colors.cardBorder};
  border-radius: 25px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: scale(1.1) rotate(3deg);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    background: linear-gradient(135deg, ${(props) => props.theme.colors.gradientStart}, ${(props) => props.theme.colors.gradientEnd});
  }
`,

RowExplore: styled.div`
  display: flex;
  gap: 20px;
  margin: 30px 0;
  flex-wrap: wrap;
  justify-content: space-evenly; /* Centrage plus uniforme */
`,

ColumnExplore: styled.div`
  flex: 1;
  min-width: 340px; /* Adaptation responsive */
`,

CardBodyExplore: styled.div`
  padding: 30px;
  text-align: center;
  background: ${(props) => props.theme.colors.cardBodyBackground};
  border-top: 1px solid ${(props) => props.theme.colors.cardBorder};
  border-radius: 0 0 25px 25px;
`,

DifferentCardExploreCard: styled.div`
  max-width: 100%;
  padding: 30px;
  background: ${(props) => props.theme.colors.differentCardBackground};
  border: 3px dotted ${(props) => props.theme.colors.differentCardBorder};
  border-radius: 25px;
  box-shadow: 0 10px 20px rgba(255, 0, 0, 0.25);
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: translateY(-20px) rotate(-3deg);
    box-shadow: 0 14px 28px rgba(255, 0, 0, 0.35);
  }
`,

ContentExplore: styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.colors.contentBackground};
  color: ${(props) => props.theme.colors.differentCardText};
  border-radius: 25px;
  padding: 25px;
  transition: background-color 0.4s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.hoverContentBackground};
  }
`,


ImageWrapperExploreDifferent: styled.div`
  width: 100%;
  height: 450px; /* Plus grande pour s'adapter à des images détaillées */
  overflow: hidden;
  border-radius: 25px 25px 0 0;
  background: ${(props) => props.theme.colors.imageWrapperBackground || "#e8e8e8"};
  display: flex;
  justify-content: center;
  align-items: center;
`,

ImageWrapperExploreStandart: styled.div`
width: 100%;
  height: 450px; /* Plus grande pour s'adapter à des images détaillées */
  overflow: hidden;
  border-radius: 25px 25px 0 0;
  background: ${(props) => props.theme.colors.imageWrapperBackground || "#e8e8e8"};
  display: flex;
  justify-content: center;
  align-items: center;
`,

CardImageExploreStandart: styled.img`
  width: auto;
  height: 100%;
  object-fit: cover;
    border-bottom: 3px solid ${(props) => props.theme.colors.cardBorder || '#d4d4d4'};
`,

CardImageExploreDifferent: styled.img`
  width: auto;
  height: 100%;
  object-fit: cover;
   border-bottom: 3px solid ${(props) => props.theme.colors.cardBorder || '#d4d4d4'};
`,

DetailsExplore: styled.div`
  padding: 25px;
  text-align: center;
`,

TitleExplore: styled.h3`
  font-size: 2rem; /* Plus grand pour le style6 */
  font-weight: bold;
  color: ${(props) => props.theme.colors.titleText};
  margin-bottom: 20px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`,

DescriptionExplore: styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: ${(props) => props.theme.colors.descriptionText};
  margin-bottom: 20px;
  max-height: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
`,

LinkExplore: styled.a`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.linkText};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.linkHoverText};
    text-decoration: underline;
    transform: scale(1.1);
  }
`,
EmailCardContainer : styled.div`
   max-width: 600px;
  margin: 20px auto;
  background-color: ${(props) => props.theme.colors.cardBackground || "#f9f9f9"};
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 30px;
  border: 1px solid ${(props) => props.theme.colors.border || "#ddd"};
`
  },

  style7: {
    navbarHeight: '110px',

    TopNavbar: styled.div`
    background: ${(props) => props.theme.colors.TopNavbarBackground};
    padding: 15px;
  `,

    NavbarContainer: styled.nav`
     background: ${(props) => props.theme.colors.navbarContainerBackground};
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
    background: ${(props) => props.theme.colors.navLinksBackground};
    @media (max-width: 768px) {
      display: none;
    }
  `,

    NavItem: styled(NavLink)`
    color: ${(props) => props.theme.colors.navItemText};
    text-decoration: none;
    padding: 0.2rem 0.2rem;
    margin-top: 0.5rem;
    margin-left: 0.5rem;
    border-radius: 4px;
    transition: all 0.3s ease;

    &:hover, &.active {
      background-color: ${(props) => props.theme.colors.navItemHoverBackground};
      color: ${(props) => props.theme.colors.navItemText};
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
    color: ${(props) => props.theme.colors.cartIconColor};
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
  `,CardContainer: styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 620px;
  width: 265px;
  border-radius: 20px;
  background: linear-gradient(145deg, ${(props) => props.theme.colors.cardBackground}, ${(props) => props.theme.colors.cardAccent });
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.2), -4px -4px 12px rgba(255, 255, 255, 0.7);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  margin-bottom: 10px;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3), -6px -6px 16px rgba(255, 255, 255, 0.8);
  }
`,

CardProperty: styled.div`
  background: ${(props) => props.theme.colors.cardPropertyBackground };
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  border-radius: 20px;
  
`,

CardImage: styled.img`
  width: 100%;
  height: 380px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;
  margin-bottom: 10px;
  &:hover {
    transform: scale(1.05);
  }
`,

CardBody: styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: ${(props) => props.theme.colors.cardBodyText};
  background: ${(props) => props.theme.colors.cardBodyBackground };
  backdrop-filter: blur(10px);
  text-align: center;
  border-radius: 16px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`,

ColorText: styled.p`
  color: ${(props) => props.theme.colors.colorText };
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 15px;
`,

DiscountBadge: styled.span`
  background: linear-gradient(45deg, ${(props) => props.theme.colors.discountBadgeBackground || '#ff5f6d'}, ${(props) => props.theme.colors.discountBadgeAccent || '#ffc371'});
  color: ${(props) => props.theme.colors.discountBadgeText || '#ffffff'};
  border-radius: 20px;
  padding: 10px 16px;
  font-size: 0.85rem;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-top: 10px;
`,

Countdown: styled.div`
  width: 90%;
  background: ${(props) => props.theme.colors.countdownBackground };
  color: ${(props) => props.theme.colors.countdownText };
  text-align: center;
  padding: 15px;
  font-size: 1.1rem;
  font-weight: 700;
  border-radius: 12px;
  margin: 15px auto;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
`,

Time: styled.div`
  font-weight: bold;
  font-size: 22px;
  color: ${(props) => props.theme.colors.timeText || '#ff0000'};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`,
FeatureWrapper: styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 40px;
  background: linear-gradient(
    120deg,
    ${(props) => props.theme.colors.featureGradientStart || "#e0f7fa"},
    ${(props) => props.theme.colors.featureGradientEnd || "#80deea"}
  );
  border-radius: 20px;
  margin: 20px auto;
  max-width: 1800px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8px);
`,

FeatureCard: styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  margin: 15px;
  width: 300px;
  height: 240px;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.cardGradientStart || "#ffffff"},
    ${(props) => props.theme.colors.cardGradientEnd || "#eceff1"}
  );
  border: 1px solid ${(props) => props.theme.colors.cardBorder || "#d1d9e6"};
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  color: ${(props) => props.theme.colors.cardText || "#333333"};
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
    background: linear-gradient(
      135deg,
      ${(props) => props.theme.colors.cardHoverGradientStart || "#f5f5f5"},
      ${(props) => props.theme.colors.cardHoverGradientEnd || "#e0e0e0"}
    );
  }

  svg {
    margin-bottom: 10px;
    font-size: 2.5rem;
    color: ${(props) => props.theme.colors.iconColor || "#4fc3f7"};
    transition: transform 0.3s ease, color 0.3s ease;

    &:hover {
      transform: rotate(10deg);
      color: ${(props) => props.theme.colors.iconHoverColor || "#0288d1"};
    }
  }
`,
StandardCardExploreCard: styled.div`
  max-width: 100%;
  padding: 25px;
  min-height: 600px; /* Hauteur plus grande pour style6 */
  background: linear-gradient(135deg, ${(props) => props.theme.colors.gradientStart}, ${(props) => props.theme.colors.gradientEnd});
  border: 3px solid ${(props) => props.theme.colors.cardBorder};
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transition: transform 0.5s ease, box-shadow 0.5s ease;

  &:hover {
    transform: translateY(-15px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }
`,

CardExplore: styled.div`
  background: ${(props) => props.theme.colors.cardBackground};
  color: ${(props) => props.theme.colors.cardText};
  border: 2px solid ${(props) => props.theme.colors.cardBorder};
  border-radius: 25px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: scale(1.1) rotate(3deg);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    background: linear-gradient(135deg, ${(props) => props.theme.colors.gradientStart}, ${(props) => props.theme.colors.gradientEnd});
  }
`,

RowExplore: styled.div`
  display: flex;
  gap: 20px;
  margin: 30px 0;
  flex-wrap: wrap;
  justify-content: space-evenly; /* Centrage plus uniforme */
`,

ColumnExplore: styled.div`
  flex: 1;
  min-width: 340px; /* Adaptation responsive */
`,

CardBodyExplore: styled.div`
  padding: 30px;
  text-align: center;
  background: ${(props) => props.theme.colors.cardBodyBackground};
  border-top: 1px solid ${(props) => props.theme.colors.cardBorder};
  border-radius: 0 0 25px 25px;
`,

DifferentCardExploreCard: styled.div`
  max-width: 100%;
  padding: 30px;
  background: ${(props) => props.theme.colors.differentCardBackground};
  border: 3px dotted ${(props) => props.theme.colors.differentCardBorder};
  border-radius: 25px;
  box-shadow: 0 10px 20px 
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: translateY(-20px) rotate(-3deg);
    box-shadow: 0 14px 28px  rgba(128, 222, 234, 1) 
  }
`,

ContentExplore: styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.colors.contentBackground};
  color: ${(props) => props.theme.colors.differentCardText};
  border-radius: 25px;
  padding: 25px;
  transition: background-color 0.4s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.hoverContentBackground};
  }
`,


ImageWrapperExploreDifferent: styled.div`
  width: 100%;
  height: 300px; 
  overflow: hidden;
  border-radius: 25px 25px 0 0;
  background: ${(props) => props.theme.colors.imageWrapperBackground || "#e8e8e8"};
  display: flex;
  justify-content: center;
  align-items: center;
`,

ImageWrapperExploreStandart: styled.div`
width: 100%;
  height: 300px; 
  overflow: hidden;
  border-radius: 25px 25px 0 0;
  background: ${(props) => props.theme.colors.imageWrapperBackground || "#e8e8e8"};
  display: flex;
  justify-content: center;
  align-items: center;
`,

CardImageExploreStandart: styled.img`
  width: auto;
  height: 100%;
  object-fit: cover;
    border-bottom: 3px solid ${(props) => props.theme.colors.cardBorder || '#d4d4d4'};
`,

CardImageExploreDifferent: styled.img`
  width: auto;
  height: 100%;
  object-fit: cover;
   border-bottom: 3px solid ${(props) => props.theme.colors.cardBorder || '#d4d4d4'};
`,

DetailsExplore: styled.div`
  padding: 25px;
  text-align: center;
`,

TitleExplore: styled.h3`
  font-size: 2rem; /* Plus grand pour le style6 */
  font-weight: bold;
  color: ${(props) => props.theme.colors.titleText};
  margin-bottom: 20px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`,

DescriptionExplore: styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: ${(props) => props.theme.colors.descriptionText};
  margin-bottom: 20px;
  max-height: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
`,

LinkExplore: styled.a`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.linkText};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.linkHoverText};
    text-decoration: underline;
    transform: scale(1.1);
  }
`,
EmailCardContainer : styled.div`
    display: flex;
  align-items: center;
  max-width: 700px;
  margin: 20px auto;
  background-color: ${(props) => props.theme.colors.cardBackground || "#f9f9f9"};
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border: 1px solid ${(props) => props.theme.colors.border || "#ddd"};
  overflow: hidden;
`
  },

  style8: {
    navbarHeight: '60px',
  
    TopNavbar: styled.div`
      background: ${(props) => props.theme.colors.TopNavbarBackground};
      padding: 15px;
    `,
  
    NavbarContainer: styled.nav`
      background: linear-gradient(135deg, ${(props) => props.theme.colors.gradientStart}, ${(props) => props.theme.colors.gradientEnd});
      padding: 1rem 2rem;
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
      font-size: 1.6rem;
      font-weight: bold;
      color: ${(props) => props.theme.colors.logoText};
      text-decoration: none;
      transition: color 0.3s ease;
      &:hover {
        color: ${(props) => props.theme.colors.logoHover};
      }
    `,
  
    NavLinks: styled.div`
      display: flex;
      align-items: center;
      background: ${(props) => props.theme.colors.navLinksBackground};
      @media (max-width: 768px) {
        display: none;
      }
    `,
  
    NavItem: styled(NavLink)`
      color: ${(props) => props.theme.colors.navItemText};
      text-decoration: none;
      padding: 0.5rem 1rem;
      margin: 0 0.5rem;
      border-radius: 10px;
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
      padding: 0.5rem 1rem;
      border-radius: 10px;
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
      transition: all 0.3s ease;
  
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
      padding: 1rem;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  
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
        color: ${(props) => props.theme.colors.mobileNavItemHover};
      }
    `,
  
    CartIcon: styled.div`
      position: relative;
      cursor: pointer;
      margin-left: 1rem;
      transition: all 0.3s ease;
      color: ${(props) => props.theme.colors.cartIconColor};
  
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
    `,
  
    Select: styled.select`
      background-color: ${(props) => props.theme.colors.selectBackground};
      color: ${(props) => props.theme.colors.selectText};
      border: none;
      padding: 0.5rem;
      margin-right: 1rem;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.3s ease;
  
      &:hover {
        background-color: ${(props) => props.theme.colors.selectHover};
      }
  
      &:focus {
        outline: none;
        box-shadow: 0 0 0 2px ${(props) => props.theme.colors.selectFocus};
      }
    `,
    CardContainer: styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 600px;
  width: 260px;
  border-radius: 20px;
  background: ${(props) => props.theme.colors.cardBackground || '#ffffff'};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
    margin-bottom: 10px;
  &:hover {
    border-color: ${(props) => props.theme.colors.cardHoverAccent || '#ffd700'};
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    transform: translateY(-8px);
  }
`,
  
  CardProperty: styled.div`
    background: ${(props) => props.theme.colors.cardPropertyBackground || '#111'};
    border: 2px solid ${(props) => props.theme.colors.cardAccent || '#d4af37'};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    border-radius: 24px;
  `,
  
  CardImage: styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-bottom: 2px solid ${(props) => props.theme.colors.cardAccent || '#d4af37'};
`,

CardBody: styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  color: ${(props) => props.theme.colors.cardBodyText || '#000000'};
  text-align: center;
`,

DiscountBadge: styled.span`
  background: ${(props) => props.theme.colors.discountBadgeBackground || '#d4af37'};
  color: ${(props) => props.theme.colors.discountBadgeText || '#ffffff'};
  border-radius: 20px;
  padding: 10px 16px;
  font-size: 0.85rem;
  font-weight: bold;
  margin-top: 15px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
`,

  
  ColorText: styled.p`
    color: ${(props) => props.theme.colors.colorText || '#0ff'};
    font-size: 1rem;
    margin: 10px 0;
  `,
  Countdown: styled.div`
    width: 90%;
    background: ${(props) => props.theme.colors.countdownBackground || '#000'};
    color: ${(props) => props.theme.colors.countdownText || '#0ff'};
    text-align: center;
    padding: 12px;
    font-size: 1rem;
    font-weight: 700;
    border-radius: 12px;
  `,
  
  Time: styled.div`
    font-weight: bold;
    font-size: 22px;
    color: ${(props) => props.theme.colors.timeText || '#ff0000'};
  `,
  FeatureWrapper: styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 40px;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.featureGradientStart || "#ffffff"},
    ${(props) => props.theme.colors.featureGradientEnd || "#e0e0e0"}
  );
  border-radius: 20px;
  margin: 20px auto;
  max-width: 1700px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
`,

FeatureCard: styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 15px;
  width: 280px;
  height: 120px;
  background: ${(props) => props.theme.colors.cardBackground || "#fff"};
  border: 2px solid ${(props) => props.theme.colors.cardAccent || "#d4af37"}; /* Bordure dorée */
  border-radius: 15px;

  color: ${(props) => props.theme.colors.cardText || "#333"};
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 0 30px rgba(255, 215, 0, 0.7);
    background: linear-gradient(
      135deg,
      ${(props) => props.theme.colors.cardHoverBackgroundStart || "#f5f5f5"},
      ${(props) => props.theme.colors.cardHoverBackgroundEnd || "#fafafa"}
    );
  }

  svg {
    margin-bottom: 15px;
    font-size: 2.5rem;
    color: ${(props) => props.theme.colors.iconColor || "#ffc107"};
    transition: transform 0.3s ease, color 0.3s ease;

    &:hover {
      transform: scale(1.2);
      color: ${(props) => props.theme.colors.iconHoverColor || "#ff9800"};
    }
  }
`,
StandardCardExploreCard: styled.div`
  max-width: 100%;
  padding: 25px;
  min-height: 600px;
  background: linear-gradient(135deg, ${(props) => props.theme.colors.gradientStart}, ${(props) => props.theme.colors.gradientEnd});
  border: 3px solid ${(props) => props.theme.colors.cardAccent || '#d4af37'}; /* Contour doré */
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transition: transform 0.5s ease, box-shadow 0.5s ease;

  &:hover {
    transform: translateY(-15px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }
`,

CardExplore: styled.div`
  background: ${(props) => props.theme.colors.cardBackground};
  color: ${(props) => props.theme.colors.cardText};
  border: 2px solid ${(props) => props.theme.colors.cardAccent || '#d4af37'}; /* Contour doré */
  border-radius: 25px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: scale(1.1) rotate(3deg);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    background: linear-gradient(135deg, ${(props) => props.theme.colors.gradientStart}, ${(props) => props.theme.colors.gradientEnd});
  }
`,

RowExplore: styled.div`
  display: flex;
  gap: 20px;
  margin: 30px 0;
  flex-wrap: wrap;
  justify-content: space-evenly;
`,

ColumnExplore: styled.div`
  flex: 1;
  min-width: 340px;
`,

CardBodyExplore: styled.div`
  padding: 30px;
  text-align: center;
  background: ${(props) => props.theme.colors.cardBodyBackground};
  border-top: 1px solid ${(props) => props.theme.colors.cardAccent || '#d4af37'}; /* Contour doré */
  border-radius: 0 0 25px 25px;
`,

DifferentCardExploreCard: styled.div`
  max-width: 100%;
  padding: 30px;
  background: ${(props) => props.theme.colors.differentCardBackground};
  border: 3px dotted ${(props) => props.theme.colors.cardAccent || '#d4af37'}; /* Contour doré en pointillés */
  border-radius: 25px;
  box-shadow: 0 10px 20px rgba(255, 0, 0, 0.25);
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: translateY(-20px) rotate(-3deg);
    box-shadow: 0 14px 28px rgba(255, 0, 0, 0.35);
  }
`,

ContentExplore: styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.colors.contentBackground};
  color: ${(props) => props.theme.colors.differentCardText};
  border-radius: 25px;
  padding: 25px;
  border: 2px solid ${(props) => props.theme.colors.cardAccent || '#d4af37'}; /* Contour doré */
  transition: background-color 0.4s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.hoverContentBackground};
  }
`,



ImageWrapperExploreDifferent: styled.div`
   width: 100%;
  height: 450px;
  overflow: hidden;
  border-radius: 25px 25px 0 0;
  background: ${(props) => props.theme.colors.imageWrapperBackground || "#e8e8e8"};
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid ${(props) => props.theme.colors.cardAccent || '#d4af37'}; /* Contour doré */
`,

ImageWrapperExploreStandart: styled.div`
  width: 100%;
  height: 450px;
  overflow: hidden;
  border-radius: 25px 25px 0 0;
  background: ${(props) => props.theme.colors.imageWrapperBackground || "#e8e8e8"};
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid ${(props) => props.theme.colors.cardAccent || '#d4af37'}; /* Contour doré */
`,

CardImageExploreStandart:styled.img`
  width: auto;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`,

CardImageExploreDifferent: styled.img`
  width: auto;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`,

DetailsExplore: styled.div`
  padding: 25px;
  text-align: center;
`,

TitleExplore: styled.h3`
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.titleText};
  margin-bottom: 20px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`,

DescriptionExplore: styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: ${(props) => props.theme.colors.descriptionText};
  margin-bottom: 20px;
  max-height: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
`,

LinkExplore: styled.a`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.linkText};
  text-decoration: none;
  border-bottom: 2px solid ${(props) => props.theme.colors.cardAccent || '#d4af37'}; /* Contour doré */

  &:hover {
    color: ${(props) => props.theme.colors.linkHoverText};
    text-decoration: underline;
    transform: scale(1.1);
  }
`,
EmailCardContainer : styled.div`
    display: flex;
  align-items: center;
  max-width: 700px;
  margin: 20px auto;
  background-color: ${(props) => props.theme.colors.cardBackground || "#f9f9f9"};
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border: 1px solid ${(props) => props.theme.colors.border || "#ddd"};
  overflow: hidden;
`
  
  },


  style9: {
    navbarHeight: '70px',
  
    TopNavbar: styled.div`
      background: ${(props) => props.theme.colors.TopNavbarBackground};
      padding: 10px;
    `,
  
    NavbarContainer: styled.nav`
      background-color: ${(props) => props.theme.colors.navbarBackground};
      padding: 1rem 2rem;
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 1000;
      transition: background-color 0.3s ease;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    `,
  
    NavbarContent: styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
    `,
  
    Logo: styled(NavLink)`
      font-size: 1.6rem;
      font-weight: bold;
      color: ${(props) => props.theme.colors.logoText};
      text-decoration: none;
      transition: color 0.3s ease;
  
      &:hover {
        color: ${(props) => props.theme.colors.logoHover};
      }
    `,
  
    NavLinks: styled.div`
      display: flex;
      align-items: center;
      background: ${(props) => props.theme.colors.navLinksBackground};
      @media (max-width: 768px) {
        display: none;
      }
    `,
  
    NavItem: styled(NavLink)`
      color: ${(props) => props.theme.colors.navItemText};
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: 8px;
      margin-right: 0.5rem;
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
      padding: 0.5rem 1rem;
      border-radius: 8px;
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
      transition: all 0.3s ease;
  
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
      padding: 1rem;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  
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
        color: ${(props) => props.theme.colors.mobileNavItemHover};
      }
    `,
  
    CartIcon: styled.div`
      position: relative;
      cursor: pointer;
      margin-left: 1rem;
      transition: all 0.3s ease;
      color: ${(props) => props.theme.colors.cartIconColor};
  
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
    `,
  
    Select: styled.select`
      background-color: ${(props) => props.theme.colors.selectBackground};
      color: ${(props) => props.theme.colors.selectText};
      border: none;
      padding: 0.5rem;
      margin-right: 1rem;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease;
  
      &:hover {
        background-color: ${(props) => props.theme.colors.selectHover};
      }
  
      &:focus {
        outline: none;
        box-shadow: 0 0 0 2px ${(props) => props.theme.colors.selectFocus};
      }
    `,
    CardContainer: styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 580px;
  width: 260px;
  border-radius: 20px;
  background: ${(props) => props.theme.colors.cardBackground || 'linear-gradient(135deg, #ff9a9e, #fad0c4)'};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 0 20px rgba(255, 154, 158, 0.5);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  margin-bottom: 10px;
  margin-top: 10px;

  &:hover {
    transform: rotate(-2deg) scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2), 0 0 30px rgba(255, 154, 158, 0.7);
  }
`,
  
  CardProperty: styled.div`
    background: ${(props) => props.theme.colors.cardPropertyBackground };
    border: 2px solid ${(props) => props.theme.colors.cardAccent };
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    border-radius: 24px;
    
  `,
  
  CardImage: styled.img`
  width: 100%;
  height: 370px;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
`,

CardBody: styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  color: ${(props) => props.theme.colors.cardBodyText };
  background: ${(props) => props.theme.colors.cardBodyBackground };
  text-align: center;
  border-radius: 0 0 20px 20px;
  
`,

DiscountBadge: styled.span`
  background: ${(props) => props.theme.colors.discountBadgeBackground };
  color: ${(props) => props.theme.colors.discountBadgeText || '#ffffff'};
  border-radius: 12px;
  padding: 8px 14px;
  font-size: 0.85rem;
  font-weight: bold;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
`,
  
  ColorText: styled.p`
    color: ${(props) => props.theme.colors.colorText };
    font-size: 1rem;
    margin: 10px 0;
  `,
  Countdown: styled.div`
    width: 90%;
    background: ${(props) => props.theme.colors.countdownBackground };
    color: ${(props) => props.theme.colors.countdownText };
    text-align: center;
    padding: 12px;
    font-size: 1rem;
    font-weight: 700;
    border-radius: 12px;
  `,
  
  Time: styled.div`
    font-weight: bold;
    font-size: 22px;
    color: ${(props) => props.theme.colors.timeText || '#ff0000'};
  `,
  FeatureWrapper: styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  padding: 40px 20px;

  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15), 0 4px 15px rgba(255, 228, 225, 0.5);
  margin: 20px auto;
  max-width: 1700px;
  transition: background 0.3s ease;


`,
FeatureCard: styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 15px;
  width: 280px;
  height: 120px;
  background: ${(props) => props.theme.colors.cardBackground || "#fff"};
  border: 2px solid ${(props) => props.theme.colors.cardBorder || "#000"}; /* Bordure noire */
  border-radius: 24px; /* Coins arrondis similaires à CardProperty */
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15), 0 2px 5px rgba(0, 0, 0, 0.1); /* Ombre subtile */
  color: ${(props) => props.theme.colors.cardText || "#333"};
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 4px 15px rgba(0, 0, 0, 0.3); /* Accentuation de l'ombre */
    background: ${(props) =>
      props.theme.colors.cardHoverBackground ||
      "linear-gradient(135deg, #f5f5f5, #e0e0e0)"};
  }

  svg {
    margin-bottom: 15px;
    font-size: 2.5rem;
    color: ${(props) => props.theme.colors.iconColor || "#000"};
    transition: transform 0.3s ease, color 0.3s ease;

    &:hover {
      transform: rotate(10deg);
      color: ${(props) => props.theme.colors.iconHoverColor || "#555"};
    }
  }
`,

StandardCardExploreCard: styled.div`
  max-width: 100%;
  padding: 20px;
  min-height: 600px;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.gradientStart || '#f3f3f3'},
    ${(props) => props.theme.colors.gradientEnd || '#ffffff'}
  );
  border: 3px solid ${(props) => props.theme.colors.cardAccent || '#ff7f50'};
  border-radius: 20px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2), 0 4px 20px rgba(255, 127, 80, 0.5);
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: scale(1.05) rotate(-1deg);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3), 0 6px 24px rgba(255, 127, 80, 0.7);
  }
`,

CardExplore: styled.div`
  background: ${(props) => props.theme.colors.cardBackground || '#fff'};
  color: ${(props) => props.theme.colors.cardText || '#000'};
  border: 2px solid ${(props) => props.theme.colors.cardAccent || '#ff6347'};
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 2px 10px rgba(255, 99, 71, 0.5);
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: rotate(1deg) scale(1.03);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3), 0 4px 20px rgba(255, 99, 71, 0.6);
  }
`,

RowExplore: styled.div`
  display: flex;
  gap: 20px;
  margin: 30px 0;
  flex-wrap: wrap;
  justify-content: space-evenly;
`,

ColumnExplore: styled.div`
  flex: 1;
  min-width: 340px;
`,

CardBodyExplore: styled.div`
  padding: 30px;
  text-align: center;
  background: ${(props) => props.theme.colors.cardBodyBackground || '#fefefe'};
  border-top: 2px solid ${(props) => props.theme.colors.cardAccent || '#ff6347'};
  border-radius: 0 0 20px 20px;
`,

DifferentCardExploreCard: styled.div`
  max-width: 100%;
  padding: 30px;
  background: ${(props) => props.theme.colors.differentCardBackground || '#ffefeb'};
  border: 3px dashed ${(props) => props.theme.colors.differentCardBorder || '#ffa07a'};
  border-radius: 20px;
  box-shadow: 0 6px 12px rgba(255, 160, 122, 0.3), 0 4px 20px rgba(255, 160, 122, 0.5);
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: rotate(-3deg) scale(1.05);
    box-shadow: 0 10px 20px rgba(255, 160, 122, 0.4), 0 6px 24px rgba(255, 160, 122, 0.6);
  }
`,

ContentExplore: styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.colors.contentBackground || '#fff5f0'};
  color: ${(props) => props.theme.colors.contentText || '#ff6347'};
  border-radius: 20px;
  padding: 25px;
  transition: background-color 0.4s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.hoverContentBackground || '#ffe4e1'};
  }
`,


ImageWrapperExploreDifferent: styled.div`
   width: 100%;
  height: 250px;
  overflow: hidden;
  border-radius: 20px 20px 0 0;
  background: ${(props) => props.theme.colors.imageWrapperBackground || '#e8e8e8'};
  display: flex;
  justify-content: center;
  align-items: center;
`,

ImageWrapperExploreStandart: styled.div`
   width: 100%;
  height: 250px;
  overflow: hidden;
  border-radius: 20px 20px 0 0;
  background: ${(props) => props.theme.colors.imageWrapperBackground || '#e8e8e8'};
  display: flex;
  justify-content: center;
  align-items: center;
`,

CardImageExploreStandart: styled.img`
    width: auto;
  height: 100%;
  object-fit: cover;
  border-bottom: 2px solid ${(props) => props.theme.colors.cardAccent || '#d4d4d4'};
`,

CardImageExploreDifferent: styled.img`
   width: auto;
  height: 100%;
  object-fit: cover;
  border-bottom: 2px solid ${(props) => props.theme.colors.cardAccent || '#d4d4d4'};
`,
DetailsExplore: styled.div`
  padding: 25px;
  text-align: center;
`,

TitleExplore: styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.titleText || '#000'};
  margin-bottom: 20px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`,

DescriptionExplore: styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: ${(props) => props.theme.colors.descriptionText || '#333'};
  margin-bottom: 20px;
  max-height: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
`,

LinkExplore: styled.a`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.linkText || '#0073e6'};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.linkHoverText || '#005bb5'};
    text-decoration: underline;
    transform: scale(1.1);
  }
`,
EmailCardContainer : styled.div`
    display: flex;
  align-items: center;
  max-width: 700px;
  margin: 20px auto;
  background-color: ${(props) => props.theme.colors.cardBackground || "#f9f9f9"};
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border: 1px solid ${(props) => props.theme.colors.border || "#ddd"};
  overflow: hidden;
`
  }, 


  style10: {
    navbarHeight: '80px',
  
    TopNavbar: styled.div`
      background: ${(props) => props.theme.colors.TopNavbarBackground || '#2c3e50'};
      padding: 15px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
      border-bottom: 3px solid #3498db;
    `,
  
    NavbarContainer: styled.nav`
      background-color: ${(props) => props.theme.colors.navbarBackground || '#ffffff'};
      padding: 1.5rem 3rem;
      position: sticky;
      top: 0;
      width: 100%;
      z-index: 1000;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      transition: background-color 0.4s ease;
    `,
  
    NavbarContent: styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1400px;
      margin: 0 auto;
    `,
  
    Logo: styled(NavLink)`
      font-size: 1.8rem;
      font-weight: bold;
      color: ${(props) => props.theme.colors.logoText || '#34495e'};
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 2px;
      transition: color 0.4s ease;
  
      &:hover {
        color: ${(props) => props.theme.colors.logoHover || '#e74c3c'};
      }
    `,
  
    NavLinks: styled.div`
      display: flex;
      align-items: center;
      gap: 1rem;
      background: ${(props) => props.theme.colors.navLinksBackground || 'transparent'};
      @media (max-width: 768px) {
        display: none;
      }
    `,
  
    NavItem: styled(NavLink)`
      color: ${(props) => props.theme.colors.navItemText || '#7f8c8d'};
      text-decoration: none;
      padding: 0.75rem 1.5rem;
      border-radius: 50px;
      font-weight: 500;
      transition: all 0.3s ease;
  
      &:hover,
      &.active {
        background-color: ${(props) => props.theme.colors.navItemHoverBackground || '#ecf0f1'};
        color: ${(props) => props.theme.colors.navItemHover || '#2c3e50'};
      }
    `,
  
    NavButton: styled.button`
      background-color: ${(props) => props.theme.colors.buttonBackground || '#e74c3c'};
      color: ${(props) => props.theme.colors.buttonText || '#ffffff'};
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 50px;
      cursor: pointer;
      font-weight: bold;
      transition: background-color 0.3s ease, transform 0.2s;
  
      &:hover {
        background-color: ${(props) => props.theme.colors.buttonHover || '#c0392b'};
        transform: scale(1.05);
      }
    `,
  
    MobileMenuButton: styled.button`
      display: none;
      background: none;
      border: none;
      color: ${(props) => props.theme.colors.mobileMenuButton || '#2c3e50'};
      font-size: 2rem;
      cursor: pointer;
      transition: color 0.3s ease;
  
      @media (max-width: 768px) {
        display: block;
      }
  
      &:hover {
        color: ${(props) => props.theme.colors.mobileMenuButtonHover || '#e74c3c'};
      }
    `,
  
    MobileMenu: styled.div`
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background-color: ${(props) => props.theme.colors.mobileMenuBackground || '#ffffff'};
      padding: 2rem;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
      border-top: 3px solid #3498db;
  
      @media (max-width: 768px) {
        display: ${(props) => (props.isOpen ? 'block' : 'none')};
      }
    `,
  
    MobileNavItem: styled(NavLink)`
      display: block;
      margin: 1rem 0;
      color: ${(props) => props.theme.colors.mobileNavItemText || '#34495e'};
      text-decoration: none;
      padding: 1rem;
      font-size: 1.2rem;
      font-weight: 500;
      transition: color 0.3s ease;
  
      &:hover,
      &.active {
        color: ${(props) => props.theme.colors.mobileNavItemHover || '#e74c3c'};
      }
    `,
  
    CartIcon: styled.div`
      position: relative;
      cursor: pointer;
      font-size: 1.8rem;
      color: ${(props) => props.theme.colors.cartIconColor || '#2c3e50'};
      transition: all 0.3s ease;
  
      &:hover {
        transform: scale(1.1);
      }
    `,
  
    CartCount: styled.span`
      position: absolute;
      top: -5px;
      right: -5px;
      background-color: ${(props) => props.theme.colors.cartCountBackground || '#e74c3c'};
      color: ${(props) => props.theme.colors.cartCountText || '#ffffff'};
      border-radius: 50%;
      padding: 3px 8px;
      font-size: 0.75rem;
      font-weight: bold;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
    `,
  
    Select: styled.select`
      background-color: ${(props) => props.theme.colors.selectBackground || '#ecf0f1'};
      color: ${(props) => props.theme.colors.selectText || '#2c3e50'};
      border: 2px solid #bdc3c7;
      padding: 0.5rem;
      margin-right: 1rem;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 500;
      transition: all 0.3s ease;
  
      &:hover {
        border-color: ${(props) => props.theme.colors.selectHoverBorder || '#3498db'};
      }
  
      &:focus {
        outline: none;
        box-shadow: 0 0 5px ${(props) => props.theme.colors.selectFocus || '#3498db'};
      }
    `,
  
    CardContainer: styled.div`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: 590px;
      width: 260px;
      border-radius: 20px;
      background: ${(props) => props.theme.colors.cardBackground || 'linear-gradient(135deg, #ff9a9e, #fad0c4)'};
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 0 20px rgba(255, 154, 158, 0.5);
      overflow: hidden;
      transition: transform 0.3s, box-shadow 0.3s;
      margin-bottom: 10px;
      margin-top: 10px;
      &:hover {
        transform: rotate(-2deg) scale(1.05);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2), 0 0 30px rgba(255, 154, 158, 0.7);
      }
    `,
  
    CardProperty: styled.div`
      background: ${(props) => props.theme.colors.cardPropertyBackground};
      border: 2px solid ${(props) => props.theme.colors.cardAccent};
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 20px;
      border-radius: 24px;
    `,
  
    CardImage: styled.img`
      width: 100%;
      height: 380px;
      object-fit: cover;
      border-radius: 20px 20px 0 0;
    `,
  
    CardBody: styled.div`
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
      color: ${(props) => props.theme.colors.cardBodyText};
      background: ${(props) => props.theme.colors.cardBodyBackground};
      text-align: center;
      border-radius: 0 0 20px 20px;
    `,
  
    DiscountBadge: styled.span`
      background: ${(props) => props.theme.colors.discountBadgeBackground};
      color: ${(props) => props.theme.colors.discountBadgeText || '#ffffff'};
      border-radius: 12px;
      padding: 8px 14px;
      font-size: 0.85rem;
      font-weight: bold;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
    `,
  
    ColorText: styled.p`
      color: ${(props) => props.theme.colors.colorText};
      font-size: 1rem;
      margin: 10px 0;
    `,
  
    Countdown: styled.div`
      width: 90%;
      background: ${(props) => props.theme.colors.countdownBackground};
      color: ${(props) => props.theme.colors.countdownText};
      text-align: center;
      padding: 12px;
      font-size: 1rem;
      font-weight: 700;
      border-radius: 12px;
    `,
  
    Time: styled.div`
      font-weight: bold;
      font-size: 22px;
      color: ${(props) => props.theme.colors.timeText || '#ff0000'};
    `,
    FeatureWrapper: styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    padding: 30px;
    background: ${(props) =>
      props.theme.colors.featureBackground ||
      "linear-gradient(135deg, #ffffff, #ecf0f1)"};
    border-radius: 15px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(52, 152, 219, 0.2);
    margin: 20px auto;
    max-width: 1800px;
    transition: background 0.4s ease;
  
    &:hover {
      background: ${(props) =>
        props.theme.colors.featureHoverBackground ||
        "linear-gradient(135deg, #ecf0f1, #ffffff)"};
    }
  `,
  
  FeatureCard: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;
    margin: 15px;
    width: 280px;
    height: 150px;
    background: ${(props) => props.theme.colors.cardBackground || "#ffffff"};
    border: 2px solid ${(props) => props.theme.colors.cardBorder || "#ddd"};
    border-radius: 12px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(52, 152, 219, 0.2);
    color: ${(props) => props.theme.colors.cardText || "#34495e"};
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
  
    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(52, 152, 219, 0.3);
      background: ${(props) =>
        props.theme.colors.cardHoverBackground ||
        "linear-gradient(135deg, #ecf0f1, #ffffff)"};
    }
  
    svg {
      margin-bottom: 20px;
      font-size: 3rem;
      color: ${(props) => props.theme.colors.iconColor || "#3498db"};
      transition: transform 0.3s ease, color 0.3s ease;
  
      &:hover {
        transform: rotate(10deg);
        color: ${(props) => props.theme.colors.iconHoverColor || "#2980b9"};
      }
    }
  `,
  StandardCardExploreCard: styled.div`
  max-width: 100%;
  padding: 20px;
  min-height: 600px;
  background: linear-gradient(135deg, ${(props) => props.theme.colors.gradientStart}, ${(props) => props.theme.colors.gradientEnd});
  border: 2px solid ${(props) => props.theme.colors.cardBorder};
  border-radius: 20px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`,

CardExplore: styled.div`
  background: ${(props) => props.theme.colors.cardBackground};
  color: ${(props) => props.theme.colors.cardText};
  border: 2px solid ${(props) => props.theme.colors.cardBorder};
  border-radius: 15px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`,

RowExplore: styled.div`
  display: flex;
  gap: 20px;
  margin: 30px 0;
  flex-wrap: wrap;
  justify-content: space-between;
`,

ColumnExplore: styled.div`
  flex: 1;
  min-width: 300px;
`,

CardBodyExplore: styled.div`
  padding: 20px;
  text-align: center;
  background: ${(props) => props.theme.colors.cardBodyBackground};
  border-top: 1px solid ${(props) => props.theme.colors.cardBorder};
  border-radius: 0 0 15px 15px;
`,

DifferentCardExploreCard: styled.div`
  max-width: 100%;
  padding: 25px;
  background: ${(props) => props.theme.colors.differentCardBackground};
  border: 2px dashed ${(props) => props.theme.colors.differentCardBorder};
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(255, 0, 0, 0.2);
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: translateY(-15px);
    box-shadow: 0 12px 24px rgba(255, 0, 0, 0.3);
  }
`,

ContentExplore: styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.colors.contentBackground};
  color: ${(props) => props.theme.colors.contentText};
  border-radius: 15px;
  padding: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.hoverContentBackground};
  }
`,


ImageWrapperExploreDifferent: styled.div`
   width: 100%;
  height: 350px; 
  overflow: hidden;
  border-radius: 15px 15px 0 0;
  background: ${(props) => props.theme.colors.imageWrapperBackground};
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Aligne l'image en haut */
`,

ImageWrapperExploreStandart: styled.div`
 width: 100%;
  height: 350px; 
  overflow: hidden;
  border-radius: 15px 15px 0 0;
  background: ${(props) => props.theme.colors.imageWrapperBackground};
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Aligne l'image en haut */
`,


CardImageExploreStandart: styled.img`
  width: 100%;
  height: auto;
        
  object-position: top;
  border-bottom: 2px solid ${(props) => props.theme.colors.cardBorder};
`,

CardImageExploreDifferent: styled.img`
  width: 300px;
  height: 400px;
        
  object-position: top; 
  border-bottom: 2px solid ${(props) => props.theme.colors.cardBorder};
`,

DetailsExplore: styled.div`
  padding: 20px;
  text-align: center;
`,

TitleExplore: styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.titleText};
  margin-bottom: 10px;
`,

DescriptionExplore: styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${(props) => props.theme.colors.descriptionText};
  margin-bottom: 15px;
  max-height: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
`,

LinkExplore: styled.a`
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.linkText};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.linkHoverText};
    text-decoration: underline;
  }
`,
EmailCardContainer: styled.div`
  display: flex;
  align-items: center;
  max-width: 800px;
  margin: 30px auto;
  background: ${(props) =>
    props.theme.colors.cardBackground ||
    "linear-gradient(145deg, #ffffff, #f0f0f0)"};
  border-radius: 20px;
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.1), -4px -4px 8px rgba(255, 255, 255, 0.8);
  padding: 25px;
  border: 1px solid ${(props) => props.theme.colors.border || "#e0e0e0"};
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.15), -6px -6px 12px rgba(255, 255, 255, 0.9);
  }
`

  },
  
};