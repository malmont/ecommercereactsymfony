import React from 'react';
import { observer } from "mobx-react-lite";
import { useDependencies } from '../../../../../DependencyContext';
import { styles } from '../../../../../theme/AllStyles';
import { useAdminContext } from '../../../../../theme/AdminContext';

const TotalCardTypeE = observer(({ handleCheckout, buttonLabel = 'Place Order' }) => {
  const { cartViewModel } = useDependencies();
  const { styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        width: '350px',
        height: '350px',
        background: `${(props) => props.theme.colors.cardBackground || '#f4f4f4'}`,
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
        padding: '1rem',
        margin: '2rem auto',
        position: 'relative',
      }}
    >
      {/* Circular Text Items */}
      <div style={{ position: 'absolute', top: '20px', textAlign: 'center' }}>
        <selectedStyle.OrderSummaryText style={{ fontSize: '1rem' }}>
          Subtotal:
        </selectedStyle.OrderSummaryText>
        <selectedStyle.OrderSummaryHighlight style={{ fontSize: '1.2rem' }}>
          {((cartViewModel.totalPrice) / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </selectedStyle.OrderSummaryHighlight>
      </div>

      <div style={{ position: 'absolute', left: '20px', textAlign: 'center' }}>
        <selectedStyle.OrderSummaryText style={{ fontSize: '1rem' }}>
          Tax:
        </selectedStyle.OrderSummaryText>
        <selectedStyle.OrderSummaryHighlight style={{ fontSize: '1.2rem' }}>
          {((cartViewModel.totalPrice * 0.2) / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </selectedStyle.OrderSummaryHighlight>
      </div>

      <div style={{ position: 'absolute', right: '20px', textAlign: 'center' }}>
        <selectedStyle.OrderSummaryText style={{ fontSize: '1rem' }}>
          Shipping:
        </selectedStyle.OrderSummaryText>
        <selectedStyle.OrderSummaryHighlight style={{ fontSize: '1.2rem' }}>
          Free
        </selectedStyle.OrderSummaryHighlight>
      </div>

      <div style={{ position: 'absolute', bottom: '20px', textAlign: 'center' }}>
        <selectedStyle.OrderSummaryText style={{ fontSize: '1rem' }}>
          Total:
        </selectedStyle.OrderSummaryText>
        <selectedStyle.OrderSummaryHighlight style={{ fontSize: '1.4rem' }}>
          {((cartViewModel.totalPriceWithTax) / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </selectedStyle.OrderSummaryHighlight>
      </div>

      {/* Central Checkout Button */}
      <selectedStyle.CheckoutButton
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          padding: '1rem 2rem',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          borderRadius: '25px',
          background: `linear-gradient(135deg, ${(props) => props.theme.colors.goldAccent || '#d4af37'}, ${(props) => props.theme.colors.buttonBackground || '#ffd700'})`,
          color: `${(props) => props.theme.colors.buttonText || '#fff'}`,
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
          cursor: 'pointer',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
        onClick={handleCheckout}
      >
        {buttonLabel}
      </selectedStyle.CheckoutButton>
    </div>
  );
});

export default TotalCardTypeE;
