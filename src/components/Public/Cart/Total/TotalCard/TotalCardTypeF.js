import React from 'react';
import { observer } from "mobx-react-lite";
import { useDependencies } from '../../../../../DependencyContext';
import { styles } from '../../../../../theme/AllStyles';
import { useAdminContext } from '../../../../../theme/AdminContext';
import { useTheme } from 'styled-components';

const TotalCardTypeF = observer(({ handleCheckout, buttonLabel = 'Checkout Now' }) => {
  const { cartViewModel } = useDependencies();
  const { styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice];
  const theme = useTheme();
  return (
    <selectedStyle.OrderSummaryContainer
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1.5rem',
        borderRadius: '25px',
        background: `${theme.colors.cardBackground}`,
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
        border: `2px solid ${theme.colors.cardBorder }`,
        maxWidth: '600px',
        margin: '2rem auto',
        gap: '1rem',
        width: '100%',
      }}
    >
      {/* Left Section: Summary Details */}
      <div style={{ flex: 2 }}>
        {/* Title */}
        <selectedStyle.OrderSummaryTitle
          style={{
            fontSize: '1.8rem',
            textAlign: 'left',
            marginBottom: '1rem',
            color: `${theme.colors.textPrimary }`,
          }}
        >
          Your Order
        </selectedStyle.OrderSummaryTitle>

        {/* Subtotal */}
        <selectedStyle.OrderSummaryRow
          style={{
            justifyContent: 'space-between',
            marginBottom: '0.5rem',
          }}
        >
          <selectedStyle.OrderSummaryText>Subtotal</selectedStyle.OrderSummaryText>
          <selectedStyle.OrderSummaryHighlight>
            {((cartViewModel.totalPrice) / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
          </selectedStyle.OrderSummaryHighlight>
        </selectedStyle.OrderSummaryRow>

        {/* Tax */}
        <selectedStyle.OrderSummaryRow
          style={{
            justifyContent: 'space-between',
            marginBottom: '0.5rem',
          }}
        >
          <selectedStyle.OrderSummaryText>Tax (20%)</selectedStyle.OrderSummaryText>
          <selectedStyle.OrderSummaryHighlight>
            {((cartViewModel.totalPrice * 0.2) / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
          </selectedStyle.OrderSummaryHighlight>
        </selectedStyle.OrderSummaryRow>

        {/* Shipping */}
        <selectedStyle.OrderSummaryRow
          style={{
            justifyContent: 'space-between',
            marginBottom: '0.5rem',
          }}
        >
          <selectedStyle.OrderSummaryText>Shipping</selectedStyle.OrderSummaryText>
          <selectedStyle.OrderSummaryHighlight>Free</selectedStyle.OrderSummaryHighlight>
        </selectedStyle.OrderSummaryRow>

        {/* Divider */}
        <selectedStyle.Divider />

        {/* Total */}
        <selectedStyle.OrderSummaryRow
          style={{
            justifyContent: 'space-between',
            fontSize: '1.2rem',
            fontWeight: 'bold',
          }}
        >
          <selectedStyle.OrderSummaryText>Total</selectedStyle.OrderSummaryText>
          <selectedStyle.OrderSummaryHighlight>
            {((cartViewModel.totalPriceWithTax) / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
          </selectedStyle.OrderSummaryHighlight>
        </selectedStyle.OrderSummaryRow>
      </div>

      {/* Right Section: Checkout Button */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <selectedStyle.CheckoutButton
          style={{
            padding: '1rem',
            fontSize: '1rem',
            fontWeight: 'bold',
            borderRadius: '50px',
            background: `linear-gradient(90deg, ${theme.colors.goldAccent }, ${theme.colors.buttonBackground})`,
            color: `${theme.colors.buttonText || '#fff'}`,
            boxShadow: '0 6px 15px rgba(0, 0, 0, 0.15)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer',
          }}
          onClick={handleCheckout}
        >
          {buttonLabel}
        </selectedStyle.CheckoutButton>
      </div>
    </selectedStyle.OrderSummaryContainer>
  );
});

export default TotalCardTypeF;
