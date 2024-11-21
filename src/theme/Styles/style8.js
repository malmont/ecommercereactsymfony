import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const style8= {
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
`,


ContainerDetailsProduct: styled.div`
padding: 50px;
background: linear-gradient(
  135deg,
  ${(props) => props.theme?.colors?.containerGradientStart || "#f7f7f7"},
  ${(props) => props.theme?.colors?.containerGradientEnd || "#e0e0e0"}
);

border-radius: 20px;
box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
transition: all 0.3s ease;

&:hover {
  transform: scale(1.02);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
}
`,

PrincipalDetailsDetailProduct: styled.div`
padding: 40px;
background: radial-gradient(
  circle,
  ${(props) => props.theme?.colors?.principalDetailsBackground || "#ffffff"},
  ${(props) => props.theme?.colors?.secondaryBackground || "#f4f4f4"}
);
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
border: 3px solid ${(props) => props.theme?.colors?.goldAccent || "#d4af37"};
border-radius: 15px;
box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`,

ImageEncadrement: styled.img`
width: 100%;
max-width: 450px;
border-radius: 15px;
border: 4px solid ${(props) => props.theme?.colors?.goldAccent || "#d4af37"};
box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
transition: transform 0.3s ease;

&:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}
`,

ColorSelectionDetailProduct: styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
`,

ColorOptionsDetailProduct: styled.div`
display: flex;
gap: 10px;
flex-wrap: wrap;
justify-content: center;
`,

ColorButton: styled.button`
width: 50px;
height: 50px;
border-radius: 50%;
background-color: ${(props) => props.color || "#ddd"};
border: 3px solid ${(props) => (props.isSelected ? props.theme?.colors?.goldAccent || "#d4af37" : "#ccc")};
transition: transform 0.3s ease, box-shadow 0.3s ease;

&:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 10px ${(props) => props.theme?.colors?.goldAccent || "#d4af37"};
}
`,

SizeSelectionDetailProduct: styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
`,

SizeOptionsDetailProduct: styled.div`
display: flex;
gap: 15px;
justify-content: center;
`,

SizeButton: styled.button`
width: 60px;
height: 60px;
background-color: ${(props) => (props.isSelected ? props.theme?.colors?.goldAccent || "#d4af37" : "#f5f5f5")};
border: 3px solid ${(props) => (props.isSelected ? props.theme?.colors?.goldAccent || "#d4af37" : "#ccc")};
color: ${(props) => (props.isSelected ? "#fff" : "#000")};
font-size: 16px;
font-weight: bold;
border-radius: 15%;
transition: transform 0.3s ease, background-color 0.3s ease;

&:hover {
  transform: translateY(-3px) scale(1.05);
  background-color: ${(props) => props.theme?.colors?.goldHover || "#e5c26b"};
  color: #fff;
}
`,
ObjectFeatureDetailProduct: styled.div`
  text-align: center;
  padding: 20px;
  background: ${(props) => props.theme?.colors?.featureBackground || "#ffffff"};
  border-radius: 15px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }

  p {
    margin-top: 10px;
    font-size: 16px;
    color: ${(props) => props.theme?.colors?.featureTextColor || "#666"};
  }
`,

InfoSelectionDetailProduct: styled.div`
margin-top: 20px;
padding: 15px 25px;
background-color: ${(props) => props.theme?.colors?.infoBackground || "#f5f5f5"};
color: ${(props) => props.theme?.colors?.infoTextColor || "#333"};
border: 2px solid ${(props) => props.theme?.colors?.goldAccent || "#d4af37"};
border-radius: 10px;
box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
font-weight: bold;
font-size: 18px;
transition: transform 0.3s ease;

&:hover {
  transform: translateY(-5px);
}
`,

FeatureDetailProduct: styled.div`
display: flex;
flex-wrap: wrap;
gap: 20px;
padding: 30px;
justify-content: space-between;
background: linear-gradient(
  145deg,
  ${(props) => props.theme?.colors?.featureGradientStart || "#eef2f3"},
  ${(props) => props.theme?.colors?.featureGradientEnd || "#e0e0e0"}
);

border-radius: 15px;
box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
`,
ColorCircle: styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: ${(props) => props.color || '#ddd'};
border: ${(props) =>
  props.isSelected
    ? `3px solid ${props.theme.colors.goldAccent || '#d4af37'}`
    : '2px solid #ccc'};
transition: all 0.3s ease;

&:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 10px ${(props) => props.theme.colors.goldAccent || '#d4af37'};
}
`,

SizeCircle: styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: ${(props) =>
  props.isSelected ? props.theme.colors.goldAccent || '#d4af37' : '#f7f7f7'};
color: ${(props) => (props.isSelected ? '#fff' : '#000')};
display: flex;
align-items: center;
justify-content: center;
border: ${(props) =>
  props.isSelected
    ? `3px solid ${props.theme.colors.goldAccent || '#d4af37'}`
    : '2px solid #ccc'};
font-weight: bold;
font-size: 0.9rem;
transition: all 0.3s ease;

&:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 10px ${(props) => props.theme.colors.goldAccent || '#d4af37'};
}
`,

CartItemQuantity: styled.div`
font-size: 0.9rem;
font-weight: bold;
color: ${(props) => props.theme.colors.textPrimary};
margin: 0 5px;
text-align: center;
`,

CartItemButton: styled.button`
background: ${(props) => props.theme.colors.buttonBackground};
color: ${(props) => props.theme.colors.buttonText};
border: none;
border-radius: 5px;
padding: 5px 10px;
cursor: pointer;
transition: all 0.3s ease;

&:hover {
  background: ${(props) => props.theme.colors.buttonHover};
  transform: translateY(-2px);
}

&:disabled {
  background: ${(props) => props.theme.colors.disabledBackground};
  cursor: not-allowed;
}
`,

IncrDecButton: styled.button`
background: ${(props) => props.theme.colors.buttonBackground};
color: ${(props) => props.theme.colors.buttonText};
border: none;
border-radius: 50%;
width: 30px;
height: 30px;
display: flex;
align-items: center;
justify-content: center;
font-size: 1rem;
cursor: pointer;
transition: all 0.3s ease;

&:hover {
  background: ${(props) => props.theme.colors.buttonHover};
  transform: scale(1.1);
}
`,

CartItemIncrDec: styled.div`
display: flex;
align-items: center;
gap: 8px;
`,

CartItemVariantInfo: styled.div`
font-size: 0.8rem;
color: ${(props) => props.theme.colors.textSecondary};
`,

CartItemPrice: styled.div`
font-size: 1.1rem;
font-weight: bold;
color: ${(props) => props.theme.colors.goldAccent || '#d4af37'};
margin-top: 5px;
`,

CartItemTitle: styled.div`
font-size: 1rem;
font-weight: bold;
color: ${(props) => props.theme.colors.textPrimary};
text-align: left;
`,

CartItemImage: styled.img`
width: 200px;
height: 300px;
border-radius: 5px;
object-fit: cover;
box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
margin-right: 10px;
`,

CartItemInfo: styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 5px;
`,

CartItem: styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px;
background: ${(props) => props.theme.colors.cardBackground};
border: 2px solid ${(props) => props.theme.colors.goldAccent || '#d4af37'};
border-radius: 8px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
transition: all 0.3s ease;

&:hover {
  transform: scale(1.03);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}
`,

CartItemContainer: styled.div`
width: 55%;
display: flex;
flex-direction: column;
gap: 10px;
background: ${(props) => props.theme.colors.containerBackground};
padding: 15px;
border-radius: 10px;
box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
margin: 20px;
`,
OrderSummaryContainer: styled.div`
    width: 100%;
    max-width: 400px;
    margin: 2rem auto;
    padding: 1.5rem;
    background: ${(props) => props.theme.colors.cardBackground || '#fff'};
    border-radius: 15px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border: 2px solid ${(props) => props.theme.colors.goldAccent || '#d4af37'};
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
    }
  `,

  // Titre du résumé de commande
  OrderSummaryTitle: styled.h2`
    font-size: 1.6rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.textPrimary || '#333'};
    margin-bottom: 1rem;
    text-align: center;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  `,

  // Ligne de séparation subtile
  Divider: styled.hr`
    border: 0;
    height: 2px;
    background: ${(props) => props.theme.colors.goldAccent || '#d4af37'};
    margin: 1rem 0;
  `,

  // Ligne pour chaque détail dans le résumé
  OrderSummaryRow: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
    font-size: 1rem;
    font-weight: 500;
    color: ${(props) => props.theme.colors.textSecondary || '#555'};
  `,

  // Texte standard pour les détails
  OrderSummaryText: styled.span`
    color: ${(props) => props.theme.colors.textSecondary || '#666'};
    transition: color 0.3s ease;

    &:hover {
      color: ${(props) => props.theme.colors.goldAccent || '#d4af37'};
    }
  `,

  // Texte mis en évidence (comme le total)
  OrderSummaryHighlight: styled.span`
    font-weight: bold;
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.goldAccent || '#d4af37'};
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  `,

  // Bouton de validation de la commande
  CheckoutButton: styled.button`
    width: 100%;
    padding: 0.75rem;
    background: linear-gradient(
      90deg,
      ${(props) => props.theme.colors.goldAccent || '#d4af37'},
      ${(props) => props.theme.colors.buttonBackground || '#ffd700'}
    );
    color: ${(props) => props.theme.colors.buttonText || '#fff'};
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;

    &:hover {
      transform: scale(1.05);
      background: ${(props) => props.theme.colors.goldHover || '#e5c26b'};
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.25);
    }
  `,
}