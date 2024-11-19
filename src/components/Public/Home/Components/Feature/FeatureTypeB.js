import React from "react";
import styled from "styled-components";
import { MdOutlinePayment } from "react-icons/md";
import { PiStarThin } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";
import { useAdminContext } from "../../../../../theme/AdminContext";
import { styles } from "../../../../../theme/AllStyles";

// Styled-components
const StyledRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 150px; /* Espacement horizontal et vertical entre les cartes */
  text-align: center;
  margin: 20px 0; /* Espacement autour de la rangée */
`;

const StyledFeatureCard = styled.div`
  margin: 10px 15px; /* Espacement spécifique pour chaque carte */
`;

const FeatureTypeB = () => {
  const { styleChoice, loadingSettings } = useAdminContext();

  if (loadingSettings) {
    return <div>Loading...</div>;
  }

  const selectedStyle = styles[styleChoice];


  return (
    <selectedStyle.FeatureWrapper>
      <StyledRow>
        <StyledFeatureCard as={selectedStyle.FeatureCard}>
          <MdOutlinePayment size={30} data-testid="cash-icon" />
          <span className="mx-3">FAST SECURE PAYMENTS</span>
        </StyledFeatureCard>
        <StyledFeatureCard as={selectedStyle.FeatureCard} className="bg-danger">
          <PiStarThin size={30} data-testid="star-icon" />
          <span className="mx-3">PREMIUM PRODUCTS</span>
        </StyledFeatureCard>
        <StyledFeatureCard as={selectedStyle.FeatureCard}>
          <TbTruckDelivery size={30} data-testid="plane-icon" />
          <span className="mx-3">FREE & FAST DELIVERY</span>
        </StyledFeatureCard>
      </StyledRow>
    </selectedStyle.FeatureWrapper>
  );
};

export default FeatureTypeB;
