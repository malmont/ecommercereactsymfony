import React from "react";
import styled from "styled-components";
import { RiSecurePaymentFill } from "react-icons/ri";
import { MdWorkspacePremium } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { useAdminContext } from "../../../../../theme/AdminContext";
import { styles } from "../../../../../theme/All_styles";

// Styled-components
const StyledRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 300px; /* Espacement horizontal et vertical entre les cartes */
  text-align: center;
  margin: 20px 0; 
`;

const StyledFeatureCard = styled.div`
  margin: 10px 15px; /* Espacement spécifique pour chaque carte */
`;

const FeatureTypeC = () => {
  const { styleChoice, loadingSettings } = useAdminContext();

  if (loadingSettings) {
    return <div>Loading...</div>;
  }

  const selectedStyle = styles[styleChoice];
  console.log("selectedStyle12", selectedStyle);

  return (
    <selectedStyle.FeatureWrapper>
      <StyledRow>
        <StyledFeatureCard as={selectedStyle.FeatureCard}>
          <RiSecurePaymentFill size={30} data-testid="cash-icon" />
          <span className="mx-3">FAST SECURE PAYMENTS</span>
        </StyledFeatureCard>
        <StyledFeatureCard as={selectedStyle.FeatureCard} className="bg-danger">
          <MdWorkspacePremium size={30} data-testid="star-icon" />
          <span className="mx-3">PREMIUM PRODUCTS</span>
        </StyledFeatureCard>
        <StyledFeatureCard as={selectedStyle.FeatureCard}>
          <CiDeliveryTruck size={30} data-testid="plane-icon" />
          <span className="mx-3">FREE & FAST DELIVERY</span>
        </StyledFeatureCard>
      </StyledRow>
    </selectedStyle.FeatureWrapper>
  );
};

export default FeatureTypeC;
