import React from "react";
import styled from "styled-components";
import { IoCard } from "react-icons/io5";
import { TbPremiumRights } from "react-icons/tb";
import { IoAirplane } from "react-icons/io5";
import { useAdminContext } from "../../../../../theme/AdminContext";
import { styles } from "../../../../../theme/AllStyles";

// Styled-components
const StyledRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap:: 300px; 
  column-gap: 300px;
  text-align: center;
  margin: 10px 0; 
   @media screen and (max-width: 800px) {
    gap: 30px;
  }
`;

const StyledFeatureCard = styled.div`
  margin: 20px 35px; 
`;

const FeatureTypeD = () => {
  const { styleChoice, loadingSettings } = useAdminContext();

  if (loadingSettings) {
    return <div>Loading...</div>;
  }

  const selectedStyle = styles[styleChoice];
  return (
    <selectedStyle.FeatureWrapper>
      <StyledRow>
        <StyledFeatureCard as={selectedStyle.FeatureCard}>
          <IoCard size={40} data-testid="cash-icon" />
          <div className="m-1"></div>
          <span className="mx-3">FAST SECURE PAYMENTS</span>
        </StyledFeatureCard>
        <StyledFeatureCard as={selectedStyle.FeatureCard} className="bg-danger">
          <TbPremiumRights size={40} data-testid="star-icon" />
          <div className="m-1"></div>
          <span className="mx-3">PREMIUM PRODUCTS</span>
        </StyledFeatureCard>
        <StyledFeatureCard as={selectedStyle.FeatureCard}>
          <IoAirplane size={40} data-testid="plane-icon" />
          <div className="m-1"></div>
          <span className="mx-3">FREE & FAST DELIVERY</span>
        </StyledFeatureCard>
      </StyledRow>
    </selectedStyle.FeatureWrapper>
  );
};

export default FeatureTypeD;
