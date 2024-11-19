import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const style3= {
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
`,
ContainerDetailsProduct: styled.div`
    padding: 40px;
    background-color: ${(props) => props.theme.colors.containerBackground || "#f5f5f5"};
    border-radius: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${(props) => props.theme.colors.hoverContainerBackground || "#e5e5e5"};
    }
  `,

  PrincipalDetailsDetailProduct: styled.div`
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    background-color: ${(props) => props.theme.colors.principalDetailsBackground || "#ffffff"};
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  `,

  ColorSelectionDetailProduct: styled.div`
    margin: 30px 0;
    font-size: 16px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.textColor || "#333"};
  `,

  SizeSelectionDetailProduct: styled.div`
    margin: 30px 0;
    font-size: 16px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.textColor || "#333"};
  `,

  ColorOptionsDetailProduct: styled.div`
    display: flex;
    gap: 20px;
    margin-top: 20px;
    justify-content: center;
  `,

  SizeOptionsDetailProduct: styled.div`
    display: flex;
    gap: 20px;
    margin-top: 20px;
    justify-content: center;
  `,

  InfoSelectionDetailProduct: styled.div`
    margin-top: 20px;
    font-size: 18px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.infoTextColor || "#444"};
  `,

  FeatureDetailProduct: styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-top: 40px;
    padding: 20px;
    background-color: ${(props) => props.theme.colors.featureBackground || "#f8f8f8"};
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
  `,

  ObjectFeatureDetailProduct: styled.div`
    text-align: center;
    margin: 10px;
    background-color: ${(props) => props.theme.colors.objectBackground || "#ffffff"};
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    p {
      margin-top: 10px;
      font-size: 14px;
      color: ${(props) => props.theme.colors.featureTextColor || "#555"};
    }
  `,

  ImageEncadrement: styled.img`
    border: 2px solid ${(props) => props.theme.colors.imageBorder || "#ccc"};
    padding: 15px;
    border-radius: 20px;
    width: 100%;
    max-width: 400px;
    background-color: ${(props) => props.theme.colors.imageBackground || "#f7f7f7"};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.02);
    }
  `,

  ColorButton: styled.button`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 3px solid ${(props) => (props.isSelected ? props.theme.colors.selectedBorder || "#0056b3" : "#ccc")};
    background-color: ${(props) => props.color};
    cursor: pointer;
    transition: transform 0.3s ease, border-color 0.3s ease;

    &:hover {
      transform: scale(1.1);
      border-color: ${(props) => props.theme.colors.hoverBorder || "#007BFF"};
    }
  `,

  SizeButton: styled.button`
    width: 60px;
    height: 60px;
    border-radius: 10%;
    border: 3px solid ${(props) => (props.isSelected ? props.theme.colors.selectedBorder || "#0056b3" : "#ccc")};
    background-color: ${(props) => (props.isSelected ? props.theme.colors.selectedBackground || "#007BFF" : "#fff")};
    color: ${(props) => (props.isSelected ? props.theme.colors.selectedText || "#fff" : "#000")};
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.3s ease, background-color 0.3s ease;

    &:hover {
      transform: scale(1.1);
      background-color: ${(props) => props.theme.colors.hoverBackground || "#0056b3"};
      color: ${(props) => props.theme.colors.hoverText || "#fff"};
    }
  `,


}


