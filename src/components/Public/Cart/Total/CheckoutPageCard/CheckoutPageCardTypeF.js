import React from "react";
import { observer } from "mobx-react-lite";
import { styles } from '../../../../../theme/AllStyles';
import { useAdminContext } from '../../../../../theme/AdminContext';
import { useTheme } from 'styled-components';
import styled from 'styled-components';

const SectionContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const SectionTitle = styled.h2`
  font-size: ${(props) => props.fontSize || '1rem'};
  color: ${(props) => props.theme.colors.textColor};
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const CarrierBadge = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.colors.navItemHover};
  color: ${(props) => props.theme.colors.cartCountText};
  border-radius: 50%;
  padding: 2px;
  font-size: 1rem;
  font-weight: bold;
  box-shadow: ${(props) => props.theme.colors.boxShadow};
  z-index: 1;
`;

const AddressText = styled.p`
  margin: 0;
  font-weight: ${(props) => (props.isBold ? "600" : "normal")};
  font-size: ${(props) => (props.isBold ? "1.2rem" : "1rem")};
  color: ${(props) =>
    props.isBold
      ? props.theme.colors.textColor
      : props.theme.colors.infoTextColor};
  margin-bottom: ${(props) => (props.isBold ? "0.5rem" : "0")};
`;

const CarrierContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  gap: 1rem;

`;

const AddressContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const PaymentMethodContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2rem;
`;

const CheckoutPageCardTypeF = observer(({
  carriers,
  addresses,
  paymentMethods,
  selectedCarrier,
  selectedAddress,
  selectedPaymentMethod,
  selectCarrier,
  selectAddress,
  selectPaymentMethod,
}) => {
  const { styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice];
  const theme = useTheme();

  return (
    <selectedStyle.OrderSummaryContainer
      style={{
        gap: "2rem",
        padding: "2rem",
        backgroundColor: theme?.colors?.cardBackground,
        borderRadius: "20px",
        boxShadow: theme?.colors?.boxShadow || "0 8px 20px rgba(0, 0, 0, 0.1)",
        width: "100%",
      }}
    >
      {/* Select Carrier */}
      <SectionContainer>
        <SectionTitle fontSize="1.8rem">Choose Your Carrier</SectionTitle>
        <CarrierContainer>
          {carriers.map((carrier) => (
            <selectedStyle.CarrierCard
              key={carrier.id}
              onClick={() => selectCarrier(carrier.id)}
              isSelected={selectedCarrier?.id === carrier.id}
              style={{
                width: "70px",
                cursor: "pointer",
                padding: "1rem",
                borderRadius: "16px",
                
                background: selectedCarrier?.id === carrier.id
                  ? theme?.colors?.hoverCardBackground
                  : theme?.colors?.cardBackground,
                border: `2px solid ${
                  selectedCarrier?.id === carrier.id
                    ? theme?.colors?.navItemHover
                    : theme?.colors?.border
                }`,
                boxShadow: selectedCarrier?.id === carrier.id
                  ? theme?.colors?.boxShadow || "0 10px 25px rgba(0, 0, 0, 0.2)"
                  : "0 4px 10px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                transform: selectedCarrier?.id === carrier.id ? "translateY(-5px)" : "translateY(0)",
                position: "relative",
                textAlign: "center",
              }}
            >
              {selectedCarrier?.id === carrier.id && (
                <CarrierBadge>✓</CarrierBadge>
              )}
              <img
                src={carrier.photo}
                alt={carrier.name}
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "contain",
                }}
              />
            </selectedStyle.CarrierCard>
          ))}
        </CarrierContainer>
      </SectionContainer>

      {/* Select Delivery Address */}
      <SectionContainer>
        <SectionTitle fontSize="1.5rem">Select Delivery Address</SectionTitle>
        <AddressContainer>
          {addresses.map((address) => (
            <selectedStyle.AddressCard
              key={address.id}
              onClick={() => selectAddress(address.id)}
              isSelected={selectedAddress?.id === address.id}
              style={{
                width: "100%",
                cursor: "pointer",
                padding: "1.8rem",
                borderRadius: "24px",
                background: selectedAddress?.id === address.id
                  ? theme?.colors?.hoverCardBackground
                  : theme?.colors?.cardBackground,
                border: `2px solid ${
                  selectedAddress?.id === address.id
                    ? theme?.colors?.navItemHover
                    : theme?.colors?.border
                }`,
                boxShadow: selectedAddress?.id === address.id
                  ? theme?.colors?.boxShadow || "0 10px 25px rgba(0, 0, 0, 0.2)"
                  : "0 4px 10px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                transform: selectedAddress?.id === address.id ? "translateY(-5px)" : "translateY(0)",
                position: "relative",
              }}
            >
              {selectedAddress?.id === address.id && (
                <CarrierBadge>✓</CarrierBadge>
              )}
              <AddressText isBold>{address.fullname}</AddressText>
              <AddressText>{`${address.addressLineOne}, ${address.city}`}</AddressText>
            </selectedStyle.AddressCard>
          ))}
        </AddressContainer>
      </SectionContainer>

      {/* Select Payment Method */}
      <SectionContainer>
        <SectionTitle fontSize="1.8rem">Select Payment Method</SectionTitle>
        <PaymentMethodContainer>
          {paymentMethods.map((method) => (
            <selectedStyle.PaymentMethodCard
              key={method.id}
              onClick={() => selectPaymentMethod(method.id)}
              isSelected={selectedPaymentMethod?.id === method.id}
              style={{
                cursor: "pointer",
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                background: selectedPaymentMethod?.id === method.id
                  ? theme?.colors?.hoverCardBackground
                  : theme?.colors?.cardBackground,
                border: `2px solid ${
                  selectedPaymentMethod?.id === method.id
                    ? theme?.colors?.navItemHover
                    : theme?.colors?.border
                }`,
                boxShadow: selectedPaymentMethod?.id === method.id
                  ? theme?.colors?.boxShadow || "0 10px 15px rgba(0, 0, 0, 0.2)"
                  : "0 4px 10px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                transform: selectedPaymentMethod?.id === method.id ? "translateY(-5px)" : "translateY(0)",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {selectedPaymentMethod?.id === method.id && (
                <CarrierBadge>✓</CarrierBadge>
              )}
              <img
                src={method.image}
                alt={method.name}
                style={{
                  width: "80%",
                  height: "80%",
                  zIndex: 0,
                }}
              />
            </selectedStyle.PaymentMethodCard>
          ))}
        </PaymentMethodContainer>
      </SectionContainer>
    </selectedStyle.OrderSummaryContainer>
  );
});

export default CheckoutPageCardTypeF;
