import React from "react";
import { observer } from "mobx-react-lite";
import { styles } from '../../../../../theme/AllStyles';
import { useAdminContext } from '../../../../../theme/AdminContext';

const CheckoutPageCardTypeB = observer(({
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

    return (
        <selectedStyle.OrderSummaryContainer
            style={{
                gap: '2rem',
                padding: '2rem',
                backgroundColor: selectedStyle.colors?.cardBackground,
                borderRadius: '8px',
                boxShadow: selectedStyle.colors?.boxShadow || '0 4px 12px rgba(0, 0, 0, 0.1)',
            }}
        >
            {/* Select Carrier */}
            <selectedStyle.OrderSummaryTitle style={{ color: selectedStyle.colors?.titleText }}>
                Select Carrier
            </selectedStyle.OrderSummaryTitle>
            <selectedStyle.CarrierContainer style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                {carriers.map((carrier) => (
                    <selectedStyle.CarrierCard
                        key={carrier.id}
                        onClick={() => selectCarrier(carrier.id)}
                        isSelected={selectedCarrier?.id === carrier.id}
                        style={{
                            padding: '1rem',
                            boxShadow: selectedCarrier?.id === carrier.id
                                ? `0 0 10px ${selectedStyle.colors?.goldAccent}`
                                : 'none',
                            transition: 'box-shadow 0.3s ease',
                            borderRadius: '8px',
                            backgroundColor: selectedStyle.colors?.hoverCardBackground,
                            width: '80px',
                        }}
                    >
                        <img
                            src={carrier.photo}
                            alt={carrier.name}
                            style={{
                                width: '40px',
                                height: '40px',
                                objectFit: 'contain',
                                borderRadius: '4px'
                            }}
                        />
                    </selectedStyle.CarrierCard>
                ))}
            </selectedStyle.CarrierContainer>

            {/* Select Delivery Address */}
            <selectedStyle.OrderSummaryTitle style={{ color: selectedStyle.colors?.titleText }}>
                Select Address
            </selectedStyle.OrderSummaryTitle>
            <selectedStyle.AddressContainer style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {addresses.map((address) => (
                    <selectedStyle.AddressCard
                        key={address.id}
                        onClick={() => selectAddress(address.id)}
                        isSelected={selectedAddress?.id === address.id}
                        style={{
                            padding: '1rem',
                            boxShadow: selectedAddress?.id === address.id
                                ? `0 0 10px ${selectedStyle.colors?.goldAccent}`
                                : 'none',
                            transition: 'box-shadow 0.3s ease',
                            borderRadius: '8px',
                            backgroundColor: selectedStyle.colors?.hoverCardBackground ,
                        }}
                    >
                        {address.fullname}
                        {address.addressLineOne}, {address.city}

                    </selectedStyle.AddressCard>
                ))}
            </selectedStyle.AddressContainer>

            {/* Select Payment Method */}
            <selectedStyle.OrderSummaryTitle style={{ color: selectedStyle.colors?.titleText }}>
                Select Payment
            </selectedStyle.OrderSummaryTitle>
            <selectedStyle.PaymentMethodContainer style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                {paymentMethods.map((method) => (
                    <selectedStyle.PaymentMethodCard
                        key={method.id}
                        onClick={() => selectPaymentMethod(method.id)}
                        isSelected={selectedPaymentMethod?.id === method.id}
                        style={{
                            padding: '1rem',
                            boxShadow: selectedPaymentMethod?.id === method.id
                                ? `0 0 10px ${selectedStyle.colors?.goldAccent}`
                                : 'none',
                            transition: 'box-shadow 0.3s ease',
                            borderRadius: '50%',
                            width: '80px',
                            height: '80px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: selectedStyle.colors?.hoverCardBackground,
                        }}
                    >
                        <img
                            src={method.image}
                            alt={method.name}
                            style={{ width: '50%', height: '50%' }}
                        />
                    </selectedStyle.PaymentMethodCard>
                ))}
            </selectedStyle.PaymentMethodContainer>
        </selectedStyle.OrderSummaryContainer>
    );
});

export default CheckoutPageCardTypeB;
