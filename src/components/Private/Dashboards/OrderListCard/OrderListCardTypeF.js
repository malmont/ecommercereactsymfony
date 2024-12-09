import React from "react";
import { observer } from "mobx-react-lite";
import { styles } from "../../../../theme/AllStyles";
import { useAdminContext } from "../../../../theme/AdminContext";
import { useNavigate } from "react-router-dom";
import styled, { useTheme } from "styled-components";

const OrderListCardTypeF = ({ viewModel }) => {
  const { orders, loading } = viewModel;
  const navigate = useNavigate();
  const { styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice];
  const theme = useTheme();

  if (loading) {
    return <LoadingMessage>Loading orders...</LoadingMessage>;
  }

  return (
    <TableWrapper as={selectedStyle.TableWrapper}>
      {orders.length > 0 ? (
        orders.map((order, index) => (
          <OrderCard key={`${order.id}-${index}`}>
            {/* Timeline Connector */}
            {index !== orders.length - 1 && <TimelineConnector />}
            
            {/* Timeline Dot */}
            <TimelineDot>{index + 1}</TimelineDot>

            {/* Order Content */}
            <OrderContent>
              <OrderTitle>Order: {order.reference}</OrderTitle>
              <OrderDate>Date: {new Date(order.orderDate).toLocaleDateString()}</OrderDate>
              <OrderStatus>Status: Completed</OrderStatus>
              <OrderTotal>Total: ${(order.totalAmount / 100).toFixed(2)}</OrderTotal>
              <ViewDetailsButton
                onClick={() =>
                  navigate(`/order/${order.id}`, {
                    state: { order: JSON.parse(JSON.stringify(order)) },
                  })
                }
              >
                View Details
              </ViewDetailsButton>
            </OrderContent>
          </OrderCard>
        ))
      ) : (
        <EmptyMessage as={selectedStyle.TableEmptyMessage}>No orders found.</EmptyMessage>
      )}
    </TableWrapper>
  );
};

export default observer(OrderListCardTypeF);

// Styled Components
const LoadingMessage = styled.p`
  text-align: center;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.textMuted || "#6c757d"};
`;

const TableWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 20px;
  padding: 20px;
  background: ${(props) => props.theme.colors.objectBackground || "#f7f9fc"};
  border-radius: 12px;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const OrderCard = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  gap: 20px;
  background: ${(props) => props.theme.colors.cardBackground || "#ffffff"};
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const TimelineConnector = styled.div`
  position: absolute;
  top: 0;
  left: 30px;
  width: 2px;
  height: 100%;
  background: ${(props) => props.theme.colors.border };
`;

const TimelineDot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.subtitleText };
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-weight: bold;
  position: relative;
  z-index: 1;
`;

const OrderContent = styled.div`
  flex: 1;
`;

const OrderTitle = styled.div`
  font-weight: bold;
  color: ${(props) => props.theme.colors.subtitleText };
  margin-bottom: 8px;
`;

const OrderDate = styled.div`
  color: ${(props) => props.theme.colors.textColor };
  font-size: 0.9rem;
  margin-bottom: 8px;
`;

const OrderStatus = styled.div`
  color: ${(props) => props.theme.colors.successBackground || "#28a745"};
  font-weight: bold;
  margin-bottom: 8px;
`;

const OrderTotal = styled.div`
  font-weight: bold;
  color: ${(props) => props.theme.colors.textColor };
  margin-bottom: 15px;
`;

const ViewDetailsButton = styled.button`
  background: ${(props) => props.theme.colors.buttonBackground };
  color: ${(props) => props.theme.colors.buttonText };
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.colors.buttonHover};
  }
`;

const EmptyMessage = styled.p`
  grid-column: 1 / -1;
  text-align: center;
  color: ${(props) => props.theme.colors.textMuted };
  padding: 20px;
  font-style: italic;
`;
