import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const OrderList = ({ viewModel }) => {
    const { orders, loading } = viewModel;
    const navigate = useNavigate();

    if (loading) {
        return <p>Loading orders...</p>;
    }

    return (
        <Wrapper>
            <div className="card">
                <div className="card-header bg-dark text-white">
                    <h3>Orders</h3>
                </div>
                <div className="card-body">
                    {orders.length > 0 ? (
                        <div className="table-responsive">
                            <table className="table table-striped table-hover">
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
                                    {orders.map((order) => (
                                        <tr key={order.id}>
                                            <td>{order.reference}</td>
                                            <td>{new Date(order.orderDate).toLocaleDateString()}</td>
                                            <td>Completed</td>
                                            <td>${(order.totalAmount / 100).toFixed(2)}</td>
                                            <td>
                                                <button
                                                    className="btn btn-dark"
                                                    onClick={() => {
                                                        const plainOrder = JSON.parse(JSON.stringify(order));
                                                        navigate(`/order/${order.id}`, { state: { order: plainOrder } });
                                                    }}>
                                                    View
                                                </button>

                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <p>Sorry, you have not yet placed an order.</p>
                    )}
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  // Style inchangé
`;

export default OrderList;
