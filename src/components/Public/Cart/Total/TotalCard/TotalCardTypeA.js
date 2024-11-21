import React from 'react';
import { observer } from "mobx-react-lite";
import { useDependencies } from '../../../../../DependencyContext';
import { styles } from '../../../../../theme/AllStyles';
import { useAdminContext } from '../../../../../theme/AdminContext';

const TotalCardTypeA = observer(({ handleCheckout, buttonLabel = 'Proceed to Checkout' }) => {
  const { cartViewModel } = useDependencies();
  const { styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice];

  return (
    <selectedStyle.OrderSummaryContainer>
      {/* Title */}
      <selectedStyle.OrderSummaryTitle>Orders Summary</selectedStyle.OrderSummaryTitle>
      
      <selectedStyle.Divider />

      {/* Subtotal */}
      <selectedStyle.OrderSummaryRow>
        <selectedStyle.OrderSummaryText>
          Cart Subtotal HT ({cartViewModel.totalQuantity} items)
        </selectedStyle.OrderSummaryText>
        <selectedStyle.OrderSummaryHighlight>
          {((cartViewModel.totalPrice) / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </selectedStyle.OrderSummaryHighlight>
      </selectedStyle.OrderSummaryRow>

      <selectedStyle.Divider />

      {/* Tax */}
      <selectedStyle.OrderSummaryRow>
        <selectedStyle.OrderSummaryText>Taxe (20%)</selectedStyle.OrderSummaryText>
        <selectedStyle.OrderSummaryHighlight>
          {((cartViewModel.totalPrice * 0.2) / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </selectedStyle.OrderSummaryHighlight>
      </selectedStyle.OrderSummaryRow>

      <selectedStyle.Divider />

      {/* Shipping */}
      <selectedStyle.OrderSummaryRow>
        <selectedStyle.OrderSummaryText>Shipping</selectedStyle.OrderSummaryText>
        <selectedStyle.OrderSummaryHighlight>free shipping</selectedStyle.OrderSummaryHighlight>
      </selectedStyle.OrderSummaryRow>

      <selectedStyle.Divider />

      {/* Total */}
      <selectedStyle.OrderSummaryRow>
        <selectedStyle.OrderSummaryText>Total TTC</selectedStyle.OrderSummaryText>
        <selectedStyle.OrderSummaryHighlight>
          {((cartViewModel.totalPriceWithTax) / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </selectedStyle.OrderSummaryHighlight>
      </selectedStyle.OrderSummaryRow>

      {/* Checkout Button */}
      <selectedStyle.CheckoutButton onClick={handleCheckout}>
        {buttonLabel}
      </selectedStyle.CheckoutButton>
    </selectedStyle.OrderSummaryContainer>
  );
});

export default TotalCardTypeA;
