import React from 'react';
import { observer } from "mobx-react-lite";
import { useDependencies } from '../../../../../DependencyContext';
import { styles } from '../../../../../theme/AllStyles';
import { useAdminContext } from '../../../../../theme/AdminContext';

const CartItemCardTypeA = observer(({ id, image, title, price, quantity = 0, color, size, colorHex, variantId, showButtons }) => {
  const { cartViewModel } = useDependencies();
  const { styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice] ; 
  return (
    <selectedStyle.CartItemContainer>
      <selectedStyle.CartItem>
        <selectedStyle.CartItemImage src={image} alt='item' />
        <selectedStyle.CartItemInfo>
          <selectedStyle.CartItemTitle>{title}</selectedStyle.CartItemTitle>

          <selectedStyle.CartItemVariantInfo>
            {colorHex && <selectedStyle.ColorCircle color={colorHex} />}
            {size && <selectedStyle.SizeCircle>{size.charAt(0)}</selectedStyle.SizeCircle>}
          </selectedStyle.CartItemVariantInfo>
          <div ></div>
          <selectedStyle.CartItemPrice>
            <strong >{(price / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</strong>
          </selectedStyle.CartItemPrice>

          {showButtons ? (
            <>
              <selectedStyle.CartItemButton
                onClick={() => cartViewModel.removeItem(variantId)}>
                Supprimer
              </selectedStyle.CartItemButton>
              <selectedStyle.CartItemIncrDec>
                <selectedStyle.IncrDecButton onClick={() => cartViewModel.decrementQuantity(variantId)}>-</selectedStyle.IncrDecButton>
                <p>{quantity}</p>
                <selectedStyle.IncrDecButton onClick={() => cartViewModel.incrementQuantity(variantId)}>+</selectedStyle.IncrDecButton>
              </selectedStyle.CartItemIncrDec>
            </>
          ) : (
            <selectedStyle.CartItemQuantity>Nombre d'items: {quantity}</selectedStyle.CartItemQuantity>
          )}
        </selectedStyle.CartItemInfo>
      </selectedStyle.CartItem>
    </selectedStyle.CartItemContainer>
  );
});

export default CartItemCardTypeA;
