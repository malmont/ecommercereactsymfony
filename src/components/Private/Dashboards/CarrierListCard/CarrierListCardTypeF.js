import React from 'react';
import { observer } from "mobx-react-lite";
import { styles } from '../../../../theme/AllStyles';
import { useAdminContext } from '../../../../theme/AdminContext';
import styled from 'styled-components';

const CarrierListCardTypeF = ({ viewModel }) => {
  const { carriers, loading } = viewModel;
  const { styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice];

  if (loading) {
    return (
      <selectedStyle.NoCarrierMessage as={NoCarrierMessage}>
        Loading carriers...
      </selectedStyle.NoCarrierMessage>
    );
  }

  return (
    <selectedStyle.CarrierWrapper as={CarrierWrapper}>
      <CarrierTitle>Available Carriers</CarrierTitle>
      {carriers.length > 0 ? (
        <CarrierGrid>
          {carriers.map((carrier, index) => (
            <CarrierCard key={`carrier-${carrier.id}-${index}`}>
              <selectedStyle.CarrierImage as={CarrierImage} src={carrier.photo} alt={carrier.name} />
              <CarrierName>{carrier.name}</CarrierName>
              <CarrierDescription>{carrier.description}</CarrierDescription>
              <CarrierPrice>${(carrier.price / 100).toFixed(2)}</CarrierPrice>
            </CarrierCard>
          ))}
        </CarrierGrid>
      ) : (
        <selectedStyle.NoCarrierMessage as={NoCarrierMessage}>
          No carriers available.
        </selectedStyle.NoCarrierMessage>
      )}
    </selectedStyle.CarrierWrapper>
  );
};

export default observer(CarrierListCardTypeF);

const NoCarrierMessage = styled.div`
  background-color: ${(props) => props.theme.colors.cardBackground};
  color: ${(props) => props.theme.colors.textColor};
  border-radius: 10px;
  font-size: 1rem;
  text-align: center;
  border: 1px solid ${(props) => props.theme.colors.border};
  padding: 15px;
`;

const CarrierWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.wrapperBackground};
  border-radius: 20px;
  border: 2px solid ${(props) => props.theme.colors.border};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const CarrierTitle = styled.h2`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.titleText};
  text-align: center;
  margin-bottom: 20px;
`;

const CarrierGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  height: 700px;
  @media (max-width: 768px) {
   height: auto;
  }
`;

const CarrierCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.cardBackground};
  border-radius: 15px;
  border: 1px solid ${(props) => props.theme.colors.border};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

`;

const CarrierImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const CarrierName = styled.h4`
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.textColor};
  margin-bottom: 10px;
`;

const CarrierDescription = styled.p`
  color: ${(props) => props.theme.colors.descriptionText};
  font-size: 0.9rem;
  text-align: center;
  line-height: 1.5;
  margin-bottom: 15px;
`;

const CarrierPrice = styled.span`
  font-size: 1.3rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.linkText};
`;
