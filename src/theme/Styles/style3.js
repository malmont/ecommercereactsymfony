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

  CartItemContainer: styled.div`
  width: 70%;
  margin-bottom: 20px;
  background: linear-gradient(135deg, ${(props) => props.theme.colors.containerBackground }, ${(props) => props.theme.colors.secondary || "#ffffff"});
  border-radius: 20px;
  padding: 25px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
  }
`,

CartItem: styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  border: none;
  padding: 15px;

  @media (max-width: 400px) {
    flex-direction: column;
    align-items: flex-start;
  }
`,

CartItemInfo: styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
`,

CartItemImage: styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid ${(props) => props.theme.colors.cartItemImageBorder || "#fff"};
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`,

CartItemTitle: styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.cartItemTitle || "#fff"};
`,

CartItemPrice: styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.cartItemPrice || "#FFD700"};
`,

CartItemVariantInfo: styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.cartItemVariantBackground || "rgba(255, 255, 255, 0.2)"};
  border-radius: 12px;
`,

CartItemIncrDec: styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  background-color: ${(props) => props.theme.colors.incrDecBackground || "rgba(255, 255, 255, 0.1)"};
  padding: 10px;
  border-radius: 10px;
`,

IncrDecButton: styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.incrDecButtonBackground || "#fff"};
  border: none;
  border-radius: 50%;
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.primary || "#007BFF"};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.incrDecButtonHover || "#FFD700"};
    color: ${(props) => props.theme.colors.incrDecButtonHoverText || "#000"};
    transform: scale(1.2);
  }
`,

CartItemButton: styled.button`
  padding: 12px 20px;
  border: none;
  background-color: ${(props) => props.theme.colors.cartItemButtonBackground || "#DC3545"};
  color: ${(props) => props.theme.colors.cartItemButtonText || "#fff"};
  border-radius: 12px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.cartItemButtonHover || "#C82333"};
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`,

CartItemQuantity: styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.cartItemQuantityText || "#fff"};
`,

ColorCircle: styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  border: 2px solid ${(props) => props.theme.colors.colorCircleBorder || "#fff"};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`,

SizeCircle: styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.sizeCircleBackground || "rgba(255, 255, 255, 0.2)"};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.sizeCircleText || "#fff"};
  border: 2px solid ${(props) => props.theme.colors.sizeCircleBorder || "#fff"};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`,
OrderSummaryContainer: styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  border: 1px solid ${(props) => props.theme.colors.border || '#e0e0e0'};
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.cardBackground || '#ffffff'};
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  max-width: 650px;
  margin: 20px auto;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`,

OrderSummaryTitle: styled.h4`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.titleText || '#333'};
  text-align: center;
  margin-bottom: 15px;
  
`,

Divider: styled.div`
  border-top: 2px solid ${(props) => props.theme.colors.border || '#ccc'};
  margin: 15px 0;
`,

OrderSummaryRow: styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.textColor || '#555'};
  padding: 10px 0;

  &:last-child {
    font-weight: bold;
    color: ${(props) => props.theme.colors.titleText || '#000'};
  }
`,

OrderSummaryText: styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.textColor || '#666'};
  margin: 0;
`,

OrderSummaryHighlight: styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.highlight || '#007bff'};
  margin: 0;
`,

CheckoutButton: styled.button`
  padding: 15px 20px;
  border: none;
  border-radius: 25px;
  background-color: ${(props) => props.theme.colors.buttonBackground || '#28a745'};
  color: ${(props) => props.theme.colors.buttonText || '#ffffff'};
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.buttonHover || '#218838'};
    transform: scale(1.05);
  }
`,
CarrierContainer: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
    justify-content: center;
    background-color: ${(props) =>
      props.theme.colors.carrierContainerBackground || '#f8f9fa'};
    border-radius: 15px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  `,

  // Carte de transporteur
  CarrierCard: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 140px;
    padding: 15px;
    border: ${(props) =>
      props.isSelected
        ? `3px solid ${props.theme.colors.highlight || '#007bff'}`
        : `1px solid ${props.theme.colors.border || '#ccc'}`};
    border-radius: 10px;
    cursor: pointer;
    background-color: ${(props) =>
      props.isSelected
        ? props.theme.colors.selectedBackground || '#eaf4ff'
        : props.theme.colors.cardBackground || '#ffffff'};
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    img {
      width: 70px;
      height: auto;
      margin-bottom: 10px;
    }

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
  `,

  // Conteneur pour les adresses
  AddressContainer: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    padding: 20px;
    justify-content: center;
    background-color: ${(props) =>
      props.theme.colors.addressContainerBackground || '#f8f9fa'};
    border-radius: 15px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  `,

  // Carte d'adresse
  AddressCard: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 240px;
    padding: 20px;
    border: ${(props) =>
      props.isSelected
        ? `3px solid ${props.theme.colors.highlight || '#007bff'}`
        : `1px solid ${props.theme.colors.border || '#ccc'}`};
    border-radius: 10px;
    cursor: pointer;
    background-color: ${(props) =>
      props.isSelected
        ? props.theme.colors.selectedBackground || '#eaf4ff'
        : props.theme.colors.cardBackground || '#ffffff'};
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    p {
      font-size: 1rem;
      text-align: center;
      color: ${(props) => props.theme.colors.textColor || '#333'};
    }

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
  `,

  // Conteneur pour les méthodes de paiement
  PaymentMethodContainer: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
    justify-content: center;
    background-color: ${(props) =>
      props.theme.colors.paymentContainerBackground || '#f8f9fa'};
    border-radius: 15px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  `,

  // Carte de méthode de paiement
  PaymentMethodCard: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 140px;
    padding: 15px;
    border: ${(props) =>
      props.isSelected
        ? `3px solid ${props.theme.colors.highlight || '#007bff'}`
        : `1px solid ${props.theme.colors.border || '#ccc'}`};
    border-radius: 10px;
    cursor: pointer;
    background-color: ${(props) =>
      props.isSelected
        ? props.theme.colors.selectedBackground || '#eaf4ff'
        : props.theme.colors.cardBackground || '#ffffff'};
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    img {
      width: 60px;
      height: auto;
      margin-bottom: 10px;
    }

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
  `,
  DashboardWrapper: styled.div`
  background-color: ${(props) => props.theme.colors.contentBackground || '#f0f0f0'};
  min-height: 70vh;
  padding: 20px;
`,

// Sidebar pour les onglets
DashboardSidebar: styled.div`
  background-color: ${(props) => props.theme.colors.sidebarBackground || '#ffffff'};
  padding: 30px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  border: 1px solid ${(props) => props.theme.colors.border || '#e0e0e0'};
`,

// Élément de navigation dans la sidebar
DashboardNavItem: styled.li`
  margin-bottom: 20px;
  list-style: none;
`,

// Liens de navigation dans la sidebar
DashboardNavLink: styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  font-size: 17px;
  font-weight: 600;
  color: ${(props) =>
    props.className?.includes('active')
      ? props.theme.colors.activeLinkText || '#ffffff'
      : props.theme.colors.linkText || '#555555'} !important;
  background-color: ${(props) =>
    props.className?.includes('active')
      ? props.theme.colors.activeLinkBackground || '#007BFF'
      : 'transparent'} !important;
  border-radius: 8px;
  text-decoration: none !important;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.linkHoverBackground || '#e6f0ff'} !important;
    color: ${(props) => props.theme.colors.linkHoverText || '#007BFF'} !important;
  }

  i {
    margin-right: 12px;
  }
`,

// Contenu principal du tableau de bord
DashboardContent: styled.div`
  padding: 30px;
  background-color: ${(props) => props.theme.colors.contentBackground || '#ffffff'};
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  margin-left: 30px;
`,

// Conteneur pour les onglets
DashboardTabPane: styled.div`
  padding: 30px;
  background-color: ${(props) => props.theme.colors.cardBackground || '#ffffff'};
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
`,

// Carte principale
DashboardCard: styled.div`
  background-color: ${(props) => props.theme.colors.cardBackground || '#ffffff'};
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
`,

// En-tête de la carte
DashboardCardHeader: styled.div`
  padding: 25px;
  border-bottom: 1px solid ${(props) => props.theme.colors.border || '#e0e0e0'};
  background-color: ${(props) => props.theme.colors.cardHeaderBackground || '#007BFF'};
  color: ${(props) => props.theme.colors.cardHeaderText || '#ffffff'};
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`,

// Corps de la carte
DashboardCardBody: styled.div`
  padding: 25px;
`,
TableWrapper: styled.div`
  overflow-x: auto;
  margin-top: 30px;
  padding: 20px;
  border-radius: 12px;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.tableWrapperBackgroundStart || '#f7f7f7'},
    ${(props) => props.theme.colors.tableWrapperBackgroundEnd || '#e0e0e0'}
  );
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border: 1px solid ${(props) => props.theme.colors.border || '#ddd'};
`,

ResponsiveTable: styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background-color: ${(props) => props.theme.colors.tableBackground || '#fff'};
  border-radius: 12px;

  th, td {
    padding: 12px 15px;
    border: 1px solid ${(props) => props.theme.colors.border || '#ccc'};
    text-align: center;
  }

  th {
    background-color: ${(props) => props.theme.colors.tableHeaderBackground || '#007BFF'};
    color: ${(props) => props.theme.colors.tableHeaderText || '#fff'};
    font-size: 1.1rem;
    text-transform: uppercase;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  td {
    font-size: 1rem;
    color: ${(props) => props.theme.colors.tableText || '#333'};
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${(props) => props.theme.colors.tableRowHoverBackground || '#f1f1f1'};
    }
  }

  @media (max-width: 768px) {
    th, td {
      display: block;
      text-align: left;
      padding: 10px;
    }

    td::before {
      content: attr(data-label);
      font-weight: bold;
      color: ${(props) => props.theme.colors.tableText || '#555'};
      display: inline-block;
      margin-right: 10px;
    }
  }
`,

TableButton: styled.button`
  padding: 10px 15px;
  border: 1px solid ${(props) => props.theme.colors.buttonBorder || '#007bff'};
  border-radius: 25px;
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.colors.buttonBackgroundStart || '#007bff'},
    ${(props) => props.theme.colors.buttonBackgroundEnd || '#0056b3'}
  );
  color: ${(props) => props.theme.colors.buttonText || '#fff'};
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    background: ${(props) => props.theme.colors.buttonHover || '#0056b3'};
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  }
`,

TableEmptyMessage: styled.div`
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.emptyMessageText || '#6c757d'};
  text-align: center;
  margin: 25px 0;
  padding: 20px;
  border-radius: 15px;
  background: ${(props) => props.theme.colors.emptyMessageBackground || '#f9f9f9'};
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  font-weight: bold;
  border: 1px dashed ${(props) => props.theme.colors.emptyMessageBorder || '#ddd'};
`,
AddressListWrapper: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
    background: linear-gradient(
      135deg,
      ${(props) => props.theme.colors.wrapperBackgroundStart || '#f5f5f5'},
      ${(props) => props.theme.colors.wrapperBackgroundEnd || '#e0e0e0'}
    );
    border-radius: 15px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  `,

  AddNewAddressButton: styled.a`
    display: inline-block;
    padding: 10px 20px;
    height: 50px;
    background: linear-gradient(
      90deg,
      ${(props) => props.theme.colors.buttonBackgroundStart || '#007bff'},
      ${(props) => props.theme.colors.buttonBackgroundEnd || '#0056b3'}
    );
    color: ${(props) => props.theme.colors.buttonText || '#ffffff'};
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    border-radius: 25px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.05);
      background: ${(props) => props.theme.colors.buttonHover || '#0056b3'};
    }
  `,

  AddressCardList: styled.div`
    background: ${(props) => props.theme.colors.cardBackground || '#ffffff'};
    border: 1px solid ${(props) => props.theme.colors.cardBorder || '#ddd'};
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    max-width: 400px;
  `,

  AddressCardHeader: styled.div`
    background: ${(props) => props.theme.colors.cardHeaderBackground || '#007bff'};
    color: ${(props) => props.theme.colors.cardHeaderText || '#ffffff'};
    padding: 15px;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    border-bottom: 1px solid ${(props) => props.theme.colors.cardBorder || '#ddd'};
  `,

  AddressCardBody: styled.div`
    padding: 20px;
    background: ${(props) => props.theme.colors.cardBodyBackground || '#f9f9f9'};
    font-size: 1rem;
    color: ${(props) => props.theme.colors.textColor || '#333'};
  `,

  Address: styled.address`
    font-style: normal;
    line-height: 1.6;
    margin-bottom: 20px;
    color: ${(props) => props.theme.colors.addressText || '#495057'};
  `,

  ButtonGroup: styled.div`
    display: flex;
    gap: 15px;
    margin-top: 20px;
    justify-content: center;
  `,

  EditButton: styled.a`
    background: ${(props) => props.theme.colors.successBackground || '#28a745'};
    color: ${(props) => props.theme.colors.buttonText || '#ffffff'};
    padding: 10px 15px;
    border-radius: 8px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;

    &:hover {
      background: ${(props) => props.theme.colors.successHover || '#218838'};
      transform: scale(1.05);
    }
  `,

  DeleteButton: styled.button`
    background: ${(props) => props.theme.colors.dangerBackground || '#dc3545'};
    color: ${(props) => props.theme.colors.buttonText || '#ffffff'};
    padding: 10px 15px;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;

    &:hover {
      background: ${(props) => props.theme.colors.dangerHover || '#c82333'};
      transform: scale(1.05);
    }
  `,

  EmptyAddressMessage: styled.p`
    text-align: center;
    color: ${(props) => props.theme.colors.emptyMessageText || '#6c757d'};
    font-style: italic;
    padding: 25px;
    background: ${(props) => props.theme.colors.emptyMessageBackground || '#f5f5f5'};
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  `,

  LoadingMessage: styled.p`
    text-align: center;
    color: ${(props) => props.theme.colors.loadingText || '#495057'};
    padding: 25px;
    font-size: 1.2rem;
    font-weight: bold;
    background: ${(props) => props.theme.colors.loadingBackground || '#f9f9f9'};
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  `,
}


