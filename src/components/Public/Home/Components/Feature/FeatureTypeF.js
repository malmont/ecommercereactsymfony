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
  justify-content:  space-evenly;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 200px; /* Espacement horizontal */
  text-align: center;
  margin: 10px 0; 
   @media screen and (max-width: 800px) {
    gap: 30px;
  }
`;

const StyledFeatureCard = styled.div`
  margin: 5px 35px; /* Espacement autour des cartes */
`;

const LowerFeatureCard = styled(StyledFeatureCard)`
  margin-top: 120px;
    @media screen and (max-width: 800px) {
     margin-top:0px;
  }
`;

const FeatureTypeF = () => {
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
          <div className="m-3"></div>
          <span className="mx-3">FAST SECURE PAYMENTS</span>
        </StyledFeatureCard>
        <LowerFeatureCard as={selectedStyle.FeatureCard} className="bg-danger">
          <GiStarsStack size={50} data-testid="star-icon" />
          <div className="m-3"></div>
          <span className="mx-3">PREMIUM PRODUCTS</span>
        </LowerFeatureCard>
        <StyledFeatureCard as={selectedStyle.FeatureCard}>
          <RiPlanetFill size={50} data-testid="plane-icon" />
          <div className="m-3"></div>
          <span className="mx-3">FREE & FAST DELIVERY</span>
        </StyledFeatureCard>
      </StyledRow>
    </selectedStyle.FeatureWrapper>
  );
};

export default FeatureTypeF;
