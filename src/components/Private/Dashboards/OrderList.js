import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { observer } from "mobx-react-lite";

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
                        <div className="table-wrapper">
                            <table className="responsive-table">
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
  .table-wrapper {
    overflow-x: auto;
  }

  .responsive-table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;

    th, td {
      text-align: left;
      padding: 8px;
      border: 1px solid #dee2e6;
    }

    th {
      background-color: #f8f9fa;
    }

    @media (max-width: 768px) {
      thead {
        display: none;
      }

      tr {
        display: block;
        margin-bottom: 10px;
        border-bottom: 2px solid #dee2e6;
      }

      td {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        text-align: left;
        border: none;
        border-bottom: 1px solid #dee2e6;
      }

      td::before {
        content: attr(data-label);
        font-weight: bold;
        color: #495057;
        flex-basis: 50%;
        text-align: left;
      }

      td:last-child {
        border-bottom: none;
      }
    }
  }
`;

export default observer(OrderList);
