import React from "react";
import { observer } from "mobx-react-lite";
import { styles } from '../../../../../theme/AllStyles';
import { useAdminContext } from '../../../../../theme/AdminContext';

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

    return (
        <selectedStyle.OrderSummaryContainer
            style={{
                gap: '2rem',
                padding: '2rem',
                backgroundColor: '#f8f9fa',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
            }}
        >
            {/* Select Carrier */}
            <div
                style={{
                    borderBottom: '2px solid #dee2e6',
                    paddingBottom: '1rem',
                }}
            >
                <h2
                    style={{
                        fontSize: '1.5rem',
                        color: '#000',
                        fontWeight: 'bold',
                        marginBottom: '1.5rem',
                    }}
                >
                    Choose Your Carrier
                </h2>
                <selectedStyle.CarrierContainer
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                        gap: '1.5rem',
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
                                border: `2px solid ${selectedCarrier?.id === carrier.id ? '#007bff' : '#dee2e6'}`,
                                borderRadius: '12px',
                                background: selectedCarrier?.id === carrier.id
                                    ? 'linear-gradient(135deg, #e3f2fd, #ffffff)'
                                    : '#ffffff',
                                transition: 'transform 0.3s ease, background 0.3s ease',
                                boxShadow: selectedCarrier?.id === carrier.id
                                    ? '0 4px 12px rgba(0, 0, 0, 0.2)'
                                    : '0 2px 8px rgba(0, 0, 0, 0.1)',
                                textAlign: 'center',
                                position: 'relative',
                            }}
                        >
                            {selectedCarrier?.id === carrier.id && (
                                <span
                                    style={{
                                        position: 'absolute',
                                        top: '-8px',
                                        right: '-8px',
                                        backgroundColor: '#007bff',
                                        color: '#ffffff',
                                        borderRadius: '50%',
                                        padding: '4px 8px',
                                        fontSize: '0.8rem',
                                        fontWeight: 'bold',
                                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                                    }}
                                >
                                    ✓
                                </span>
                            )}
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
                                    color: '#000',
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
                    borderBottom: '2px solid #dee2e6',
                    paddingBottom: '1rem',
                }}
            >
                <h2
                    style={{
                        fontSize: '1.5rem',
                        color: '#000',
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
                                padding: '1.5rem',
                                border: `2px solid ${selectedAddress?.id === address.id ? '#007bff' : '#dee2e6'}`,
                                borderRadius: '12px',
                                background: selectedAddress?.id === address.id
                                    ? 'linear-gradient(135deg, #e3f2fd, #ffffff)'
                                    : '#ffffff',
                                transition: 'transform 0.3s ease, background 0.3s ease',
                                boxShadow: selectedAddress?.id === address.id
                                    ? '0 4px 12px rgba(0, 0, 0, 0.2)'
                                    : '0 2px 8px rgba(0, 0, 0, 0.1)',
                                position: 'relative',
                            }}
                        >
                            {selectedAddress?.id === address.id && (
                                <span
                                    style={{
                                        position: 'absolute',
                                        top: '-8px',
                                        right: '-8px',
                                        backgroundColor: '#007bff',
                                        color: '#ffffff',
                                        borderRadius: '50%',
                                        padding: '4px 8px',
                                        fontSize: '0.8rem',
                                        fontWeight: 'bold',
                                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                                    }}
                                >
                                    ✓
                                </span>
                            )}
                            <p
                                style={{
                                    margin: 0,
                                    fontWeight: '600',
                                    fontSize: '1rem',
                                    color: '#000',
                                    marginBottom: '0.5rem',
                                }}
                            >
                                {address.fullname}
                            </p>
                            <p
                                style={{
                                    margin: 0,
                                    fontSize: '0.9rem',
                                    color: '#555',
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
                        color: '#000',
                        fontWeight: 'bold',
                        marginBottom: '1.5rem',
                    }}
                >
                    Select Payment Method
                </h2>
                <selectedStyle.PaymentMethodContainer
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '1.5rem',
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
                                border: `2px solid ${selectedPaymentMethod?.id === method.id ? '#007bff' : '#dee2e6'}`,
                                borderRadius: '50%',
                                background: selectedPaymentMethod?.id === method.id
                                    ? 'linear-gradient(135deg, #e3f2fd, #ffffff)'
                                    : '#ffffff',
                                transition: 'transform 0.3s ease, background 0.3s ease',
                                boxShadow: selectedPaymentMethod?.id === method.id
                                    ? '0 4px 12px rgba(0, 0, 0, 0.2)'
                                    : '0 2px 8px rgba(0, 0, 0, 0.1)',
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {selectedPaymentMethod?.id === method.id && (
                                <span
                                    style={{
                                        position: 'absolute',
                                        top: '-8px',
                                        right: '-8px',
                                        backgroundColor: '#007bff',
                                        color: '#ffffff',
                                        borderRadius: '50%',
                                        padding: '4px 8px',
                                        fontSize: '0.8rem',
                                        fontWeight: 'bold',
                                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                                    }}
                                >
                                    ✓
                                </span>
                            )}
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

export default CheckoutPageCardTypeD;
