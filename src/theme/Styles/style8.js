import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const style8 = {
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
    color: ${(props) => props.theme.colors.goldAccent};
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
    color: ${(props) => props.theme.colors.buttonBackground};
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
    color: ${(props) => props.theme.colors.goldAccent};

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
  justify-content: center;
  align-items: center;
  height: 656px;
  width: 270px;
  border-radius: 8px;
  overflow: hidden;
  margin: auto;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.cardBackground };
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
    margin-bottom: 10px;
  &:hover {
    border-color: ${(props) => props.theme.colors.goldAccent };
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    transform: translateY(-8px);
  }
  `,

  CardProperty: styled.div`
  background: ${(props) => props.theme.colors.cardPropertyBackground };
  border: 2px solid ${(props) => props.theme.colors.goldAccent };
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  border-radius: 10px;
  margin:auto;
`,

  CardImage: styled.img`
width: 100%;
height: 400px;
object-fit: cover;
border-bottom: 2px solid ${(props) => props.theme.colors.goldAccent };
`,

  CardBody: styled.div`
flex-grow: 1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 15px;
color: ${(props) => props.theme.colors.cardBodyText };
text-align: center;
`,

  DiscountBadge: styled.span`
background: ${(props) => props.theme.colors.goldAccent };
color: ${(props) => props.theme.colors.discountBadgeText };
border-radius: 20px;
padding: 10px 16px;
font-size: 0.85rem;
font-weight: bold;
margin-top: 15px;
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
  color: ${(props) => props.theme.colors.timeText };
`,
  FeatureWrapper: styled.div`
display: flex;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
padding: 30px;
background: linear-gradient(
  135deg,
  ${(props) => props.theme.colors.featureGradientStart},
  ${(props) => props.theme.colors.featureGradientEnd }
);
border-radius: 20px;
margin: 20px auto;
max-width: 1700px;
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
      padding: 3px;
    }

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
background: ${(props) => props.theme.colors.cardBackground };
border: 2px solid ${(props) => props.theme.colors.goldAccent }; /* Bordure dorée */
border-radius: 15px;

color: ${(props) => props.theme.colors.cardText };
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
  color: ${(props) => props.theme.colors.goldAccent };
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    transform: scale(1.2);
    color: ${(props) => props.theme.colors.iconHoverColor };
  }
}
`,
  StandardCardExploreCard: styled.div`
max-width: 100%;
padding: 15px;
min-height: 500px;
background: linear-gradient(135deg, ${(props) => props.theme.colors.gradientStart}, ${(props) => props.theme.colors.gradientEnd});
border: 3px solid ${(props) => props.theme.colors.goldAccent };
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
border: 2px solid ${(props) => props.theme.colors.goldAccent }; /* Contour doré */
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
@media (max-width: 768px) {
  min-width: 100%;
}
`,

  CardBodyExplore: styled.div`
padding: 30px;
text-align: center;
background: ${(props) => props.theme.colors.cardBodyBackground};
border-top: 1px solid ${(props) => props.theme.colors.goldAccent }; /* Contour doré */
border-radius: 0 0 25px 25px;
`,

  DifferentCardExploreCard: styled.div`
max-width: 100%;
padding: 30px;
background: ${(props) => props.theme.colors.differentCardBackground};
border: 3px dotted ${(props) => props.theme.colors.goldAccent }; /* Contour doré en pointillés */
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
border: 2px solid ${(props) => props.theme.colors.goldAccent}; /* Contour doré */
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
background: ${(props) => props.theme.colors.imageWrapperBackground };
display: flex;
justify-content: center;
align-items: center;
border-bottom: 3px solid ${(props) => props.theme.colors.goldAccent }; /* Contour doré */
`,

  ImageWrapperExploreStandart: styled.div`
width: 100%;
height: 450px;
overflow: hidden;
border-radius: 25px 25px 0 0;
background: ${(props) => props.theme.colors.imageWrapperBackground };
display: flex;
justify-content: center;
align-items: center;
border-bottom: 3px solid ${(props) => props.theme.colors.goldAccent }; /* Contour doré */
`,

  CardImageExploreStandart: styled.img`
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
border-bottom: 2px solid ${(props) => props.theme.colors.goldAccent}; /* Contour doré */

&:hover {
  color: ${(props) => props.theme.colors.linkHoverText};
  text-decoration: underline;
  transform: scale(1.1);
}
`,
  EmailCardContainer: styled.div`
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
  135deg,
  ${(props) => props.theme?.colors?.containerGradientStart },
  ${(props) => props.theme?.colors?.containerGradientEnd }
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
padding: 10px;
background: radial-gradient(
  circle,
  ${(props) => props.theme?.colors?.principalDetailsBackground || "#ffffff"},
  ${(props) => props.theme?.colors?.secondaryBackground || "#f4f4f4"}
);
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
border: 3px solid ${(props) => props.theme?.colors?.goldAccent };
border-radius: 15px;
box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`,

  ImageEncadrement: styled.img`
width: 100%;
max-width: 450px;
border-radius: 15px;
border: 4px solid ${(props) => props.theme?.colors?.goldAccent };
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
width: 40px;
height: 40px;
border-radius: 50%;
background-color: ${(props) => props.color };
border: 3px solid ${(props) => (props.isSelected ? props.theme?.colors?.goldAccent : "#ccc")};
transition: transform 0.3s ease, box-shadow 0.3s ease;

&:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 10px ${(props) => props.theme?.colors?.goldAccent };
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
width: 40px;
height: 40px;
background-color: ${(props) => (props.isSelected ? props.theme?.colors?.goldAccent  : "#f5f5f5")};
border: 3px solid ${(props) => (props.isSelected ? props.theme?.colors?.goldAccent  : "#ccc")};
color: ${(props) => (props.isSelected ? "#fff" : "#000")};
font-size: 16px;
font-weight: bold;
border-radius: 15%;
transition: transform 0.3s ease, background-color 0.3s ease;

&:hover {
  transform: translateY(-3px) scale(1.05);
  background-color: ${(props) => props.theme?.colors?.goldAccent };
  color: #fff;
}
`,
  ObjectFeatureDetailProduct: styled.div`
  text-align: center;
  padding: 10px;
  width: 100%;
  background: ${(props) => props.theme?.colors?.goldAccent };
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
    color: ${(props) => props.theme?.colors?.featureTextColor };
  }
`,

  InfoSelectionDetailProduct: styled.div`
margin-top: 20px;
padding: 15px 25px;
background-color: ${(props) => props.theme?.colors?.infoBackground };
color: ${(props) => props.theme?.colors?.infoTextColor};
border: 2px solid ${(props) => props.theme?.colors?.goldAccent};
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
  ${(props) => props.theme?.colors?.featureGradientStart },
  ${(props) => props.theme?.colors?.featureGradientEnd }
);

border-radius: 15px;
box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
`,
  ColorCircle: styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: ${(props) => props.color};
border: ${(props) =>
      props.isSelected
        ? `3px solid ${props.theme.colors.goldAccent }`
        : '2px solid #ccc'};
transition: all 0.3s ease;

&:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 10px ${(props) => props.theme.colors.goldAccent};
}
`,

  SizeCircle: styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: ${(props) =>
      props.isSelected ? props.theme.colors.goldAccent  : '#f7f7f7'};
color: ${(props) => (props.isSelected ? '#fff' : '#000')};
display: flex;
align-items: center;
justify-content: center;
border: ${(props) =>
      props.isSelected
        ? `3px solid ${props.theme.colors.goldAccent }`
        : '2px solid #ccc'};
font-weight: bold;
font-size: 0.9rem;
transition: all 0.3s ease;

&:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 10px ${(props) => props.theme.colors.goldAccent };
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
color: ${(props) => props.theme.colors.goldAccent };
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
border: 2px solid ${(props) => props.theme.colors.goldAccent };

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
border: 2px solid ${(props) => props.theme.colors.goldAccent};
border-radius: 8px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
transition: all 0.3s ease;

&:hover {
  transform: scale(1.03);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}
   @media (max-width: 400px) {
    flex-direction: column;
    align-items: flex-start;
  }
`,

  CartItemContainer: styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: ${(props) => props.theme.colors.containerBackground};
  border: 2px solid ${(props) => props.theme.colors.goldAccent};
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  margin: 20px;
  @media (max-width: 768px) {
      width: 100%;
  margin: 10px 0px;
  }

`,
  OrderSummaryContainer: styled.div`
    width: 100%;
    margin: 2rem auto;
    padding: 1.5rem;
    background: ${(props) => props.theme.colors.cardBackground};
    border-radius: 15px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border: 2px solid ${(props) => props.theme.colors.goldAccent};
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
    }
    @media (max-width: 768px) {
    padding: 10px;
    margin:auto;
    width: 100%;
  }
  `,

  // Titre du résumé de commande
  OrderSummaryTitle: styled.h2`
    font-size: 1.6rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.textPrimary };
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
    background: ${(props) => props.theme.colors.goldAccent };
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
    color: ${(props) => props.theme.colors.textSecondary };
  `,

  // Texte standard pour les détails
  OrderSummaryText: styled.span`
    color: ${(props) => props.theme.colors.textSecondary };
    transition: color 0.3s ease;

    &:hover {
      color: ${(props) => props.theme.colors.goldAccent};
    }
  `,

  // Texte mis en évidence (comme le total)
  OrderSummaryHighlight: styled.span`
    font-weight: bold;
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.goldAccent };
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
      ${(props) => props.theme.colors.goldAccent},
      ${(props) => props.theme.colors.buttonBackground }
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
      background: ${(props) => props.theme.colors.goldAccent };
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.25);
    }
  `,
  CarrierContainer: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px
    padding: 20px;
    background: ${(props) => props.theme.colors.containerBackground };
    border-radius: 15px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    padding: 10px;
  }
  `,

  CarrierCard: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    padding: 5px;
    background: ${(props) =>
      props.isSelected
        ? props.theme.colors.goldAccent
        : props.theme.colors.cardBackground};
    border: ${(props) =>
      props.isSelected
        ? `3px solid ${props.theme.colors.goldAccent}`
        : `1px solid ${props.theme.colors.cardBorder}`};
    border-radius: 15px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }

    img {
      width: 50px;
      height: auto;
    }
      @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    }
  `,

  AddressContainer: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
    background: ${(props) => props.theme.colors.containerBackground || '#f7f7f7'};
    border-radius: 15px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  `,

  AddressCard: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background: ${(props) =>
      props.isSelected
        ? props.theme.colors.goldAccent
        : props.theme.colors.cardBackground};
    border: ${(props) =>
      props.isSelected
        ? `3px solid ${props.theme.colors.goldAccent}`
        : `1px solid ${props.theme.colors.cardBorder}`};
    border-radius: 15px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }

    p {
      font-size: 1rem;
      color: ${(props) => props.theme.colors.textPrimary};
      text-align: center;
    }
  `,

  PaymentMethodContainer: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
    background: ${(props) => props.theme.colors.containerBackground };
    border-radius: 15px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  `,

  PaymentMethodCard: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 130px;
    height: 130px;
    padding: 15px;
    background: ${(props) =>
      props.isSelected
        ? props.theme.colors.goldAccent
        : props.theme.colors.cardBackground};
    border: ${(props) =>
      props.isSelected
        ? `3px solid ${props.theme.colors.goldAccent}`
        : `1px solid ${props.theme.colors.cardBorder}`};
    border-radius: 15px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }

    img {
      width: 80px;
      height: auto;
    }
    @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    }
  `,

  // Sidebar pour les onglets

  DashboardWrapper: styled.div`
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.gradientStart},
    ${(props) => props.theme.colors.gradientEnd}
  );
   margin-top: 50px;
   width: 50%;
  margin: 0 auto;
  margin-top: 60px;
  @media (max-width: 768px) {
    padding: 20px;
    width: 100%;
  }
  `,
  // Élément de navigation dans la sidebar
  DashboardNavItem: styled.li`
    margin-bottom: 10px;
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
        ? props.theme.colors.activeLinkText
        : props.theme.colors.linkText} !important;
    background-color: ${(props) =>
      props.className?.includes('active')
        ? props.theme.colors.goldAccent
        : 'transparent'} !important;
    border-radius: 15px;
    text-decoration: none !important;
    transition: background-color 0.4s ease, color 0.4s ease, transform 0.4s ease;
    position: relative;
    overflow: hidden;
    border: 2px solid
      ${(props) =>
      props.className?.includes('active')
        ? props.theme.colors.goldAccent
        : 'transparent'};

    &:hover {
      background-color: ${(props) => props.theme.colors.navItemHoverBackground} !important;
      transform: scale(1.05);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
      border: 2px solid ${(props) => props.theme.colors.goldAccent};
    }

    i {
      margin-right: 20px;
    }
  `,

  // Contenu principal du tableau de bord
  DashboardContent: styled.div`
  padding: 10px;
  margin-top: 50px;
  width: 100%;
  background: ${(props) => props.theme.colors.contentBackground};
  border-radius: 25px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);

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
    background: ${(props) => props.theme.colors.cardBackground};
    border-radius: 25px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
    border: 2px solid ${(props) => props.theme.colors.goldAccent}; /* Contour doré */
  `,

  // Carte principale
  DashboardCard: styled.div`
    background: ${(props) => props.theme.colors.cardBackground};
    border-radius: 25px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    position: relative;
    border: 2px solid ${(props) => props.theme.colors.goldAccent}; /* Contour doré */
  `,

  // En-tête de la carte
  DashboardCardHeader: styled.div`
    padding: 40px;
    background: ${(props) => props.theme.colors.goldAccent};
    color: ${(props) => props.theme.colors.cardHeaderText};
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
    border-bottom: 2px solid ${(props) => props.theme.colors.goldAccent}; /* Liseré doré */
  `,

  // Corps de la carte
  DashboardCardBody: styled.div`
    padding: 40px;
    color: ${(props) => props.theme.colors.cardBodyText};
    font-size: 1.1rem;
    line-height: 1.8;
  `,
  DashboardSidebar: styled.div`
background: ${(props) => props.theme.colors.sidebarBackground};
padding: 40px;
border-radius: 20px;
box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
position: fixed;
top: ${(props) => props.theme.navbarHeight || '70px'};
left: 0;
height: calc(100% - ${(props) => props.theme.navbarHeight || '70px'});
width: 280px;
overflow-y: auto;
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

  TableWrapper: styled.div`
margin: 10px 0;
padding: 10px;
width: 100%;
background: ${(props) => props.theme.colors.cardBackground};
border-radius: 12px;
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
transition: transform 0.3s ease, box-shadow 0.3s ease;

&:hover {
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}
   @media (max-width: 768px) {
    padding: 5px;
    overflow-x: auto;
  }
`,

  ResponsiveTable: styled.table`
width: 100%;
border-collapse: collapse;
font-size: 0.95rem;
background: ${(props) => props.theme.colors.tableBackground};

th, td {
  padding: 15px;
  text-align: left;
  border: 1px solid ${(props) => props.theme.colors.goldAccent};
}

th {
  background: ${(props) => props.theme.colors.tableHeaderBackground};
  color: ${(props) => props.theme.colors.tableHeaderText};
  font-weight: bold;
  text-transform: uppercase;
}

td {
  background: ${(props) => props.theme.colors.tableRowBackground};
  color: ${(props) => props.theme.colors.tableRowText};
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
background: ${(props) => props.theme.colors.goldAccent};
color: ${(props) => props.theme.colors.buttonText};
border: none;
border-radius: 8px;
font-weight: bold;
text-transform: uppercase;
cursor: pointer;
transition: background-color 0.3s ease, transform 0.3s ease;

&:hover {
  background: ${(props) => props.theme.colors.buttonHover};
  transform: scale(1.05);
}

&:active {
  transform: scale(0.95);
}
`,

  TableEmptyMessage: styled.p`
font-size: 1.2rem;
text-align: center;
color: ${(props) => props.theme.colors.emptyMessageText};
background: ${(props) => props.theme.colors.emptyMessageBackground};
padding: 20px;
border-radius: 10px;
border: 1px dashed ${(props) => props.theme.colors.goldAccent};
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
animation: fadeIn 0.8s ease-in-out;
`,
  AddressListWrapper: styled.div`
    padding: 30px;
    background: ${(props) => props.theme.colors.containerBackground};
    border-radius: 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    margin: 0 auto;
    border: 1px dashed ${(props) => props.theme.colors.goldAccent};
    @media (max-width: 768px) {
    max-width:none;
  }
  `,

  AddNewAddressButton: styled.button`
    width: 100%;
    padding: 10px 20px;
    background: ${(props) => props.theme.colors.goldAccent};
    color: ${(props) => props.theme.colors.buttonText};
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    margin-bottom: 20px;    
    &:hover {
      background: ${(props) => props.theme.colors.goldAccent};
      transform: scale(1.05);
    }
  `,

  AddressCardList: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 20px;
    justify-content: center;
  `,

  AddressCardHeader: styled.div`
    background: ${(props) => props.theme.colors.goldAccent};
    color: ${(props) => props.theme.colors.cardHeaderText};
    padding: 10px;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    border-radius: 5px;
    
  `,

  AddressCardBody: styled.div`
    padding: 15px;
    color: ${(props) => props.theme.colors.cardBodyText};
    font-size: 1rem;
    line-height: 1.5;
    
  `,

  Address: styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${(props) => props.theme.colors.cardBackground};
    border: 1px solid ${(props) => props.theme.colors.cardBorder};
    border-radius: 15px;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: all 0.3s ease;
    border: 1px dashed ${(props) => props.theme.colors.goldAccent};
    &:hover {
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
      transform: translateY(-3px);
    }
  `,

  ButtonGroup: styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    padding: 10px 15px;
    background: ${(props) => props.theme.colors.cardBodyBackground};
  `,

  EditButton: styled.button`
    padding: 8px 16px;
    background: ${(props) => props.theme.colors.buttonBackground};
    color: ${(props) => props.theme.colors.buttonText};
    border: none;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
      background: ${(props) => props.theme.colors.buttonHover};
      transform: scale(1.05);
    }
  `,

  DeleteButton: styled.button`
    padding: 8px 16px;
    background: ${(props) => props.theme.colors.errorBackground || '#FF0000'};
    color: ${(props) => props.theme.colors.errorText};
    border: none;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
      background: ${(props) => props.theme.colors.errorHover || '#CC0000'};
      transform: scale(1.05);
    }
  `,

  EmptyAddressMessage: styled.p`
    font-size: 1rem;
    color: ${(props) => props.theme.colors.emptyMessageText};
    text-align: center;
    padding: 20px;
    background: ${(props) => props.theme.colors.emptyMessageBackground};
    border-radius: 10px;
    border: 1px dashed ${(props) => props.theme.colors.emptyMessageBorder};
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  `,

  LoadingMessage: styled.div`
    font-size: 1.2rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.textPrimary};
    text-align: center;
    padding: 20px;
    background: ${(props) => props.theme.colors.loadingBackground};
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme.colors.loadingBorder};
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
    animation: shimmer 2s infinite;
  `,
  NoCarrierMessage: styled.p`
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.emptyMessageText};
  text-align: center;
  padding: 20px;
  background: ${(props) => props.theme.colors.emptyMessageBackground};
  border-radius: 10px;
  border: 1px dashed ${(props) => props.theme.colors.goldAccent};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  max-width: 600px;
`,

  CarrierImage: styled.img`
  width: 100px;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.colors.goldAccent};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`,

  CarrierTable: styled.table`
  width: 100%;
  border-collapse: collapse;
  background: ${(props) => props.theme.colors.tableBackground};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  th, td {
    padding: 5px;
    text-align: left;
    border: 1px solid ${(props) => props.theme.colors.goldAccent};
  }

  th {
    background: ${(props) => props.theme.colors.tableHeaderBackground};
    color: ${(props) => props.theme.colors.tableHeaderText};
    font-weight: bold;
    text-transform: uppercase;
  }

  td {
    background: ${(props) => props.theme.colors.tableRowBackground};
    color: ${(props) => props.theme.colors.tableRowText};
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

  CarrierTableContainer: styled.div`
  overflow-x: auto;
 
  background: ${(props) => props.theme.colors.containerBackground};
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 2px solid ${(props) => props.theme.colors.cardAccent};
  margin: 20px 0;
  max-width: 1200px;
  margin: 0 auto;
`,

  CarrierWrapper: styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
  background: ${(props) => props.theme.colors.containerBackground};
  border-radius: 15px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
`

}