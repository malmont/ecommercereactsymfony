import React from 'react';
import { useLocation } from 'react-router-dom'; 
import styled from 'styled-components';
import { useDependencies } from '../../../DependencyContext';

const Order = () => {
  const location = useLocation();
  const { order } = location.state || {}; 
 console.log(location);
  const { addressListViewModel } = useDependencies();
  const address = addressListViewModel.getAddressById(order?.shippingAdress);

  if (!order) {
    return <p>No order data available.</p>;
  }

  return (
    <OrderWrapper>
      <OrderHeader>
        <h2>Order Reference: {order.reference}</h2>
        <p>Order Date: {new Date(order.orderDate).toLocaleDateString()}</p>
        <p>Total Amount: ${(order.totalAmount / 100).toFixed(2)}</p>
        <p>Order Source: {order.orderSource}</p>
        <p>Shipping Address: {address?.fullname}, {address?.addressLineOne}, {address?.city}</p>
      </OrderHeader>

      <OrderItems>
        <h3>Order Items</h3>
        {order.orderItems.map((item) => (
          <OrderItem key={item.id}>
            <ProductImage src={item.productImage} alt={item.productVariantName} />
            <ItemDetails>
              <h4>{item.productVariantName}</h4>
              <p>Quantity: {item.quantity}</p>
              <p>Unit Price: ${(item.unitPrice / 100).toFixed(2)}</p>
              <p>Total Price: ${(item.totalPrice / 100).toFixed(2)}</p>
            </ItemDetails>
          </OrderItem>
        ))}
      </OrderItems>
    </OrderWrapper>
  );
};

const OrderWrapper = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  margin: 20px;
`;

const OrderHeader = styled.div`
  margin-bottom: 20px;

  h2 {
    margin-bottom: 10px;
  }

  p {
    margin: 5px 0;
  }
`;

const OrderItems = styled.div`
  margin-top: 20px;

  h3 {
    margin-bottom: 15px;
  }
`;

const OrderItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 20px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const ItemDetails = styled.div`
  h4 {
    margin-bottom: 5px;
    font-size: 18px;
  }

  p {
    margin: 2px 0;
  }
`;

export default Order;
