import React from 'react';
import styled from "styled-components";
import ContainerTypeTotalCard from '../../../../theme/ThemeContainer/ContainerTypeTotalCard';
import { observer } from "mobx-react-lite";
import { useDependencies } from '../../../../DependencyContext';
import ContainerTypeCartItemCard from '../../../../theme/ThemeContainer/ContainerTypeCartItemCard';

const ResumeCartView = observer(() => {
  const { cartViewModel } = useDependencies();

  return (
    <Wrapper>
      <div className="cart">
        <div className="cart__left">
          <div>
            <h5>Shopping Cart</h5>
            {cartViewModel.cart?.map((item) => (
              <ContainerTypeCartItemCard
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                quantity={item.quantity}
              />
            ))}
          </div>
          <div className="cart__rih">
            <ContainerTypeTotalCard />
          </div>
        </div>
      </div>
    </Wrapper>
  );
});

const Wrapper = styled.div`
.cart {
  display: flex;
  margin: 20px ;
  height: max-content;
  padding: 10px 10px 0 10px;
  gap: 20px;
  flex: 1;
  width: 650px;
}

.cart__left {
  padding: 20px;
  width: 100%;
  background-color: white;
}

.cart__left h3 {
  font-size: 32px;
  font-weight: 450;
  padding-bottom: 20px;
  border-bottom: 1px solid gainsboro;
}

.cart__title {
  margin-right: 10px;
  padding: 10px;
  border-bottom: 1px solid lightgray;
}

@media(max-width: 800px) {
  .cart {
    display: none;
  }

  
}
`;

export default ResumeCartView;
