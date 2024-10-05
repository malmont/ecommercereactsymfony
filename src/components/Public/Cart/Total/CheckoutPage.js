import React, { useState } from 'react';
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import { useNavigate } from 'react-router-dom';
import { useDependencies } from '../../../../DependencyContext';
import { createOrder } from '../cartApi';
import TotalView from '../Total/TotalView';
import CartItemView from '../Total/CartItemView';

const CheckoutPage = observer(() => {
    const { checkoutViewModel, cartViewModel } = useDependencies(); 
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleProceedToPayment = async () => {
        if (!checkoutViewModel.isCheckoutReady()) {
            alert("Please select a carrier, delivery address, and payment method.");
            return;
        }

        const orderData = {
            orderSource: 1,  // ID pour Ecommerce
            paymentMethod: checkoutViewModel.selectedPaymentMethod.id, 
            addressId: checkoutViewModel.selectedAddress.id,  
            carrierId: checkoutViewModel.selectedCarrier.id,  
            typeOrder: 1,  // ID pour achatclient
            items: checkoutViewModel.cart.map(item => ({
                productVariantId: item.variantId,  
                quantity: item.quantity 
            }))
        };

        try {
            setLoading(true);
            const result = await createOrder( orderData);
            console.log('Order created successfully:', result);
            cartViewModel.clearCart();
            navigate('/confirmation', { state: { order: result } });
        } catch (error) {
            console.error("Error creating order:", error);
            alert("Failed to create the order. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    if (checkoutViewModel.addressListViewModel.loading || checkoutViewModel.carrierListViewModel.loading) {
        return <p>Loading...</p>;
    }

    return (
        <Wrapper>
            <div className="cart card">
                <div className="cart__left">
                    <div className="card-header row justify-content-between">
                        <div className="col-12 col-md-8">
                            <h3>Checkout</h3>
                            {checkoutViewModel.cart?.map((item) => (
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
                                <h4>Select Carrier:</h4>
                                <div className="carriers m-4">
                                    {checkoutViewModel.carrierListViewModel.carriers.map((carrier) => (
                                        <CarrierOption
                                            key={carrier.id}
                                            onClick={() => checkoutViewModel.selectCarrier(carrier.id)}
                                            isSelected={checkoutViewModel.selectedCarrier?.id === carrier.id}
                                        >
                                            <img src={carrier.photo} alt={carrier.name} />
                                            <p>{carrier.name}</p>
                                        </CarrierOption>
                                    ))}
                                </div>
                                <h4>Select Delivery Address:</h4>
                                <div className="addresses m-4">
                                    {checkoutViewModel.addressListViewModel.addresses.map((address) => (
                                        <AddressOption
                                            key={address.id}
                                            onClick={() => checkoutViewModel.selectAddress(address.id)}
                                            isSelected={checkoutViewModel.selectedAddress?.id === address.id}
                                        >
                                            <p>{address.fullname}, {address.addressLineOne}, {address.city}</p>
                                        </AddressOption>
                                    ))}
                                </div>
                                <h4>Select Payment Method:</h4>
                                <div className="paymentMethods m-4">
                                    {checkoutViewModel.paymentMethods.map((method) => (
                                        <PaymentMethodOption
                                            key={method.id}
                                            onClick={() => checkoutViewModel.selectPaymentMethod(method.id)}
                                            isSelected={checkoutViewModel.selectedPaymentMethod?.id === method.id}
                                        >
                                            <img src={method.image} alt={method.name} />
                                            <p>{method.name}</p>
                                        </PaymentMethodOption>
                                    ))}
                                </div>
                            </div>

                            <TotalView handleCheckout={handleProceedToPayment} buttonLabel="Confirm and Proceed" />
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
    flex-wrap: wrap;
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
