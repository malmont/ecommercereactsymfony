import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const style10= {
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
`,
ContainerDetailsProduct: styled.div`
    padding: 70px;
    background: ${(props) =>
      props.theme.colors.containerGradient ||
      "linear-gradient(135deg, #f5f7fa, #c3cfe2)"};
    border-radius: 25px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
    transition: transform 0.4s ease, box-shadow 0.4s ease;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
    }
  `,

  PrincipalDetailsDetailProduct: styled.div`
    padding: 60px;
    background: ${(props) =>
      props.theme.colors.principalDetailsBackground || "#ffffff"};
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    &:hover {
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
    }
  `,

  ImageEncadrement: styled.img`
    border: 6px solid ${(props) =>
      props.theme.colors.imageBorder || "#3498db"};
    border-radius: 25px;
    width: 100%;
    max-width: 480px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    transition: transform 0.4s ease;

    &:hover {
      transform: scale(1.1);
    }
  `,

  ColorSelectionDetailProduct: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    padding: 20px;
  `,

  ColorOptionsDetailProduct: styled.div`
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
  `,

  ColorButton: styled.button`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 3px solid
      ${(props) =>
        props.isSelected ? props.theme.colors.primary || "#2ecc71" : "#ccc"};
    background: ${(props) => props.color || "#ddd"};
    cursor: pointer;
    transition: transform 0.4s ease, box-shadow 0.4s ease;

    &:hover {
      transform: scale(1.3);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }
  `,

  SizeSelectionDetailProduct: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    padding: 20px;
  `,

  SizeOptionsDetailProduct: styled.div`
    display: flex;
    gap: 15px;
    justify-content: center;
    flex-wrap: wrap;
  `,

  SizeButton: styled.button`
    width: 70px;
    height: 70px;
    border-radius: 15%;
    border: 3px solid
      ${(props) =>
        props.isSelected ? props.theme.colors.primary || "#3498db" : "#ccc"};
    background: ${(props) =>
      props.isSelected ? props.theme.colors.primary || "#3498db" : "#f7f7f7"};
    color: ${(props) => (props.isSelected ? "#ffffff" : "#000000")};
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.4s ease, background-color 0.4s ease;

    &:hover {
      transform: translateY(-5px) scale(1.2);
      background: ${(props) => props.theme.colors.primaryHover || "#2980b9"};
    }
  `,

  InfoSelectionDetailProduct: styled.div`
    padding: 20px 30px;
    font-size: 22px;
    font-weight: bold;
    background: ${(props) =>
      props.theme.colors.infoBackground || "#ecf0f1"};
    color: ${(props) =>
      props.theme.colors.infoTextColor || "#2c3e50"};
    border-radius: 20px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
    }
  `,

  FeatureDetailProduct: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 40px;
    justify-content: center;
    background: ${(props) =>
      props.theme.colors.featureBackground ||
      "linear-gradient(135deg, #ffffff, #ecf0f1)"};
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: background 0.4s ease;

    &:hover {
      background: ${(props) =>
        props.theme.colors.featureHoverBackground ||
        "linear-gradient(135deg, #ecf0f1, #ffffff)"};
    }
  `,

  ObjectFeatureDetailProduct: styled.div`
    text-align: center;
    padding: 25px;
    background: ${(props) =>
      props.theme.colors.objectFeatureBackground || "#ffffff"};
    border-radius: 20px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);

    &:hover {
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
    }

    p {
      font-size: 18px;
      margin-top: 10px;
      color: ${(props) => props.theme.colors.featureTextColor || "#34495e"};
    }
  `,
  ColorCircle: styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) => props.color || '#ddd'};
  border: 2px solid ${(props) => (props.isSelected ? props.theme.colors.primary || '#3498db' : '#ccc')};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.2);
    box-shadow: 0 4px 10px ${(props) => props.theme.colors.primary || '#3498db'};
  }
`,

SizeCircle: styled.button`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  border: 2px solid ${(props) => (props.isSelected ? props.theme.colors.secondary || '#2ecc71' : '#ccc')};
  background-color: ${(props) => (props.isSelected ? props.theme.colors.secondary || '#2ecc71' : '#f7f7f7')};
  color: ${(props) => (props.isSelected ? '#ffffff' : '#000')};
  font-size: 14px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: scale(1.2);
    background-color: ${(props) => props.theme.colors.secondaryHover || '#27ae60'};
    color: #fff;
  }
`,

CartItemQuantity: styled.span`
  background: ${(props) => props.theme.colors.quantityBackground || '#ecf0f1'};
  color: ${(props) => props.theme.colors.quantityText || '#34495e'};
  font-size: 16px;
  font-weight: bold;
  border: 1px solid ${(props) => props.theme.colors.quantityBorder || '#bdc3c7'};
  padding: 5px 10px;
  border-radius: 5px;
`,

CartItemButton: styled.button`
  background: ${(props) => props.theme.colors.buttonBackground || '#3498db'};
  color: ${(props) => props.theme.colors.buttonText || '#ffffff'};
  border: none;
  padding: 10px 15px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  margin-top: 20px;
  margin-bottom: 20px;
  &:hover {
    background-color: ${(props) => props.theme.colors.buttonHover || '#2980b9'};
    transform: scale(1.1);
  }
`,

IncrDecButton: styled.button`
  background: ${(props) => props.theme.colors.incrDecBackground || '#ffffff'};
  color: ${(props) => props.theme.colors.incrDecText || '#34495e'};
  border: 1px solid ${(props) => props.theme.colors.incrDecBorder || '#bdc3c7'};
  padding: 5px 10px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.2s ease, background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.incrDecHover || '#ecf0f1'};
    transform: scale(1.1);
  }
`,

CartItemIncrDec: styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,

CartItemVariantInfo: styled.div`
  color: ${(props) => props.theme.colors.variantInfoText || '#7f8c8d'};
  font-size: 14px;
  margin-top: 5px;
  display: flex;
  gap: 10px;
  align-items: center;
`,

CartItemPrice: styled.div`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.priceText || '#2c3e50'};
  margin-top: 5px;
`,

CartItemTitle: styled.div`
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.titleText || '#34495e'};
  margin-bottom: 5px;
  text-align: left;
`,

CartItemImage: styled.img`
  width: 180px;
  height: 280px;
  border-radius: 8px;
  object-fit: cover;
  margin-right: 10px;
  border: 2px solid ${(props) => props.theme.colors.imageBorder || '#bdc3c7'};
`,

CartItemInfo: styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`,

CartItem: styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 15px;
  background: ${(props) => props.theme.colors.cartItemBackground || '#ffffff'};
  border: 1px solid ${(props) => props.theme.colors.cartItemBorder || '#bdc3c7'};
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }
`,

CartItemContainer: styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 20px;
  background: ${(props) => props.theme.colors.containerBackground || '#f7f7f7'};
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  width: 50%;
`,

OrderSummaryContainer: styled.div`
width: 100%;
max-width: 550px;
margin: 2rem auto;
padding: 2rem;
background: ${(props) => props.theme.colors.summaryBackground || '#ffffff'};
border-radius: 20px;
box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
border: 2px solid ${(props) => props.theme.colors.primary || '#3498db'};
transition: transform 0.3s ease, box-shadow 0.3s ease;

&:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}
`,

// Titre du résumé de commande
OrderSummaryTitle: styled.h2`
font-size: 1.8rem;
font-weight: bold;
color: ${(props) => props.theme.colors.primaryText || '#2c3e50'};
margin-bottom: 1.5rem;
text-align: center;
text-transform: uppercase;
letter-spacing: 1px;
text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,

// Ligne de séparation subtile
Divider: styled.hr`
border: 0;
height: 2px;
background: ${(props) => props.theme.colors.primary || '#3498db'};
margin: 1.5rem 0;
border-radius: 1px;
`,

// Ligne pour chaque détail dans le résumé
OrderSummaryRow: styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0.75rem 0;
font-size: 1rem;
font-weight: 500;
color: ${(props) => props.theme.colors.textSecondary || '#7f8c8d'};
`,

// Texte standard pour les détails
OrderSummaryText: styled.span`
color: ${(props) => props.theme.colors.textSecondary || '#7f8c8d'};
transition: color 0.3s ease;

&:hover {
  color: ${(props) => props.theme.colors.primary || '#3498db'};
}
`,

// Texte mis en évidence (comme le total)
OrderSummaryHighlight: styled.span`
font-weight: bold;
font-size: 1.3rem;
color: ${(props) => props.theme.colors.primary || '#3498db'};
text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`,

// Bouton de validation de la commande
CheckoutButton: styled.button`
width: 100%;
padding: 1rem;
background: linear-gradient(
  90deg,
  ${(props) => props.theme.colors.primary || '#3498db'},
  ${(props) => props.theme.colors.secondary || '#2ecc71'}
);
color: ${(props) => props.theme.colors.buttonText || '#ffffff'};
border: none;
border-radius: 15px;
font-size: 1.2rem;
font-weight: bold;
text-transform: uppercase;
cursor: pointer;
box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;

&:hover {
  transform: scale(1.05);
  background: ${(props) =>
    props.theme.colors.primaryHover || '#2980b9'};
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
}

&:disabled {
  background: ${(props) =>
    props.theme.colors.disabledBackground || '#bdc3c7'};
  cursor: not-allowed;
}
`,

CarrierContainer: styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
gap: 15px;
padding: 20px;
background: ${(props) => props.theme.colors.lightBackground || "#f7faff"};
border-radius: 15px;
box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
`,

CarrierCard: styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 15px;
background: ${(props) =>
  props.isSelected
    ? props.theme.colors.highlightBackground || "#eaf5ff"
    : props.theme.colors.cardBackground || "#ffffff"};
border: ${(props) =>
  props.isSelected
    ? `3px solid ${props.theme.colors.highlightBorder || "#3498db"}`
    : `1px solid ${props.theme.colors.cardBorder || "#ccc"}`};
border-radius: 20px;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
cursor: pointer;
transition: all 0.4s ease;

&:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
}

img {
  width: 80px;
  height: auto;
  margin-bottom: 10px;
}

span {
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.text || "#444"};
}
`,

AddressContainer: styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
gap: 15px;
padding: 20px;
background: ${(props) => props.theme.colors.lightBackground || "#fefefe"};
border-radius: 15px;
box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
`,

AddressCard: styled.div`
padding: 15px;
background: ${(props) =>
  props.isSelected
    ? props.theme.colors.highlightBackground || "#eaf5ff"
    : props.theme.colors.cardBackground || "#ffffff"};
border: ${(props) =>
  props.isSelected
    ? `2px solid ${props.theme.colors.highlightBorder || "#3498db"}`
    : `1px solid ${props.theme.colors.cardBorder || "#ccc"}`};
border-radius: 15px;
box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
cursor: pointer;
transition: transform 0.3s ease, box-shadow 0.3s ease;

&:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
}

p {
  font-size: 0.95rem;
  color: ${(props) => props.theme.colors.text || "#333"};
  line-height: 1.4;
}
`,

PaymentMethodContainer: styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 20px;
padding: 20px;
background: ${(props) => props.theme.colors.lightBackground || "#f7f7f7"};
border-radius: 15px;
box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
`,

PaymentMethodCard: styled.div`
width: 100px;
height: 100px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: ${(props) =>
  props.isSelected
    ? props.theme.colors.highlightBackground || "#eaf5ff"
    : props.theme.colors.cardBackground || "#ffffff"};
border: ${(props) =>
  props.isSelected
    ? `3px solid ${props.theme.colors.highlightBorder || "#3498db"}`
    : `1px solid ${props.theme.colors.cardBorder || "#ccc"}`};
border-radius: 15px;
box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);
cursor: pointer;
transition: all 0.4s ease;

&:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
}

img {
  width: 60px;
  height: auto;
  margin-bottom: 8px;
}

span {
  font-size: 0.85rem;
  color: ${(props) => props.theme.colors.text || "#444"};
}
`,
DashboardWrapper: styled.div`
    background: ${(props) => props.theme.colors.dashboardBackground || '#ecf0f1'};
    min-height: 80vh;
    padding: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 3px solid ${(props) => props.theme.colors.primary || '#3498db'};
    border-radius: 25px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  `,

  // Sidebar pour les onglets
  DashboardSidebar: styled.div`
    background: ${(props) => props.theme.colors.sidebarBackground || '#ffffff'};
    padding: 50px;
    border-radius: 25px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
    position: fixed;
    top: ${(props) => props.theme.navbarHeight || '80px'};
    left: 0;
    height: calc(100% - ${(props) => props.theme.navbarHeight || '80px'});
    width: 320px;
    overflow-y: auto;
    border-right: 3px solid ${(props) => props.theme.colors.primary || '#3498db'};
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
    padding: 25px 30px;
    font-size: 24px;
    font-weight: bold;
    color: ${(props) =>
      props.className?.includes('active')
        ? props.theme.colors.activeLinkText || '#ffffff'
        : props.theme.colors.linkText || '#34495e'} !important;
    background-color: ${(props) =>
      props.className?.includes('active')
        ? props.theme.colors.activeLinkBackground || '#3498db'
        : 'transparent'} !important;
    border-radius: 50px;
    text-decoration: none !important;
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
    position: relative;
    overflow: hidden;

    &:hover {
      background-color: ${(props) => props.theme.colors.navItemHoverBackground || '#ecf0f1'} !important;
      color: ${(props) => props.theme.colors.navItemHover || '#2c3e50'} !important;
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }

    i {
      margin-right: 20px;
    }
  `,

  // Contenu principal du tableau de bord
  DashboardContent: styled.div`
    padding: 60px;
    margin-left: 360px; /* Pour laisser de la place à la sidebar */
    background: ${(props) => props.theme.colors.contentBackground || '#ffffff'};
    border-radius: 25px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  `,

  // Conteneur pour les onglets
  DashboardTabPane: styled.div`
    padding: 50px;
    background: ${(props) => props.theme.colors.cardBackground || '#ffffff'};
    border-radius: 20px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  `,

  // Carte principale
  DashboardCard: styled.div`
    background: ${(props) => props.theme.colors.cardBackground || '#ffffff'};
    border-radius: 20px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    position: relative;
    border: 2px solid ${(props) => props.theme.colors.primary || '#3498db'};
  `,

  // En-tête de la carte
  DashboardCardHeader: styled.div`
    padding: 45px;
    background: ${(props) => props.theme.colors.cardHeaderBackground || '#3498db'};
    color: ${(props) => props.theme.colors.cardHeaderText || '#ffffff'};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  `,

  // Corps de la carte
  DashboardCardBody: styled.div`
    padding: 45px;
    color: ${(props) => props.theme.colors.cardBodyText || '#2c3e50'};
    font-size: 1.1rem;
    line-height: 1.8;
  `,
  TableWrapper: styled.div`
  margin: 20px 0;
  padding: 20px;
  background: ${(props) => props.theme.colors.tableWrapperBackground || '#ecf0f1'};
  border-radius: 15px;
  border: 2px solid ${(props) => props.theme.colors.tableBorder || '#3498db'};
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
`,

ResponsiveTable: styled.table`
  width: 100%;
  border-collapse: collapse;
  background: ${(props) => props.theme.colors.tableBackground || '#ffffff'};
  border-radius: 10px;
  overflow: hidden;

  th,
  td {
    padding: 15px;
    text-align: left;
    border: 1px solid ${(props) => props.theme.colors.tableBorder || '#bdc3c7'};
  }

  th {
    background: ${(props) => props.theme.colors.tableHeaderBackground || '#3498db'};
    color: ${(props) => props.theme.colors.tableHeaderText || '#ffffff'};
    font-weight: bold;
    text-transform: uppercase;
  }

  td {
    color: ${(props) => props.theme.colors.tableRowText || '#2c3e50'};
    background: ${(props) => props.theme.colors.tableRowBackground || '#ecf0f1'};
    transition: background-color 0.3s ease;

    &:hover {
      background: ${(props) => props.theme.colors.tableRowHoverBackground || '#dff9fb'};
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
      left: 15px;
      font-weight: bold;
      color: ${(props) => props.theme.colors.textMuted || '#7f8c8d'};
    }
  }
`,

TableButton: styled.button`
  padding: 12px 20px;
  background: ${(props) => props.theme.colors.buttonBackground || '#e74c3c'};
  color: ${(props) => props.theme.colors.buttonText || '#ffffff'};
  border: none;
  border-radius: 50px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.colors.buttonHover || '#c0392b'};
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(2px);
  }
`,

TableEmptyMessage: styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: ${(props) => props.theme.colors.emptyMessageText || '#2c3e50'};
  background: ${(props) => props.theme.colors.emptyMessageBackground || '#f7f9f9'};
  padding: 20px;
  border-radius: 10px;
  border: 2px dashed ${(props) => props.theme.colors.emptyMessageBorder || '#bdc3c7'};
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.4s ease-in-out;
`,

}

