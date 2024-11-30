import React from "react";
import { observer } from "mobx-react-lite";
import { styles } from '../../../../../theme/AllStyles';
import { useAdminContext } from '../../../../../theme/AdminContext';

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

    return (
        <selectedStyle.OrderSummaryContainer
            style={{
                gap: '2rem',
                padding: '2rem',
                backgroundColor: selectedStyle?.colors?.cardBackground,
                borderRadius: '20px',
                boxShadow: selectedStyle?.colors?.boxShadow || '0 6px 15px rgba(0, 0, 0, 0.1)',
            }}
        >
            {/* Select Carrier */}
            <div>
                <h2
                    style={{
                        fontSize: '1.6rem',
                        color: selectedStyle?.colors?.textColor ,
                        fontWeight: 'bold',
                        marginBottom: '1rem',
                    }}
                >
                    Choose Your Carrier
                </h2>
                <selectedStyle.CarrierContainer
                    style={{
                        display: 'flex',
                        gap: '1.5rem',
                        overflowX: 'auto',
                        paddingBottom: '1rem',
                    }}
                >
                    {carriers.map((carrier) => (
                        <selectedStyle.CarrierCard
                            key={carrier.id}
                            onClick={() => selectCarrier(carrier.id)}
                            isSelected={selectedCarrier?.id === carrier.id}
                            style={{
                                cursor: 'pointer',
                                flex: '0 0 200px',
                                padding: '1.5rem',
                                border: `2px solid ${
                                    selectedCarrier?.id === carrier.id
                                        ? selectedStyle?.colors?.navItemHover
                                        : selectedStyle?.colors?.border 
                                }`,
                                borderRadius: '16px',
                                background: selectedCarrier?.id === carrier.id
                                    ? selectedStyle?.colors?.hoverCardBackground || 'linear-gradient(135deg, #e3f2fd, #ffffff)'
                                    : selectedStyle?.colors?.cardBackground ,
                                transition: 'transform 0.3s ease, background 0.3s ease',
                                boxShadow: selectedCarrier?.id === carrier.id
                                    ? selectedStyle?.colors?.boxShadow || '0 4px 12px rgba(0, 0, 0, 0.2)'
                                    : '0 2px 6px rgba(0, 0, 0, 0.1)',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            {selectedCarrier?.id === carrier.id && (
                                <span
                                    style={{
                                        position: 'absolute',
                                        top: '-8px',
                                        right: '-8px',
                                        backgroundColor: selectedStyle?.colors?.navItemHover ,
                                        color: selectedStyle?.colors?.cartCountText,
                                        borderRadius: '50%',
                                        padding: '4px 8px',
                                        fontSize: '0.8rem',
                                        fontWeight: 'bold',
                                        boxShadow: selectedStyle?.colors?.boxShadow || '0 2px 8px rgba(0, 0, 0, 0.2)',
                                    }}
                                >
                                    ✓
                                </span>
                            )}
                            <img
                                src={carrier.photo}
                                alt={carrier.name}
                                style={{
                                    width: '80px',
                                    height: '50px',
                                    objectFit: 'contain',
                                    marginBottom: '1rem',
                                }}
                            />
                            <p
                                style={{
                                    fontSize: '1.1rem',
                                    fontWeight: '600',
                                    color: selectedStyle?.colors?.textColor ,
                                    textAlign: 'center',
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
                        fontSize: '1.6rem',
                        color: selectedStyle?.colors?.textColor ,
                        fontWeight: 'bold',
                        marginBottom: '1rem',
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
                                border: `2px solid ${
                                    selectedAddress?.id === address.id
                                        ? selectedStyle?.colors?.navItemHover 
                                        : selectedStyle?.colors?.border 
                                }`,
                                borderRadius: '12px',
                                background: selectedAddress?.id === address.id
                                    ? selectedStyle?.colors?.hoverCardBackground || 'linear-gradient(135deg, #e6ffe8, #ffffff)'
                                    : selectedStyle?.colors?.cardBackground || '#ffffff',
                                boxShadow: selectedAddress?.id === address.id
                                    ? selectedStyle?.colors?.boxShadow || '0 4px 12px rgba(0, 0, 0, 0.2)'
                                    : '0 2px 6px rgba(0, 0, 0, 0.1)',
                                position: 'relative',
                                transition: 'background 0.3s ease, box-shadow 0.3s ease',
                            }}
                        >
                            {selectedAddress?.id === address.id && (
                                <span
                                    style={{
                                        position: 'absolute',
                                        top: '-8px',
                                        right: '-8px',
                                        backgroundColor: selectedStyle?.colors?.navItemHover ,
                                        color: selectedStyle?.colors?.cartCountText ,
                                        borderRadius: '50%',
                                        padding: '4px 8px',
                                        fontSize: '0.8rem',
                                        fontWeight: 'bold',
                                        boxShadow: selectedStyle?.colors?.boxShadow || '0 2px 8px rgba(0, 0, 0, 0.2)',
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
                                    color: selectedStyle?.colors?.textColor ,
                                    marginBottom: '0.5rem',
                                }}
                            >
                                {address.fullname}
                            </p>
                            <p
                                style={{
                                    margin: 0,
                                    fontSize: '0.9rem',
                                    color: selectedStyle?.colors?.infoTextColor ,
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
                        fontSize: '1.6rem',
                        color: selectedStyle?.colors?.textColor ,
                        fontWeight: 'bold',
                        marginBottom: '1rem',
                    }}
                >
                    Select Payment Method
                </h2>
                <selectedStyle.PaymentMethodContainer
                    style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        gap: '1rem',
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
                                border: `2px solid ${
                                    selectedPaymentMethod?.id === method.id
                                        ? selectedStyle?.colors?.goldAccent 
                                        : selectedStyle?.colors?.border 
                                }`,
                                borderRadius: '50%',
                                background: selectedPaymentMethod?.id === method.id
                                    ? selectedStyle?.colors?.hoverCardBackground || 'linear-gradient(135deg, #fff9e6, #ffffff)'
                                    : selectedStyle?.colors?.cardBackground || '#ffffff',
                                boxShadow: selectedPaymentMethod?.id === method.id
                                    ? selectedStyle?.colors?.boxShadow || '0 4px 12px rgba(0, 0, 0, 0.2)'
                                    : '0 2px 6px rgba(0, 0, 0, 0.1)',
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'background 0.3s ease, box-shadow 0.3s ease',
                            }}
                        >
                            {selectedPaymentMethod?.id === method.id && (
                                <span
                                    style={{
                                        position: 'absolute',
                                        top: '-8px',
                                        right: '-8px',
                                        backgroundColor: selectedStyle?.colors?.goldAccent ,
                                        color: selectedStyle?.colors?.cartCountText ,
                                        borderRadius: '50%',
                                        padding: '4px 8px',
                                        fontSize: '0.8rem',
                                        fontWeight: 'bold',
                                        boxShadow: selectedStyle?.colors?.boxShadow || '0 2px 8px rgba(0, 0, 0, 0.2)',
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

export default CheckoutPageCardTypeE;
