import React from 'react';
import { observer } from "mobx-react-lite";
import { styles } from '../../../../theme/AllStyles';
import { useAdminContext } from '../../../../theme/AdminContext';
import { useNavigate } from 'react-router-dom';

const OrderListCardTypeA = ({ viewModel }) => {
    const { orders, loading } = viewModel;
    const navigate = useNavigate();
    const { styleChoice } = useAdminContext();
const selectedStyle = styles[styleChoice];

    if (loading) {
        return <p>Loading orders...</p>;
    }

    return (
        <selectedStyle.TableWrapper>
  
            <div>
                {orders.length > 0 ? (
                    <selectedStyle.ResponsiveTable>
                        <thead>
                            <tr>
                                <th>Order</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Total</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, index) => (
                                <tr key={`${order.id}-${index}`}>
                                    <td data-label="Order">{order.reference}</td>
                                    <td data-label="Date">{new Date(order.orderDate).toLocaleDateString()}</td>
                                    <td data-label="Status">Completed</td>
                                    <td data-label="Total">${(order.totalAmount / 100).toFixed(2)}</td>
                                    <td data-label="Actions">
                                        <selectedStyle.TableButton
                                              onClick={() => {
                                                const plainOrder = JSON.parse(JSON.stringify(order));
                                                navigate(`/order/${order.id}`, { state: { order: plainOrder } });
                                            }}>
                                            View
                                        </selectedStyle.TableButton>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </selectedStyle.ResponsiveTable>
                ) : (
                    <selectedStyle.TableEmptyMessage>No orders found.</selectedStyle.TableEmptyMessage>
                )}
            </div>
        </selectedStyle.TableWrapper>
    );
};

export default observer(OrderListCardTypeA);
