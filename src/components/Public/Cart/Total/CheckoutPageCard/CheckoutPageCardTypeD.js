import React from "react";
import { observer } from "mobx-react-lite";
import { styles } from '../../../../../theme/AllStyles';
import { useAdminContext } from '../../../../../theme/AdminContext';
import { useTheme } from 'styled-components';
import styled from 'styled-components';

const SectionContainer = styled.div`
  border-bottom: 2px solid ${(props) => props.theme.colors.border};
  padding-bottom: 1rem;
  
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.titleText};
  font-weight: bold;
  margin-bottom: 1.5rem;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CarrierBadge = styled.span`
  position: absolute;
  top: -13px;
  right: -8px;
  background-color: ${(props) => props.theme.colors.navItemHover};
  color: ${(props) => props.theme.colors.cartCountText};
  border-radius: 50%;
  padding: 4px 8px;
  font-size: 0.8rem;
  font-weight: bold;
  box-shadow: ${(props) => props.theme.colors.boxShadow};
`;

const AddressText = styled.p`
  color: ${(props) => props.theme.colors.titleText};
  margin: 0;
  font-weight: ${(props) => (props.isBold ? "600" : "normal")};
  font-size: ${(props) => (props.isBold ? "1rem" : "0.9rem")};
  
`;

const CheckoutPageCardTypeD = observer(({
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
        borderRadius: "16px",
        boxShadow: theme?.colors?.boxShadow || "0 4px 20px rgba(0, 0, 0, 0.15)",
      }}
    >
      {/* Select Carrier */}
      <SectionContainer>
        <SectionTitle>Choose Your Carrier</SectionTitle>
        <selectedStyle.CarrierContainer>
          {carriers.map((carrier) => (
            <selectedStyle.CarrierCard
              key={carrier.id}
              onClick={() => selectCarrier(carrier.id)}
              isSelected={selectedCarrier?.id === carrier.id}
              style={{
                width: "80px",
                height: "80px",
                cursor: "pointer",
                padding: "0.5rem",
                border: `2px solid ${
                  selectedCarrier?.id === carrier.id
                    ? theme?.colors?.navItemHover
                    : theme?.colors?.border
                }`,
                borderRadius: "12px",
                transition: "transform 0.3s ease, background 0.3s ease",
                boxShadow:
                  selectedCarrier?.id === carrier.id
                    ? theme?.colors?.boxShadow
                    : "0 2px 8px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                position: "relative",
              }}
            >
              {selectedCarrier?.id === carrier.id && <CarrierBadge>✓</CarrierBadge>}
              <img
                src={carrier.photo}
                alt={carrier.name}
                style={{
                  width: "40px",
                  height: "40px",
                  padding: "0.1rem",
                }}
              />
              <p
                style={{
                  fontSize: "0.4rem",
                  color: theme?.colors?.titleText,
                }}
              >
                {carrier.name}
              </p>
            </selectedStyle.CarrierCard>
          ))}
        </selectedStyle.CarrierContainer>
      </SectionContainer>

      {/* Select Delivery Address */}
      <SectionContainer>
        <SectionTitle>Select Delivery Address</SectionTitle>
        <selectedStyle.AddressContainer
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {addresses.map((address) => (
            <selectedStyle.AddressCard
              key={address.id}
              onClick={() => selectAddress(address.id)}
              isSelected={selectedAddress?.id === address.id}
              style={{
                cursor: "pointer",
                padding: "1.5rem",
                border: `2px solid ${
                  selectedAddress?.id === address.id
                    ? theme?.colors?.navItemHover
                    : theme?.colors?.border
                }`,
                borderRadius: "12px",
                transition: "transform 0.3s ease, background 0.3s ease",
                boxShadow:
                  selectedAddress?.id === address.id
                    ? theme?.colors?.boxShadow
                    : "0 2px 8px rgba(0, 0, 0, 0.1)",
                position: "relative",
              }}
            >
              {selectedAddress?.id === address.id && <CarrierBadge>✓</CarrierBadge>}
              <AddressText >{address.fullname}</AddressText>
              <AddressText>{`${address.addressLineOne} ${address.city}`}</AddressText>
            </selectedStyle.AddressCard>
          ))}
        </selectedStyle.AddressContainer>
      </SectionContainer>

      {/* Select Payment Method */}
      <SectionContainer>
        <SectionTitle>Select Payment Method</SectionTitle>
        <selectedStyle.PaymentMethodContainer
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          {paymentMethods.map((method) => (
            <selectedStyle.PaymentMethodCard
              key={method.id}
              onClick={() => selectPaymentMethod(method.id)}
              isSelected={selectedPaymentMethod?.id === method.id}
              style={{
                cursor: "pointer",
                width: "80px",
                height: "80px",
                border: `2px solid ${
                  selectedPaymentMethod?.id === method.id
                    ? theme?.colors?.navItemHover
                    : theme?.colors?.border
                }`,
                borderRadius: "50%",
                transition: "transform 0.3s ease, background 0.3s ease",
                boxShadow:
                  selectedPaymentMethod?.id === method.id
                    ? theme?.colors?.boxShadow
                    : "0 2px 8px rgba(0, 0, 0, 0.1)",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {selectedPaymentMethod?.id === method.id && <CarrierBadge>✓</CarrierBadge>}
              <img
                src={method.image}
                alt={method.name}
                style={{
                  width: "50%",
                  height: "50%",
                }}
              />
            </selectedStyle.PaymentMethodCard>
          ))}
        </selectedStyle.PaymentMethodContainer>
      </SectionContainer>
    </selectedStyle.OrderSummaryContainer>
  );
});

export default CheckoutPageCardTypeD;