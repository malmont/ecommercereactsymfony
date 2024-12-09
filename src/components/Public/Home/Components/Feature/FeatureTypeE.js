import React from "react";
import styled from "styled-components";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { GiStarsStack } from "react-icons/gi";
import { RiPlanetFill } from "react-icons/ri";
import { useAdminContext } from "../../../../../theme/AdminContext";
import { styles } from "../../../../../theme/AllStyles";

// Styled-components
const StyledRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap:: 200px; 
  column-gap: 200px;
  text-align: center;
  margin: 10px 0; 
   @media screen and (max-width: 800px) {
    gap: 30px;
  }
`;

const StyledFeatureCard = styled.div`
  margin: 20px 35px; 
`;

const FeatureTypeE = () => {
  const { styleChoice, loadingSettings } = useAdminContext();

  if (loadingSettings) {
    return <div>Loading...</div>;
  }

  const selectedStyle = styles[styleChoice];
  return (
    <selectedStyle.FeatureWrapper>
      <StyledRow>
        <StyledFeatureCard as={selectedStyle.FeatureCard}>
          <FaMoneyBillTransfer size={50} data-testid="cash-icon" />
          <div className="m-1"></div>
          <span className="mx-3">FAST SECURE PAYMENTS</span>
        </StyledFeatureCard>
        <StyledFeatureCard as={selectedStyle.FeatureCard} className="bg-danger">
          <GiStarsStack size={50} data-testid="star-icon" />
          <div className="m-1"></div>
          <span className="mx-3">PREMIUM PRODUCTS</span>
        </StyledFeatureCard>
        <StyledFeatureCard as={selectedStyle.FeatureCard}>
          <RiPlanetFill size={50} data-testid="plane-icon" />
          <div className="m-1"></div>
          <span className="mx-3">FREE & FAST DELIVERY</span>
        </StyledFeatureCard>
      </StyledRow>
    </selectedStyle.FeatureWrapper>
  );
};

export default FeatureTypeE;
