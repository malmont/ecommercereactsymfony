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
justify-content: center;
align-items: center;
height: 656px;
width: 280px;
border-radius: 8px;
overflow: hidden;
margin: auto;
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
width: 93%;
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
background: linear-gradient(45deg, ${(props) => props.theme.colors.discountBadgeBackground }, ${(props) => props.theme.colors.goldAccent });
color: ${(props) => props.theme.colors.dangerHover};
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
color: ${(props) => props.theme.colors.timeText };
text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`,
FeatureWrapper: styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
padding: 20px;
background: linear-gradient(
  120deg,
  ${(props) => props.theme.colors.featureBackground },
  ${(props) => props.theme.colors.discountBadgeBackground}
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
  ${(props) => props.theme.colors.cardGradientStart },
  ${(props) => props.theme.colors.cardGradientEnd }
);
border: 1px solid ${(props) => props.theme.colors.cardBorder };
border-radius: 20px;
box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
color: ${(props) => props.theme.colors.cardText };
font-size: 1.1rem;
font-weight: bold;
text-align: center;
transition: transform 0.4s ease, box-shadow 0.4s ease;

&:hover {
  transform: scale(1.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.cardHoverGradientStart },
    ${(props) => props.theme.colors.cardHoverGradientEnd }
  );
}

svg {
  margin-bottom: 10px;
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.iconColor };
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    transform: rotate(10deg);
    color: ${(props) => props.theme.colors.iconHoverColor };
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
justify-content: space-evenly; /* Centrage plus uniforme */
`,

ColumnExplore: styled.div`
flex: 1;
min-width: 340px; 
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
background: ${(props) => props.theme.colors.imageWrapperBackground };
display: flex;
justify-content: center;
align-items: center;
`,

ImageWrapperExploreStandart: styled.div`
width: 100%;
height: 300px; 
overflow: hidden;
border-radius: 25px 25px 0 0;
background: ${(props) => props.theme.colors.imageWrapperBackground };
display: flex;
justify-content: center;
align-items: center;
`,

CardImageExploreStandart: styled.img`
width: auto;
height: 100%;
object-fit: cover;
  border-bottom: 3px solid ${(props) => props.theme.colors.cardBorder };
`,

CardImageExploreDifferent: styled.img`
width: auto;
height: 100%;
object-fit: cover;
 border-bottom: 3px solid ${(props) => props.theme.colors.cardBorder };
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
background-color: ${(props) => props.theme.colors.cardBackground };
border-radius: 15px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
padding: 20px;
border: 1px solid ${(props) => props.theme.colors.border };
overflow: hidden;
`,
ContainerDetailsProduct: styled.div`
    padding: 10px;
    background: linear-gradient(
      120deg,
      ${(props) => props.theme.colors.containerGradientStart },
      ${(props) => props.theme.colors.containerGradientEnd }
    );
    border-radius: 30px;
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
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
    border-radius: 25px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
    &:hover {
      transform: scale(1.03);
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
    }
  `,

  ObjectFeatureDetailProduct: styled.div`
    text-align: center;
    padding: 25px;
    width: 200px;
    height: 150px;
    background: ${(props) => props.theme.colors.featureBackground};
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
      color: ${(props) => props.theme.colors.featureTextColor };
    }
  `,

  ColorButton: styled.button`
    width: 55px;
    height: 55px;
    border-radius: 50%;
    border: 4px solid ${(props) => (props.isSelected ? props.theme.colors.primary  : "#ccc")};
    background: ${(props) => props.color};
    cursor: pointer;
    transition: transform 0.4s ease, box-shadow 0.4s ease;

    &:hover {
      transform: scale(1.25);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    }
  `,

  SizeButton: styled.button`
    width: 55px;
    height: 55px;
    border-radius: 20%;
    border: 4px solid ${(props) => (props.isSelected ? props.theme.colors.primary  : "#ccc")};
    background: ${(props) => (props.isSelected ? props.theme.colors.primary  : "#f5f5f5")};
    color: ${(props) => (props.isSelected ? "#ffffff" : "#000000")};
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.4s ease, background-color 0.4s ease;

    &:hover {
      transform: translateY(-5px) scale(1.15);
      background: ${(props) => props.theme.colors.primaryHover };
      color: #ffffff;
    }
  `,

  ImageEncadrement: styled.img`
    border: 5px solid ${(props) => props.theme.colors.imageBorder };
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
    color: ${(props) => props.theme.colors.infoTextColor };
    background: ${(props) => props.theme.colors.infoBackground };
    padding: 20px 25px;
    border-radius: 15px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.4s ease;

    &:hover {
      transform: translateY(-8px);
    }
  `,


  PrincipalDetailsDetailProduct: styled.div`
    padding: 10px;
    background: radial-gradient(
      circle,
      ${(props) => props.theme?.colors?.principalDetailsBackground },
      ${(props) => props.theme?.colors?.secondaryBackground }
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
        ? `4px solid ${props.theme.colors.primary}`
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
      props.isSelected ? props.theme.colors.secondaryBackground : "#fff"};
    border: ${(props) =>
      props.isSelected
        ? `3px solid ${props.theme.colors.primary}`
        : "2px solid #ddd"};
    color: ${(props) => (props.isSelected ? "#fff" : props.theme.colors.textColor )};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.9rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: ${(props) => props.theme.colors.hoverBackground };
      transform: scale(1.15) rotate(-3deg);
    }
  `,

  CartItemQuantity: styled.span`
    font-size: 1.2rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.quantityText };
    background: ${(props) => props.theme.colors.quantityBackground };
    padding: 0.4rem 0.8rem;
    border-radius: 50px;
    border: 2px solid ${(props) => props.theme.colors.primary };
    box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
      background-color: ${(props) => props.theme.colors.hoverQuantityBackground };
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
      background: ${(props) => props.theme.colors.hoverBackground };
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
    color: ${(props) => props.theme.colors.variantText };
    margin-top: 5px;
  `,

  CartItemPrice: styled.div`
    font-size: 1.4rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.priceText };
    margin-top: 10px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  `,

  CartItemTitle: styled.h3`
    font-size: 1.3rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.titleText };
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
    background: ${(props) => props.theme.colors.cartItemBackground};
    border: 1px solid ${(props) => props.theme.colors.border };
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.25);
    }
    @media (max-width: 400px) {
    flex-direction: column;
    align-items: flex-start;
  }
  `,

  CartItemContainer: styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 20px auto;
    @media (max-width: 768px) {
    width: 100%;
    margin: 10px 0px;

  }
  `,
  OrderSummaryContainer: styled.div`
  width: 100%;
  max-width: 830px;
  margin: 2rem auto;
  padding: 1.2rem;
  background: ${(props) => props.theme.colors.cardBackground };
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
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
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.titleText };
  margin-bottom: 1rem;
  text-align: center;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
   @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`,

// Ligne de séparation subtile
Divider: styled.hr`
  border: 0;
  height: 2px;
  background: ${(props) => props.theme.colors.gradientStart};
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
  color: ${(props) => props.theme.colors.textColor };
`,

// Texte standard pour les détails
OrderSummaryText: styled.span`
  color: ${(props) => props.theme.colors.cardBodyText };
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.navItemHoverBackground };
  }
`,

// Texte mis en évidence (comme le total)
OrderSummaryHighlight: styled.span`
  font-weight: bold;
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.highlightText };
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`,

// Bouton de validation de la commande
CheckoutButton: styled.button`
  width: 100%;
  padding: 0.75rem;
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.colors.buttonBackground },
    ${(props) => props.theme.colors.buttonHover }
  );
  color: ${(props) => props.theme.colors.buttonText };
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
    background: ${(props) => props.theme.colors.buttonHover };
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.25);
  }
      @media (max-width: 768px) {
    padding: 10px 10px;
    font-size: 0.9rem;
  }
`,
CarrierContainer: styled.div`
  
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
    @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    padding: 5px;
  }
`,
CarrierCard: styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100px;
  padding: 1rem;
  background: ${(props) => props.theme.colors.cardBackground };
  border: ${(props) =>
    props.isSelected
      ? `3px dashed ${props.theme.colors.selectedBorder || props.theme.colors.primary}`
      : `1px solid ${props.theme.colors.cardBorder }`};
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

  }
`,
AddressContainer: styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 2rem;
  background: ${(props) => props.theme.colors.containerBackground };
  border-radius: 20px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
`,
AddressCard: styled.div`
  width: 100%;
  max-width: 280px;
  padding: 1.5rem;
  background: ${(props) => props.theme.colors.cardBackground };
  border: ${(props) =>
    props.isSelected
      ? `3px dashed ${props.theme.colors.selectedBorder }`
      : `1px solid ${props.theme.colors.cardBorder }`};
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
  max-width: 250px;
  background: ${(props) => props.theme.colors.cardBackground};
  border: ${(props) =>
    props.isSelected
      ? `3px dashed ${props.theme.colors.selectedBorder }`
      : `1px solid ${props.theme.colors.cardBorder }`};
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
  }
`,
DashboardWrapper: styled.div`
background: linear-gradient(
  135deg,
  ${(props) => props.theme.colors.gradientStart},
  ${(props) => props.theme.colors.gradientEnd}
);
 margin-top: 50px;
 width: 50%;
margin: 0 auto;
margin-top: 70px;

animation: ${gradientAnimation} 15s ease infinite;

@media (max-width: 768px) {
margin-top: 0;
  padding: 20px;
  width: 100%;
}
`,

DashboardSidebar: styled.div`
background: ${(props) => props.theme.colors.sidebarBackground };
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
    margin-bottom: 30px;
    list-style: none;
  `,

  // Liens de navigation dans la sidebar
  DashboardNavLink: styled(NavLink)`
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
    padding: 10px 5px;
    color: ${(props) =>
      props.className?.includes('active')
        ? props.theme.colors.activeLinkText 
        : props.theme.colors.linkText } !important;
    background-color: ${(props) =>
      props.className?.includes('active')
        ? props.theme.colors.activeLinkBackground
        : 'transparent'} !important;
    border-radius: 15px;
    text-decoration: none !important;
    transition: background-color 0.4s ease, color 0.4s ease, transform 0.4s ease;
    position: relative;
    overflow: hidden;

    &:hover {
      background-color: ${(props) => props.theme.colors.navItemHoverBackground } !important;
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    }

    i {
      margin-right: 20px;
    }
  `,

  DashboardContent: styled.div`
  padding: 10px;
  
  margin-top: 50px;
  width: 100%;
  background: ${(props) => props.theme.colors.contentBackground};
  border-radius: 25px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  animation: ${gradientAnimation} 15s ease infinite;

  @media (max-width: 992px) {
    margin-left: 180px; /* Ajustement pour les écrans moyens */
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 10px;
    width: 100%;
    padding: 0px;
  }
`,

  // Conteneur pour les onglets
  DashboardTabPane: styled.div`
    padding: 10px;
    background: ${(props) => props.theme.colors.cardBackground };
    border-radius: 25px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  `,

  // Carte principale
  DashboardCard: styled.div`
    background: ${(props) => props.theme.colors.cardBackground };
    border-radius: 25px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    position: relative;
  `,

  // En-tête de la carte
  DashboardCardHeader: styled.div`
    padding: 40px;
    background: ${(props) => props.theme.colors.cardHeaderBackground };
    color: ${(props) => props.theme.colors.cardHeaderText };
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
  `,

  // Corps de la carte
  DashboardCardBody: styled.div`
    padding: 40px;
    color: ${(props) => props.theme.colors.cardBodyText };
    font-size: 1.1rem;
    line-height: 1.8;
  `,
  TableWrapper: styled.div`
  padding: 10px;
  background: ${(props) => props.theme.colors.cardBackground};
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {

    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }
    @media (max-width: 768px) {
    padding: 5px;
    overflow-x: auto;
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

background: linear-gradient(
  145deg,
  ${(props) => props.theme.colors.containerGradientStart },
  ${(props) => props.theme.colors.containerGradientEnd }
);
border-radius: 20px;
box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
transition: transform 0.3s ease, box-shadow 0.3s ease;

&:hover {
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
  background: ${(props) => props.theme.colors.buttonHover };
  transform: scale(1.05);
}
`,

AddressCardList: styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
gap: 1.5rem;
padding: 1rem 0;
`,

AddressCardHeader: styled.div`
background: ${(props) => props.theme.colors.cardHeaderBackground };
color: ${(props) => props.theme.colors.cardHeaderText };
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
background: ${(props) => props.theme.colors.cardBodyBackground };
color: ${(props) => props.theme.colors.cardBodyText};
border-radius: 0 0 15px 15px;
box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
transition: background-color 0.3s ease;

&:hover {
  background: ${(props) => props.theme.colors.cardBodyHoverBackground };
}
`,

Address: styled.p`
margin: 0.5rem 0;
font-size: 1rem;
font-weight: 500;
color: ${(props) => props.theme.colors.textColor };
`,

ButtonGroup: styled.div`
display: flex;
gap: 0.75rem;
margin-top: 1rem;
justify-content: center;
`,

EditButton: styled.button`
background: ${(props) => props.theme.colors.editButtonBackground };
color: ${(props) => props.theme.colors.buttonText };
border: none;
padding: 0.5rem 1rem;
border-radius: 10px;
font-size: 0.9rem;
font-weight: bold;
cursor: pointer;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
transition: transform 0.3s ease, background-color 0.3s ease;

&:hover {
  background: ${(props) => props.theme.colors.editButtonHover };
  transform: scale(1.05);
}
`,

DeleteButton: styled.button`
background: ${(props) => props.theme.colors.deleteButtonBackground };
color: ${(props) => props.theme.colors.buttonText };
border: none;
padding: 0.5rem 1rem;
border-radius: 10px;
font-size: 0.9rem;
font-weight: bold;
cursor: pointer;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
transition: transform 0.3s ease, background-color 0.3s ease;

&:hover {
  background: ${(props) => props.theme.colors.deleteButtonHover };
  transform: scale(1.05);
}
`,

EmptyAddressMessage: styled.p`
text-align: center;
font-size: 1.2rem;
font-weight: bold;
color: ${(props) => props.theme.colors.textMuted };
padding: 1rem;
border-radius: 10px;
background: ${(props) => props.theme.colors.cardBackground };
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
animation: ${shimmer} 2s infinite;
`,

LoadingMessage: styled.div`
text-align: center;
font-size: 1rem;
color: ${(props) => props.theme.colors.textMuted };
padding: 1rem;
border-radius: 10px;
background: ${(props) => props.theme.colors.cardBackground };
animation: ${shimmer} 1.8s infinite;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`,
NoCarrierMessage: styled.div`
text-align: center;
font-size: 1.2rem;
font-weight: bold;
color: ${(props) => props.theme.colors.textMuted };
background: ${(props) => props.theme.colors.emptyMessageBackground };
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
border: 2px solid ${(props) => props.theme.colors.imageBorder };
transition: transform 0.3s ease, border-color 0.3s ease;

&:hover {
  border-color: ${(props) => props.theme.colors.hoverBorder };
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
  padding: 5px;
  text-align: left;
  border: 1px solid ${(props) => props.theme.colors.tableBorder };
}

th {
  background: ${(props) => props.theme.colors.tableHeaderBackground };
  color: ${(props) => props.theme.colors.tableHeaderText };
  font-weight: bold;
}

td {
  background: ${(props) => props.theme.colors.tableCellBackground };
  color: ${(props) => props.theme.colors.tableCellText };
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.theme.colors.tableCellHoverBackground };
  }
}
  @media (max-width: 768px) {
  margin-top: 1rem;
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
      color: ${(props) => props.theme.colors.textMuted };
    }
  }
`,

// Conteneur pour la table des transporteurs
CarrierTableContainer: styled.div`
width: 100%;
max-width: 1200px;

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
    margin-top: 1rem;
    background: ${(props) => props.theme.colors.containerBackground};
    border-radius: 20px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    width: 100%;
    
  `,
}