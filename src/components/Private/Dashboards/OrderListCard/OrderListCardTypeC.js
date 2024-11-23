import React from 'react';
import { observer } from "mobx-react-lite";
import { styles } from '../../../../theme/AllStyles';
import { useAdminContext } from '../../../../theme/AdminContext';
import { useNavigate } from 'react-router-dom';

const OrderListCardTypeC = ({ viewModel }) => {
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
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "20px",
                padding: "20px",
                backgroundColor: "#f8f9fa",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}
        >
            {orders.length > 0 ? (
                orders.map((order, index) => (
                    <div
                        key={`${order.id}-${index}`}
                        style={{
                            backgroundColor: "#ffffff",
                            border: "1px solid #dee2e6",
                            borderRadius: "12px",
                            padding: "15px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                            transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.03)";
                            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.1)";
                        }}
                    >
                        <div>
                            <p style={{ fontWeight: "bold", marginBottom: "10px", fontSize: "1.1rem" }}>
                                Order: {order.reference}
                            </p>
                            <p style={{ color: "#6c757d", marginBottom: "10px" }}>
                                Date: {new Date(order.orderDate).toLocaleDateString()}
                            </p>
                        </div>
                        <div>
                            <p
                                style={{
                                    display: "inline-block",
                                    padding: "5px 10px",
                                    borderRadius: "8px",
                                    backgroundColor: "#d4edda",
                                    color: "#155724",
                                    fontWeight: "bold",
                                    fontSize: "0.9rem",
                                }}
                            >
                                Completed
                            </p>
                        </div>
                        <div
                            style={{
                                fontWeight: "bold",
                                fontSize: "1.2rem",
                                color: "#343a40",
                                margin: "10px 0",
                            }}
                        >
                            ${((order.totalAmount / 100) || 0).toFixed(2)}
                        </div>
                        <selectedStyle.TableButton
                            style={{
                                alignSelf: "flex-end",
                                backgroundColor: "#007bff",
                                color: "#fff",
                                padding: "8px 12px",
                                borderRadius: "6px",
                                fontSize: "0.9rem",
                                fontWeight: "bold",
                                transition: "background-color 0.3s ease",
                            }}
                            onClick={() => {
                                const plainOrder = JSON.parse(JSON.stringify(order));
                                navigate(`/order/${order.id}`, { state: { order: plainOrder } });
                            }}
                        >
                            View Details
                        </selectedStyle.TableButton>
                    </div>
                ))
            ) : (
                <selectedStyle.TableEmptyMessage
                    style={{
                        textAlign: "center",
                        color: "#6c757d",
                        padding: "20px",
                        backgroundColor: "#ffffff",
                        borderRadius: "12px",
                        fontStyle: "italic",
                        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    No orders found.
                </selectedStyle.TableEmptyMessage>
            )}
        </selectedStyle.TableWrapper>
    );
};

export default observer(OrderListCardTypeC);
