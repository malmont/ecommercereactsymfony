import React from "react";
import { observer } from "mobx-react-lite";
import { styles } from "../../../../theme/AllStyles";
import { useAdminContext } from "../../../../theme/AdminContext";
import { useNavigate } from "react-router-dom";
import { useTheme } from 'styled-components';

const OrderListCardTypeF = ({ viewModel }) => {
  const { orders, loading } = viewModel;
  const navigate = useNavigate();
  const { styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice];
  const theme = useTheme();
  if (loading) {
    return <p>Loading orders...</p>;
  }

  return (
    <selectedStyle.TableWrapper
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
        gap: "20px",
        padding: "2px",
        background: "#f7f9fc",
        borderRadius: "12px",
      }}
    >
      {orders.length > 0 ? (
        orders.map((order, index) => (
          <div
            key={`${order.id}-${index}`}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "20px",
              background: "#ffffff",
              padding: "15px",
              borderRadius: "12px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              width: "100%",
              maxWidth: "500px",
              position: "relative",
            }}
          >
            {/* Timeline Connector */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "30px",
                width: "2px",
                height: "100%",
                background: index !== orders.length - 1 ? "#dee2e6" : "transparent",
              }}
            ></div>

            {/* Timeline Dot */}
            <div
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                background: theme.colors.subtitleText,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                fontWeight: "bold",
                position: "relative",
                zIndex: 1,
              }}
            >
              {index + 1}
            </div>

            {/* Order Content */}
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontWeight: "bold",
                  color: theme.colors.subtitleText,
                  marginBottom: "8px",
                }}
              >
                Order: {order.reference}
              </div>
              <div
                style={{
                  color: theme.colors.textColor,
                  fontSize: "0.9rem",
                  marginBottom: "8px",
                }}
              >
                Date: {new Date(order.orderDate).toLocaleDateString()}
              </div>
              <div
                style={{
                  color: theme.colors.successBackground,
                  fontWeight: "bold",
                  marginBottom: "8px",
                }}
              >
                Status: Completed
              </div>
              <div
                style={{
                  fontWeight: "bold",
                  color: theme.colors.textColor,
                  marginBottom: "15px",
                }}
              >
                Total: ${(order.totalAmount / 100).toFixed(2)}
              </div>
              <selectedStyle.TableButton
                style={{
                  background: theme.colors.buttonBackground,
                  color: "#ffffff",
                  padding: "8px 16px",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  transition: "background 0.3s ease",
                }}
                onClick={() =>
                  navigate(`/order/${order.id}`, {
                    state: { order: JSON.parse(JSON.stringify(order)) },
                  })
                }
              >
                View Details
              </selectedStyle.TableButton>
            </div>
          </div>
        ))
      ) : (
        <selectedStyle.TableEmptyMessage
          style={{
            textAlign: "center",
            color: theme.colors.textColor,
            padding: "20px",
            fontStyle: "italic",
          }}
        >
          No orders found.
        </selectedStyle.TableEmptyMessage>
      )}
    </selectedStyle.TableWrapper>
  );
};

export default observer(OrderListCardTypeF);
