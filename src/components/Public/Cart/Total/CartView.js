import React from 'react';
import styled from "styled-components";
import ContainerTypeTotalCard from '../../../../theme/ThemeContainer/ContainerTypeTotalCard';
import { observer } from "mobx-react-lite";
import { useDependencies } from '../../../../DependencyContext';
import { useNavigate } from 'react-router-dom';
import ContainerTypeCartItemCard from '../../../../theme/ThemeContainer/ContainerTypeCartItemCard';

const CartView = observer(() => {
  const { cartViewModel } = useDependencies();
  const handleCheckout = async () => {
    if (!cartViewModel.user) {
      navigate('/login');
    } else {
      try {
        // Sérialiser les données
        const serializedCart = JSON.stringify(cartViewModel.cart);
        const totalPrice = cartViewModel.totalPriceWithTax;
  
        navigate('/CheckoutPage', { 
          state: { 
            cart: serializedCart, 
            totalPrice 
          } 
        });
      } catch (error) {
        console.error("Erreur lors de la navigation vers la page de récapitulatif", error);
      }
    }
  };
  
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div className="cart card">
        <div className="cart__left">
          <div className="card-header row justify-content-between">
            <div className="col-12 col-md-8">
              <h3>Shopping Cart</h3>
              {cartViewModel.cart?.map((item) => (
               <ContainerTypeCartItemCard
               key={item.variantId} 
               id={item.id}
               image={item.image}
               title={item.title}
               price={item.price}
               quantity={item.quantity}
               color={item.color}
               colorHex={item.colorHex}
               size={item.size}
               variantId={item.variantId}
               showButtons={true} 
             />
              ))}
            </div>
            <div className="col-12 col-md-4 row align-items-end">
            <ContainerTypeTotalCard handleCheckout={handleCheckout} buttonLabel="Proceed to checkOut" />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
});

const Wrapper = styled.div`
.cart {
  display: flex;
  margin: 30px auto;
  height: max-content;
  padding: 20px 20px 0 20px;
  gap: 20px;
  flex: 1;
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
    flex-direction: column;
    margin: unset;
  }

  .cart__left {
    width: 100%;
  }

  .card-header {
    flex-direction: column;
  }

  .col-4, .col-8, .col-12 {
    width: 100%;
  }

  .row {
    flex-direction: column;
  }
}

@media(max-width: 500px) {
  .cart__left h3 {
    font-size: 24px;
  }
}
`;

export default CartView;
