import React from 'react';
import { observer } from "mobx-react-lite";
import { styles } from '../../../../theme/AllStyles';
import { useAdminContext } from '../../../../theme/AdminContext';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const OrderListCardTypeD = ({ viewModel }) => {
    const { orders, loading } = viewModel;
    const navigate = useNavigate();
    const { styleChoice } = useAdminContext();
    const selectedStyle = styles[styleChoice];

    if (loading) {
        return <p>Loading orders...</p>;
    }

    return (
        <selectedStyle.TableWrapper as={TableWrapper}>
            {orders.length > 0 ? (
                <table
                    style={{
                        width: "100%",
                        borderCollapse: "collapse", 
                        textAlign: "left",
                    }}
                >
                    <thead>
                        <tr
                            style={{
                                backgroundColor: "#f8f9fa",
                                borderBottom: "2px solid #dee2e6",
                                fontSize: "1rem",
                                fontWeight: "bold",
                            }}
                        >
                            <th style={{ padding: "12px" }}>Order</th>
                            <th style={{ padding: "12px" }}>Date</th>
                            <th style={{ padding: "12px" }}>Status</th>
                            <th style={{ padding: "12px" }}>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr
                                key={`${order.id}-${index}`}
                                style={{
                                    cursor: "pointer",
                                    transition: "background-color 0.3s ease",
                                }}
                                onClick={() => {
                                    const plainOrder = JSON.parse(
                                        JSON.stringify(order)
                                    );
                                    navigate(`/order/${order.id}`, {
                                        state: { order: plainOrder },
                                    });
                                }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.backgroundColor =
                                        "#f1f3f5")
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.backgroundColor =
                                        "transparent")
                                }
                            >
                                <td style={{ padding: "12px", color: "#2c3e50" }}>
                                    {order.reference}
                                </td>
                                <td
                                    style={{
                                        padding: "12px",
                                        color: "#6c757d",
                                    }}
                                >
                                    {new Date(order.orderDate).toLocaleDateString()}
                                </td>
                                <td
                                    style={{
                                        padding: "12px",
                                        color: "#28a745",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Completed
                                </td>
                                <td
                                    style={{
                                        padding: "12px",
                                        color: "#2c3e50",
                                        fontWeight: "bold",
                                    }}
                                >
                                    ${(order.totalAmount / 100).toFixed(2)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <selectedStyle.TableEmptyMessage
                    style={{
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

export default observer(OrderListCardTypeD);

const TableWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  width: 70%;
  gap: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
       width: 100%
    }
`;