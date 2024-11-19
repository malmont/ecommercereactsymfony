import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const style1 = {

    navbarHeight: '90px',
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
     
    `,

    NavbarContent: styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
    `,

    Logo: styled(NavLink)`
      font-size: 1.5rem;
      font-weight: bold;
      color: ${(props) => props.theme.colors.logoText};
      text-decoration: none;
    `,

    NavLinks: styled.ul`
      list-style-type: none;
       background: ${(props) => props.theme.colors.navLinksBackground};
      height: 40px;
      display: flex;
      justify-content: left;
      align-items: center;
      padding: 0;
      margin: 0;
  
      @media screen and (max-width: 800px) {
        display: none;
      }
    `,

    NavItem: styled(NavLink)`
      color: ${(props) => props.theme.colors.navItemText};
      text-decoration: none;
      padding: 0.5rem 1rem;
  
      &:hover {
        color: ${(props) => props.theme.colors.navItemHover};
      }
  
      &.active {
        color: ${(props) => props.theme.colors.navItemActive};
      }
    `,

    NavButton: styled.button`
      background: none;
      border: none;
      color: ${(props) => props.theme.colors.navButtonText};
      cursor: pointer;
      font-size: 1em;
    `,

    MobileMenuButton: styled.div`
      display: none;
      @media screen and (max-width: 800px) {
        display: inline-block;
        color: ${(props) => props.theme.colors.mobileMenuButton};
        cursor: pointer;
      }
    `,

    MobileMenu: styled.ul`
      list-style-type: none;
      display: none;
      @media screen and (max-width: 800px) {
        display: ${(props) => (props.isOpen ? 'block' : 'none')};
        position: absolute;
        top: 60px;  // Ajuster la hauteur si nécessaire
        left: 0;
        right: 0;
        width: auto;  // Correction ici
        background-color: ${(props) => props.theme.colors.mobileMenuBackground};
        z-index: 10;
        padding: 20px;
        margin: 0 auto;
        border-radius: 15px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
    `,

    MobileNavItem: styled(NavLink)`
      display: block;
      width: 100%;
      padding: 10px 0;
      text-align: center;
      color: ${(props) => props.theme.colors.mobileNavItemText};
      text-decoration: none;
  
      &:hover {
        color: ${(props) => props.theme.colors.navItemHover};
      }
  
      &.active {
        color: ${(props) => props.theme.colors.navItemActive};
      }
    `,

    CartIcon: styled.div`
      cursor: pointer;
      color: ${(props) => props.theme.colors.cartIcon};
    `,

    CartCount: styled.p`
      background-color: ${(props) => props.theme.colors.cartCountBackground};
      color: ${(props) => props.theme.colors.cartCountText};
      border-radius: 50%;
      padding: 0 6px;
      margin: 5px;
      display: inline-block;
    `,

    Select: styled.select`
      background-color: ${(props) => props.theme.colors.selectBackground};
      color: ${(props) => props.theme.colors.selectText};
      border: none;
      padding: 0.5rem;
      margin-right: 1rem;
    `
    ,
    CardContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${(props) => props.theme.colors.cardBackground};
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    height: 520px;
    width: 260px;
    margin-bottom: 5px;
  `,

  CardProperty: styled.div`
    background-color: ${(props) => props.theme.colors.cardPropertyBackground};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,

  CardImage: styled.img`
    width: 100%;
    height: 370px;
  `,

  CardBody: styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    color: ${(props) => props.theme.colors.cardBodyText};
  `,
  DiscountBadge: styled.span`
  background-color: ${(props) => props.theme.colors.discountBadgeBackground};
  color: ${(props) => props.theme.colors.discountBadgeText};
  border-radius: 10%;
  padding: 5px 10px;
  font-size: 12px;
  margin-left: 10px;
  display: inline-block;
`,

Countdown: styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  color: ${(props) => props.theme.colors.countdownText};
  text-align: center;
  padding: 5px 0;
  font-size: 14px;
`,
ColorText: styled.p`
color: ${(props) => props.theme.colors.colorText || 'white'};
`,
Time: styled.div`
  font-weight: bold;
  font-size: 16px;`,

  FeatureWrapper: styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.featureBackground };
`,

FeatureCard: styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 10px;
  background-color: ${(props) => props.theme.colors.cardBackground };
  border: 1px solid ${(props) => props.theme.colors.border };
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: ${(props) => props.theme.colors.cardText };
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`,
StandardCardExploreCard: styled.div`
  max-width: 100%;
  padding: 0px 5px;
  min-height: 400px;
`,


CardExplore: styled.div`
background-color: ${(props) => props.theme.colors.cardBackground };
color: ${(props) => props.theme.colors.cardText };
border: 1px solid ${(props) => props.theme.colors.border };
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
border-radius: 10px;
transition: transform 0.3s ease-in-out;
height: 450px;
&:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.6);
}
`,

RowExplore: styled.div`
display: flex;
gap: 15px;
margin: 4px;
`,

ColumnExplore: styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,

CardBodyExplore: styled.div`
padding: 15px;
text-align: center;
`,
DifferentCardExploreCard: styled.div`
  max-width: 100%;
  padding: 5px 1px;
  min-height: 400px;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20pxrgba(0, 0, 0, 0.6);
  }
`,
ContentExplore: styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: ${(props) =>
  props.theme.colors.differentCardBackground };
color: ${(props) => props.theme.colors.differentCardText };
border: 1px solid ${(props) =>
  props.theme.colors.differentCardBorder };
`,

DetailsExplore: styled.div`
padding: 20px;
text-align: center;
`,

TitleExplore: styled.h3`
font-size: 1.5rem;
margin-bottom: 10px;
`,

DescriptionExplore: styled.p`
font-size: 1rem;
margin-bottom: 15px;
`,

LinkExplore: styled.a`
text-decoration: none;
color: ${(props) => props.theme.colors.linkText };
font-weight: bold;

&:hover {
  color: ${(props) => props.theme.colors.linkHoverText};
}
`,
ImageWrapperExploreDifferent: styled.div`
  width: 300px;
  height: 300px;
  overflow: hidden;
  border-radius: 10px 10px 0 0;
`,

ImageWrapperExploreStandart: styled.div`
  width: 300px;
  height: 500px;
  overflow: hidden;
  border-radius: 10px 10px 0 0;
`, 
CardImageExploreStandart: styled.img`
  width: 300px;
  height: 400px;
  overflow: hidden;
  border-radius: 10px 10px 0 0;
`,

CardImageExploreDifferent: styled.img`
  width: 300px;
  height: 400px;
  overflow: hidden;
  border-radius: 10px 10px 0 0;
`,

 EmailCardContainer : styled.div`
  max-width: 500px; 
  margin: 20px auto; 
  background-color: ${(props) => props.theme.colors.cardBackground || '#ffffff'};
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`,
ContainerDetailsProduct: styled.div`
    padding: 30px;
`,

PrincipalDetailsDetailProduct: styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`,

ColorSelectionDetailProduct: styled.div`
    margin: 20px 0;
`,

SizeSelectionDetailProduct: styled.div`
    margin: 20px 0;
`,

ColorOptionsDetailProduct: styled.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;
`,

SizeOptionsDetailProduct: styled.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;
`,

InfoSelectionDetailProduct: styled.div`
    margin-top: 10px;
    font-size: 16px;
    font-weight: 500;
`,

FeatureDetailProduct: styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
`,

ObjectFeatureDetailProduct: styled.div`
    text-align: center;

    p {
        margin-top: 10px;
        font-size: 14px;
    }
`,

ImageEncadrement: styled.img`
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 10px;
    width: 100%;
    max-width: 500px;
    margin: auto;
`,

ColorButton: styled.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid ${(props) => (props.isSelected ? "#007BFF" : "#ccc")};
    background-color: ${(props) => props.color};
    cursor: pointer;

    &:hover {
        border: 2px solid #007BFF;
    }
`,

SizeButton: styled.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid ${(props) => (props.isSelected ? "#007BFF" : "#ccc")};
    background-color: ${(props) => (props.isSelected ? "#007BFF" : "white")};
    color: ${(props) => (props.isSelected ? "white" : "black")};
    font-size: 18px;
    cursor: pointer;

    &:hover {
        background-color: #007BFF;
        color: white;
    }
`,
  
  }

