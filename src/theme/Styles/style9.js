import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const style9= {
  navbarHeight: '70px',

  TopNavbar: styled.div`
    background: ${(props) => props.theme.colors.TopNavbarBackground};
    padding: 10px;
  `,

  NavbarContainer: styled.nav`
    background-color: ${(props) => props.theme.colors.navbarBackground};
    padding: 1rem 2rem;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    transition: background-color 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
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
    border-radius: 8px;
    margin-right: 0.5rem;
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
    border-radius: 8px;
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
    border-radius: 8px;
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
align-items: center;
height: 580px;
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
  background: ${(props) => props.theme.colors.cardPropertyBackground };
  border: 2px solid ${(props) => props.theme.colors.cardAccent };
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
height: 370px;
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
color: ${(props) => props.theme.colors.cardBodyText };
background: ${(props) => props.theme.colors.cardBodyBackground };
text-align: center;
border-radius: 0 0 20px 20px;

`,

DiscountBadge: styled.span`
background: ${(props) => props.theme.colors.discountBadgeBackground };
color: ${(props) => props.theme.colors.discountBadgeText || '#ffffff'};
border-radius: 12px;
padding: 8px 14px;
font-size: 0.85rem;
font-weight: bold;
box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
`,

ColorText: styled.p`
  color: ${(props) => props.theme.colors.colorText };
  font-size: 1rem;
  margin: 10px 0;
`,
Countdown: styled.div`
  width: 90%;
  background: ${(props) => props.theme.colors.countdownBackground };
  color: ${(props) => props.theme.colors.countdownText };
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
justify-content: space-evenly;
align-items: center;
flex-wrap: wrap;
padding: 40px 20px;

border-radius: 20px;
box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15), 0 4px 15px rgba(255, 228, 225, 0.5);
margin: 20px auto;
max-width: 1700px;
transition: background 0.3s ease;


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
border: 2px solid ${(props) => props.theme.colors.cardBorder || "#000"}; /* Bordure noire */
border-radius: 24px; /* Coins arrondis similaires à CardProperty */
box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15), 0 2px 5px rgba(0, 0, 0, 0.1); /* Ombre subtile */
color: ${(props) => props.theme.colors.cardText || "#333"};
font-size: 1rem;
font-weight: bold;
text-align: center;
transition: transform 0.4s ease, box-shadow 0.4s ease;

&:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 4px 15px rgba(0, 0, 0, 0.3); /* Accentuation de l'ombre */
  background: ${(props) =>
    props.theme.colors.cardHoverBackground ||
    "linear-gradient(135deg, #f5f5f5, #e0e0e0)"};
}

svg {
  margin-bottom: 15px;
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.iconColor || "#000"};
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    transform: rotate(10deg);
    color: ${(props) => props.theme.colors.iconHoverColor || "#555"};
  }
}
`,

StandardCardExploreCard: styled.div`
max-width: 100%;
padding: 20px;
min-height: 600px;
background: linear-gradient(
  135deg,
  ${(props) => props.theme.colors.gradientStart || '#f3f3f3'},
  ${(props) => props.theme.colors.gradientEnd || '#ffffff'}
);
border: 3px solid ${(props) => props.theme.colors.cardAccent || '#ff7f50'};
border-radius: 20px;
box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2), 0 4px 20px rgba(255, 127, 80, 0.5);
transition: transform 0.4s ease, box-shadow 0.4s ease;

&:hover {
  transform: scale(1.05) rotate(-1deg);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3), 0 6px 24px rgba(255, 127, 80, 0.7);
}
`,

CardExplore: styled.div`
background: ${(props) => props.theme.colors.cardBackground || '#fff'};
color: ${(props) => props.theme.colors.cardText || '#000'};
border: 2px solid ${(props) => props.theme.colors.cardAccent || '#ff6347'};
border-radius: 20px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 2px 10px rgba(255, 99, 71, 0.5);
transition: transform 0.4s ease, box-shadow 0.4s ease;

&:hover {
  transform: rotate(1deg) scale(1.03);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3), 0 4px 20px rgba(255, 99, 71, 0.6);
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
background: ${(props) => props.theme.colors.cardBodyBackground || '#fefefe'};
border-top: 2px solid ${(props) => props.theme.colors.cardAccent || '#ff6347'};
border-radius: 0 0 20px 20px;
`,

DifferentCardExploreCard: styled.div`
max-width: 100%;
padding: 30px;
background: ${(props) => props.theme.colors.differentCardBackground || '#ffefeb'};
border: 3px dashed ${(props) => props.theme.colors.differentCardBorder || '#ffa07a'};
border-radius: 20px;
box-shadow: 0 6px 12px rgba(255, 160, 122, 0.3), 0 4px 20px rgba(255, 160, 122, 0.5);
transition: transform 0.4s ease, box-shadow 0.4s ease;

&:hover {
  transform: rotate(-3deg) scale(1.05);
  box-shadow: 0 10px 20px rgba(255, 160, 122, 0.4), 0 6px 24px rgba(255, 160, 122, 0.6);
}
`,

ContentExplore: styled.div`
display: flex;
flex-direction: column;
align-items: center;
background: ${(props) => props.theme.colors.contentBackground || '#fff5f0'};
color: ${(props) => props.theme.colors.contentText || '#ff6347'};
border-radius: 20px;
padding: 25px;
transition: background-color 0.4s ease;

&:hover {
  background-color: ${(props) => props.theme.colors.hoverContentBackground || '#ffe4e1'};
}
`,


ImageWrapperExploreDifferent: styled.div`
 width: 100%;
height: 250px;
overflow: hidden;
border-radius: 20px 20px 0 0;
background: ${(props) => props.theme.colors.imageWrapperBackground || '#e8e8e8'};
display: flex;
justify-content: center;
align-items: center;
`,

ImageWrapperExploreStandart: styled.div`
 width: 100%;
height: 250px;
overflow: hidden;
border-radius: 20px 20px 0 0;
background: ${(props) => props.theme.colors.imageWrapperBackground || '#e8e8e8'};
display: flex;
justify-content: center;
align-items: center;
`,

CardImageExploreStandart: styled.img`
  width: auto;
height: 100%;
object-fit: cover;
border-bottom: 2px solid ${(props) => props.theme.colors.cardAccent || '#d4d4d4'};
`,

CardImageExploreDifferent: styled.img`
 width: auto;
height: 100%;
object-fit: cover;
border-bottom: 2px solid ${(props) => props.theme.colors.cardAccent || '#d4d4d4'};
`,
DetailsExplore: styled.div`
padding: 25px;
text-align: center;
`,

TitleExplore: styled.h3`
font-size: 1.8rem;
font-weight: bold;
color: ${(props) => props.theme.colors.titleText || '#000'};
margin-bottom: 20px;
text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`,

DescriptionExplore: styled.p`
font-size: 1.2rem;
line-height: 1.8;
color: ${(props) => props.theme.colors.descriptionText || '#333'};
margin-bottom: 20px;
max-height: 100px;
overflow: hidden;
text-overflow: ellipsis;
`,

LinkExplore: styled.a`
font-size: 1.2rem;
font-weight: bold;
color: ${(props) => props.theme.colors.linkText || '#0073e6'};
text-decoration: none;

&:hover {
  color: ${(props) => props.theme.colors.linkHoverText || '#005bb5'};
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
    padding: 60px;
    background: linear-gradient(
      135deg,
      ${(props) => props.theme?.colors?.containerGradientStart || "#f7f7f7"},
      ${(props) => props.theme?.colors?.containerGradientEnd || "#e0e0e0"}
    );
    border-radius: 30px;
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
    transition: transform 0.5s ease, box-shadow 0.5s ease;

    &:hover {
      transform: scale(1.03);
      box-shadow: 0 18px 50px rgba(0, 0, 0, 0.2);
    }
  `,

  PrincipalDetailsDetailProduct: styled.div`
    padding: 50px;
    background: radial-gradient(
      circle,
      ${(props) => props.theme?.colors?.principalDetailsBackground || "#ffffff"},
      ${(props) => props.theme?.colors?.secondaryBackground || "#f2f2f2"}
    );
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    border-radius: 25px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    transition: transform 0.4s ease;

    &:hover {
      transform: translateY(-12px);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
    }
  `,

  ImageEncadrement: styled.img`
    border: 5px solid ${(props) => props.theme?.colors?.imageBorder || "#ccc"};
    border-radius: 30px;
    width: 100%;
    max-width: 450px;
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
    transition: transform 0.4s ease;

    &:hover {
      transform: scale(1.08);
    }
  `,

  ColorSelectionDetailProduct: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;
  `,

  ColorOptionsDetailProduct: styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
  `,

  ColorButton: styled.button`
    width: 55px;
    height: 55px;
    border-radius: 50%;
    border: 4px solid ${(props) => (props.isSelected ? props.theme?.colors?.primary || "#0288d1" : "#ccc")};
    background: ${(props) => props.color || "#ddd"};
    cursor: pointer;
    transition: transform 0.4s ease, box-shadow 0.4s ease;

    &:hover {
      transform: scale(1.25);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    }
  `,

  SizeSelectionDetailProduct: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;
  `,

  SizeOptionsDetailProduct: styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
  `,

  SizeButton: styled.button`
    width: 65px;
    height: 65px;
    border-radius: 20%;
    border: 4px solid ${(props) => (props.isSelected ? props.theme?.colors?.primary || "#0288d1" : "#ccc")};
    background: ${(props) => (props.isSelected ? props.theme?.colors?.primary || "#0288d1" : "#f5f5f5")};
    color: ${(props) => (props.isSelected ? "#ffffff" : "#000000")};
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.4s ease, background-color 0.4s ease;

    &:hover {
      transform: translateY(-5px) scale(1.15);
      background: ${(props) => props.theme?.colors?.primaryHover || "#026aa7"};
      color: #ffffff;
    }
  `,

  InfoSelectionDetailProduct: styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-top: 20px;
    color: ${(props) => props.theme?.colors?.infoTextColor || "#444"};
    background: ${(props) => props.theme?.colors?.infoBackground || "#f3f3f3"};
    padding: 20px 25px;
    border-radius: 15px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.4s ease;

    &:hover {
      transform: translateY(-8px);
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
    border: 3px solid ${(props) => props.theme?.colors?.goldAccent || "#000000"};
    border-radius: 15px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
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
  ColorCircle: styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: ${(props) => props.color || '#ddd'};
  border: ${(props) =>
    props.isSelected
      ? `3px solid ${props.theme.colors.goldAccent || '#ffcc00'}`
      : '2px solid #ccc'};
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 10px ${(props) => props.theme.colors.goldAccent || '#ffcc00'};
  }
`,
  SizeCircle: styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: ${(props) =>
      props.isSelected ? props.theme.colors.blackAccent || '#000000' : '#f7f7f7'};
    color: ${(props) => (props.isSelected ? '#fff' : '#000')};
    display: flex;
    align-items: center;
    justify-content: center;
    border: ${(props) =>
      props.isSelected
        ? `3px solid ${props.theme.colors.blackAccent || '#000000'}`
        : '2px solid #ccc'};
    font-weight: bold;
    font-size: 0.8rem;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 4px 10px ${(props) => props.theme.colors.blackAccent || '#000000'};
    }
  `,

  CartItemQuantity: styled.div`
    font-size: 1rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.textPrimary};
    margin: 0 5px;
    text-align: center;
  `,

  CartItemButton: styled.button`
    background: ${(props) => props.theme.colors.blackAccent || '#000000'};
    color: ${(props) => props.theme.colors.buttonText || '#fff'};
    border: none;
    border-radius: 4px;
    padding: 5px 10px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: ${(props) => props.theme.colors.buttonHover || '#333'};
      transform: translateY(-2px);
    }

    &:disabled {
      background: ${(props) => props.theme.colors.disabledBackground || '#666'};
      cursor: not-allowed;
    }
  `,

  CartItemImage: styled.img`
    width: 230px;
    height: 350px;
    border-radius: 5px;
    object-fit: cover;
    border: 2px solid ${(props) => props.theme.colors.blackAccent || '#000000'};
    margin-right: 10px;
  `,

  CartItemInfo: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;
    align-items: flex-start;
  `,

  CartItem: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background: ${(props) => props.theme.colors.cardBackground || '#f0f0f0'};
    border: 1px solid ${(props) => props.theme.colors.blackAccent || '#000000'};
    border-radius: 6px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.02);
      box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
    }
  `,

  CartItemContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: ${(props) => props.theme.colors.containerBackground || '#ffffff'};
    padding: 20px;
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme.colors.blackAccent || '#000000'};
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    margin-bottom: 10px;
    width: 55%;
  `,

  CartItemVariantInfo: styled.div`
    font-size: 0.85rem;
    color: ${(props) => props.theme.colors.textSecondary || '#666'};
  `,

  CartItemPrice: styled.div`
    font-size: 1.2rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.blackAccent || '#000000'};
    margin-top: 5px;
  `,

  CartItemTitle: styled.div`
    font-size: 1rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.textPrimary || '#000'};
    text-align: left;
  `,

  CartItemIncrDec: styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
  `,

  IncrDecButton: styled.button`
    background: ${(props) => props.theme.colors.blackAccent || '#000000'};
    color: ${(props) => props.theme.colors.buttonText || '#fff'};
    border: none;
    border-radius: 50%;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: ${(props) => props.theme.colors.buttonHover || '#333'};
      transform: scale(1.1);
    }
  `,
  OrderSummaryContainer: styled.div`
  width: 100%;
  max-width: 450px;
  margin: 2rem auto;
  padding: 1.5rem;
  background: ${(props) => props.theme.colors.cardBackground || '#fff'};
  border-radius: 20px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  border: 2px solid ${(props) => props.theme.colors.blackAccent || '#000000'};
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }
`,
OrderSummaryTitle: styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.textPrimary || '#333'};
  margin-bottom: 1.5rem;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,
Divider: styled.hr`
  border: none;
  height: 2px;
  background: ${(props) => props.theme.colors.blackAccent || '#000000'};
  margin: 1rem 0;
`,
OrderSummaryRow: styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  font-size: 1.1rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.textSecondary || '#555'};
`,
OrderSummaryText: styled.span`
  color: ${(props) => props.theme.colors.textSecondary || '#666'};
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.blackAccent || '#000000'};
  }
`,
OrderSummaryHighlight: styled.span`
  font-weight: bold;
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.blackAccent || '#000000'};
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
`,
CheckoutButton: styled.button`
  width: 100%;
  padding: 0.8rem 1.2rem;
  background: ${(props) => props.theme.colors.blackAccent || '#000000'};
  color: ${(props) => props.theme.colors.buttonText || '#fff'};
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform 0.4s ease, box-shadow 0.4s ease, background-color 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background-color: ${(props) => props.theme.colors.buttonHover || '#333333'};
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  }
`,

}