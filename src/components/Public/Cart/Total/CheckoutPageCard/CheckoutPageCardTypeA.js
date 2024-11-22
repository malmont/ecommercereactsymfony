import React from "react";
import { observer } from "mobx-react-lite";
import { styles } from '../../../../../theme/AllStyles';
import { useAdminContext } from '../../../../../theme/AdminContext';

const CheckoutPageCardTypeA = observer(({
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
    <selectedStyle.OrderSummaryContainer>
      <selectedStyle.OrderSummaryTitle>Select Carrier:</selectedStyle.OrderSummaryTitle>
      <selectedStyle.CarrierContainer>
        {carriers.map((carrier) => (
          <selectedStyle.CarrierCard
            key={carrier.id}
            onClick={() => selectCarrier(carrier.id)}
            isSelected={selectedCarrier?.id === carrier.id}
          >
            <img src={carrier.photo} alt={carrier.name} />
          </selectedStyle.CarrierCard>
        ))}
      </selectedStyle.CarrierContainer>

      <selectedStyle.OrderSummaryTitle>Select Delivery Address:</selectedStyle.OrderSummaryTitle>
      <selectedStyle.AddressContainer>
        {addresses.map((address) => (
          <selectedStyle.AddressCard
            key={address.id}
            onClick={() => selectAddress(address.id)}
            isSelected={selectedAddress?.id === address.id}
          >
            <p>{address.fullname}, {address.addressLineOne}, {address.city}</p>
          </selectedStyle.AddressCard>
        ))}
      </selectedStyle.AddressContainer>

      <selectedStyle.OrderSummaryTitle>Select Payment Method:</selectedStyle.OrderSummaryTitle>
      <selectedStyle.PaymentMethodContainer>
        {paymentMethods.map((method) => (
          <selectedStyle.PaymentMethodCard
            key={method.id}
            onClick={() => selectPaymentMethod(method.id)}
            isSelected={selectedPaymentMethod?.id === method.id}
          >
            <img src={method.image} alt={method.name} />
          </selectedStyle.PaymentMethodCard>
        ))}
      </selectedStyle.PaymentMethodContainer>
    </selectedStyle.OrderSummaryContainer>
  );
});

export default CheckoutPageCardTypeA;
