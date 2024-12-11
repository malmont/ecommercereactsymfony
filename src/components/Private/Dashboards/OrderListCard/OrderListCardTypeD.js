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
        return <LoadingMessage>Loading orders...</LoadingMessage>;
    }

    return (
        <selectedStyle.TableWrapper as={TableWrapper}>
            {orders.length > 0 ? (
                <OrderTable>
                    <thead>
                        <TableHeaderRow>
                            <TableHeader>Order</TableHeader>
                            <TableHeader>Date</TableHeader>
                            <TableHeader>Status</TableHeader>
                            <TableHeader>Total</TableHeader>
                        </TableHeaderRow>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <TableRow
                                key={`${order.id}-${index}`}
                                onClick={() => {
                                    const plainOrder = JSON.parse(JSON.stringify(order));
                                    navigate(`/order/${order.id}`, { state: { order: plainOrder } });
                                }}
                            >
                                <TableCell>{order.reference}</TableCell>
                                <TableCell>{new Date(order.orderDate).toLocaleDateString()}</TableCell>
                                <TableCell>Completed</TableCell>
                                <TableCell>${(order.totalAmount / 100).toFixed(2)}</TableCell>
                            </TableRow>
                        ))}
                    </tbody>
                </OrderTable>
            ) : (
                <EmptyMessage>No orders found.</EmptyMessage>
            )}
        </selectedStyle.TableWrapper>
    );
};

export default observer(OrderListCardTypeD);

// Styled Components
const LoadingMessage = styled.p`
    text-align: center;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.navItemTitle || "#6c757d"};
`;

const TableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    gap: 20px;
    padding: 20px;
    background-color: ${(props) => props.theme.colors.wrapperBackground || "#f8f9fa"};
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    margin-left: 100px;
    @media (max-width: 1024px) {
        width: 90%;
    }

    @media (max-width: 768px) {
        width: 100%;
        padding: 15px;
        margin-left: 0;
    }
`;

const OrderTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    text-align: left;
`;

const TableHeaderRow = styled.tr`
    background-color: ${(props) => props.theme.colors.tableHeaderBackground || "#f8f9fa"};
    border-bottom: 2px solid ${(props) => props.theme.colors.border || "#dee2e6"};

    @media (max-width: 768px) {
        display: none;
    }
`;

const TableHeader = styled.th`
    padding: 12px;
    font-size: 1rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.tableHeaderText || "#343a40"};

    @media (max-width: 768px) {
        padding: 8px;
        font-size: 0.9rem;
    }
`;

const TableRow = styled.tr`
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${(props) => props.theme.colors.selectHover};
        border-radius: 12px;
    }

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
`;

const TableCell = styled.td`
    padding: 12px;
    color: ${(props) => props.theme.colors.textPrimary || "#2c3e50"};

    &:nth-child(3) {
        color: ${(props) => props.theme.colors.successText || "#28a745"};
        font-weight: bold;
    }

    &:nth-child(4) {
        font-weight: bold;
    }

    @media (max-width: 768px) {
        padding: 8px;
        font-size: 0.9rem;
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
`;

const EmptyMessage = styled.p`
    text-align: center;
    color: ${(props) => props.theme.colors.textMuted || "#6c757d"};
    padding: 20px;
    font-style: italic;
    background-color: ${(props) => props.theme.colors.emptyMessageBackground || "#ffffff"};
    border-radius: 12px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        font-size: 0.9rem;
        padding: 15px;
    }
`;
