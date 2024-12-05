import React, { useState } from 'react';
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import { useNavigate } from 'react-router-dom';
import { useDependencies } from '../../../../DependencyContext';
import { createOrder } from '../cartApi';
import ContainerTypeCartItemCard from '../../../../theme/ThemeContainer/ContainerTypeCartItemCard';
import ContainerTypeTotalCard from '../../../../theme/ThemeContainer/ContainerTypeTotalCard';
import ContainerTypeTotalCheckoutCard from '../../../../theme/ThemeContainer/ContainerTypeTotalCheckoutCard';

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
      const result = await createOrder(orderData);
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
          <div className=" row justify-content-between">
            <div className="col col">
              <h3>Checkout</h3>
              {checkoutViewModel.cart?.map((item) => (
                <ContainerTypeCartItemCard
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
            <div className="cart__right">
              <ContainerTypeTotalCheckoutCard
                carriers={checkoutViewModel.carrierListViewModel.carriers}
                addresses={checkoutViewModel.addressListViewModel.addresses}
                paymentMethods={checkoutViewModel.paymentMethods}
                selectedCarrier={checkoutViewModel.selectedCarrier}
                selectedAddress={checkoutViewModel.selectedAddress}
                selectedPaymentMethod={checkoutViewModel.selectedPaymentMethod}
                selectCarrier={(id) => checkoutViewModel.selectCarrier(id)}
                selectAddress={(id) => checkoutViewModel.selectAddress(id)}
                selectPaymentMethod={(id) => checkoutViewModel.selectPaymentMethod(id)}
              />
               <div className="mt-4"/>
              <ContainerTypeTotalCard handleCheckout={handleProceedToPayment} buttonLabel="Proceed" />
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
    margin: 30px 10px;
    height: max-content;
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

  .cart__right {
    flex: 1;
    width: 800px; 
    margin-left: auto;
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




export default CheckoutPage;
