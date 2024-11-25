import React from 'react';
import { observer } from "mobx-react-lite";
import { useDependencies } from '../../../../../DependencyContext';
import { styles } from '../../../../../theme/AllStyles';
import { useAdminContext } from '../../../../../theme/AdminContext';

const TotalCardTypeD = observer(({ handleCheckout, buttonLabel = 'Place Order' }) => {
  const { cartViewModel } = useDependencies();
  const { styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice];

  return (
    <selectedStyle.OrderSummaryContainer
      style={{
        borderRadius: '10px',
        border: `1px solid ${(props) => props.theme.colors.borderPrimary}`,
        padding: '1rem 1.5rem',
        maxWidth: '500px',
        margin: '1rem auto',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Title */}
      <selectedStyle.OrderSummaryTitle
        style={{
          fontSize: '1.8rem',
          textAlign: 'center',
          color: `${(props) => props.theme.colors.textPrimary}`,
          marginBottom: '1rem',
        }}
      >
        Summary
      </selectedStyle.OrderSummaryTitle>

      <selectedStyle.Divider style={{ marginBottom: '1rem' }} />

      {/* Subtotal */}
      <selectedStyle.OrderSummaryRow>
        <selectedStyle.OrderSummaryText>Items ({cartViewModel.totalQuantity})</selectedStyle.OrderSummaryText>
        <selectedStyle.OrderSummaryHighlight>
          {((cartViewModel.totalPrice) / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </selectedStyle.OrderSummaryHighlight>
      </selectedStyle.OrderSummaryRow>

      {/* Tax */}
      <selectedStyle.OrderSummaryRow>
        <selectedStyle.OrderSummaryText>Tax</selectedStyle.OrderSummaryText>
        <selectedStyle.OrderSummaryHighlight>
          {((cartViewModel.totalPrice * 0.2) / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </selectedStyle.OrderSummaryHighlight>
      </selectedStyle.OrderSummaryRow>

      {/* Shipping */}
      <selectedStyle.OrderSummaryRow>
        <selectedStyle.OrderSummaryText>Shipping</selectedStyle.OrderSummaryText>
        <selectedStyle.OrderSummaryHighlight>
          Free
        </selectedStyle.OrderSummaryHighlight>
      </selectedStyle.OrderSummaryRow>

      <selectedStyle.Divider style={{ marginTop: '1rem', marginBottom: '1rem' }} />

      {/* Total */}
      <selectedStyle.OrderSummaryRow
        style={{
          fontSize: '1.2rem',
          fontWeight: 'bold',
          padding: '0.5rem 0',
          background: `${(props) => props.theme.colors.highlightBackground}`,
          borderRadius: '5px',
        }}
      >
        <selectedStyle.OrderSummaryText>Total</selectedStyle.OrderSummaryText>
        <selectedStyle.OrderSummaryHighlight>
          {((cartViewModel.totalPriceWithTax) / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </selectedStyle.OrderSummaryHighlight>
      </selectedStyle.OrderSummaryRow>

      {/* Checkout Button */}
      <selectedStyle.CheckoutButton
        style={{
          marginTop: '1.5rem',
          width: '100%',
          padding: '1rem',
          fontSize: '1rem',
          textTransform: 'uppercase',
          fontWeight: 'bold',
          borderRadius: '8px',
          background: `linear-gradient(to right, ${(props) => props.theme.colors.buttonBackground}, ${(props) => props.theme.colors.goldAccent})`,
          transition: 'all 0.3s ease',
        }}
        onClick={handleCheckout}
      >
        {buttonLabel}
      </selectedStyle.CheckoutButton>
    </selectedStyle.OrderSummaryContainer>
  );
});

export default TotalCardTypeD;