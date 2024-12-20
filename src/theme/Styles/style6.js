import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { shimmer, gradientAnimation } from '../animations';
export const style6 = {
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
justify-content: center;
align-items: center;
height: 656px;
width: 270px;
border-radius: 8px;
overflow: hidden;
margin: auto;

border-radius: 16px;
background-color: ${(props) => props.theme.colors.cardBackground };
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
background-color: ${(props) => props.theme.colors.cardPropertyBackground };
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
border-bottom: 2px solid ${(props) => props.theme.colors.cardBorder };
@media (max-width: 768px) {
object-fit: contain;

}
`,

  CardBody: styled.div`
flex-grow: 1;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding: 15px;
color: ${(props) => props.theme.colors.cardBodyText };
background-color: ${(props) => props.theme.colors.cardBodyBackground };
text-align: center;
`,

  ColorText: styled.p`
color: ${(props) => props.theme.colors.colorText};
font-size: 1rem;
font-weight: 600;
margin-bottom: 10px;
`,

  DiscountBadge: styled.span`
background-color: ${(props) => props.theme.colors.discountBadgeBackground};
color: ${(props) => props.theme.colors.discountBadgeText };
border-radius: 50px;
padding: 8px 16px;
font-size: 0.85rem;
font-weight: bold;
box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
margin-top: 10px;
`,

  Countdown: styled.div`
width: 90%;
background: ${(props) => props.theme.colors.countdownBackground };
color: ${(props) => props.theme.colors.countdownText };
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
color: ${(props) => props.theme.colors.timeText};
`,
  FeatureWrapper: styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
padding: 40px;
background: linear-gradient(
  105deg,
  ${(props) => props.theme.colors.featureTextColor},
  ${(props) => props.theme.colors.featureBackground}
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
  @media (max-width: 768px) {
     max-width: 95%;
     margin: 10px auto;
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
justify-content: space-evenly; 
`,

ColumnExplore: styled.div`
flex: 1;
min-width: 320px; 
@media (max-width: 768px) {
  min-width: 100%;
}
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
height: 450px;
overflow: hidden;
border-radius: 25px 25px 0 0;
background: ${(props) => props.theme.colors.imageWrapperBackground};
display: flex;
justify-content: center;
align-items: center;

`,

  ImageWrapperExploreStandart: styled.div`
width: 100%;
height: 450px; 
overflow: hidden;
border-radius: 25px 25px 0 0;
background: ${(props) => props.theme.colors.imageWrapperBackground};
display: flex;
justify-content: center;
align-items: center;
`,

CardImageExploreStandart: styled.img`
width: auto;
height: 100%;
object-fit: cover;
  border-bottom: 3px solid ${(props) => props.theme.colors.cardBorder};
`,

  CardImageExploreDifferent: styled.img`
width: auto;
height: 100%;
object-fit: cover;
 border-bottom: 3px solid ${(props) => props.theme.colors.cardBorder};
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
  EmailCardContainer: styled.div`
 max-width: 600px;
margin: 20px auto;
background-color: ${(props) => props.theme.colors.cardBackground };
border-radius: 15px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
text-align: center;
padding: 30px;
border: 1px solid ${(props) => props.theme.colors.border };
`,
  ContainerDetailsProduct: styled.div`
    padding: 10px;
    background: ${(props) => props.theme.colors.containerBackground};
    border-radius: 30px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    transition: transform 0.4s ease, background-color 0.4s ease;

    &:hover {
      transform: scale(1.03);
      background: linear-gradient(
        145deg,
        ${(props) => props.theme.colors.containerBackground },
        ${(props) => props.theme.colors.hoverContainerBackground }
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
      ${(props) => props.theme.colors.principalDetailsBackground },
      ${(props) => props.theme.colors.secondaryBackground }
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
    color: ${(props) => props.theme.colors.textColor};
    text-transform: uppercase;
    letter-spacing: 1.2px;
  `,

  SizeSelectionDetailProduct: styled.div`
    margin: 20px 0;
    font-size: 18px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.textColor};
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
    color: ${(props) => props.theme.colors.infoTextColor };
    background: ${(props) => props.theme.colors.infoBackground };
    border-left: 6px solid ${(props) => props.theme.colors.primary};
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
    background: ${(props) => props.theme.colors.featureBackground };
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
     width: 200px;
    height: 150px;
    padding: 25px;
    background-color: ${(props) => props.theme.colors.objectBackground };
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
      color: ${(props) => props.theme.colors.featureTextColor };
    }
  `,

  ImageEncadrement: styled.img`
    border: 3px solid ${(props) => props.theme.colors.imageBorder};
    padding: 10px;
    border-radius: 15px;
    width: 100%;
    max-width: 450px;
    background-color: ${(props) => props.theme.colors.imageBackground };
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  `,

  ColorButton: styled.button`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 4px solid ${(props) => (props.isSelected ? props.theme.colors.primary : "#ddd")};
    background: ${(props) => props.color};
    cursor: pointer;
    transition: transform 0.3s ease, border-color 0.3s ease;

    &:hover {
      transform: scale(1.2);
      border-color: ${(props) => props.theme.colors.primary };
    }
  `,

  SizeButton: styled.button`
    width: 40px;
    height: 40px;
    border-radius: 15%;
    border: 4px solid ${(props) => (props.isSelected ? props.theme.colors.primary : "#ddd")};
    background: ${(props) => (props.isSelected ? props.theme.colors.primary  : "#f7f7f7")};
    color: ${(props) => (props.isSelected ? "#fff" : "#000")};
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.3s ease, background-color 0.3s ease;

    &:hover {
      transform: scale(1.15);
      background: ${(props) => props.theme.colors.primary };
      color: #fff;
    }
  `,
  ColorCircle: styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.sizeCircleBackground};
  border: ${(props) => (props.isSelected ? `2px solid ${props.theme.colors.primary}` : '2px solid #ccc')};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: scale(1.1);
    background-color: ${(props) => props.theme.colors.hoverBackground};
  }
`,

  SizeCircle: styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.sizeCircleBackground};
  border: ${(props) => (props.isSelected ? `2px solid ${props.theme.colors.primary}` : '2px solid #ccc')};
  color: ${(props) => (props.isSelected ? '#fff' : props.theme.colors.buttonText)};
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

  CartItemTitle: styled.h1`
  font-size: 1.9rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.textPrimary};
  margin-bottom: 0.5rem;
  text-align: left;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
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
      @media (max-width: 400px) {
    flex-direction: column;
    align-items: flex-start;
  }
`,

  CartItemContainer: styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 1rem 20px;
   @media (max-width: 768px) {
    width: 100%;
    margin: 10px 0px;

  }
  
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
  @media (max-width: 768px) {
    padding: 10px;
    gap: 1px;
    margin:auto;
    width: 100%;
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
@media (max-width: 768px) {
    font-size: 1.4rem;
  }
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
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
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
  @media (max-width: 768px) {
    padding: 10px 10px;
    font-size: 0.9rem;
  }
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
    @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    padding: 5px;
    width: 100%;
  }
  `,

  CarrierCard: styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: ${(props) => props.theme.colors.cardBackground};
  border: ${(props) =>
      props.isSelected
        ? `4px solid ${props.theme.colors.selectedBorder || props.theme.colors.primary}`
        : `1px solid ${props.theme.colors.cardBorder}`};
  border-radius: 15px;

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
        ? `4px solid ${props.theme.colors.selectedBorder || props.theme.colors.primary}`
        : `1px solid ${props.theme.colors.cardBorder}`};
  border-radius: 15px;
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
   
    background: ${(props) => props.theme.colors.containerBackground};
    border-radius: 20px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  `,

  PaymentMethodCard: styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme.colors.cardBackground};
  border: ${(props) =>
      props.isSelected
        ? `4px solid ${props.theme.colors.selectedBorder || props.theme.colors.primary}`
        : `1px solid ${props.theme.colors.cardBorder}`};
  border-radius: 15px;

  transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    background: ${(props) => props.theme.colors.hoverCardBackground};
  }
`,

  DashboardWrapper: styled.div`
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.gradientStart},
    ${(props) => props.theme.colors.gradientEnd}
  );
  padding: 30px;
    
  animation: ${gradientAnimation} 15s ease infinite;

  @media (max-width: 768px) {
    padding: 10px;
    margin-top: 50px;
  }
`,

  // Sidebar pour les onglets
  DashboardSidebar: styled.div`
  background: ${(props) => props.theme.colors.sidebarBackground || "#ffffff"};
  padding: 40px;
  border-radius: 25px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  position: fixed;
  top: ${(props) => props.theme.navbarHeight || "110px"};
  left: 0;
  height: calc(100% - ${(props) => props.theme.navbarHeight || "110px"});
  width: 280px;
  overflow-y: auto;
  animation: ${gradientAnimation} 15s ease infinite;

  @media (max-width: 992px) {
    width: 200px; /* Réduction de la largeur pour les écrans moyens */
  }

  @media (max-width: 768px) {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    margin: 10px 0;
    border-radius: 15px;
  }
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
        ? props.theme.colors.activeLinkText
        : props.theme.colors.linkText} !important;
background-color: ${(props) =>
      props.className?.includes('active')
        ? props.theme.colors.activeLinkBackground
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

  DashboardContent: styled.div`
  padding: 10px;
  margin-left: 220px;
  margin-top: 50px;
  background: ${(props) => props.theme.colors.contentBackground};
  border-radius: 25px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  animation: ${gradientAnimation} 15s ease infinite;

  @media (max-width: 992px) {
    margin-left: 180px; /* Ajustement pour les écrans moyens */
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 0px;
    width: 100%;
    padding: 20px;
  }
`,

  // Conteneur pour les onglets
  DashboardTabPane: styled.div`
padding: 10px;
background: ${(props) => props.theme.colors.cardBackground};
border-radius: 20px;
box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
`,

  // Carte principale
  DashboardCard: styled.div`
background: ${(props) => props.theme.colors.cardBackground};
border-radius: 20px;
box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
`,

  // En-tête de la carte
  DashboardCardHeader: styled.div`
padding: 35px;
background: ${(props) => props.theme.colors.cardHeaderBackground };
color: ${(props) => props.theme.colors.cardHeaderText };
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
margin-top: 20px;
padding: 20px;
background: ${(props) => props.theme.colors.cardBackground };
border-radius: 15px;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
border: 1px solid ${(props) => props.theme.colors.border };
transition: transform 0.3s ease;

&:hover {

  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
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
      padding-left: 30%;
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
  AddressListWrapper: styled.div`
display: flex;
flex-direction: column;
gap: 1.5rem;
padding: 2rem;
background: linear-gradient(
  135deg,
  ${(props) => props.theme.colors.gradientStart},
  ${(props) => props.theme.colors.gradientEnd}
);
border-radius: 15px;
box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
animation: ${gradientAnimation} 15s ease infinite;
`,

AddNewAddressButton: styled.button`
background: ${(props) => props.theme.colors.buttonBackground};
color: ${(props) => props.theme.colors.buttonText};
border: none;
padding: 10px;
border-radius: 10px;
font-weight: bold;
font-size: 1rem;
cursor: pointer;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
transition: transform 0.3s ease, background-color 0.3s ease;

&:hover {
  background: ${(props) => props.theme.colors.buttonHover};
}
`,

AddressCardList: styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
gap: 1.5rem;
`,

 AddressCardHeader: styled.div`
background: ${(props) => props.theme.colors.cardHeaderBackground};
color: ${(props) => props.theme.colors.cardHeaderText};
font-size: 1.25rem;
font-weight: bold;
padding: 1rem;
border-radius: 15px;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
text-align: center;
margin-bottom: 1rem;
`,

AddressCardBody: styled.div`
padding: 1.5rem;
background: ${(props) => props.theme.colors.cardBodyBackground};
color: ${(props) => props.theme.colors.cardBodyText};
border-radius: 0 0 15px 15px;
box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
transition: background-color 0.3s ease;

&:hover {
  background: ${(props) => props.theme.colors.cardBodyHoverBackground};
}
`,

Address: styled.p`
margin: 0.5rem 0;
font-size: 1rem;
font-weight: 500;
color: ${(props) => props.theme.colors.textColor};
`,

ButtonGroup: styled.div`
display: flex;
gap: 0.75rem;
margin-top: 1rem;
justify-content: center;
`,

  EditButton: styled.button`
background: ${(props) => props.theme.colors.buttonBackground};
color: ${(props) => props.theme.colors.buttonText};
border: none;
padding: 0.5rem 1rem;
border-radius: 15px;
font-size: 0.9rem;
font-weight: bold;
cursor: pointer;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
transition: background-color 0.3s ease, transform 0.3s ease;

&:hover {
  background: ${(props) => props.theme.colors.editButtonHover};
  transform: scale(1.05);
}
`,

  DeleteButton: styled.button`
background: ${(props) => props.theme.colors.buttonBackground};
color: ${(props) => props.theme.colors.buttonText};
border: none;
padding: 0.5rem 1rem;
border-radius: 15px;
font-size: 0.9rem;
font-weight: bold;
cursor: pointer;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
transition: background-color 0.3s ease, transform 0.3s ease;

&:hover {
  background: ${(props) => props.theme.colors.deleteButtonHover};
  transform: scale(1.05);
}
`,

  EmptyAddressMessage: styled.p`
text-align: center;
font-size: 1.2rem;
font-weight: bold;
color: ${(props) => props.theme.colors.textMuted};
background: ${(props) => props.theme.colors.cardBackground};
padding: 1rem;
border-radius: 15px;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
animation: ${shimmer} 1.5s infinite;
`,

  LoadingMessage: styled.div`
text-align: center;
font-size: 1rem;
color: ${(props) => props.theme.colors.textMuted};
padding: 1rem;
border-radius: 15px;
background: ${(props) => props.theme.colors.cardBackground};
animation: ${shimmer} 1.5s infinite;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`,
  NoCarrierMessage: styled.div`
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.textMuted};
    background: ${(props) => props.theme.colors.cardBackground};
    padding: 1rem 2rem;
    border-radius: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    animation: ${shimmer} 1.5s infinite;
  `,

  // Image associée au transporteur
  CarrierImage: styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 15px;
    border: 2px solid ${(props) => props.theme.colors.cardBorder};
    transition: transform 0.3s ease, border-color 0.3s ease;

    &:hover {
      transform: scale(1.1);
      border-color: ${(props) => props.theme.colors.hoverBorder};
    }
  `,

  // Table pour afficher les informations des transporteurs
  CarrierTable: styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  background-color: ${(props) =>
    props.theme.colors.tableBackground};
  border: 1px solid ${(props) => props.theme.colors.border };
  border-radius: 10px;

  th,
  td {
    padding: 12px 15px;
    text-align: left;
    border: 1px solid ${(props) => props.theme.colors.border };
  }

  th {
    background-color: ${(props) =>
      props.theme.colors.tableHeaderBackground };
    color: ${(props) => props.theme.colors.tableHeaderText };
    text-transform: uppercase;
    font-weight: bold;
  }

  td {
    background-color: ${(props) =>
      props.theme.colors.tableRowBackground };
    color: ${(props) => props.theme.colors.tableText };
  }

  tr:hover {
    background-color: ${(props) =>
      props.theme.colors.tableRowHoverBackground };
  }
      @media (max-width: 768px) {
  thead {
    display: none;
  }

  th, td {
    display: block;
    text-align: left;
    padding: 10px;
  }

  td::before {
    content: attr(data-label);
    font-weight: bold;

    display: inline-block;
    margin-right: 10px;
  }
    td:last-child {
    margin-bottom: 5px;
}
}
`,
  // Conteneur pour la table des transporteurs
  CarrierTableContainer: styled.div`
    width: 100%;
 
    background: linear-gradient(
      135deg,
      ${(props) => props.theme.colors.gradientStart},
      ${(props) => props.theme.colors.gradientEnd}
    );
    border-radius: 20px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
    animation: ${gradientAnimation} 15s ease infinite;

    &:hover {
      transform: scale(1.03);
      box-shadow: 0 12px 25px rgba(0, 0, 0, 0.3);
    }
  `,

  // Wrapper principal pour l'affichage des transporteurs
  CarrierWrapper: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 1rem;

    background: ${(props) => props.theme.colors.containerBackground};
    border-radius: 20px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  `,
}