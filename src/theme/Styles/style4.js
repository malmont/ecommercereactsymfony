import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const style4= {
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
`,
ContainerDetailsProduct: styled.div`
    padding: 40px;
    background: linear-gradient(145deg, ${(props) => props.theme.colors.containerBackground || "#f7f7f7"}, ${(props) => props.theme.colors.hoverContainerBackground || "#ebebeb"});
    border-radius: 25px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    transition: transform 0.4s ease, box-shadow 0.4s ease;

    &:hover {
      transform: scale(1.02);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
    }
  `,

  PrincipalDetailsDetailProduct: styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    background: radial-gradient(circle, ${(props) => props.theme.colors.principalDetailsBackground || "#fff"}, ${(props) => props.theme.colors.hoverContainerBackground || "#f7f7f7"});
    border-radius: 20px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
    transition: transform 0.4s ease;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }
  `,

  ColorSelectionDetailProduct: styled.div`
    margin: 30px 0;
    font-size: 18px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.textColor || "#333"};
    text-transform: uppercase;
    letter-spacing: 1px;
  `,

  SizeSelectionDetailProduct: styled.div`
    margin: 30px 0;
    font-size: 18px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.textColor || "#333"};
    text-transform: uppercase;
    letter-spacing: 1px;
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
    margin-top: 25px;
    font-size: 20px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.infoTextColor || "#444"};
    border-left: 4px solid ${(props) => props.theme.colors.infoBorderColor || "#007BFF"};
    padding-left: 10px;
    background-color: ${(props) => props.theme.colors.infoBackground || "#f9f9f9"};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  `,

  FeatureDetailProduct: styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-top: 40px;
    padding: 30px;
    background: linear-gradient(to right, ${(props) => props.theme.colors.featureBackground || "#f4f4f4"}, ${(props) => props.theme.colors.hoverContentBackground || "#ebebeb"});
    border-radius: 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
    gap: 20px;
  `,

  ObjectFeatureDetailProduct: styled.div`
    text-align: center;
    margin: 15px;
    padding: 20px;
    background-color: ${(props) => props.theme.colors.objectBackground || "#ffffff"};
    border-radius: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transform: rotate(0);
    transition: transform 0.4s ease, background-color 0.4s ease;

    &:hover {
      transform: rotate(-3deg) scale(1.05);
      background-color: ${(props) => props.theme.colors.hoverObjectBackground || "#fafafa"};
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
    }

    p {
      margin-top: 15px;
      font-size: 16px;
      color: ${(props) => props.theme.colors.featureTextColor || "#555"};
    }
  `,

  ImageEncadrement: styled.img`
    border: 3px solid ${(props) => props.theme.colors.imageBorder || "#ccc"};
    padding: 10px;
    border-radius: 20px;
    width: 100%;
    max-width: 400px;
    background-color: ${(props) => props.theme.colors.imageBackground || "#f9f9f9"};
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.12);
    transition: transform 0.4s ease;

    &:hover {
      transform: scale(1.08);
    }
  `,

  ColorButton: styled.button`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 4px solid ${(props) => (props.isSelected ? props.theme.colors.selectedBorder || "#0056b3" : "#ccc")};
    background: radial-gradient(circle, ${(props) => props.color}, ${(props) => props.theme.colors.buttonBackground || "#fff"});
    cursor: pointer;
    transition: transform 0.4s ease, border-color 0.4s ease;

    &:hover {
      transform: scale(1.15);
      border-color: ${(props) => props.theme.colors.hoverBorder || "#007BFF"};
    }
  `,

  SizeButton: styled.button`
    width: 70px;
    height: 70px;
    border-radius: 15%;
    border: 4px solid ${(props) => (props.isSelected ? props.theme.colors.selectedBorder || "#0056b3" : "#ccc")};
    background: linear-gradient(135deg, ${(props) => props.theme.colors.buttonBackground || "#007BFF"}, ${(props) => props.theme.colors.hoverBackground || "#0056b3"});
    color: ${(props) => (props.isSelected ? props.theme.colors.selectedText || "#fff" : "#000")};
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.4s ease, background-color 0.4s ease;

    &:hover {
      transform: scale(1.15);
      background: ${(props) => props.theme.colors.hoverBackground || "#003d99"};
      color: ${(props) => props.theme.colors.hoverText || "#fff"};
    }
  `,
  CartItemContainer: styled.div`
  margin-bottom: 30px;
  background: ${(props) => props.theme.colors.containerBackground};
  border-radius: 25px;
  padding: 20px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.4s ease;
  width: 80%;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`,

CartItem: styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 15px;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.hoverBackground};
  }

  &:last-child {
    border-bottom: none;
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
  height: 300px;
  object-fit: cover;
  border-radius: 15px;
  border: 2px solid ${(props) => props.theme.colors.border};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`,

CartItemTitle: styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.textColor};
`,

CartItemPrice: styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.textHighlight};
`,

CartItemVariantInfo: styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  background-color: ${(props) => props.theme.colors.cardBodyBackground};
  padding: 10px;
  border-radius: 12px;
`,

CartItemIncrDec: styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.cardBodyBackground};
  border-radius: 12px;
`,

IncrDecButton: styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.buttonBackground};
  border: none;
  border-radius: 50%;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.textColor};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.hoverButtonBackground};
  }
`,

CartItemButton: styled.button`
  padding: 10px 20px;
  border: none;
  background-color: ${(props) => props.theme.colors.buttonBackground};
  color: ${(props) => props.theme.colors.buttonText};
  border-radius: 15px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.hoverButtonBackground};
  }
`,

CartItemQuantity: styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.textColor};
`,

ColorCircle: styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  border: 1px solid ${(props) => props.theme.colors.border};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,

SizeCircle: styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.cardBodyBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.textColor};
  border: 1px solid ${(props) => props.theme.colors.border};
`,
OrderSummaryContainer: styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 25px;
  border: 1px solid ${(props) => props.theme.colors.border || '#e5e5e5'};
  border-radius: 20px;
  background: linear-gradient(
    145deg,
    ${(props) => props.theme.colors.cardBackground || '#f9f9f9'},
    ${(props) => props.theme.colors.secondaryBackground || '#ffffff'}
  );
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1); /* Ombrage général */
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2); /* Accentuation au survol */
  }
`,

OrderSummaryTitle: styled.h4`
  font-size: 1.6rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.titleText || '#333'};
  text-align: center;
  margin-bottom: 10px;
  text-transform: uppercase;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Ajout d'une ombre subtile */
`,

Divider: styled.div`
  border-top: 1px dashed ${(props) => props.theme.colors.border || '#ddd'};
  margin: 10px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); /* Ombre légère pour les séparations */
`,

OrderSummaryRow: styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  padding: 10px 15px;
  color: ${(props) => props.theme.colors.textColor || '#555'};
  background-color: ${(props) => props.theme.colors.rowBackground || '#ffffff'};
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1); /* Ajout d'ombre sur chaque ligne */
  transition: background-color 0.3s ease;

  &:nth-child(even) {
    background-color: ${(props) => props.theme.colors.alternateBackground || '#f8f8f8'};
  }
`,

OrderSummaryText: styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.textColor || '#666'};
  margin: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); /* Légère ombre pour le texte */
`,

OrderSummaryHighlight: styled.p`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.highlight || '#0078d7'};
  margin: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Accentuation pour les valeurs importantes */
`,

CheckoutButton: styled.button`
  padding: 15px 20px;
  border: none;
  border-radius: 30px;
  background: ${(props) => props.theme.colors.buttonBackground || '#4caf50'};
  color: ${(props) => props.theme.colors.buttonText || '#ffffff'};
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* Ombrage du bouton */
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.colors.buttonHover || '#3e8e41'};
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Ombre accentuée au survol */
  }
`,
CarrierContainer: styled.div`
display: flex;
gap: 20px;
flex-wrap: wrap;
justify-content: center;
padding: 20px;
background: ${(props) => props.theme.colors.containerBackground || '#f9f9f9'};
border-radius: 15px;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
transition: transform 0.3s ease, box-shadow 0.3s ease;

&:hover {
  transform: scale(1.02);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}
`,

CarrierCard: styled.div`
padding: 15px;
border: ${(props) =>
  props.isSelected
    ? `2px solid ${props.theme.colors.selectedBorder || '#007BFF'}`
    : `1px solid ${props.theme.colors.border || '#ccc'}`};
border-radius: 12px;
background-color: ${(props) => props.theme.colors.cardBackground || '#ffffff'};
box-shadow: ${(props) =>
  props.isSelected
    ? '0 4px 12px rgba(0, 123, 255, 0.2)'
    : '0 2px 6px rgba(0, 0, 0, 0.1)'};
cursor: pointer;
text-align: center;
transition: all 0.3s ease;

&:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
}

img {
  max-width: 80px;
  max-height: 50px;
  margin-bottom: 10px;
}
`,

AddressContainer: styled.div`
display: flex;
gap: 15px;
flex-wrap: wrap;
justify-content: center;
padding: 20px;
background: ${(props) => props.theme.colors.containerBackground || '#ffffff'};
border-radius: 10px;
box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
`,

AddressCard: styled.div`
padding: 15px;
border: ${(props) =>
  props.isSelected
    ? `2px solid ${props.theme.colors.selectedBorder || '#007BFF'}`
    : `1px solid ${props.theme.colors.border || '#ccc'}`};
border-radius: 8px;
background-color: ${(props) => props.theme.colors.cardBackground || '#f9f9f9'};
box-shadow: ${(props) =>
  props.isSelected
    ? '0 4px 12px rgba(0, 123, 255, 0.2)'
    : '0 2px 6px rgba(0, 0, 0, 0.1)'};
text-align: left;
cursor: pointer;
transition: all 0.3s ease;

&:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

p {
  margin: 5px 0;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.textColor || '#333'};
}
`,

PaymentMethodContainer: styled.div`
display: flex;
gap: 15px;
flex-wrap: wrap;
justify-content: center;
padding: 20px;
background: ${(props) => props.theme.colors.containerBackground || '#ffffff'};
border-radius: 15px;
box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
`,

PaymentMethodCard: styled.div`
padding: 15px;
border: ${(props) =>
  props.isSelected
    ? `2px solid ${props.theme.colors.selectedBorder || '#007BFF'}`
    : `1px solid ${props.theme.colors.border || '#ccc'}`};
border-radius: 12px;
background-color: ${(props) => props.theme.colors.cardBackground || '#ffffff'};
box-shadow: ${(props) =>
  props.isSelected
    ? '0 4px 12px rgba(0, 123, 255, 0.2)'
    : '0 2px 6px rgba(0, 0, 0, 0.1)'};
text-align: center;
cursor: pointer;
transition: all 0.3s ease;

&:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

img {
  max-width: 60px;
  max-height: 40px;
  margin-bottom: 10px;
}
`,
DashboardWrapper: styled.div`
background: ${(props) => props.theme.colors.contentBackground || '#1a1a1a'};
min-height: 70vh;
padding: 40px;
`,

// Sidebar pour les onglets
DashboardSidebar: styled.div`
background: ${(props) => props.theme.colors.sidebarBackground || '#333'};
padding: 30px;
border-radius: 15px;
color: ${(props) => props.theme.colors.sidebarText || '#f0f0f0'};
box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
`,

// Élément de navigation dans la sidebar
DashboardNavItem: styled.li`
margin-bottom: 25px;
list-style: none;
`,

// Liens de navigation dans la sidebar
DashboardNavLink: styled(NavLink)`
display: flex;
align-items: center;
padding: 18px 25px;
font-size: 18px;
font-weight: 600;
color: ${(props) =>
  props.className?.includes('active')
    ? props.theme.colors.activeLinkText || '#ffffff'
    : props.theme.colors.linkText || '#bfbfbf'} !important;
background: ${(props) =>
  props.className?.includes('active')
    ? props.theme.colors.activeLinkBackground || '#007BFF'
    : 'transparent'} !important;
border-radius: 10px;
text-decoration: none !important;
transition: background 0.3s ease, color 0.3s ease;

&:hover {
  background: ${(props) => props.theme.colors.linkHoverBackground || '#444'} !important;
  color: ${(props) => props.theme.colors.linkHoverText || '#ffffff'} !important;
}

i {
  margin-right: 15px;
}
`,

// Contenu principal du tableau de bord
DashboardContent: styled.div`
padding: 30px;
background: ${(props) => props.theme.colors.contentBackground || '#1a1a1a'};
border-radius: 15px;
box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
margin-left: 40px;
color: ${(props) => props.theme.colors.textColor || '#f0f0f0'};
`,

// Conteneur pour les onglets
DashboardTabPane: styled.div`
padding: 30px;
background: ${(props) => props.theme.colors.cardBackground || '#262626'};
box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
border-radius: 15px;
`,

// Carte principale
DashboardCard: styled.div`
background: ${(props) => props.theme.colors.cardBackground || '#262626'};
border-radius: 15px;
box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
color: ${(props) => props.theme.colors.cardText || '#f0f0f0'};
`,

// En-tête de la carte
DashboardCardHeader: styled.div`
padding: 25px;
border-bottom: 1px solid ${(props) => props.theme.colors.border || '#404040'};
background: ${(props) => props.theme.colors.cardHeaderBackground || '#007BFF'};
color: ${(props) => props.theme.colors.cardHeaderText || '#ffffff'};
border-top-left-radius: 15px;
border-top-right-radius: 15px;
`,

// Corps de la carte
DashboardCardBody: styled.div`
padding: 25px;
`,
TableWrapper: styled.div`
  overflow-x: auto;
  margin-top: 20px;
  padding: 15px;
  border-radius: 12px;
  background: ${(props) =>
    props.theme.colors.tableWrapperBackground || '#f9f9f9'};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid ${(props) => props.theme.colors.border || '#ddd'};
`,

ResponsiveTable: styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 0 auto;

  th,
  td {
    padding: 10px;
    border: 1px solid ${(props) => props.theme.colors.border || '#ddd'};
    text-align: left;
  }

  th {
    background: ${(props) => props.theme.colors.tableHeaderBackground || '#007BFF'};
    color: ${(props) => props.theme.colors.tableHeaderText || '#fff'};
    font-weight: bold;
    font-size: 1rem;
    text-transform: uppercase;
  }

  td {
    background: ${(props) => props.theme.colors.tableRowBackground || '#fff'};
    color: ${(props) => props.theme.colors.tableText || '#333'};
    font-size: 0.9rem;
    transition: background-color 0.3s ease;

    &:hover {
      background: ${(props) =>
        props.theme.colors.tableRowHoverBackground || '#f1f1f1'};
    }
  }

  @media (max-width: 768px) {
    th {
      display: none;
    }

    td {
      display: block;
      text-align: left;
      padding-left: 50%;
      position: relative;
      border: none;
      border-bottom: 1px solid ${(props) =>
        props.theme.colors.border || '#ddd'};
    }

    td::before {
      content: attr(data-label);
      position: absolute;
      left: 10px;
      font-weight: bold;
      text-transform: uppercase;
      color: ${(props) => props.theme.colors.tableTextMuted || '#666'};
    }
  }
`,

TableButton: styled.button`
  padding: 10px 15px;
  border: 1px solid ${(props) => props.theme.colors.buttonBorder || '#007BFF'};
  border-radius: 8px;
  background: ${(props) =>
    props.theme.colors.buttonBackground || '#007BFF'};
  color: ${(props) => props.theme.colors.buttonText || '#fff'};
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background: ${(props) =>
      props.theme.colors.buttonHoverBackground || '#0056b3'};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`,

TableEmptyMessage: styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.emptyMessageText || '#333'};
  text-align: center;
  margin-top: 20px;
  padding: 15px;
  border-radius: 10px;
  background: ${(props) =>
    props.theme.colors.emptyMessageBackground || '#f9f9f9'};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid ${(props) => props.theme.colors.border || '#ddd'};
`,

}