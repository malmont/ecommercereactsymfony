import React from "react";
import { observer } from "mobx-react-lite";
import { styles } from '../../../../../theme/AllStyles';
import { useAdminContext } from '../../../../../theme/AdminContext';

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

    return (
        <selectedStyle.OrderSummaryContainer
            style={{
                gap: '2rem',
                padding: '2rem',
                backgroundColor: selectedStyle?.colors?.cardBackground || '#ffffff',
                borderRadius: '12px',
                boxShadow: selectedStyle?.colors?.boxShadow || '0 4px 12px rgba(0, 0, 0, 0.1)',
            }}
        >
            {/* Select Carrier */}
            <div
                style={{
                    borderBottom: `2px solid ${selectedStyle?.colors?.border || '#dee2e6'}`,
                    paddingBottom: '1rem',
                }}
            >
                <h2
                    style={{
                        fontSize: '1.5rem',
                        color: selectedStyle?.colors?.titleText || '#000000',
                        fontWeight: 'bold',
                        marginBottom: '1.5rem',
                    }}
                >
                    Choose Your Carrier
                </h2>
                <selectedStyle.CarrierContainer
                    style={{
                        display: 'flex', justifyContent: 'center', gap: '1rem'
                    }}
                >
                    {carriers.map((carrier) => (
                        <selectedStyle.CarrierCard
                            key={carrier.id}
                            onClick={() => selectCarrier(carrier.id)}
                            isSelected={selectedCarrier?.id === carrier.id}
                            style={{
                                cursor: 'pointer',
                                padding: '1.2rem',
                                border: `2px solid ${selectedCarrier?.id === carrier.id 
                                    ? selectedStyle?.colors?.navItemHover
                                    : selectedStyle?.colors?.border}`,
                                borderRadius: '10px',
                                backgroundColor: selectedCarrier?.id === carrier.id 
                                    ? selectedStyle?.colors?.hoverCardBackground || '#e3f2fd' 
                                    : selectedStyle?.colors?.cardBackground || '#ffffff',
                                transition: 'transform 0.3s ease, background-color 0.3s ease',
                                boxShadow: selectedCarrier?.id === carrier.id
                                    ? selectedStyle?.colors?.boxShadow || '0 4px 12px rgba(0, 0, 0, 0.2)'
                                    : '0 2px 8px rgba(0, 0, 0, 0.1)',
                                textAlign: 'center',
                            }}
                        >
                            <img
                                src={carrier.photo}
                                alt={carrier.name}
                                style={{
                                    width: '70px',
                                    height: '50px',
                                    objectFit: 'contain',
                                    marginBottom: '0.8rem',
                                }}
                            />
                            <p
                                style={{
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    color: selectedStyle?.colors?.textColor || '#000000',
                                }}
                            >
                                {carrier.name}
                            </p>
                        </selectedStyle.CarrierCard>
                    ))}
                </selectedStyle.CarrierContainer>
            </div>

            {/* Select Delivery Address */}
            <div
                style={{
                    borderBottom: `2px solid ${selectedStyle?.colors?.border || '#dee2e6'}`,
                    paddingBottom: '1rem',
                }}
            >
                <h2
                    style={{
                        fontSize: '1.5rem',
                        color: selectedStyle?.colors?.titleText || '#000000',
                        fontWeight: 'bold',
                        marginBottom: '1.5rem',
                    }}
                >
                    Select Delivery Address
                </h2>
                <selectedStyle.AddressContainer
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '1.5rem',
                    }}
                >
                    {addresses.map((address) => (
                        <selectedStyle.AddressCard
                            key={address.id}
                            onClick={() => selectAddress(address.id)}
                            isSelected={selectedAddress?.id === address.id}
                            style={{
                                cursor: 'pointer',
                                padding: '1.2rem',
                                border: `2px solid ${selectedAddress?.id === address.id 
                                    ? selectedStyle?.colors?.navItemHover || '#007bff' 
                                    : selectedStyle?.colors?.border || '#dee2e6'}`,
                                borderRadius: '10px',
                                backgroundColor: selectedAddress?.id === address.id 
                                    ? selectedStyle?.colors?.hoverCardBackground || '#e3f2fd' 
                                    : selectedStyle?.colors?.cardBackground || '#ffffff',
                                transition: 'transform 0.3s ease, background-color 0.3s ease',
                                boxShadow: selectedAddress?.id === address.id
                                    ? selectedStyle?.colors?.boxShadow || '0 4px 12px rgba(0, 0, 0, 0.2)'
                                    : '0 2px 8px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            <p
                                style={{
                                    margin: 0,
                                    fontWeight: '600',
                                    fontSize: '1rem',
                                    color: selectedStyle?.colors?.textColor || '#000000',
                                    marginBottom: '0.5rem',
                                }}
                            >
                                {address.fullname}
                            </p>
                            <p
                                style={{
                                    margin: 0,
                                    fontSize: '0.9rem',
                                    color: selectedStyle?.colors?.infoTextColor || '#555555',
                                }}
                            >
                                {address.addressLineOne}, {address.city}
                            </p>
                        </selectedStyle.AddressCard>
                    ))}
                </selectedStyle.AddressContainer>
            </div>

            {/* Select Payment Method */}
            <div>
                <h2
                    style={{
                        fontSize: '1.5rem',
                        color: selectedStyle?.colors?.titleText || '#000000',
                        fontWeight: 'bold',
                        marginBottom: '1.5rem',
                    }}
                >
                    Select Payment Method
                </h2>
                <selectedStyle.PaymentMethodContainer
                    style={{
                        display: 'flex', justifyContent: 'center', gap: '1rem'
                    }}
                >
                    {paymentMethods.map((method) => (
                        <selectedStyle.PaymentMethodCard
                            key={method.id}
                            onClick={() => selectPaymentMethod(method.id)}
                            isSelected={selectedPaymentMethod?.id === method.id}
                            style={{
                                cursor: 'pointer',
                                width: '100px',
                                height: '100px',
                                border: `2px solid ${selectedPaymentMethod?.id === method.id 
                                    ? selectedStyle?.colors?.navItemHover || '#007bff' 
                                    : selectedStyle?.colors?.border || '#dee2e6'}`,
                                borderRadius: '50%',
                                backgroundColor: selectedPaymentMethod?.id === method.id 
                                    ? selectedStyle?.colors?.hoverCardBackground || '#e3f2fd' 
                                    : selectedStyle?.colors?.cardBackground || '#ffffff',
                                transition: 'transform 0.3s ease, background-color 0.3s ease',
                                boxShadow: selectedPaymentMethod?.id === method.id
                                    ? selectedStyle?.colors?.boxShadow || '0 4px 12px rgba(0, 0, 0, 0.2)'
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
                </selectedStyle.PaymentMethodContainer>
            </div>
        </selectedStyle.OrderSummaryContainer>
    );
});

export default CheckoutPageCardTypeC;
