import React from 'react';
import { observer } from "mobx-react-lite";
import { styles } from '../../../../theme/AllStyles';
import { useAdminContext } from '../../../../theme/AdminContext';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const OrderListCardTypeC = ({ viewModel }) => {
    const { orders, loading } = viewModel;
    const navigate = useNavigate();
    const { styleChoice } = useAdminContext();
    const selectedStyle = styles[styleChoice];

    if (loading) {
        return <LoadingMessage>Chargement des commandes...</LoadingMessage>;
    }

    return (
        <selectedStyle.TableWrapper as={TableWrapper}>
            {orders.length > 0 ? (
                orders.map((order, index) => (
                    <OrderCard key={`${order.id}-${index}`}>
                        <OrderDetails>
                            <OrderTitle>Commande : {order.reference}</OrderTitle>
                            <OrderDate>Date : {new Date(order.orderDate).toLocaleDateString()}</OrderDate>
                        </OrderDetails>
                        <OrderStatus>Complétée</OrderStatus>
                        <OrderAmount>${((order.totalAmount / 100) || 0).toFixed(2)}</OrderAmount>
                        <ViewButton
                            onClick={() => {
                                const plainOrder = JSON.parse(JSON.stringify(order));
                                navigate(`/order/${order.id}`, { state: { order: plainOrder } });
                            }}
                        >
                            Voir Détails
                        </ViewButton>
                    </OrderCard>
                ))
            ) : (
                <selectedStyle.TableEmptyMessage as={TableEmptyMessage}>
                    Aucune commande trouvée.
                </selectedStyle.TableEmptyMessage>
            )}
        </selectedStyle.TableWrapper>
    );
};

export default observer(OrderListCardTypeC);

const LoadingMessage = styled.p`
    text-align: center;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.textMuted || "#6c757d"};
    margin: 20px 0;
`;

const TableWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    background-color: ${(props) => props.theme.colors.wrapperBackground || "#f8f9fa"};
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    padding: 10px;
`;

const TableEmptyMessage = styled.div`
    text-align: center;
    color: ${(props) => props.theme.colors.textMuted || "#6c757d"};
    padding: 20px;
    background-color: ${(props) => props.theme.colors.cardBackground || "#ffffff"};
    border-radius: 12px;
    font-style: italic;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const OrderCard = styled.div`
    background-color: ${(props) => props.theme.colors.cardBackground || "#ffffff"};
    border: 1px solid ${(props) => props.theme.colors.border || "#dee2e6"};
    border-radius: 12px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: scale(1.03);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }
`;

const OrderDetails = styled.div`
    margin-bottom: 10px;
`;

const OrderTitle = styled.p`
    font-weight: bold;
    margin: 0 0 10px 0;
    font-size: 1.1rem;
`;

const OrderDate = styled.p`
    margin: 0;
    color: ${(props) => props.theme.colors.textMuted || "#6c757d"};
`;

const OrderStatus = styled.span`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.colors.successBackground || "#d4edda"};
    color: ${(props) => props.theme.colors.successText || "#155724"};
    font-weight: bold;
    font-size: 0.9rem;
    margin-bottom: 10px;
`;

const OrderAmount = styled.div`
    font-weight: bold;
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.textPrimary || "#343a40"};
    margin: 10px 0;
`;

const ViewButton = styled.button`
    align-self: flex-end;
    background-color: ${(props) => props.theme.colors.buttonBackground || "#007bff"};
    color: ${(props) => props.theme.colors.buttonText || "#fff"};
    padding: 8px 12px;
    border-radius: 6px;
    font-size: 0.9rem;
    font-weight: bold;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${(props) => props.theme.colors.buttonHover || "#0056b3"};
    }
`;
