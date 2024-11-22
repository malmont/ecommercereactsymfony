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
                backgroundColor: '#f8f9fa',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            }}
        >
            {/* Select Carrier */}
            <selectedStyle.OrderSummaryTitle>
                Select Carrier:
            </selectedStyle.OrderSummaryTitle>
            <selectedStyle.CarrierContainer style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
                {carriers.map((carrier) => (
                    <selectedStyle.CarrierCard
                        key={carrier.id}
                        onClick={() => selectCarrier(carrier.id)}
                        isSelected={selectedCarrier?.id === carrier.id}
                        style={{
                            padding: '1rem',
                            boxShadow: selectedCarrier?.id === carrier.id ? '0 0 10px #aaa' : 'none',
                            transition: 'box-shadow 0.3s ease',
                            borderRadius: '8px',
                        }}
                    >
                        <img
                            src={carrier.photo}
                            alt={carrier.name}
                            style={{ width: '80px', height: '50px', objectFit: 'contain' }}
                        />
                    </selectedStyle.CarrierCard>
                ))}
            </selectedStyle.CarrierContainer>

            {/* Select Delivery Address */}
            <selectedStyle.OrderSummaryTitle>
                Select Delivery Address:
            </selectedStyle.OrderSummaryTitle>
            <selectedStyle.AddressContainer style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {addresses.map((address) => (
                    <selectedStyle.AddressCard
                        key={address.id}
                        onClick={() => selectAddress(address.id)}
                        isSelected={selectedAddress?.id === address.id}
                        style={{
                            padding: '1rem',
                            boxShadow: selectedAddress?.id === address.id ? '0 0 10px #aaa' : 'none',
                            transition: 'box-shadow 0.3s ease',
                            borderRadius: '8px',
                        }}
                    >
                        <p style={{ margin: 0, fontWeight: 'bold', color: '#000' }}>
                            {address.fullname}
                        </p>
                        <p style={{ margin: 0, color: '#555' }}>
                            {address.addressLineOne}, {address.city}
                        </p>
                    </selectedStyle.AddressCard>
                ))}
            </selectedStyle.AddressContainer>

            {/* Select Payment Method */}
            <selectedStyle.OrderSummaryTitle>
                Select Payment Method:
            </selectedStyle.OrderSummaryTitle>
            <selectedStyle.PaymentMethodContainer style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                {paymentMethods.map((method) => (
                    <selectedStyle.PaymentMethodCard
                        key={method.id}
                        onClick={() => selectPaymentMethod(method.id)}
                        isSelected={selectedPaymentMethod?.id === method.id}
                        style={{
                            padding: '1rem',
                            boxShadow: selectedPaymentMethod?.id === method.id ? '0 0 10px #aaa' : 'none',
                            transition: 'box-shadow 0.3s ease',
                            borderRadius: '50%',
                            width: '80px',
                            height: '80px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
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
