import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { shimmer, gradientAnimation } from '../animations';

export const style7= {
  navbarHeight: '110px',

  TopNavbar: styled.div`
  background: ${(props) => props.theme.colors.TopNavbarBackground};
  padding: 15px;
`,

  NavbarContainer: styled.nav`
   background: ${(props) => props.theme.colors.navbarContainerBackground};
  padding: 0.75rem 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  
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
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(22, 218, 224, 0.4), transparent);
    animation: ${shimmer} 2s infinite;
  }

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
  padding: 0.2rem 0.2rem;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover, &.active {
    background-color: ${(props) => props.theme.colors.navItemHoverBackground};
    color: ${(props) => props.theme.colors.navItemText};
  }
`,

  NavButton: styled.button`
  background-color: ${(props) => props.theme.colors.buttonBackground};
  color: ${(props) => props.theme.colors.buttonText};
  border: none;
  padding: 0.5rem 1.25rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: all 0.3s ease;
  }

  &:hover::before {
    left: 100%;
  }

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

  &:hover {
    color: ${(props) => props.theme.colors.mobileMenuButtonHover};
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
  padding: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  
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
    color: ${(props) => props.theme.colors.cartIconHover};
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
`,

  Select: styled.select`
  background-color: ${(props) => props.theme.colors.selectBackground};
  color: ${(props) => props.theme.colors.selectText};
  border: 1px solid ${(props) => props.theme.colors.selectBorder};
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
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.selectFocus};
  }
`,CardContainer: styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
height: 620px;
width: 265px;
border-radius: 20px;
background: linear-gradient(145deg, ${(props) => props.theme.colors.cardBackground}, ${(props) => props.theme.colors.cardAccent });
box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.2), -4px -4px 12px rgba(255, 255, 255, 0.7);
overflow: hidden;
transition: transform 0.3s, box-shadow 0.3s;
margin-bottom: 10px;
&:hover {
  transform: translateY(-10px);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3), -6px -6px 16px rgba(255, 255, 255, 0.8);
}
`,

CardProperty: styled.div`
background: ${(props) => props.theme.colors.cardPropertyBackground };
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 20px;
border-radius: 20px;

`,

CardImage: styled.img`
width: 100%;
height: 380px;
object-fit: cover;
border-radius: 16px;
box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
transition: transform 0.3s;
margin-bottom: 10px;
&:hover {
  transform: scale(1.05);
}
`,

CardBody: styled.div`
flex-grow: 1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 20px;
color: ${(props) => props.theme.colors.cardBodyText};
background: ${(props) => props.theme.colors.cardBodyBackground };
backdrop-filter: blur(10px);
text-align: center;
border-radius: 16px;
box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
margin-bottom: 10px;
`,

ColorText: styled.p`
color: ${(props) => props.theme.colors.colorText };
font-size: 1rem;
font-weight: 600;
margin-bottom: 15px;
`,

DiscountBadge: styled.span`
background: linear-gradient(45deg, ${(props) => props.theme.colors.discountBadgeBackground || '#ff5f6d'}, ${(props) => props.theme.colors.discountBadgeAccent || '#ffc371'});
color: ${(props) => props.theme.colors.discountBadgeText || '#ffffff'};
border-radius: 20px;
padding: 10px 16px;
font-size: 0.85rem;
font-weight: bold;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
margin-top: 10px;
`,

Countdown: styled.div`
width: 90%;
background: ${(props) => props.theme.colors.countdownBackground };
color: ${(props) => props.theme.colors.countdownText };
text-align: center;
padding: 15px;
font-size: 1.1rem;
font-weight: 700;
border-radius: 12px;
margin: 15px auto;
box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
`,

Time: styled.div`
font-weight: bold;
font-size: 22px;
color: ${(props) => props.theme.colors.timeText || '#ff0000'};
text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`,
FeatureWrapper: styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
padding: 40px;
background: linear-gradient(
  120deg,
  ${(props) => props.theme.colors.featureGradientStart || "#e0f7fa"},
  ${(props) => props.theme.colors.featureGradientEnd || "#80deea"}
);
border-radius: 20px;
margin: 20px auto;
max-width: 1800px;
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
backdrop-filter: blur(8px);
`,

FeatureCard: styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 30px;
margin: 15px;
width: 300px;
height: 240px;
background: linear-gradient(
  135deg,
  ${(props) => props.theme.colors.cardGradientStart || "#ffffff"},
  ${(props) => props.theme.colors.cardGradientEnd || "#eceff1"}
);
border: 1px solid ${(props) => props.theme.colors.cardBorder || "#d1d9e6"};
border-radius: 20px;
box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
color: ${(props) => props.theme.colors.cardText || "#333333"};
font-size: 1.1rem;
font-weight: bold;
text-align: center;
transition: transform 0.4s ease, box-shadow 0.4s ease;

&:hover {
  transform: scale(1.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.cardHoverGradientStart || "#f5f5f5"},
    ${(props) => props.theme.colors.cardHoverGradientEnd || "#e0e0e0"}
  );
}

svg {
  margin-bottom: 10px;
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.iconColor || "#4fc3f7"};
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    transform: rotate(10deg);
    color: ${(props) => props.theme.colors.iconHoverColor || "#0288d1"};
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
box-shadow: 0 10px 20px 
transition: transform 0.4s ease, box-shadow 0.4s ease;

&:hover {
  transform: translateY(-20px) rotate(-3deg);
  box-shadow: 0 14px 28px  rgba(128, 222, 234, 1) 
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
height: 300px; 
overflow: hidden;
border-radius: 25px 25px 0 0;
background: ${(props) => props.theme.colors.imageWrapperBackground || "#e8e8e8"};
display: flex;
justify-content: center;
align-items: center;
`,

ImageWrapperExploreStandart: styled.div`
width: 100%;
height: 300px; 
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
      120deg,
      ${(props) => props.theme.colors.containerGradientStart || "#f5f5f5"},
      ${(props) => props.theme.colors.containerGradientEnd || "#e0e0e0"}
    );
    border-radius: 30px;
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
    animation: ${shimmer} 3s linear infinite;
    transition: transform 0.5s ease, box-shadow 0.5s ease;

    &:hover {
      transform: scale(1.03);
      box-shadow: 0 18px 50px rgba(0, 0, 0, 0.2);
    }
  `,

  
  FeatureDetailProduct: styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 40px;
    padding: 50px;
    background: linear-gradient(
      135deg,
      ${(props) => props.theme.colors.featureGradientStart || "#e9eff5"},
      ${(props) => props.theme.colors.featureGradientEnd || "#d4e2f7"}
    );
    border-radius: 25px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
    animation: ${shimmer} 3s infinite;

    &:hover {
      transform: scale(1.03);
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
    }
  `,

  ObjectFeatureDetailProduct: styled.div`
    text-align: center;
    padding: 25px;
    background: ${(props) => props.theme.colors.featureBackground || "#ffffff"};
    border-radius: 25px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    transition: transform 0.4s ease;

    &:hover {
      transform: translateY(-10px) scale(1.1);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
    }

    p {
      margin-top: 15px;
      font-size: 18px;
      color: ${(props) => props.theme.colors.featureTextColor || "#555"};
    }
  `,

  ColorButton: styled.button`
    width: 55px;
    height: 55px;
    border-radius: 50%;
    border: 4px solid ${(props) => (props.isSelected ? props.theme.colors.primary || "#0288d1" : "#ccc")};
    background: ${(props) => props.color};
    cursor: pointer;
    transition: transform 0.4s ease, box-shadow 0.4s ease;

    &:hover {
      transform: scale(1.25);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    }
  `,

  SizeButton: styled.button`
    width: 65px;
    height: 65px;
    border-radius: 20%;
    border: 4px solid ${(props) => (props.isSelected ? props.theme.colors.primary || "#0288d1" : "#ccc")};
    background: ${(props) => (props.isSelected ? props.theme.colors.primary || "#0288d1" : "#f5f5f5")};
    color: ${(props) => (props.isSelected ? "#ffffff" : "#000000")};
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.4s ease, background-color 0.4s ease;

    &:hover {
      transform: translateY(-5px) scale(1.15);
      background: ${(props) => props.theme.colors.primaryHover || "#026aa7"};
      color: #ffffff;
    }
  `,

  ImageEncadrement: styled.img`
    border: 5px solid ${(props) => props.theme.colors.imageBorder || "#ccc"};
    border-radius: 30px;
    width: 100%;
    max-width: 450px;
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
    transition: transform 0.4s ease;

    &:hover {
      transform: scale(1.08);
    }
  `,

  InfoSelectionDetailProduct: styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-top: 20px;
    color: ${(props) => props.theme.colors.infoTextColor || "#444"};
    background: ${(props) => props.theme.colors.infoBackground || "#f3f3f3"};
    padding: 20px 25px;
    border-radius: 15px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.4s ease;

    &:hover {
      transform: translateY(-8px);
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
  ColorCircle: styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: ${(props) => props.color};
    border: ${(props) =>
      props.isSelected
        ? `4px solid ${props.theme.colors.primary || "#FF6F61"}`
        : "3px dashed #bbb"};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: ${(props) =>
      props.isSelected ? "0 6px 12px rgba(0, 0, 0, 0.2)" : "0 2px 5px rgba(0, 0, 0, 0.1)"};
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.2) rotate(5deg);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
    }
  `,

  SizeCircle: styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${(props) =>
      props.isSelected ? props.theme.colors.secondaryBackground || "#f3e5f5" : "#fff"};
    border: ${(props) =>
      props.isSelected
        ? `3px solid ${props.theme.colors.primary}`
        : "2px solid #ddd"};
    color: ${(props) => (props.isSelected ? "#fff" : props.theme.colors.textColor || "#333")};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.9rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: ${(props) => props.theme.colors.hoverBackground || "#ffeb3b"};
      transform: scale(1.15) rotate(-3deg);
    }
  `,

  CartItemQuantity: styled.span`
    font-size: 1.2rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.quantityText || "#333"};
    background: ${(props) => props.theme.colors.quantityBackground || "#f7f7f7"};
    padding: 0.4rem 0.8rem;
    border-radius: 50px;
    border: 2px solid ${(props) => props.theme.colors.primary || "#4caf50"};
    box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
      background-color: ${(props) => props.theme.colors.hoverQuantityBackground || "#c8e6c9"};
      transform: scale(1.1);
    }
  `,

  CartItemButton: styled.button`
    background: linear-gradient(
      135deg,
      ${(props) => props.theme.colors.cartItemButtonBackground },
      ${(props) => props.theme.colors.incrDecButtonBackground }
    );
    color: ${(props) => props.theme.colors.buttonText || "#fff"};
    border: none;
    padding: 0.6rem 1.5rem;
    border-radius: 25px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    }
  `,

  IncrDecButton: styled.button`
    width: 40px;
    height: 40px;
    background: ${(props) => props.theme.colors.incrDecButtonBackground };
    color: ${(props) => props.theme.colors.text || "#fff"};
    border: none;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: ${(props) => props.theme.colors.hoverBackground || "#388e3c"};
      transform: scale(1.15) rotate(5deg);
    }
  `,

  CartItemIncrDec: styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
  `,

  CartItemVariantInfo: styled.div`
    font-size: 1rem;
    font-style: italic;
    color: ${(props) => props.theme.colors.variantText || "#777"};
    margin-top: 5px;
  `,

  CartItemPrice: styled.div`
    font-size: 1.4rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.priceText || "#222"};
    margin-top: 10px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  `,

  CartItemTitle: styled.h3`
    font-size: 1.3rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.titleText || "#111"};
    margin-bottom: 5px;
  `,

  CartItemImage: styled.img`
    width: 220px;
    height: 320px;
    border-radius: 15px;
    object-fit: cover;
    border: 3px solid ${(props) => props.theme.colors.border};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  `,

  CartItemInfo: styled.div`
    flex: 1;
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
  `,

  CartItem: styled.div`
    display: flex;
    align-items: center;
    padding: 1.2rem;
    border-radius: 15px;
    background: ${(props) => props.theme.colors.cartItemBackground || "#fdfdfd"};
    border: 1px solid ${(props) => props.theme.colors.border || "#ddd"};
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.25);
    }
  `,

  CartItemContainer: styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 20px auto;
  `,
  OrderSummaryContainer: styled.div`
  width: 100%;
  max-width: 830px;
  margin: 2rem auto;
  padding: 1.5rem;
  background: ${(props) => props.theme.colors.cardBackground || '#f7f7f7'};
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
  }
`,

// Titre du résumé de commande
OrderSummaryTitle: styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.titleText || '#333'};
  margin-bottom: 1rem;
  text-align: center;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,

// Ligne de séparation subtile
Divider: styled.hr`
  border: 0;
  height: 2px;
  background: ${(props) => props.theme.colors.gradientStart || '#ddd'};
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
  color: ${(props) => props.theme.colors.textColor || '#555'};
`,

// Texte standard pour les détails
OrderSummaryText: styled.span`
  color: ${(props) => props.theme.colors.cardBodyText || '#666'};
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.navItemHoverBackground || '#007BFF'};
  }
`,

// Texte mis en évidence (comme le total)
OrderSummaryHighlight: styled.span`
  font-weight: bold;
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.highlightText || '#007BFF'};
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`,

// Bouton de validation de la commande
CheckoutButton: styled.button`
  width: 100%;
  padding: 0.75rem;
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.colors.buttonBackground || '#007BFF'},
    ${(props) => props.theme.colors.buttonHover || '#0056b3'}
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
    background: ${(props) => props.theme.colors.buttonHover || '#0056b3'};
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.25);
  }
`,
CarrierContainer: styled.div`
  width: 700px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
  padding: 1.5rem;
  background: ${(props) =>
    `linear-gradient(135deg, ${props.theme.colors.gradientStart}, ${props.theme.colors.gradientEnd})`};
  border-radius: 20px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  margin: 2rem auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`,
CarrierCard: styled.div`
  flex: 1;
  max-width: 300px;
  padding: 1rem;
  background: ${(props) => props.theme.colors.cardBackground || '#ffffff'};
  border: ${(props) =>
    props.isSelected
      ? `3px solid ${props.theme.colors.selectedBorder || props.theme.colors.primary}`
      : `2px solid ${props.theme.colors.cardBorder || '#ddd'}`};
  border-radius: 10px;
  box-shadow: ${(props) =>
    props.isSelected
      ? '0 6px 15px rgba(0, 123, 255, 0.2)'
      : '0 4px 10px rgba(0, 0, 0, 0.1)'};
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    background: ${(props) => props.theme.colors.hoverCardBackground || '#f9f9f9'};
  }
`,
AddressContainer: styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 2rem;
  background: ${(props) => props.theme.colors.containerBackground || '#ffffff'};
  border-radius: 20px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
`,
AddressCard: styled.div`
  width: 100%;
  max-width: 280px;
  padding: 1.5rem;
  background: ${(props) => props.theme.colors.cardBackground || '#ffffff'};
  border: ${(props) =>
    props.isSelected
      ? `3px solid ${props.theme.colors.selectedBorder || '#007BFF'}`
      : `2px solid ${props.theme.colors.cardBorder || '#ddd'}`};
  border-radius: 10px;
  box-shadow: ${(props) =>
    props.isSelected
      ? '0 8px 20px rgba(0, 0, 0, 0.2)'
      : '0 4px 10px rgba(0, 0, 0, 0.1)'};
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }
`,
PaymentMethodContainer: styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 2rem;
  background: ${(props) =>
    `linear-gradient(145deg, ${props.theme.colors.gradientStart}, ${props.theme.colors.gradientEnd})`};
  border-radius: 20px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
`,
PaymentMethodCard: styled.div`
  flex: 1;
  max-width: 250px;
  padding: 1rem;
  background: ${(props) => props.theme.colors.cardBackground || '#ffffff'};
  border: ${(props) =>
    props.isSelected
      ? `3px dashed ${props.theme.colors.selectedBorder || '#007BFF'}`
      : `2px solid ${props.theme.colors.cardBorder || '#ddd'}`};
  border-radius: 10px;
  box-shadow: ${(props) =>
    props.isSelected
      ? '0 6px 15px rgba(0, 0, 0, 0.2)'
      : '0 4px 10px rgba(0, 0, 0, 0.1)'};
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background: ${(props) => props.theme.colors.hoverCardBackground || '#f9f9f9'};
  }
`,
DashboardWrapper: styled.div`
    background: ${(props) => props.theme.colors.dashboardBackground };
    min-height: 80vh;
    padding: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
 
  `,

  // Sidebar pour les onglets
  DashboardSidebar: styled.div`
    background: ${(props) => props.theme.colors.sidebarBackground};
    padding: 50px;
    border-radius: 30px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
    position: fixed;
    top: ${(props) => props.theme.navbarHeight || '110px'};
    left: 0;
    height: calc(100% - ${(props) => props.theme.navbarHeight || '110px'});
    width: 300px;
    overflow-y: auto;
  `,

  // Élément de navigation dans la sidebar
  DashboardNavItem: styled.li`
    margin-bottom: 40px;
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
        ? props.theme.colors.activeLinkText || '#fff'
        : props.theme.colors.linkText || '#333'} !important;
    background-color: ${(props) =>
      props.className?.includes('active')
        ? props.theme.colors.activeLinkBackground || '#ff8c00'
        : 'transparent'} !important;
    border-radius: 15px;
    text-decoration: none !important;
    transition: background-color 0.4s ease, color 0.4s ease, transform 0.4s ease;
    position: relative;
    overflow: hidden;

    &:hover {
      background-color: ${(props) => props.theme.colors.navItemHoverBackground || '#ffe4b5'} !important;
      transform: scale(1.05);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    }

    i {
      margin-right: 20px;
    }
  `,

  // Contenu principal du tableau de bord
  DashboardContent: styled.div`
    padding: 60px;
    margin-left: 350px; /* Pour laisser de la place à la sidebar */
    background: ${(props) => props.theme.colors.contentBackground || '#fffaf0'};
    border-radius: 30px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  `,

  // Conteneur pour les onglets
  DashboardTabPane: styled.div`
    padding: 50px;
    background: ${(props) => props.theme.colors.cardBackground || '#ffffff'};
    border-radius: 25px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  `,

  // Carte principale
  DashboardCard: styled.div`
    background: ${(props) => props.theme.colors.cardBackground || '#ffffff'};
    border-radius: 25px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    position: relative;
  `,

  // En-tête de la carte
  DashboardCardHeader: styled.div`
    padding: 40px;
    background: ${(props) => props.theme.colors.cardHeaderBackground || '#ffa500'};
    color: ${(props) => props.theme.colors.cardHeaderText || '#ffffff'};
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
  `,

  // Corps de la carte
  DashboardCardBody: styled.div`
    padding: 40px;
    color: ${(props) => props.theme.colors.cardBodyText || '#333'};
    font-size: 1.1rem;
    line-height: 1.8;
  `,
  TableWrapper: styled.div`
  overflow-x: auto;
  margin: 20px 0;
  padding: 20px;
  background: ${(props) => props.theme.colors.cardBackground};
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }
`,

ResponsiveTable: styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
  background: ${(props) => props.theme.colors.cardBackground};

  th,
  td {
    padding: 15px;
    text-align: left;
    border: 1px solid ${(props) => props.theme.colors.cardBorder};
  }

  th {
    background: ${(props) => props.theme.colors.tableHeaderBackground};
    color: ${(props) => props.theme.colors.tableHeaderText};
    text-transform: uppercase;
    font-weight: bold;
  }

  td {
    background: ${(props) => props.theme.colors.cardBodyBackground};
    color: ${(props) => props.theme.colors.textColor};
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${(props) => props.theme.colors.tableRowHoverBackground};
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
  padding: 10px 20px;
  background: ${(props) => props.theme.colors.buttonBackground};
  color: ${(props) => props.theme.colors.buttonText};
  border: none;
  border-radius: 5px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background: ${(props) => props.theme.colors.buttonHover};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: scale(0.95);
  }
`,

TableEmptyMessage: styled.p`
  font-size: 1.1rem;
  text-align: center;
  color: ${(props) => props.theme.colors.textColor};
  background: ${(props) => props.theme.colors.emptyMessageBackground};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  animation: ${shimmer} 1.8s infinite;
`,
AddressListWrapper: styled.div`
display: flex;
flex-direction: column;
gap: 1.5rem;
padding: 2rem;
background: linear-gradient(
  145deg,
  ${(props) => props.theme.colors.containerGradientStart || '#ffffff'},
  ${(props) => props.theme.colors.containerGradientEnd || '#f7f7f7'}
);
border-radius: 20px;
box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
transition: transform 0.3s ease, box-shadow 0.3s ease;

&:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}
`,

AddNewAddressButton: styled.button`
background: ${(props) => props.theme.colors.buttonBackground};
color: ${(props) => props.theme.colors.buttonText};
border: none;
padding: 0.75rem 1.5rem;
border-radius: 15px;
font-weight: bold;
font-size: 1rem;
cursor: pointer;
text-transform: uppercase;
letter-spacing: 1px;
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
transition: transform 0.3s ease, background-color 0.3s ease;

&:hover {
  background: ${(props) => props.theme.colors.buttonHover || '#0056b3'};
  transform: scale(1.05);
}
`,

AddressCardList: styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
gap: 1.5rem;
padding: 1rem 0;
`,

AddressCardHeader: styled.div`
background: ${(props) => props.theme.colors.cardHeaderBackground || '#007BFF'};
color: ${(props) => props.theme.colors.cardHeaderText || '#ffffff'};
font-size: 1.25rem;
font-weight: bold;
padding: 1rem;
border-top-left-radius: 15px;
border-top-right-radius: 15px;
text-align: center;
text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`,

AddressCardBody: styled.div`
padding: 1.5rem;
background: ${(props) => props.theme.colors.cardBodyBackground || '#f9f9f9'};
color: ${(props) => props.theme.colors.cardBodyText || '#333'};
border-radius: 0 0 15px 15px;
box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
transition: background-color 0.3s ease;

&:hover {
  background: ${(props) => props.theme.colors.cardBodyHoverBackground || '#e6f7ff'};
}
`,

Address: styled.p`
margin: 0.5rem 0;
font-size: 1rem;
font-weight: 500;
color: ${(props) => props.theme.colors.textColor || '#555'};
`,

ButtonGroup: styled.div`
display: flex;
gap: 0.75rem;
margin-top: 1rem;
justify-content: center;
`,

EditButton: styled.button`
background: ${(props) => props.theme.colors.editButtonBackground || '#4caf50'};
color: ${(props) => props.theme.colors.buttonText || '#fff'};
border: none;
padding: 0.5rem 1rem;
border-radius: 10px;
font-size: 0.9rem;
font-weight: bold;
cursor: pointer;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
transition: transform 0.3s ease, background-color 0.3s ease;

&:hover {
  background: ${(props) => props.theme.colors.editButtonHover || '#388e3c'};
  transform: scale(1.05);
}
`,

DeleteButton: styled.button`
background: ${(props) => props.theme.colors.deleteButtonBackground || '#f44336'};
color: ${(props) => props.theme.colors.buttonText || '#fff'};
border: none;
padding: 0.5rem 1rem;
border-radius: 10px;
font-size: 0.9rem;
font-weight: bold;
cursor: pointer;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
transition: transform 0.3s ease, background-color 0.3s ease;

&:hover {
  background: ${(props) => props.theme.colors.deleteButtonHover || '#d32f2f'};
  transform: scale(1.05);
}
`,

EmptyAddressMessage: styled.p`
text-align: center;
font-size: 1.2rem;
font-weight: bold;
color: ${(props) => props.theme.colors.textMuted || '#999'};
padding: 1rem;
border-radius: 10px;
background: ${(props) => props.theme.colors.cardBackground || '#f4f4f4'};
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
animation: ${shimmer} 2s infinite;
`,

LoadingMessage: styled.div`
text-align: center;
font-size: 1rem;
color: ${(props) => props.theme.colors.textMuted || '#777'};
padding: 1rem;
border-radius: 10px;
background: ${(props) => props.theme.colors.cardBackground || '#fafafa'};
animation: ${shimmer} 1.8s infinite;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`,
NoCarrierMessage: styled.div`
text-align: center;
font-size: 1.2rem;
font-weight: bold;
color: ${(props) => props.theme.colors.textMuted || '#888'};
background: ${(props) => props.theme.colors.emptyMessageBackground || '#f9f9f9'};
padding: 1.5rem 2rem;
border-radius: 12px;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
animation: ${shimmer} 1.8s infinite;
`,

// Image associée au transporteur
CarrierImage: styled.img`
width: 90px;
height: 90px;
border-radius: 50%;
object-fit: cover;
margin-right: 15px;
border: 2px solid ${(props) => props.theme.colors.imageBorder || '#ddd'};
transition: transform 0.3s ease, border-color 0.3s ease;

&:hover {
  transform: scale(1.1);
  border-color: ${(props) => props.theme.colors.hoverBorder || '#007BFF'};
}
`,

// Table des informations des transporteurs
CarrierTable: styled.table`
width: 100%;
border-collapse: collapse;
font-size: 1rem;
margin-top: 1.5rem;

th,
td {
  padding: 12px 18px;
  text-align: left;
  border: 1px solid ${(props) => props.theme.colors.tableBorder || '#ddd'};
}

th {
  background: ${(props) => props.theme.colors.tableHeaderBackground || '#f4f4f4'};
  color: ${(props) => props.theme.colors.tableHeaderText || '#333'};
  font-weight: bold;
}

td {
  background: ${(props) => props.theme.colors.tableCellBackground || '#fff'};
  color: ${(props) => props.theme.colors.tableCellText || '#555'};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.theme.colors.tableCellHoverBackground || '#f9f9f9'};
  }
}
`,

// Conteneur pour la table des transporteurs
CarrierTableContainer: styled.div`
width: 100%;
max-width: 1200px;
margin: 2rem auto;
padding: 2rem;
background: ${(props) =>
  `linear-gradient(145deg, ${props.theme.colors.gradientStart || '#e3f2fd'}, ${props.theme.colors.gradientEnd || '#bbdefb'})`};
border-radius: 15px;
box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
transition: transform 0.3s ease, box-shadow 0.3s ease;

&:hover {
  transform: scale(1.02);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}
`,

// Wrapper principal pour les cartes ou sections des transporteurs
CarrierWrapper: styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 20px;
padding: 2rem;
background: ${(props) => props.theme.colors.wrapperBackground || '#f4f4f4'};
border-radius: 15px;
box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
`,
}