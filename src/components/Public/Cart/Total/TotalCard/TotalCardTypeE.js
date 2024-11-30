import React from 'react';
import { observer } from "mobx-react-lite";
import { useDependencies } from '../../../../../DependencyContext';
import { styles } from '../../../../../theme/AllStyles';
import { useAdminContext } from '../../../../../theme/AdminContext';
import styled from 'styled-components';

const TotalCardTypeE = observer(({ handleCheckout, buttonLabel = 'Place Order' }) => {
  const { cartViewModel } = useDependencies();
  const { styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice];

  return (
    <OrderSummaryContainer>
      <PositionedText top="20px" textAlign="center">
        <selectedStyle.OrderSummaryText>Subtotal:</selectedStyle.OrderSummaryText>
        <selectedStyle.OrderSummaryHighlight>
          {((cartViewModel.totalPrice) / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </selectedStyle.OrderSummaryHighlight>
      </PositionedText>

      <PositionedText left="20px" textAlign="center">
        <selectedStyle.OrderSummaryText>Tax:</selectedStyle.OrderSummaryText>
        <selectedStyle.OrderSummaryHighlight>
          {((cartViewModel.totalPrice * 0.2) / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </selectedStyle.OrderSummaryHighlight>
      </PositionedText>

      <PositionedText right="20px" textAlign="center">
        <selectedStyle.OrderSummaryText>Shipping:</selectedStyle.OrderSummaryText>
        <selectedStyle.OrderSummaryHighlight>Free</selectedStyle.OrderSummaryHighlight>
      </PositionedText>

      <PositionedText bottom="20px" textAlign="center">
        <selectedStyle.OrderSummaryText>Total:</selectedStyle.OrderSummaryText>
        <selectedStyle.OrderSummaryHighlight>
          {((cartViewModel.totalPriceWithTax) / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </selectedStyle.OrderSummaryHighlight>
      </PositionedText>

      <CheckoutButton onClick={handleCheckout}>
        {buttonLabel}
      </CheckoutButton>
    </OrderSummaryContainer>
  );
});

export default TotalCardTypeE;

const OrderSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 350px;
  height: 350px;
  background: ${(props) => props.theme.colors.cardBackground};
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin: 2rem auto;
  position: relative;

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 480px) {
    width: 250px;
    height: 250px;

  }
`;

const PositionedText = styled.div`
  position: absolute;
  top: ${(props) => props.top || 'unset'};
  left: ${(props) => props.left || 'unset'};
  right: ${(props) => props.right || 'unset'};
  bottom: ${(props) => props.bottom || 'unset'};
  text-align: ${(props) => props.textAlign || 'unset'};
`;

const CheckoutButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 25px;
  background: linear-gradient(135deg, ${(props) => props.theme.colors.buttonHover }, ${(props) => props.theme.colors.buttonBackground});
  color: ${(props) => props.theme.colors.buttonText || '#fff'};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translate(-50%, -50%) scale(1.05);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
    padding: 0.7rem 0.6rem;
  }
`;
