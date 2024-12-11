import React from 'react';
import { observer } from "mobx-react-lite";
import { styles } from '../../../../theme/AllStyles';
import { useAdminContext } from '../../../../theme/AdminContext';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const OrderListCardTypeB = ({ viewModel }) => {
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

export default observer(OrderListCardTypeB);

const LoadingMessage = styled.p`
    text-align: center;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.textMuted };
    margin: 20px 0;
`;

const TableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px;
    background-color: ${(props) => props.theme.colors.wrapperBackground };
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const TableEmptyMessage = styled.div`
    text-align: center;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.textMuted };
`;

const OrderCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props) => props.theme.colors.cardBackground};
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border: 1px solid ${(props) => props.theme.colors.border};
    margin-bottom: 15px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

const OrderDetails = styled.div`
    flex: 2;

    @media (max-width: 768px) {
        margin-bottom: 10px;
    }
`;

const OrderTitle = styled.p`
    margin: 0;
    font-weight: bold;
`;

const OrderDate = styled.p`
    margin: 5px 0 0;
    color: ${(props) => props.theme.colors.textMuted };
`;

const OrderStatus = styled.span`
    flex: 1;
    text-align: center;
    padding: 5px 10px;
    border-radius: 12px;
    background-color: ${(props) => props.theme.colors.successBackground };
    color: ${(props) => props.theme.colors.successText};
    font-weight: bold;

    @media (max-width: 768px) {
        margin-bottom: 10px;
    }
`;

const OrderAmount = styled.div`
    flex: 1;
    text-align: center;
    font-weight: bold;

    @media (max-width: 768px) {
        margin-bottom: 10px;
    }
`;

const ViewButton = styled.button`
    flex: 1;
    text-align: center;
    background-color: ${(props) => props.theme.colors.buttonBackground};
    color: ${(props) => props.theme.colors.colorText};
    padding: 8px 12px;
    border-radius: 6px;
    font-size: 0.9rem;
    font-weight: bold;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: ${(props) => props.theme.colors.buttonHover};
    }

    @media (max-width: 768px) {
        align-self: stretch;
    }
`;
