import React, { useState } from 'react';
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import { useNavigate } from 'react-router-dom';
import { useDependencies } from '../../../../DependencyContext';
import TotalView from '../Total/TotalView';
import CartItemView from '../Total/CartItemView';

const CheckoutPage = observer(() => {
    const { cartViewModel } = useDependencies();
    const [selectedCarrier, setSelectedCarrier] = useState(null);
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
    const navigate = useNavigate();

    // Transporteurs avec images
    const carriers = [
        { id: 1, name: 'DHL', image: 'https://backend-strapi.online/jeesign/assets/uploads/Carrier/77cc0956be20f7c772ded11d9aa3a575fd34b76a.png' },
        { id: 2, name: 'FedEx', image: 'https://backend-strapi.online/jeesign/assets/uploads/Carrier/9cc1e3b89276aa0aa4aec4e98689703856f0727f.png' },
        { id: 3, name: 'UPS', image: 'https://backend-strapi.online/jeesign/assets/uploads/Carrier/2784c410cfc1f1051df40b6553a2ea5b3057357d.png' }
    ];

    // Adresses avec icône par exemple (mais cela pourrait être des images d'adresses dans un cas réel)
    const addresses = [
        { id: 1, address: '123 Main St, New York, NY', icon: '🏠' },
        { id: 2, address: '456 Broadway, New York, NY', icon: '🏢' },
        { id: 3, address: '789 Fifth Ave, New York, NY', icon: '📦' }
    ];

    // Méthodes de paiement
    const paymentMethods = [
        { id: 1, name: 'Credit Card', image: 'https://img.icons8.com/color/48/000000/visa.png' },
        { id: 2, name: 'PayPal', image: 'https://img.icons8.com/color/48/000000/paypal.png' },
        { id: 3, name: 'Bank Transfer', image: 'https://img.icons8.com/color/48/000000/bank.png' }
    ];

    const handleCarrierChange = (id) => {
        const selected = carriers.find((carrier) => carrier.id === id);
        setSelectedCarrier(selected);
    };

    const handleAddressChange = (id) => {
        const selected = addresses.find((address) => address.id === id);
        setSelectedAddress(selected);
    };

    const handlePaymentMethodChange = (id) => {
        const selected = paymentMethods.find((method) => method.id === id);
        setSelectedPaymentMethod(selected);
    };

    const handleProceedToPayment = () => {
        if (!selectedCarrier || !selectedAddress || !selectedPaymentMethod) {
            alert("Please select a carrier, delivery address, and payment method.");
        } else {
            navigate('/payment', {
                state: {
                    cart: cartViewModel.cart,
                    totalPrice: cartViewModel.totalPriceWithTax,
                    carrier: selectedCarrier,
                    address: selectedAddress,
                    paymentMethod: selectedPaymentMethod
                }
            });
        }
    };

    return (
        <Wrapper>
            <div className="cart card">
                <div className="cart__left">
                    <div className="card-header row justify-content-between">
                        <div className="col-12 col-md-8">
                            <h3>Checkout</h3>
                            {cartViewModel.cart?.map((item) => (
                                <CartItemView
                                    key={item.variantId}
                                    id={item.id}
                                    image={item.image}
                                    title={item.title}
                                    price={item.price}
                                    quantity={item.quantity}
                                    color={item.color}
                                    colorHex={item.colorHex}
                                    size={item.size}
                                    variantId={item.variantId}
                                    showButtons={false}  
                                />
                            ))}
                        </div>
                        <div className="col-12 col-md-4 row align-items-end">
                            <div className="checkout__details">
                                {/* Sélection des transporteurs */}
                                <h4>Select Carrier:</h4>
                                <div className="carriers m-4">
                                    {carriers.map((carrier) => (
                                        <CarrierOption
                                            key={carrier.id}
                                            onClick={() => handleCarrierChange(carrier.id)}
                                            isSelected={selectedCarrier?.id === carrier.id}
                                        >
                                            <img src={carrier.image} alt={carrier.name} />
                                            <p>{carrier.name}</p>
                                        </CarrierOption>
                                    ))}
                                </div>

                                {/* Sélection des adresses */}
                                <h4>Select Delivery Address:</h4>
                                <div className="addresses m-4">
                                    {addresses.map((address) => (
                                        <AddressOption
                                            key={address.id}
                                            onClick={() => handleAddressChange(address.id)}
                                            isSelected={selectedAddress?.id === address.id}
                                        >
                                            <span>{address.icon}</span>
                                            <p>{address.address}</p>
                                        </AddressOption>
                                    ))}
                                </div>

                                {/* Sélection des méthodes de paiement */}
                                <h4>Select Payment Method:</h4>
                                <div className="paymentMethods m-4">
                                    {paymentMethods.map((method) => (
                                        <PaymentMethodOption
                                            key={method.id}
                                            onClick={() => handlePaymentMethodChange(method.id)}
                                            isSelected={selectedPaymentMethod?.id === method.id}
                                        >
                                            <img src={method.image} alt={method.name} />
                                            <p>{method.name}</p>

                                        </PaymentMethodOption>
                                    ))}
                                </div>
                            </div>

                            <TotalView />
                        </div>
                    </div>
                </div>
            </div>

        </Wrapper>
    );
});

const Wrapper = styled.div`
  .cart {
    display: flex;
    margin: 30px auto;
    height: max-content;
    padding: 20px 20px 0 20px;
    gap: 20px;
    flex: 1;
  }

  .cart__left {
    padding: 20px;
    width: 100%;
    background-color: white;
  }

  .cart__left h3 {
    font-size: 32px;
    font-weight: 450;
    padding-bottom: 20px;
    border-bottom: 1px solid gainsboro;
  }

  .checkout__details {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .carriers, .addresses, .paymentMethods {
    display: flex;
    gap: 10px;
  }

  .checkout__button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .checkout__button:hover {
    background-color: #218838;
  }
`;

const CarrierOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: ${(props) => (props.isSelected ? '2px solid #007bff' : '1px solid #ccc')};
  border-radius: 10px;
  cursor: pointer;
  width: 100px;

  img {
    width: 50px;
    height: auto;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    font-weight: bold;
    color: ${(props) => (props.isSelected ? '#007bff' : 'black')};
  }

  &:hover {
    border: 2px solid #007bff;
  }
`;

const AddressOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: ${(props) => (props.isSelected ? '2px solid #007bff' : '1px solid #ccc')};
  border-radius: 10px;
  cursor: pointer;
  width: 150px;

  span {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    font-weight: bold;
    color: ${(props) => (props.isSelected ? '#007bff' : 'black')};
  }

  &:hover {
    border: 2px solid #007bff;
  }
`;

const PaymentMethodOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: ${(props) => (props.isSelected ? '2px solid #007bff' : '1px solid #ccc')};
  border-radius: 10px;
  cursor: pointer;
  width: 100px;

  img {
    width: 40px;
    height: auto;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    font-weight: bold;
    color: ${(props) => (props.isSelected ? '#007bff' : 'black')};
  }

  &:hover {
    border: 2px solid #007bff;
  }
`;

export default CheckoutPage;
