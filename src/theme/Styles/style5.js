import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const style5= {
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
CartItemContainer: styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
  border-radius: 15px;
  background: ${(props) => props.theme.colors.featureBackground};
  border: 1px solid ${(props) => props.theme.colors.border};
  transition: box-shadow 0.4s ease, transform 0.3s ease;
  width: 70%;
  margin-bottom: 20px;
  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: scale(1.02);
  }
`,

CartItem: styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 20px;
  align-items: center;
  padding: 15px;
  border-radius: 12px;
  background-color: ${(props) => props.theme.colors.cardBackground};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`,

CartItemInfo: styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,

CartItemImage: styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.colors.border};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
`,

CartItemTitle: styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.textHighlight};
`,

CartItemPrice: styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.textColor};
`,

CartItemVariantInfo: styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`,

CartItemIncrDec: styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 10px;
  padding: 5px 10px;
`,

IncrDecButton: styled.button`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: ${(props) => props.theme.colors.buttonBackground};
  color: ${(props) => props.theme.colors.buttonText};
  border-radius: 50%;
  font-size: 1.2rem;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: scale(1.1);
    background-color: ${(props) => props.theme.colors.buttonHover};
  }
`,

CartItemButton: styled.button`
  width: 120px;
  padding: 8px 12px;
  background-color: ${(props) => props.theme.colors.buttonBackground};
  color: ${(props) => props.theme.colors.buttonText};
  border: none;
  border-radius: 25px;
  font-weight: bold;
  font-size: 0.9rem;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.buttonHover};
    transform: scale(1.05);
  }
`,

CartItemQuantity: styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.textColor};
  padding: 0 10px;
`,

ColorCircle: styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  border: 1px solid ${(props) => props.theme.colors.border};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,

SizeCircle: styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.featureBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.textColor};
  border: 1px solid ${(props) => props.theme.colors.border};
`,
OrderSummaryContainer: styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  border-radius: 20px;
  background: ${(props) => props.theme.colors.cardBackground};
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid ${(props) => props.theme.colors.border || '#ddd'};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`,

OrderSummaryTitle: styled.h4`
  font-size: 1.8rem;
  font-weight: bold;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.titleText};
  text-align: center;
  margin-bottom: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
`,

Divider: styled.div`
  width: 100%;
  height: 1px;
  background: ${(props) => props.theme.colors.border || '#ddd'};
  margin: 10px 0;
  opacity: 0.8;
`,

OrderSummaryRow: styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.rowBackground || '#f9f9f9'};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &:nth-child(even) {
    background-color: ${(props) => props.theme.colors.alternateRowBackground || '#ffffff'};
  }
`,

OrderSummaryText: styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.textColor || '#555'};
`,

OrderSummaryHighlight: styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.highlightText || '#007BFF'};
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`,

CheckoutButton: styled.button`
  padding: 15px 25px;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.buttonText || '#fff'};
  background: ${(props) => props.theme.colors.primary || '#007BFF'};
  border: none;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.colors.primaryHover || '#0056b3'};
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`,

}