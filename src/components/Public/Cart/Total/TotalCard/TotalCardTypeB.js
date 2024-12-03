import React from 'react';
import { observer } from "mobx-react-lite";
import { useDependencies } from '../../../../../DependencyContext';
import { styles } from '../../../../../theme/AllStyles';
import { useAdminContext } from '../../../../../theme/AdminContext';

const TotalCardTypeB = observer(({ handleCheckout, buttonLabel = 'Pay Now' }) => {
  const { cartViewModel } = useDependencies();
  const { styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice];

  return (
    <selectedStyle.OrderSummaryContainer
      style={{
        maxWidth: '500px',
        boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
        width: '110%',
      }}
    >
      {/* Title */}
      <selectedStyle.OrderSummaryTitle
        style={{
          fontSize: '1.8rem',
          textTransform: 'capitalize',
          textAlign: 'center',
        }}
      >
        Order Summary
      </selectedStyle.OrderSummaryTitle>

      <selectedStyle.Divider />

      {/* Subtotal */}
      <selectedStyle.OrderSummaryRow>
        <selectedStyle.OrderSummaryText>
          Subtotal ({cartViewModel.totalQuantity} items)
        </selectedStyle.OrderSummaryText>
        <selectedStyle.OrderSummaryHighlight>
          {((cartViewModel.totalPrice) / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </selectedStyle.OrderSummaryHighlight>
      </selectedStyle.OrderSummaryRow>

      <selectedStyle.Divider />

      {/* Tax */}
      <selectedStyle.OrderSummaryRow>
        <selectedStyle.OrderSummaryText>Tax (20%)</selectedStyle.OrderSummaryText>
        <selectedStyle.OrderSummaryHighlight>
          {((cartViewModel.totalPrice * 0.2) / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </selectedStyle.OrderSummaryHighlight>
      </selectedStyle.OrderSummaryRow>

      <selectedStyle.Divider />

      {/* Shipping */}
      <selectedStyle.OrderSummaryRow>
        <selectedStyle.OrderSummaryText>Shipping</selectedStyle.OrderSummaryText>
        <selectedStyle.OrderSummaryHighlight>Free</selectedStyle.OrderSummaryHighlight>
      </selectedStyle.OrderSummaryRow>

      <selectedStyle.Divider />

      {/* Total */}
      <selectedStyle.OrderSummaryRow>
        <selectedStyle.OrderSummaryText
          style={{
            fontSize: '1.2rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
          }}
        >
          Total
        </selectedStyle.OrderSummaryText>
        <selectedStyle.OrderSummaryHighlight
          style={{
            fontSize: '1.6rem',
          }}
        >
          {((cartViewModel.totalPriceWithTax) / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </selectedStyle.OrderSummaryHighlight>
      </selectedStyle.OrderSummaryRow>

      {/* Checkout Button */}
      <selectedStyle.CheckoutButton
        style={{
          marginTop: '1.5rem',
          padding: '1rem',
          fontSize: '1.1rem',
          borderRadius: '12px',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
        onClick={handleCheckout}
      >
        {buttonLabel}
      </selectedStyle.CheckoutButton>
    </selectedStyle.OrderSummaryContainer>
  );
});

export default TotalCardTypeB;
