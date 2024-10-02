import React from 'react';
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import { useDependencies } from '../../../../DependencyContext';

const CartItemView = observer(({ id, image, title, price, quantity = 0, color, size, colorHex, variantId, showButtons }) => {
  const { cartViewModel } = useDependencies();

  return (
    <Wrapper>
      <div className="cartItem">
        <img className="cartItem__image" src={image} alt='item' />
        <div className="cartItem__info">
          <p className="cartItem__title">{title}</p>

          <div className="cartItem__variantInfo">
            {colorHex && <ColorCircle color={colorHex} />}
            {size && <SizeCircle>{size.charAt(0)}</SizeCircle>} 
          </div>

          <p className="cartItem__price">
            <strong>{(price / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</strong>
          </p>

          {showButtons ? (
            <>
              <button
                className="cartItem__removeButton"
                onClick={() => cartViewModel.removeItem(variantId)}>
                Remove
              </button>
              <div className="cartItem__incrDec">
                <button onClick={() => cartViewModel.decrementQuantity(variantId)}>-</button>
                <p>{quantity}</p>
                <button onClick={() => cartViewModel.incrementQuantity(variantId)}>+</button>
              </div>
            </>
          ) : (
            <p className="cartItem__quantity">Nombre d'items: {quantity}</p> // Affiche le nombre d'items * 3
          )}
        </div>
      </div>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  .cartItem {
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid gainsboro;
    padding-bottom: 20px;
  }

  .cartItem:last-child {
    border-bottom: none;
  }

  .cartItem__info {
    padding-left: 20px;
  }

  .cartItem__info > button {
    border: unset;
    margin-top: 10px;
    border-radius: 5px;
    background-color: transparent;
  }

  .cartItem__image {
    object-fit: contain;
    width: 180px;
    height: 180px;
  }

  .cartItem__title {
    font-size: 20px;
    font-weight: 450;
  }

  .cartItem__price {
    font-size: 20px;
    line-height: 35px;
  }

  .cartItem__variantInfo {
    display: flex;
    gap: 10px;
    margin-top: 10px;
    align-items: center;
  }

  .cartItem__incrDec {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    width: 100px;
  }

  .cartItem__incrDec button {
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: gainsboro;
    border: none;
    border-radius: 100px;
  }

  .cartItem__incrDec button:hover {
    box-shadow: 0 2px 2px gray;
  }

  .cartItem__removeButton {
    color: rgb(241, 131, 131);
  }

  .cartItem__removeButton:hover {
    color: rgb(243, 92, 92);
  }

  @media(max-width: 1000px) {
    .cartItem__title {
      font-size: 18px;
    }

    .cartItem__price {
      font-size: 18px;
    }
  }

  @media(max-width:400px) {
    .cartItem {
      flex-direction: column;
    }

    .cartItem__title {
      margin-top: 15px;
    }
  }
`;

const ColorCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const SizeCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
`;

export default CartItemView;
