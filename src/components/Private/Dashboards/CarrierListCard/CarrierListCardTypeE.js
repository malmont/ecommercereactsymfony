import React from 'react';
import { observer } from "mobx-react-lite";
import { styles } from '../../../../theme/AllStyles';
import { useAdminContext } from '../../../../theme/AdminContext';
import styled, { useTheme } from 'styled-components';

const CarrierListCardTypeE = ({ viewModel }) => {
  const { carriers, loading } = viewModel;
  const { styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice];
  const theme = useTheme();

  if (loading) {
    return (
      <selectedStyle.NoCarrierMessage as={NoCarrierMessage}>
        Loading carriers...
      </selectedStyle.NoCarrierMessage>
    );
  }

  return (
    <selectedStyle.CarrierWrapper as={CarrierWrapper}>
      <CarrierTitle>Explore Carriers</CarrierTitle>
      <CarrierSubtitle>
        Discover the best options for your shipping needs.
      </CarrierSubtitle>
      <CarrierGrid>
        {carriers.length > 0 ? (
          carriers.map((carrier, index) => (
            <CarrierCard key={`carrier-${carrier.id}-${index}`}>
              <selectedStyle.CarrierImage as={CarrierImage} src={carrier.photo} alt={carrier.name} />
              <CarrierName>{carrier.name}</CarrierName>
              <CarrierDescription>{carrier.description}</CarrierDescription>
              <CarrierPrice>${(carrier.price / 100).toFixed(2)}</CarrierPrice>
              <CardBottomBorder />
            </CarrierCard>
          ))
        ) : (
          <selectedStyle.NoCarrierMessage as={NoCarrierMessage}>
            No carriers available.
          </selectedStyle.NoCarrierMessage>
        )}
      </CarrierGrid>
    </selectedStyle.CarrierWrapper>
  );
};

export default observer(CarrierListCardTypeE);

const NoCarrierMessage = styled.div`
  padding: 25px;
  background-color: ${(props) => props.theme.colors.cardBackground};
  color: ${(props) => props.theme.colors.linkHoverText};
  border-radius: 15px;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  animation: pulse 1.5s infinite;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
`;

const CarrierWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 30px;
  background-color: ${(props) => props.theme.colors.wrapperBackground};
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: all 0.3s ease;
`;

const CarrierTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.titleText};
  margin-bottom: 10px;
`;

const CarrierSubtitle = styled.p`
  color: ${(props) => props.theme.colors.descriptionText};
  font-size: 1rem;
  text-align: center;
  margin-bottom: 20px;
`;

const CarrierGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
`;

const CarrierCard = styled.div`
  width: 250px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.cardBackground};
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  border: 2px solid ${(props) => props.theme.colors.border};
  overflow: hidden;
  position: relative;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }
`;

const CarrierImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 15px;
  border: 4px solid ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.cardBodyBackground};
`;

const CarrierName = styled.h4`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.cardText};
  text-align: center;
  margin: 10px 0;
`;

const CarrierDescription = styled.p`
  color: ${(props) => props.theme.colors.descriptionText};
  font-size: 0.9rem;
  text-align: center;
  line-height: 1.5;
  margin-bottom: 10px;
`;

const CarrierPrice = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.linkText};
`;

const CardBottomBorder = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: ${(props) => props.theme.colors.cardBorder};
`;
