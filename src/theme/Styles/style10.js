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

}

