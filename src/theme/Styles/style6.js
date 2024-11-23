import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { shimmer, gradientAnimation } from '../animations';
export const style6= {
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
`,
ContainerDetailsProduct: styled.div`
    padding: 50px;
    background: ${(props) => props.theme.colors.containerBackground || "#fff"};
    border-radius: 30px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    transition: transform 0.4s ease, background-color 0.4s ease;

    &:hover {
      transform: scale(1.03);
      background: linear-gradient(
        145deg,
        ${(props) => props.theme.colors.containerBackground || "#f7f7f7"},
        ${(props) => props.theme.colors.hoverContainerBackground || "#ebebeb"}
      );
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    }
  `,

  PrincipalDetailsDetailProduct: styled.div`
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    background: radial-gradient(
      circle,
      ${(props) => props.theme.colors.principalDetailsBackground || "#fff"},
      ${(props) => props.theme.colors.secondaryBackground || "#f4f4f4"}
    );
    border-radius: 20px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
    }
  `,

  ColorSelectionDetailProduct: styled.div`
    margin: 20px 0;
    font-size: 18px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.textColor || "#333"};
    text-transform: uppercase;
    letter-spacing: 1.2px;
  `,

  SizeSelectionDetailProduct: styled.div`
    margin: 20px 0;
    font-size: 18px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.textColor || "#333"};
    text-transform: uppercase;
    letter-spacing: 1.2px;
  `,

  ColorOptionsDetailProduct: styled.div`
    display: flex;
    gap: 15px;
    justify-content: center;
    margin-top: 20px;
  `,

  SizeOptionsDetailProduct: styled.div`
    display: flex;
    gap: 15px;
    justify-content: center;
    margin-top: 20px;
  `,

  InfoSelectionDetailProduct: styled.div`
    margin-top: 25px;
    font-size: 20px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.infoTextColor || "#444"};
    background: ${(props) => props.theme.colors.infoBackground || "#fefefe"};
    border-left: 6px solid ${(props) => props.theme.colors.primary || "#007BFF"};
    padding: 10px 20px;
    border-radius: 12px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    }
  `,

  FeatureDetailProduct: styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-top: 40px;
    padding: 30px;
    background: ${(props) => props.theme.colors.featureBackground || "#f9f9f9"};
    border-radius: 25px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    gap: 25px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.02);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    }
  `,

  ObjectFeatureDetailProduct: styled.div`
    text-align: center;
    padding: 25px;
    background-color: ${(props) => props.theme.colors.objectBackground || "#ffffff"};
    border-radius: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px) scale(1.05);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }

    p {
      margin-top: 15px;
      font-size: 16px;
      color: ${(props) => props.theme.colors.featureTextColor || "#555"};
    }
  `,

  ImageEncadrement: styled.img`
    border: 3px solid ${(props) => props.theme.colors.imageBorder || "#ddd"};
    padding: 10px;
    border-radius: 15px;
    width: 100%;
    max-width: 450px;
    background-color: ${(props) => props.theme.colors.imageBackground || "#f9f9f9"};
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  `,

  ColorButton: styled.button`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 4px solid ${(props) => (props.isSelected ? props.theme.colors.primary || "#007BFF" : "#ddd")};
    background: ${(props) => props.color};
    cursor: pointer;
    transition: transform 0.3s ease, border-color 0.3s ease;

    &:hover {
      transform: scale(1.2);
      border-color: ${(props) => props.theme.colors.primary || "#0056b3"};
    }
  `,

  SizeButton: styled.button`
    width: 70px;
    height: 70px;
    border-radius: 15%;
    border: 4px solid ${(props) => (props.isSelected ? props.theme.colors.primary || "#007BFF" : "#ddd")};
    background: ${(props) => (props.isSelected ? props.theme.colors.primary || "#007BFF" : "#f7f7f7")};
    color: ${(props) => (props.isSelected ? "#fff" : "#000")};
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.3s ease, background-color 0.3s ease;

    &:hover {
      transform: scale(1.15);
      background: ${(props) => props.theme.colors.primary || "#0056b3"};
      color: #fff;
    }
  `,
  ColorCircle: styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  border: ${(props) => (props.isSelected ? `2px solid ${props.theme.colors.primary}` : '2px solid #ccc')};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: scale(1.1);
    border-color: ${(props) => props.theme.colors.hoverBorder};
  }
`,

SizeCircle: styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.sizeCircleBackground};
  border: ${(props) => (props.isSelected ? `2px solid ${props.theme.colors.primary}` : '2px solid #ccc')};
  color: ${(props) => (props.isSelected ? '#fff' : props.theme.colors.textColor)};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    background-color: ${(props) => props.theme.colors.hoverBackground};
  }
`,

CartItemQuantity: styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.textColor};
  background-color: ${(props) => props.theme.colors.quantityBackground};
  padding: 0.5rem;
  border-radius: 10px;
  display: inline-block;
  text-align: center;
  min-width: 40px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.hoverBackground};
  }
`,

CartItemButton: styled.button`
  background-color: ${(props) => props.theme.colors.buttonBackground};
  color: ${(props) => props.theme.colors.buttonText};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
  margin: 1rem;

  &:hover {
    background-color: ${(props) => props.theme.colors.buttonHover};
    transform: scale(1.05);
  }
`,

IncrDecButton: styled.button`
  width: 35px;
  height: 35px;
  background-color: ${(props) => props.theme.colors.buttonBackground};
  color: ${(props) => props.theme.colors.buttonText};
  border: none;
  border-radius: 50%;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.buttonHover};
    transform: scale(1.1);
  }
`,

CartItemIncrDec: styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,

CartItemVariantInfo: styled.div`
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.textSecondary};
  margin-top: 0.5rem;
  text-align: left;
`,

CartItemPrice: styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.priceColor};
  margin-top: 1rem;
`,

CartItemTitle: styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.textPrimary};
  margin-bottom: 0.5rem;
  text-align: left;
`,

CartItemImage: styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`,

CartItemInfo: styled.div`
  flex-grow: 1;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,

CartItem: styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.cartItemBackground};
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`,

CartItemContainer: styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 1rem 20px;
`,
OrderSummaryContainer: styled.div`
width: 100%;
max-width: 700px;
margin: 2rem auto;
padding: 1.5rem;
background: linear-gradient(
  135deg,
  ${(props) => props.theme.colors.gradientStart},
  ${(props) => props.theme.colors.gradientEnd}
);
border-radius: 20px;
box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
transition: transform 0.3s ease, box-shadow 0.3s ease;

&:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}
`,

// Titre du résumé de commande
OrderSummaryTitle: styled.h2`
font-size: 1.75rem;
font-weight: bold;
color: ${(props) => props.theme.colors.logoText};
text-align: center;
text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
margin-bottom: 1.5rem;
`,

// Ligne de séparation subtile
Divider: styled.hr`
border: 0;
height: 2px;
background: ${(props) => props.theme.colors.gradientMid};
margin: 1rem 0;
`,

// Ligne pour chaque détail dans le résumé
OrderSummaryRow: styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0.75rem 0;
font-size: 1rem;
font-weight: 500;
color: ${(props) => props.theme.colors.navItemText};
`,

// Texte simple pour les détails
OrderSummaryText: styled.span`
color: ${(props) => props.theme.colors.cardBodyText};
transition: color 0.3s ease;

&:hover {
  color: ${(props) => props.theme.colors.navItemHoverBackground};
}
`,

// Texte mis en évidence (comme le total)
OrderSummaryHighlight: styled.span`
font-weight: bold;
font-size: 1.1rem;
color: ${(props) => props.theme.colors.buttonHover};
text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
`,

// Bouton de validation de la commande
CheckoutButton: styled.button`
width: 100%;
padding: 0.75rem;
background: linear-gradient(
  135deg,
  ${(props) => props.theme.colors.buttonBackground},
  ${(props) => props.theme.colors.buttonHover}
);
color: ${(props) => props.theme.colors.buttonText};
border: none;
border-radius: 12px;
font-size: 1rem;
font-weight: bold;
text-transform: uppercase;
cursor: pointer;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;

&:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.buttonHover},
    ${(props) => props.theme.colors.buttonBackground}
  );
}
`,
CarrierContainer: styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 2rem;
    padding: 1.5rem;
    background: linear-gradient(
      135deg,
      ${(props) => props.theme.colors.gradientStart},
      ${(props) => props.theme.colors.gradientEnd}
    );
    border-radius: 20px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  `,

  CarrierCard: styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: ${(props) => props.theme.colors.cardBackground};
  border: ${(props) =>
    props.isSelected
      ? `3px solid ${props.theme.colors.selectedBorder || props.theme.colors.primary}`
      : `2px solid ${props.theme.colors.cardBorder}`};
  border-radius: 15px;
  box-shadow: ${(props) =>
    props.isSelected
      ? '0 10px 25px rgba(0, 0, 255, 0.3)'
      : '0 8px 20px rgba(0, 0, 0, 0.15)'};
  transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    background: ${(props) => props.theme.colors.hoverCardBackground};
  }
`,


  AddressContainer: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 2rem;
    padding: 1.5rem;
    background: ${(props) => props.theme.colors.containerBackground};
    border-radius: 20px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  `,

  AddressCard: styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background: ${(props) => props.theme.colors.cardBackground};
  border: ${(props) =>
    props.isSelected
      ? `3px solid ${props.theme.colors.selectedBorder || props.theme.colors.primary}`
      : `2px solid ${props.theme.colors.cardBorder}`};
  border-radius: 15px;
  box-shadow: ${(props) =>
    props.isSelected
      ? '0 10px 25px rgba(0, 0, 255, 0.3)'
      : '0 8px 20px rgba(0, 0, 0, 0.15)'};
  transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    background: ${(props) => props.theme.colors.hoverCardBackground};
  }
`,


  PaymentMethodContainer: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 2rem;
    padding: 1.5rem;
    background: ${(props) => props.theme.colors.containerBackground};
    border-radius: 20px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  `,

  PaymentMethodCard: styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background: ${(props) => props.theme.colors.cardBackground};
  border: ${(props) =>
    props.isSelected
      ? `3px solid ${props.theme.colors.selectedBorder || props.theme.colors.primary}`
      : `2px solid ${props.theme.colors.cardBorder}`};
  border-radius: 15px;
  box-shadow: ${(props) =>
    props.isSelected
      ? '0 10px 25px rgba(0, 0, 255, 0.3)'
      : '0 8px 20px rgba(0, 0, 0, 0.15)'};
  transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    background: ${(props) => props.theme.colors.hoverCardBackground};
  }
`,

DashboardWrapper: styled.div`
background: linear-gradient(135deg, ${(props) => props.theme.colors.gradientStart}, ${(props) => props.theme.colors.gradientEnd});
min-height: 80vh;
padding: 60px;
display: flex;
flex-direction: column;
align-items: center;
animation: ${gradientAnimation} 15s ease infinite;
`,

// Sidebar pour les onglets
DashboardSidebar: styled.div`
background: ${(props) => props.theme.colors.sidebarBackground || '#ffffff'};
padding: 40px;
border-radius: 25px;
box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
position: fixed;
top: ${(props) => props.theme.navbarHeight || '110px'};
left: 0;
height: calc(100% - ${(props) => props.theme.navbarHeight || '110px'});
width: 280px;
overflow-y: auto;
animation: ${gradientAnimation} 15s ease infinite;
`,

// Élément de navigation dans la sidebar
DashboardNavItem: styled.li`
margin-bottom: 35px;
list-style: none;
`,

// Liens de navigation dans la sidebar
DashboardNavLink: styled(NavLink)`
display: flex;
align-items: center;
padding: 22px 28px;
font-size: 22px;
font-weight: bold;
color: ${(props) =>
  props.className?.includes('active')
    ? props.theme.colors.activeLinkText || '#ffffff'
    : props.theme.colors.linkText || '#333'} !important;
background-color: ${(props) =>
  props.className?.includes('active')
    ? props.theme.colors.activeLinkBackground || '#007BFF'
    : 'transparent'} !important;
border-radius: 12px;
text-decoration: none !important;
transition: background-color 0.4s ease, color 0.4s ease, transform 0.3s ease;
position: relative;
overflow: hidden;

&::before {
  content: '';
  position: absolute;
  left: -100%;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  transition: left 0.5s ease;
}

&:hover::before {
  left: 0;
}

&:hover {
  transform: translateX(10px);
}

i {
  margin-right: 18px;
}
`,

// Contenu principal du tableau de bord
DashboardContent: styled.div`
padding: 50px;
margin-left: 320px; /* Pour laisser de la place à la sidebar */
background: ${(props) => props.theme.colors.contentBackground || '#f0f0f0'};
border-radius: 25px;
box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
animation: ${gradientAnimation} 15s ease infinite;
`,

// Conteneur pour les onglets
DashboardTabPane: styled.div`
padding: 40px;
background: ${(props) => props.theme.colors.cardBackground || '#ffffff'};
border-radius: 20px;
box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
`,

// Carte principale
DashboardCard: styled.div`
background: ${(props) => props.theme.colors.cardBackground || '#ffffff'};
border-radius: 20px;
box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
`,

// En-tête de la carte
DashboardCardHeader: styled.div`
padding: 35px;
background: ${(props) => props.theme.colors.cardHeaderBackground || '#007BFF'};
color: ${(props) => props.theme.colors.cardHeaderText || '#ffffff'};
border-top-left-radius: 20px;
border-top-right-radius: 20px;
text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
`,

// Corps de la carte
DashboardCardBody: styled.div`
padding: 35px;
`,
TableWrapper: styled.div`
  overflow-x: auto;
  margin: 20px 0;
  padding: 20px;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.gradientStart},
    ${(props) => props.theme.colors.gradientEnd}
  );
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  animation: ${gradientAnimation} 12s ease infinite;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.3);
  }
`,

ResponsiveTable: styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1rem;

  th,
  td {
    padding: 15px 20px;
    text-align: left;
    border: 1px solid ${(props) => props.theme.colors.cardBorder};
  }

  th {
    background: ${(props) => props.theme.colors.tableHeaderBackground};
    color: ${(props) => props.theme.colors.tableHeaderText};
    text-transform: uppercase;
    font-weight: bold;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  td {
    background: ${(props) => props.theme.colors.cardBackground};
    color: ${(props) => props.theme.colors.textColor};
    transition: background-color 0.3s ease;

    &:hover {
      background: ${(props) =>
        props.theme.colors.tableRowHoverBackground || '#f5f5f5'};
    }
  }

  @media (max-width: 768px) {
    th {
      display: none;
    }

    td {
      display: block;
      text-align: right;
      position: relative;
      padding-left: 50%;
    }

    td::before {
      content: attr(data-label);
      position: absolute;
      left: 10px;
      font-weight: bold;
      text-transform: uppercase;
      color: ${(props) => props.theme.colors.textMuted};
    }
  }
`,

TableButton: styled.button`
  padding: 12px 25px;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.buttonBackground},
    ${(props) => props.theme.colors.buttonHover}
  );
  color: ${(props) => props.theme.colors.buttonText};
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, background 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background: linear-gradient(
      135deg,
      ${(props) => props.theme.colors.buttonHover},
      ${(props) => props.theme.colors.buttonBackground}
    );
  }

  &:active {
    transform: scale(0.95);
  }
`,

TableEmptyMessage: styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: ${(props) => props.theme.colors.textColor};
  background: ${(props) => props.theme.colors.cardBackground};
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  animation: ${shimmer} 1.5s infinite;
`,

}