import React from 'react';
import { observer } from "mobx-react-lite";
import { styles } from '../../../../theme/AllStyles';
import { useAdminContext } from '../../../../theme/AdminContext';
import styled from 'styled-components';

const CarrierListCardTypeD = ({ viewModel }) => {
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
      {carriers.length > 0 ? (
        carriers.map((carrier, index) => (
          <CarrierCard key={`carrier-${carrier.id}-${index}`}>
            <selectedStyle.CarrierImage as={CarrierImage} src={carrier.photo} alt={carrier.name} />
            <CarrierName>{carrier.name}</CarrierName>
            <CarrierDescription>{carrier.description}</CarrierDescription>
            <CarrierPrice>${(carrier.price / 100).toFixed(2)}</CarrierPrice>
          </CarrierCard>
        ))
      ) : (
        <selectedStyle.NoCarrierMessage as={NoCarrierMessage}>
          No carriers available.
        </selectedStyle.NoCarrierMessage>
      )}
    </selectedStyle.CarrierWrapper>
  );
};

export default observer(CarrierListCardTypeD);

const NoCarrierMessage = styled.div`
  padding: 20px;
  background-color: ${(props) => props.theme.colors.emptyMessageBackground};
  color: ${(props) => props.theme.colors.linkHoverText};
  border: 2px dashed ${(props) => props.theme.colors.border};
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  font-style: italic;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const CarrierWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  background-color: ${(props) => props.theme.colors.featureBackground};
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  padding: 20px;
`;

const CarrierCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.cardBackground};
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  border: 2px solid ${(props) => props.theme.colors.border};
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
`;

const CarrierImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 10px;
  border: 3px solid ${(props) => props.theme.colors.border};
`;

const CarrierName = styled.h4`
  font-size: 1.4rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.titleText};
  text-align: center;
  margin: 10px 0;
`;

const CarrierDescription = styled.p`
  color: ${(props) => props.theme.colors.descriptionText};
  font-size: 1rem;
  text-align: center;
  margin-bottom: 10px;
`;

const CarrierPrice = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.linkText};
`;
