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
      padding: 0.75rem 0.5rem;
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 1000;
      transition: all 0.3s ease;
     height: ${(props) => props.theme.navbarHeight || '90px'};
    `,

    NavbarContent: styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      
    `,

    Logo: styled(NavLink)`
      font-size: 1rem;
      font-weight: bold;
      color: ${(props) => props.theme.colors.logoText};
      text-decoration: none;
      height:5px;
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
    position: relative;
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
    height: 540px;
    width: 90%;
    border-radius: 10px;
    margin-bottom: 5px;
    @media screen and (max-width: 800px) {
      width: 100%;
      height: 100%;
    }
  `,

  CardProperty: styled.div`
    background-color: ${(props) => props.theme.colors.cardPropertyBackground};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin:auto;
  `,

  CardImage: styled.img`
    width: 300px;
    height: 405px;
  `,

  CardBody: styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding: 10px;
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
color: ${(props) => props.theme.colors.colorText};
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

  @media screen and (max-width: 800px) {
        width: 100%;
      }
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
  min-height: 400px;
  margin:auto;
`,


CardExplore: styled.div`
background-color: ${(props) => props.theme.colors.cardBackground };
color: ${(props) => props.theme.colors.cardText };
border: 1px solid ${(props) => props.theme.colors.border };
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
border-radius: 10px;
transition: transform 0.3s ease-in-out;
height: 450px;
margin:auto;
&:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.6);
}
 @media screen and (max-width: 800px) {
height: 100%;
  
  }
`,

RowExplore: styled.div`
 display: flex;
  align-items: center;
  gap: 5px;
  margin: 4px;
  @media screen and (max-width: 800px) {
  flex-direction: column;
  }
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
color: ${(props) => props.theme.colors.titleText };
`,

DescriptionExplore: styled.p`
font-size: 1rem;
margin-bottom: 15px;
color: ${(props) => props.theme.colors.descriptionText };
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
  border: 1px solid ${(props) => props.theme.colors.imageBorder};
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
  border: 2px solid ${(props) => (props.isSelected ? props.theme.colors.selectedBorder : props.theme.colors.noSelectedBorder)};
  background-color: ${(props) => props.color};
  cursor: pointer;

  &:hover {
    border: 2px solid ${(props) => props.theme.colors.hoverBorder};
  }
`,

SizeButton: styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid ${(props) => (props.isSelected ? props.theme.colors.selectedBorder : props.theme.colors.noSelectedBorder)};
  background-color: ${(props) => (props.isSelected ? props.theme.colors.selectedBackground : props.theme.colors.noSelectedBackground)};
  color: ${(props) => (props.isSelected ? props.theme.colors.selectedText : props.theme.colors.noSelectedText)};
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.hoverBackground || props.theme.colors.hoverBorder};
    color: ${(props) => props.theme.colors.hoverText};
  }
`,

CartItemContainer: styled.div`
  margin-bottom: 20px;
  
`,

CartItem: styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid gainsboro;
  padding-bottom: 20px;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 400px) {
    flex-direction: column;
  }
`,

CartItemInfo: styled.div`
  padding-left: 20px;
`,

CartItemImage: styled.img`
  object-fit: contain;
  width: 180px;
  height:230px;
`,

CartItemTitle: styled.p`
  font-size: 20px;
  font-weight: 450;

  @media (max-width: 1000px) {
    font-size: 18px;
  }
`,

CartItemPrice: styled.p`
  font-size: 20px;
  line-height: 35px;

  @media (max-width: 1000px) {
    font-size: 18px;
  }
`,

CartItemVariantInfo: styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  align-items: center;
`,

CartItemIncrDec: styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  width: 100px;
`,

IncrDecButton: styled.button`
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: gainsboro;
  border: none;
  border-radius: 100px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 2px 2px gray;
  }
`,

CartItemButton: styled.button`
  border: unset;
  margin-top: 10px;
  border-radius: 5px;
  background-color: transparent;
  color: rgb(241, 131, 131);
  cursor: pointer;

  &:hover {
    color: rgb(243, 92, 92);
  }
`,

CartItemQuantity: styled.p`
  font-size: 16px;
  font-weight: 500;
`,
ColorCircle: styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
   background-color: ${(props) => props.color || props.theme.colors.defaultCircleBackground };
  border: 1px solid ${(props) => props.theme.colors.colorCircleBorder};
`,


SizeCircle: styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.sizeCircleBackground };
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.sizeCircleText};
`,

OrderSummaryContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    border: 1px solid ${(props) => props.theme.colors.border};
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.cardBackground };
    margin-top: 20px;
    width: 100%;
  //    @media (max-width: 1000px) {
  //    padding: 10px;
  //   width: 250px;
  // }
    
  `,
  OrderSummaryTitle: styled.h4`
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.textColor };
    margin-bottom: 10px;
     @media (max-width: 768px) {
    font-size: 1.4rem;
  }
  `,
  Divider: styled.div`
    border-top: 1px solid ${(props) => props.theme.colors.border};
    margin: 10px 0;
  `,
  OrderSummaryRow: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
  `,
  OrderSummaryText: styled.p`
    color: ${(props) => props.theme.colors.textColor};
  `,
  OrderSummaryHighlight: styled.p`
    font-weight: bold;
    color: ${(props) => props.theme.colors.highlight };
     @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  `,
  CheckoutButton: styled.button`
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    background-color: ${(props) => props.theme.colors.buttonBackground };
    color: ${(props) => props.theme.colors.buttonText};
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;

    &:hover {
      background-color: ${(props) => props.theme.colors.buttonHover };
    }
   @media (max-width: 768px) {
    padding: 10px 10px;
    font-size: 0.9rem;
  }
  `,

// Conteneur pour les options de transporteurs
CarrierContainer: styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  padding: 10px 0;
  
`,

// Style pour chaque transporteur
CarrierCard: styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  padding: 10px;
  border: ${(props) =>
    props.isSelected
      ? `2px solid ${props.theme.colors.highlight }`
      : `1px solid ${props.theme.colors.border }`};
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  img {
    width: 50px;
    height: auto;
    margin-bottom: 5px;
  }

  &:hover {
    border: 2px solid ${(props) => props.theme.colors.highlight };
  }
`,

// Conteneur pour les adresses
AddressContainer: styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  padding: 10px 0;
`,

// Style pour chaque adresse
AddressCard: styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: ${(props) =>
    props.isSelected
      ? `2px solid ${props.theme.colors.highlight }`
      : `1px solid ${props.theme.colors.border}`};
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  p {
    font-size: 14px;
    text-align: center;
  }

  &:hover {
    border: 2px solid ${(props) => props.theme.colors.highlight };
  }
`,

// Conteneur pour les méthodes de paiement
PaymentMethodContainer: styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  padding: 10px 0;
`,

// Style pour chaque méthode de paiement
PaymentMethodCard: styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  padding: 10px;
  border: ${(props) =>
    props.isSelected
      ? `2px solid ${props.theme.colors.highlight }`
      : `1px solid ${props.theme.colors.border }`};
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  img {
    width: 40px;
    height: auto;
    margin-bottom: 5px;
  }

  &:hover {
    border: 2px solid ${(props) => props.theme.colors.highlight };
  }
`,
DashboardWrapper: styled.div`
background-color: ${(props) => props.theme.colors.contentBackground};
min-height: 66vh;
padding: 20px;
margin-top: 90px;
`,

// Sidebar contenant les liens
DashboardSidebar: styled.div`
background-color: ${(props) => props.theme.colors.cardBackground };
padding: 20px;
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
border-radius: 8px;

`,

// Élément de navigation dans la sidebar
DashboardNavItem: styled.li`
margin-bottom: 15px;
`,

// Liens de navigation
DashboardNavLink: styled(NavLink)`
display: flex;
align-items: center;
padding: 12px 15px;
font-size: 16px;
font-weight: 500;
color: ${(props) =>
  props.className?.includes('active')
    ? props.theme.colors.buttonText
    : props.theme.colors.textColor } !important;
background-color: ${(props) =>
  props.className?.includes('active')
    ? props.theme.colors.navItemActive 
    : props.theme.colors.navItemHoverBackground } !important;
border-radius: 5px;
text-decoration: none !important;
border: 1px solid ${(props) => props.theme.colors.border } !important;
transition: background-color 0.3s ease, border-color 0.3s ease;

&:hover {
  background-color: ${(props) => props.theme.colors.navItemHover } !important;
  color: ${(props) => props.theme.colors.buttonText } !important;
  border-color: ${(props) => props.theme.colors.navItemHover } !important;
}

i {
  margin-right: 10px;
}
`,

// Contenu principal du tableau de bord
DashboardContent: styled.div`
padding: 20px;
 @media (max-width: 1000px) {
    padding: 1px;
  }
`,

// Conteneur pour les onglets
DashboardTabPane: styled.div`
padding: 5px;
background-color: ${(props) => props.theme.colors.cardBackground };
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
border-radius: 8px;
`,

// Carte principale
DashboardCard: styled.div`
background-color: ${(props) => props.theme.colors.cardBackground };
border-radius: 8px;
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,

// En-tête de la carte
DashboardCardHeader: styled.div`
padding: 20px;
border-bottom: 1px solid ${(props) => props.theme.colors.border };
background-color: ${(props) => props.theme.colors.navItemActive };
color: ${(props) => props.theme.colors.buttonText };
border-top-left-radius: 8px;
border-top-right-radius: 8px;
`,

// Corps de la carte
DashboardCardBody: styled.div`
padding: 20px;
`,

TableWrapper: styled.div`
  overflow-x: auto;
  background-color: ${(props) => props.theme.colors.cardBackground };
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`,

ResponsiveTable: styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;

  th, td {
    text-align: left;
    padding: 12px;
    border: 1px solid ${(props) => props.theme.colors.border };
    color: ${(props) => props.theme.colors.textColor};
  }

  th {
    background-color: ${(props) => props.theme.colors.tableHeaderBackground };
    color: ${(props) => props.theme.colors.tableHeaderText};
    font-weight: bold;
  }

  @media (max-width: 768px) {
    thead {
      display: none;
    }

    tr {
      display: block;
      margin-bottom: 10px;
      border-bottom: 2px solid ${(props) => props.theme.colors.border};
      
    }

    td {
      display: flex;
      justify-content: space-between;
      padding: 10px;
      text-align: left;
      border: none;
      border-bottom: 1px solid ${(props) => props.theme.colors.border };
    }

    td::before {
      content: attr(data-label);
      font-weight: bold;
      color: ${(props) => props.theme.colors.textColor};
      flex-basis: 50%;
      text-align: left;
    }

    td:last-child {
      border-bottom: none;
    }
  }
`,

TableButton: styled.button`
  padding: 8px 14px;
  border: none;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.buttonBackground };
  color: ${(props) => props.theme.colors.buttonText };
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.buttonHover};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`,

TableEmptyMessage: styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.colors.textColor};
  text-align: center;
  margin-top: 20px;
  background-color: ${(props) => props.theme.colors.emptyMessageBackground };
  padding: 15px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.border };
`,

AddressListWrapper: styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding-top :15px;
  background-color: ${(props) => props.theme.colors.wrapperBackground};
  border-radius: 12px;
`,

AddNewAddressButton: styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.buttonBackground};
  color: ${(props) => props.theme.colors.text};
  height: 90px; 
  padding: 10px 20px; 
  margin-bottom: 20px;
  text-align: center;
  text-decoration: none;
  border-radius: 12px;
  font-weight: bold;
  transition: background-color 0.3s ease;


  &:hover {
    background-color: ${(props) => props.theme.colors.buttonHoverBackground};
  }
`,

AddressCardList: styled.div`
  background: ${(props) => props.theme.colors.cardBackground};
  border: 1px solid ${(props) => props.theme.colors.differentCardBorder};
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  height: 100px; 
`,

AddressCardHeader: styled.div`
  background: ${(props) => props.theme.colors.cardHeaderBackground };
  color: ${(props) => props.theme.colors.cardHeaderText };
  padding: 5px;
  font-weight: bold;
  font-size: 1.2rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.differentCardBorder };
`,
AddressCardBody: styled.div`
  padding: 10px;
`,
Address: styled.address`
  font-style: normal;
  color: ${(props) => props.theme.colors.text};
  line-height: 1.6;
  margin-bottom: 20px;
  padding: 20px;
`,
ButtonGroup: styled.div`
  display: flex;
  gap: 10px;
`,
EditButton: styled.a`
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${(props) => props.theme.colors.successHover };
  }
`,
DeleteButton: styled.button`
  background-color: ${(props) => props.theme.colors.danger};
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.dangerHover };
  }
`,
EmptyAddressMessage: styled.p`
  text-align: center;
  color: ${(props) => props.theme.colors.textMuted };
  font-style: italic;
  padding: 20px;
`,
LoadingMessage: styled.p`
  text-align: center;
  color: ${(props) => props.theme.colors.textMuted };
  padding: 20px;
  font-weight: bold;
`,
CarrierWrapper: styled.div`

  background-color: ${(props) => props.theme.colors.wrapperBackground};
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`
,CarrierTableContainer: styled.div`
overflow-x: auto;
margin-top: 20px;
`,

CarrierTable: styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;

  th,
  td {
    padding: 12px;
    border: 1px solid ${(props) => props.theme.colors.border};
  }

  th {
    background-color: ${(props) => props.theme.colors.tableHeaderBackground};
    color: ${(props) => props.theme.colors.tableHeaderText};
    font-weight: bold;
  }

  td {
    color: ${(props) => props.theme.colors.textColor};
    background-color: ${(props) => props.theme.colors.cardBackground};
  }

  /* Styles pour les petits écrans */
  @media (max-width: 768px) {
    thead {
      display: none; /* Masquer l'en-tête */
    }

    tr {
      display: flex;
      flex-direction: column;
      border: 1px solid ${(props) => props.theme.colors.border};
      margin-bottom: 10px;
    }

    td {
      display: flex;
      justify-content: flex-start; /* Alignement au début */
      align-items: flex-start;
      padding: 10px;
      border: none;
      border-bottom: 1px solid ${(props) => props.theme.colors.border};
    }

    td::before {
      content: attr(data-label);
      font-weight: bold;
      flex-basis: 0px; /* Ajuste la largeur de la description */
      color: ${(props) => props.theme.colors.textMuted};
      text-align: left; /* Alignement au début */
      margin-right: 10px; /* Espacement entre l'étiquette et la valeur */
    }

    td:last-child {
      border-bottom: none;
    }
  }
`,
CarrierImage: styled.img`
width: 50px;
height: auto;
margin-right: 10px;
vertical-align: middle;
`,
NoCarrierMessage: styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.textMuted };
  padding: 20px;
  background-color: ${(props) => props.theme.colors.emptyMessageBackground};
  border-radius: 8px;
  border: 1px dashed ${(props) => props.theme.colors.border};
`,

  }

