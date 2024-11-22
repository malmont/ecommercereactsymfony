import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const style2 = {
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
`,
ContainerDetailsProduct: styled.div`
padding: 40px;
background-color: ${(props) => props.theme.colors.containerBackground};
border-radius: 20px;
box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
transition: background-color 0.3s ease;

&:hover {
  background-color: ${(props) => props.theme.colors.hoverContainerBackground };
}
`,

PrincipalDetailsDetailProduct: styled.div`
display: flex;
flex-direction: column;
gap: 30px;
justify-content: center;
align-items: center;
padding: 25px;
background-color: ${(props) => props.theme.colors.principalDetailsBackground || "#ffffff"};
border: 2px solid ${(props) => props.theme.colors.border || "#ddd"};
border-radius: 15px;
`,

ColorSelectionDetailProduct: styled.div`
margin: 25px 0;
font-size: 16px;
font-weight: bold;
color: ${(props) => props.theme.colors.textColor || "#222"};
`,

SizeSelectionDetailProduct: styled.div`
margin: 25px 0;
font-size: 16px;
font-weight: bold;
color: ${(props) => props.theme.colors.textColor || "#222"};
`,

ColorOptionsDetailProduct: styled.div`
display: flex;
gap: 15px;
margin-top: 15px;
justify-content: center;
`,

SizeOptionsDetailProduct: styled.div`
display: flex;
gap: 15px;
margin-top: 15px;
justify-content: center;
`,

InfoSelectionDetailProduct: styled.div`
margin-top: 15px;
font-size: 18px;
font-weight: bold;
color: ${(props) => props.theme.colors.infoTextColor || "#555"};
`,

FeatureDetailProduct: styled.div`
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
margin-top: 40px;
background-color: ${(props) => props.theme.colors.featureBackground || "#f0f0f0"};
border-radius: 20px;
padding: 20px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
`,

ObjectFeatureDetailProduct: styled.div`
text-align: center;
margin: 15px;
background-color: ${(props) => props.theme.colors.objectBackground || "#fff"};
padding: 15px;
border-radius: 10px;

p {
  margin-top: 12px;
  font-size: 15px;
  color: ${(props) => props.theme.colors.featureTextColor || "#444"};
}
`,

ImageEncadrement: styled.img`
border: 2px solid ${(props) => props.theme.colors.imageBorder || "#bbb"};
padding: 12px;
border-radius: 15px;
width: 100%;
max-width: 450px;
background-color: ${(props) => props.theme.colors.imageBackground || "#f9f9f9"};
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`,

ColorButton: styled.button`
width: 60px;
height: 60px;
border-radius: 10%;
border: 3px solid ${(props) => (props.isSelected ? props.theme.colors.selectedBorder || "#007BFF" : "#ddd")};
background-color: ${(props) => props.color};
cursor: pointer;
transition: all 0.3s ease;

&:hover {
  transform: scale(1.1);
  border-color: ${(props) => props.theme.colors.hoverBorder || "#007BFF"};
}
`,

SizeButton: styled.button`
width: 60px;
height: 60px;
border-radius: 15%;
border: 3px solid ${(props) => (props.isSelected ? props.theme.colors.selectedBorder || "#007BFF" : "#ddd")};
background-color: ${(props) => (props.isSelected ? props.theme.colors.selectedBackground || "#007BFF" : "#fff")};
color: ${(props) => (props.isSelected ? props.theme.colors.selectedText || "#fff" : "#000")};
font-size: 20px;
cursor: pointer;
transition: all 0.3s ease;

&:hover {
  background-color: ${(props) => props.theme.colors.hoverBackground || "#005BB5"};
  color: ${(props) => props.theme.colors.hoverText || "#fff"};
}
`,
CartItemContainer: styled.div`
  margin-bottom: 20px;
  background-color: ${(props) => props.theme.colors.cartItemContainerBackground || "#f9f9f9"};
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 80%;
`,

CartItem: styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.cartItemBorder || "#ddd"};
  padding-bottom: 15px;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 400px) {
    flex-direction: column;
  }
`,

CartItemInfo: styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,

CartItemImage: styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.cartItemImageBorder || "#ccc"};
`,

CartItemTitle: styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.cartItemTitle || "#333"};
`,

CartItemPrice: styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.cartItemPrice || "#007BFF"};
`,

CartItemVariantInfo: styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`,

CartItemIncrDec: styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`,

IncrDecButton: styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.incrDecButtonBackground || "#f0f0f0"};
  border: 1px solid ${(props) => props.theme.colors.incrDecButtonBorder || "#ccc"};
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.incrDecButtonHover || "#007BFF"};
    color: ${(props) => props.theme.colors.incrDecButtonHoverText || "#fff"};
  }
`,

CartItemButton: styled.button`
  padding: 10px;
  width: 50%;
  border: none;
  background-color: ${(props) => props.theme.colors.cartItemButtonBackground };
  color: ${(props) => props.theme.colors.cartItemButtonText || "#fff"};
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.cartItemButtonHover };
  }
`,

CartItemQuantity: styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.cartItemQuantityText || "#555"};
`,

ColorCircle: styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  border: 1px solid ${(props) => props.theme.colors.colorCircleBorder || "#ccc"};
`,

SizeCircle: styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.sizeCircleBackground || "#f0f0f0"};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.sizeCircleText || "#000"};
`,
OrderSummaryContainer: styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 25px;
  border: 2px dashed ${(props) => props.theme.colors.border || '#d3d3d3'};
  border-radius: 15px;
  background: ${(props) => props.theme.colors.cardBackground || '#f5f5f5'};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
  margin-top: 30px;
`,

OrderSummaryTitle: styled.h4`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.titleText || '#2c3e50'};
  margin-bottom: 15px;
  text-align: center;
`,

Divider: styled.div`
  border-top: 2px solid ${(props) => props.theme.colors.border || '#d3d3d3'};
  margin: 15px 0;
`,

OrderSummaryRow: styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.textColor || '#4a4a4a'};
`,

OrderSummaryText: styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.textColor || '#4a4a4a'};
  margin: 0;
`,

OrderSummaryHighlight: styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.highlight || '#007bff'};
  margin: 0;
`,

CheckoutButton: styled.button`
  padding: 12px 20px;
  border: none;
  border-radius: 25px;
  background: ${(props) => props.theme.colors.buttonBackground || '#28a745'};
  color: ${(props) => props.theme.colors.buttonText || '#ffffff'};
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: bold;
  text-transform: uppercase;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.colors.buttonHover || '#218838'};
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`,
CarrierContainer: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    padding: 15px 0;
  `,

  // Style pour chaque carte de transporteur
  CarrierCard: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 120px;
    padding: 12px;
    border: ${(props) =>
      props.isSelected
        ? `3px solid ${props.theme.colors.highlight || '#007bff'}`
        : `1px solid ${props.theme.colors.border || '#ccc'}`};
    border-radius: 10px;
    cursor: pointer;
    background-color: ${(props) =>
      props.isSelected
        ? props.theme.colors.selectedBackground || '#eaf4ff'
        : props.theme.colors.cardBackground || '#fff'};
    transition: all 0.3s ease;

    img {
      width: 60px;
      height: auto;
      margin-bottom: 8px;
    }

    &:hover {
      border: 3px solid ${(props) => props.theme.colors.highlight || '#007bff'};
    }
  `,

  // Conteneur pour les adresses
  AddressContainer: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 15px 0;
  `,

  // Style pour chaque carte d'adresse
  AddressCard: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 220px;
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
        : props.theme.colors.cardBackground || '#fff'};
    transition: all 0.3s ease;

    p {
      font-size: 0.9rem;
      text-align: center;
      color: ${(props) => props.theme.colors.textColor || '#4a4a4a'};
    }

    &:hover {
      border: 3px solid ${(props) => props.theme.colors.highlight || '#007bff'};
    }
  `,

  // Conteneur pour les méthodes de paiement
  PaymentMethodContainer: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    padding: 15px 0;
  `,

  // Style pour chaque carte de méthode de paiement
  PaymentMethodCard: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 120px;
    padding: 12px;
    border: ${(props) =>
      props.isSelected
        ? `3px solid ${props.theme.colors.highlight || '#007bff'}`
        : `1px solid ${props.theme.colors.border || '#ccc'}`};
    border-radius: 10px;
    cursor: pointer;
    background-color: ${(props) =>
      props.isSelected
        ? props.theme.colors.selectedBackground || '#eaf4ff'
        : props.theme.colors.cardBackground || '#fff'};
    transition: all 0.3s ease;

    img {
      width: 50px;
      height: auto;
      margin-bottom: 8px;
    }

    &:hover {
      border: 3px solid ${(props) => props.theme.colors.highlight || '#007bff'};
    }
  `,

}

