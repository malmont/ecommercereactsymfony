import React from 'react';
import { observer } from "mobx-react-lite";
import { useDependencies } from '../../../../../DependencyContext';
import { styles } from '../../../../../theme/AllStyles';
import { useAdminContext } from '../../../../../theme/AdminContext';
import styled from 'styled-components';
import { useTheme } from 'styled-components';

const CartItemCardTypeC = observer(({ id, image, title, price, quantity = 0, color, size, colorHex, variantId, showButtons }) => {
  const { cartViewModel } = useDependencies();
  const { styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice];
  const theme = useTheme();
  return (
    <CartItemContainer >
      <selectedStyle.CartItemImage
        src={image}
        alt="item"
        style={{
          width: "200px",
          height: "280px", // Adjusted to be square
          borderRadius: "8px",
          objectFit: "cover",
          border: `1px solid ${theme.colors.cartItemImageBorder}`,
        }}
      />

      <selectedStyle.CartItemInfo
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "10px",
        }}
      >
        {/* Title */}
        <selectedStyle.CartItemTitle
          style={{
            fontSize: "1.1rem",
            fontWeight: "bold",
            color: `${theme.colors.cartItemTitle}`,
          }}
        >
          {title}
        </selectedStyle.CartItemTitle>

        {/* Variant Info */}
        <selectedStyle.CartItemVariantInfo
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {colorHex && (
            <selectedStyle.ColorCircle
              color={colorHex}
              style={{
                width: "18px",
                height: "18px",
                borderRadius: "50%",
                border: `1px solid ${theme.colors.colorCircleBorder}`,
              }}
            />
          )}
          {size && (
            <selectedStyle.SizeCircle
              style={{
                padding: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: `${theme.colors.sizeCircleBackground}`,
                color: `${theme.colors.sizeCircleText}`,
                border: `1px solid ${theme.colors.sizeCircleBorder}`,
                fontSize: "0.8rem",
                fontWeight: "bold",
                borderRadius: "4px",
              }}
            >
              {size.charAt(0)}
            </selectedStyle.SizeCircle>
          )}
        </selectedStyle.CartItemVariantInfo>

        {/* Price */}
        <selectedStyle.CartItemPrice
          style={{
            fontSize: "1rem",
            fontWeight: "bold",
            color: `${theme.colors.cartItemPrice}`,
          }}
        >
          {(price / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </selectedStyle.CartItemPrice>
      </selectedStyle.CartItemInfo>

      {/* Buttons or Quantity Display */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "10px",
        }}
      >
        {showButtons ? (
          <>
            <selectedStyle.CartItemIncrDec
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <selectedStyle.IncrDecButton
                onClick={() => cartViewModel.decrementQuantity(variantId)}
                style={{
                  background: `${theme.colors.incrDecButtonBackground}`,
                  color: `${theme.colors.incrDecButtonHoverText}`,
                  padding: "6px 10px",
                  fontSize: "1rem",
                  borderRadius: "4px",
                }}
              >
                -
              </selectedStyle.IncrDecButton>
              <p style={{ fontWeight: "bold", fontSize: "1rem", margin: "0 5px" }}>{quantity}</p>
              <selectedStyle.IncrDecButton
                onClick={() => cartViewModel.incrementQuantity(variantId)}
                style={{
                  background: `${theme.colors.incrDecButtonBackground}`,
                  color: `${theme.colors.incrDecButtonHoverText}`,
                  padding: "6px 10px",
                  fontSize: "1rem",
                  borderRadius: "4px",
                }}
              >
                +
              </selectedStyle.IncrDecButton>
            </selectedStyle.CartItemIncrDec>
            <selectedStyle.CartItemButton
              onClick={() => cartViewModel.removeItem(variantId)}
              style={{
                background: `${theme.colors.cartItemButtonBackground}`,
                color: `${theme.colors.cartItemButtonHover}`,
                padding: "8px 12px",
                fontSize: "0.9rem",
                borderRadius: "4px",
                width: "100px",
              }}
            >
              Supprimer
            </selectedStyle.CartItemButton>
          </>
        ) : (
          <selectedStyle.CartItemQuantity
            style={{
              fontSize: "0.9rem",
              color: `${theme.colors.cartItemQuantityText}`,
            }}
          >
            Nombre d'items: {quantity}
          </selectedStyle.CartItemQuantity>
        )}
      </div>
    </CartItemContainer>
  );
});

export default CartItemCardTypeC;

const CartItemContainer = styled.div`
  display: grid;
  grid-template-columns: 150px auto 100px;
  gap: 15px;
  padding: 20px;
  
  border-radius: 8px;
  background: ${(props) => props.theme.colors.cardBackground};
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 10px;
  }
`;