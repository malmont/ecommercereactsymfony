import React from "react";
import { observer } from "mobx-react-lite";
import { styles } from "../../../../theme/AllStyles";
import { useAdminContext } from "../../../../theme/AdminContext";
import { useNavigate } from "react-router-dom";
import { useTheme } from 'styled-components';

const OrderListCardTypeE = ({ viewModel }) => {
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
        background: theme.colors.objectBackground,
        borderRadius: "12px",
      }}
    >
      {orders.length > 0 ? (
        orders.map((order, index) => (
          <div
            key={`${order.id}-${index}`}
            style={{
              background: "#ffffff",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
            }}
            onClick={() =>
              navigate(`/order/${order.id}`, {
                state: { order: JSON.parse(JSON.stringify(order)) },
              })
            }
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 8px 16px rgba(0, 0, 0, 0.2)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 4px 8px rgba(0, 0, 0, 0.1)")
            }
          >
            <div style={{ marginBottom: "10px", fontWeight: "bold" }}>
              Order: {order.reference}
            </div>
            <div
              style={{
                marginBottom: "10px",
                color: theme.colors.textColor,
                fontSize: "0.9rem",
              }}
            >
              Date: {new Date(order.orderDate).toLocaleDateString()}
            </div>
            <div
              style={{
                marginBottom: "10px",
                color: theme.colors.successBackground,
                fontWeight: "bold",
              }}
            >
              Status: Completed
            </div>
            <div
              style={{
                marginBottom: "15px",
                fontWeight: "bold",
                color: theme.colors.textColor,
              }}
            >
              Total: ${(order.totalAmount / 100).toFixed(2)}
            </div>
            <selectedStyle.TableButton
              style={{
                background: theme.colors.buttonBackground,
                color: "#ffffff",
                padding: "10px 20px",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "background 0.3s ease",
              }}
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/order/${order.id}`, {
                  state: { order: JSON.parse(JSON.stringify(order)) },
                });
              }}
            >
              View Details
            </selectedStyle.TableButton>
          </div>
        ))
      ) : (
        <selectedStyle.TableEmptyMessage
          style={{
            gridColumn: "1 / -1",
            textAlign: "center",
            color: "#6c757d",
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

export default observer(OrderListCardTypeE);
