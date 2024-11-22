import React from "react";
import { observer } from "mobx-react-lite";
import { styles } from '../../../../../theme/AllStyles';
import { useAdminContext } from '../../../../../theme/AdminContext';

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

    return (
        <selectedStyle.OrderSummaryContainer
            style={{
                gap: '2rem',
                padding: '2rem',
                backgroundColor: '#f5f7fa',
                borderRadius: '20px',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
            }}
        >
            {/* Select Carrier */}
            <div>
                <h2
                    style={{
                        fontSize: '1.8rem',
                        color: '#333',
                        fontWeight: 'bold',
                        marginBottom: '1.5rem',
                        textAlign: 'center',
                    }}
                >
                    Choose Your Carrier
                </h2>
                <selectedStyle.CarrierContainer
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
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
                                padding: '1.5rem',
                                borderRadius: '16px',
                                background: selectedCarrier?.id === carrier.id
                                    ? 'linear-gradient(145deg, #d6eaff, #ffffff)'
                                    : '#ffffff',
                                border: `2px solid ${selectedCarrier?.id === carrier.id ? '#007bff' : '#dee2e6'}`,
                                boxShadow: selectedCarrier?.id === carrier.id
                                    ? '0 10px 25px rgba(0, 0, 0, 0.2)'
                                    : '0 4px 10px rgba(0, 0, 0, 0.1)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                transform: selectedCarrier?.id === carrier.id ? 'translateY(-5px)' : 'translateY(0)',
                                position: 'relative',
                                textAlign: 'center',
                            }}
                        >
                            {selectedCarrier?.id === carrier.id && (
                                <span
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        backgroundColor: '#007bff',
                                        color: '#ffffff',
                                        borderRadius: '50%',
                                        padding: '12px',
                                        fontSize: '1rem',
                                        fontWeight: 'bold',
                                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                                        zIndex: 1,
                                    }}
                                >
                                    ✓
                                </span>
                            )}
                            <img
                                src={carrier.photo}
                                alt={carrier.name}
                                style={{
                                    width: '90px',
                                    height: '60px',
                                    objectFit: 'contain',
                                    marginBottom: '1rem',
                                }}
                            />
                            <p
                                style={{
                                    fontSize: '1.2rem',
                                    fontWeight: '600',
                                    color: '#333',
                                    zIndex: 0,
                                }}
                            >
                                {carrier.name}
                            </p>
                        </selectedStyle.CarrierCard>
                    ))}
                </selectedStyle.CarrierContainer>
            </div>

            {/* Select Delivery Address */}
            <div>
                <h2
                    style={{
                        fontSize: '1.8rem',
                        color: '#333',
                        fontWeight: 'bold',
                        marginBottom: '1.5rem',
                        textAlign: 'center',
                    }}
                >
                    Select Delivery Address
                </h2>
                <selectedStyle.AddressContainer
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2rem',
                    }}
                >
                    {addresses.map((address) => (
                        <selectedStyle.AddressCard
                            key={address.id}
                            onClick={() => selectAddress(address.id)}
                            isSelected={selectedAddress?.id === address.id}
                            style={{
                                cursor: 'pointer',
                                padding: '1.8rem',
                                borderRadius: '24px',
                                background: selectedAddress?.id === address.id
                                    ? 'linear-gradient(145deg, #e8ffe8, #ffffff)'
                                    : '#ffffff',
                                border: `2px solid ${selectedAddress?.id === address.id ? '#28a745' : '#dee2e6'}`,
                                boxShadow: selectedAddress?.id === address.id
                                    ? '0 10px 25px rgba(0, 0, 0, 0.2)'
                                    : '0 4px 10px rgba(0, 0, 0, 0.1)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                transform: selectedAddress?.id === address.id ? 'translateY(-5px)' : 'translateY(0)',
                                position: 'relative',
                            }}
                        >
                            {selectedAddress?.id === address.id && (
                                <span
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        backgroundColor: '#28a745',
                                        color: '#ffffff',
                                        borderRadius: '50%',
                                        padding: '12px',
                                        fontSize: '1rem',
                                        fontWeight: 'bold',
                                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                                        zIndex: 1,
                                    }}
                                >
                                    ✓
                                </span>
                            )}
                            <p
                                style={{
                                    margin: 0,
                                    fontWeight: '600',
                                    fontSize: '1.2rem',
                                    color: '#333',
                                    marginBottom: '0.5rem',
                                    zIndex: 0,
                                }}
                            >
                                {address.fullname}
                            </p>
                            <p
                                style={{
                                    margin: 0,
                                    fontSize: '1rem',
                                    color: '#555',
                                    zIndex: 0,
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
                        fontSize: '1.8rem',
                        color: '#333',
                        fontWeight: 'bold',
                        marginBottom: '1.5rem',
                        textAlign: 'center',
                    }}
                >
                    Select Payment Method
                </h2>
                <selectedStyle.PaymentMethodContainer
                    style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        gap: '2rem',
                    }}
                >
                    {paymentMethods.map((method) => (
                        <selectedStyle.PaymentMethodCard
                            key={method.id}
                            onClick={() => selectPaymentMethod(method.id)}
                            isSelected={selectedPaymentMethod?.id === method.id}
                            style={{
                                cursor: 'pointer',
                                width: '120px',
                                height: '120px',
                                borderRadius: '50%',
                                background: selectedPaymentMethod?.id === method.id
                                    ? 'linear-gradient(145deg, #fffbe6, #ffffff)'
                                    : '#ffffff',
                                border: `2px solid ${selectedPaymentMethod?.id === method.id ? '#ffc107' : '#dee2e6'}`,
                                boxShadow: selectedPaymentMethod?.id === method.id
                                    ? '0 10px 25px rgba(0, 0, 0, 0.2)'
                                    : '0 4px 10px rgba(0, 0, 0, 0.1)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                transform: selectedPaymentMethod?.id === method.id ? 'translateY(-5px)' : 'translateY(0)',
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
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        backgroundColor: '#ffc107',
                                        color: '#ffffff',
                                        borderRadius: '50%',
                                        padding: '12px',
                                        fontSize: '1rem',
                                        fontWeight: 'bold',
                                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                                        zIndex: 1,
                                    }}
                                >
                                    ✓
                                </span>
                            )}
                            <img
                                src={method.image}
                                alt={method.name}
                                style={{
                                    width: '60%',
                                    height: '60%',
                                    zIndex: 0,
                                }}
                            />
                        </selectedStyle.PaymentMethodCard>
                    ))}
                </selectedStyle.PaymentMethodContainer>
            </div>
        </selectedStyle.OrderSummaryContainer>
    );
});

export default CheckoutPageCardTypeF;
