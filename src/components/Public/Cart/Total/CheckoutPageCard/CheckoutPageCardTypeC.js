import React from "react";
import { observer } from "mobx-react-lite";
import { styles } from '../../../../../theme/AllStyles';
import { useAdminContext } from '../../../../../theme/AdminContext';
import styled from 'styled-components';
import { useTheme } from 'styled-components';

const Section = styled.div`
  border-bottom: 2px solid ${(props) => props.theme.colors.border};
  padding-bottom: 1rem;
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.titleText};
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const PaymentContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const CheckoutPageCardTypeC = observer(({
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
    <selectedStyle.OrderSummaryContainer>
      {/* Sélectionner le transporteur */}
      <Section>
        <SectionTitle>Choose Your Carrier</SectionTitle>
        <selectedStyle.CarrierContainer>
          {carriers.map((carrier) => (
            <selectedStyle.CarrierCard
              key={carrier.id}
              onClick={() => selectCarrier(carrier.id)}
              isSelected={selectedCarrier?.id === carrier.id}
              style={{
                cursor: 'pointer',
                padding: '1.2rem',
                border: `2px solid ${selectedCarrier?.id === carrier.id
                  ? theme?.colors?.navItemHover
                  : theme?.colors?.border}`,
                borderRadius: '10px',
                backgroundColor: selectedCarrier?.id === carrier.id
                  ? theme?.colors?.hoverCardBackground
                  : theme?.colors?.cardBackground,
                transition: 'transform 0.3s ease, background-color 0.3s ease',
                boxShadow: selectedCarrier?.id === carrier.id
                  ? theme?.colors?.boxShadow || '0 4px 12px rgba(0, 0, 0, 0.2)'
                  : '0 2px 8px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
                width: '80px',
              }}
            >
              <img
                src={carrier.photo}
                alt={carrier.name}
                style={{
                  width: '50px',
                  height: '50px',
                  objectFit: 'contain',
                }}
              />
            </selectedStyle.CarrierCard>
          ))}
        </selectedStyle.CarrierContainer>
      </Section>

      {/* Sélectionner l'adresse de livraison */}
      <Section>
        <SectionTitle>Select Delivery Address</SectionTitle>
        <selectedStyle.AddressContainer style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
        }}>
          {addresses.map((address) => (
            <selectedStyle.AddressCard
              key={address.id}
              onClick={() => selectAddress(address.id)}
              isSelected={selectedAddress?.id === address.id}
            >
              <p style={{
                margin: 0,
                fontWeight: '600',
                fontSize: '1rem',
                color:selectedAddress?.id === address.id? theme?.colors?.hoverText: theme?.colors?.textColor,
                marginBottom: '0.5rem',
              }}>
                {address.fullname}
              </p>
              <p style={{
                margin: 0,
                fontSize: '0.9rem',
                color:selectedAddress?.id === address.id? theme?.colors?.hoverText: theme?.colors?.textColor,
              }}>
                {address.addressLineOne}, {address.city}
              </p>
            </selectedStyle.AddressCard>
          ))}
        </selectedStyle.AddressContainer>
      </Section>

      {/* Sélectionner le mode de paiement */}
      <Section>
        <SectionTitle>Select Payment Method</SectionTitle>
        <PaymentContainer>
          {paymentMethods.map((method) => (
            <selectedStyle.PaymentMethodCard
              key={method.id}
              onClick={() => selectPaymentMethod(method.id)}
              isSelected={selectedPaymentMethod?.id === method.id}
              style={{
                cursor: 'pointer',
                width: '80px',
                height: '80px',
                border: `2px solid ${selectedPaymentMethod?.id === method.id
                  ? theme?.colors?.navItemHover
                  : theme?.colors?.border}`,
                borderRadius: '50%',
                backgroundColor: selectedPaymentMethod?.id === method.id
                  ? theme?.colors?.hoverCardBackground
                  : theme?.colors?.cardBackground,
                transition: 'transform 0.3s ease, background-color 0.3s ease',
                boxShadow: selectedPaymentMethod?.id === method.id
                  ? theme?.colors?.boxShadow || '0 4px 12px rgba(0, 0, 0, 0.2)'
                  : '0 2px 8px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={method.image}
                alt={method.name}
                style={{
                  width: '50%',
                  height: '50%',
                }}
              />
            </selectedStyle.PaymentMethodCard>
          ))}
        </PaymentContainer>
      </Section>
    </selectedStyle.OrderSummaryContainer>
  );
});

export default CheckoutPageCardTypeC;
