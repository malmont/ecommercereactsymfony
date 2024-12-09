import React from "react";
import { observer } from "mobx-react-lite";
import { styles } from "../../../../theme/AllStyles";
import { useAdminContext } from "../../../../theme/AdminContext";
import { useNavigate } from "react-router-dom";
import styled, { useTheme } from "styled-components";

const OrderListCardTypeE = ({ viewModel }) => {
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
          <OrderCard
            key={`${order.id}-${index}`}
            onClick={() =>
              navigate(`/order/${order.id}`, {
                state: { order: JSON.parse(JSON.stringify(order)) },
              })
            }
          >
            <OrderDetails>
              <OrderTitle>Order: {order.reference}</OrderTitle>
              <OrderDate>Date: {new Date(order.orderDate).toLocaleDateString()}</OrderDate>
              <OrderStatus>Status: Completed</OrderStatus>
              <OrderTotal>Total: ${(order.totalAmount / 100).toFixed(2)}</OrderTotal>
            </OrderDetails>
            <ViewDetailsButton
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/order/${order.id}`, {
                  state: { order: JSON.parse(JSON.stringify(order)) },
                });
              }}
            >
              View Details
            </ViewDetailsButton>
          </OrderCard>
        ))
      ) : (
        <EmptyMessage as={selectedStyle.TableEmptyMessage}>No orders found.</EmptyMessage>
      )}
    </TableWrapper>
  );
};

export default observer(OrderListCardTypeE);

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
  background: ${(props) => props.theme.colors.objectBackground || "#f9f9f9"};
  border-radius: 12px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    padding: 15px;
  }
`;

const OrderCard = styled.div`
  background: ${(props) => props.theme.colors.cardBackground || "#ffffff"};
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const OrderDetails = styled.div`
  margin-bottom: 15px;
`;

const OrderTitle = styled.div`
  margin-bottom: 10px;
  font-weight: bold;
`;

const OrderDate = styled.div`
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.textColor || "#6c757d"};
  font-size: 0.9rem;
`;

const OrderStatus = styled.div`
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.successBackground || "#28a745"};
  font-weight: bold;
`;

const OrderTotal = styled.div`
  margin-bottom: 15px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.textColor || "#2c3e50"};
`;

const ViewDetailsButton = styled.button`
  background: ${(props) => props.theme.colors.buttonBackground || "#007bff"};
  color: ${(props) => props.theme.colors.buttonText || "#ffffff"};
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.colors.buttonHover || "#0056b3"};
  }
`;

const EmptyMessage = styled.p`
  grid-column: 1 / -1;
  text-align: center;
  color: ${(props) => props.theme.colors.textMuted || "#6c757d"};
  padding: 20px;
  font-style: italic;
  background: ${(props) => props.theme.colors.emptyMessageBackground || "#ffffff"};
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 15px;
  }
`;
