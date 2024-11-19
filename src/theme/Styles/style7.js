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
  
}