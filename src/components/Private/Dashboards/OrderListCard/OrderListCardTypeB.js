import React from 'react';
import { observer } from "mobx-react-lite";
import { styles } from '../../../../theme/AllStyles';
import { useAdminContext } from '../../../../theme/AdminContext';
import { useNavigate } from 'react-router-dom';

const OrderListCardTypeB = ({ viewModel }) => {
    const { orders, loading } = viewModel;
    const navigate = useNavigate();
    const { styleChoice } = useAdminContext();
    const selectedStyle = styles[styleChoice];

    if (loading) {
        return <p>Loading orders...</p>;
    }

    return (
        <selectedStyle.TableWrapper
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                padding: "20px",
                backgroundColor: "#f9f9f9",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}
        >
            {orders.length > 0 ? (
                orders.map((order, index) => (
                    <div
                        key={`${order.id}-${index}`}
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            backgroundColor: "#ffffff",
                            padding: "15px",
                            borderRadius: "8px",
                            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                            border: "1px solid #dee2e6",
                        }}
                    >
                        <div style={{ flex: 2 }}>
                            <p style={{ margin: 0, fontWeight: "bold" }}>
                                Order: {order.reference}
                            </p>
                            <p style={{ margin: "5px 0 0", color: "#6c757d" }}>
                                Date: {new Date(order.orderDate).toLocaleDateString()}
                            </p>
                        </div>
                        <div style={{ flex: 1, textAlign: "center" }}>
                            <span
                                style={{
                                    padding: "5px 10px",
                                    borderRadius: "12px",
                                    backgroundColor: "#d4edda",
                                    color: "#155724",
                                    fontWeight: "bold",
                                }}
                            >
                                Completed
                            </span>
                        </div>
                        <div style={{ flex: 1, textAlign: "center", fontWeight: "bold" }}>
                            ${((order.totalAmount / 100) || 0).toFixed(2)}
                        </div>
                        <div style={{ flex: 1, textAlign: "right" }}>
                            <selectedStyle.TableButton
                                style={{
                                    backgroundColor: "#007bff",
                                    color: "#fff",
                                    padding: "8px 12px",
                                    borderRadius: "6px",
                                    fontSize: "0.9rem",
                                    fontWeight: "bold",
                                }}
                                onClick={() => {
                                    const plainOrder = JSON.parse(JSON.stringify(order));
                                    navigate(`/order/${order.id}`, { state: { order: plainOrder } });
                                }}
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
                        color: "#6c757d",
                        padding: "20px",
                        backgroundColor: "#f8f9fa",
                        borderRadius: "8px",
                        fontStyle: "italic",
                    }}
                >
                    No orders found.
                </selectedStyle.TableEmptyMessage>
            )}
        </selectedStyle.TableWrapper>
    );
};

export default observer(OrderListCardTypeB);
