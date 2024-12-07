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
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const CarrierBadge = styled.span`
  position: absolute;
  top: -8px;
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
  margin: 0;
  font-weight: ${(props) => (props.isBold ? "600" : "normal")};
  font-size: ${(props) => (props.isBold ? "1rem" : "0.9rem")};
  color:  ${(props) => props.theme.colors.titleText};
  margin-bottom: ${(props) => (props.isBold ? "0.5rem" : "0")};
`;

const CarrierContainer = styled.div`
   display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 1.5rem;
`;

const AddressContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
`;

const PaymentMethodContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1rem;
`;

const CheckoutPageCardTypeE = observer(({
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
                boxShadow: theme?.colors?.boxShadow || "0 6px 15px rgba(0, 0, 0, 0.1)",
            }}
        >
            {/* Select Carrier */}
            <SectionContainer>
                <SectionTitle fontSize="1rem">Choose Your Carrier</SectionTitle>
                <CarrierContainer>
                    {carriers.map((carrier) => (
                        <selectedStyle.CarrierCard
                            key={carrier.id}
                            onClick={() => selectCarrier(carrier.id)}
                            isSelected={selectedCarrier?.id === carrier.id}
                            style={{
                                cursor: "pointer",
                                flex: "0 0 80px",
                                border: `2px solid ${selectedCarrier?.id === carrier.id
                                        ? theme?.colors?.navItemHover
                                        : theme?.colors?.border
                                    }`,
                                borderRadius: "16px",
                                background:
                                    selectedCarrier?.id === carrier.id
                                        ? theme?.colors?.hoverCardBackground
                                        : theme?.colors?.cardBackground,
                                transition: "transform 0.3s ease, background 0.3s ease",
                                boxShadow:
                                    selectedCarrier?.id === carrier.id
                                        ? theme?.colors?.boxShadow ||
                                        "0 4px 12px rgba(0, 0, 0, 0.2)"
                                        : "0 2px 6px rgba(0, 0, 0, 0.1)",
                                position: "relative",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            {selectedCarrier?.id === carrier.id && <CarrierBadge>✓</CarrierBadge>}
                            <img
                                src={carrier.photo}
                                alt={carrier.name}
                                style={{
                                    width: "30px",
                                    height: "40px",
                                    objectFit: "contain",
                                }}
                            />
                            <p
                                style={{
                                    fontSize: "0.5rem",
                                    fontWeight: "600",
                                    color: theme?.colors?.titleText,
                                    textAlign: "center",
                                }}
                            >
                                {carrier.name}
                            </p>
                        </selectedStyle.CarrierCard>
                    ))}
                </CarrierContainer>
            </SectionContainer>

            {/* Select Delivery Address */}
            <SectionContainer>
                <SectionTitle fontSize="1.6rem">Select Delivery Address</SectionTitle>
                <AddressContainer>
                    {addresses.map((address) => (
                        <selectedStyle.AddressCard
                            key={address.id}
                            onClick={() => selectAddress(address.id)}
                            isSelected={selectedAddress?.id === address.id}
                            style={{
                                cursor: "pointer",
                                padding: "1.5rem",
                                border: `2px solid ${selectedAddress?.id === address.id
                                    ? theme?.colors?.navItemHover
                                    : theme?.colors?.border
                                    }`,
                                borderRadius: "12px",
                                background:
                                    selectedAddress?.id === address.id
                                        ? theme?.colors?.hoverCardBackground
                                        : theme?.colors?.cardBackground,
                                boxShadow:
                                    selectedAddress?.id === address.id
                                        ? theme?.colors?.boxShadow ||
                                        "0 4px 12px rgba(0, 0, 0, 0.2)"
                                        : "0 2px 6px rgba(0, 0, 0, 0.1)",
                                position: "relative",
                                transition: "background 0.3s ease, box-shadow 0.3s ease",
                            }}
                        >
                            {selectedAddress?.id === address.id && <CarrierBadge>✓</CarrierBadge>}
                            <AddressText isBold>{address.fullname}</AddressText>
                            <AddressText>{`${address.addressLineOne}, ${address.city}`}</AddressText>
                        </selectedStyle.AddressCard>
                    ))}
                </AddressContainer>
            </SectionContainer>

            {/* Select Payment Method */}
            <SectionContainer>
                <SectionTitle fontSize="1.6rem">Select Payment Method</SectionTitle>
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
                                border: `2px solid ${selectedPaymentMethod?.id === method.id
                                    ? theme?.colors?.navItemHover
                                    : theme?.colors?.border
                                    }`,
                                borderRadius: "50%",
                                background:
                                    selectedPaymentMethod?.id === method.id
                                        ? theme?.colors?.hoverCardBackground
                                        : theme?.colors?.cardBackground,
                                boxShadow:
                                    selectedPaymentMethod?.id === method.id
                                        ? theme?.colors?.boxShadow ||
                                        "0 4px 12px rgba(0, 0, 0, 0.2)"
                                        : "0 2px 6px rgba(0, 0, 0, 0.1)",
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                transition: "background 0.3s ease, box-shadow 0.3s ease",
                            }}
                        >
                            {selectedPaymentMethod?.id === method.id && (
                                <CarrierBadge>✓</CarrierBadge>
                            )}
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
                </PaymentMethodContainer>
            </SectionContainer>
        </selectedStyle.OrderSummaryContainer>
    );
});

export default CheckoutPageCardTypeE;

