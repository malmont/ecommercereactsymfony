import React from 'react';
import { observer } from "mobx-react-lite";
import { useDependencies } from '../../../../../DependencyContext';
import { styles } from '../../../../../theme/AllStyles';
import { useAdminContext } from '../../../../../theme/AdminContext';

const TotalCardTypeC = observer(({ handleCheckout, buttonLabel = 'Confirm Order' }) => {
  const { cartViewModel } = useDependencies();
  const { styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice];

  return (
    <selectedStyle.OrderSummaryContainer
      style={{
        maxWidth: '600px',
        borderRadius: '20px',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
        padding: '2rem',
        width: '110%',
      }}
    >
      {/* Title */}
      <selectedStyle.OrderSummaryTitle
        style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '1.5rem',
          textTransform: 'uppercase',
        }}
      >
        Order Details
      </selectedStyle.OrderSummaryTitle>

      <selectedStyle.Divider style={{ marginBottom: '1.5rem' }} />

      {/* Subtotal */}
      <selectedStyle.OrderSummaryRow>
        <selectedStyle.OrderSummaryText>
          Items ({cartViewModel.totalQuantity} pcs)
        </selectedStyle.OrderSummaryText>
        <selectedStyle.OrderSummaryHighlight>
          {((cartViewModel.totalPrice) / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </selectedStyle.OrderSummaryHighlight>
      </selectedStyle.OrderSummaryRow>

      {/* Tax */}
      <selectedStyle.OrderSummaryRow>
        <selectedStyle.OrderSummaryText>Tax (20%)</selectedStyle.OrderSummaryText>
        <selectedStyle.OrderSummaryHighlight>
          {((cartViewModel.totalPrice * 0.2) / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </selectedStyle.OrderSummaryHighlight>
      </selectedStyle.OrderSummaryRow>

      {/* Shipping */}
      <selectedStyle.OrderSummaryRow>
        <selectedStyle.OrderSummaryText>Shipping Fee</selectedStyle.OrderSummaryText>
        <selectedStyle.OrderSummaryHighlight>Free</selectedStyle.OrderSummaryHighlight>
      </selectedStyle.OrderSummaryRow>

      <selectedStyle.Divider style={{ margin: '1.5rem 0' }} />

      {/* Total */}
      <selectedStyle.OrderSummaryRow
        style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          padding: '1rem 0',
          background: `${(props) => props.theme.colors.highlightBackground}`,
          borderRadius: '10px',
        }}
      >
        <selectedStyle.OrderSummaryText>Total (TTC)</selectedStyle.OrderSummaryText>
        <selectedStyle.OrderSummaryHighlight>
          {((cartViewModel.totalPriceWithTax) / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </selectedStyle.OrderSummaryHighlight>
      </selectedStyle.OrderSummaryRow>

      {/* Checkout Button */}
      <selectedStyle.CheckoutButton
        style={{
          marginTop: '2rem',
          width: '100%',
          padding: '1.2rem',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          borderRadius: '15px',
          background: `linear-gradient(90deg, ${(props) => props.theme.colors.buttonBackground}, ${(props) => props.theme.colors.goldAccent})`,
          transition: 'transform 0.3s ease, background-color 0.3s ease',
        }}
        onClick={handleCheckout}
      >
        {buttonLabel}
      </selectedStyle.CheckoutButton>
    </selectedStyle.OrderSummaryContainer>
  );
});

export default TotalCardTypeC;
