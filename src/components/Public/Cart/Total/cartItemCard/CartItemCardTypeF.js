import React from 'react';
import { observer } from "mobx-react-lite";
import { useDependencies } from '../../../../../DependencyContext';
import { styles } from '../../../../../theme/AllStyles';
import { useAdminContext } from '../../../../../theme/AdminContext';
import styled from 'styled-components';
import { useTheme } from 'styled-components';

const CartItemCardTypeF = observer(({ id, image, title, price, quantity = 0, color, size, colorHex, variantId, showButtons }) => {
  const { cartViewModel } = useDependencies();
  const { styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice];
  const theme = useTheme();
  return (
    <CartItemContainer>
      {/* Image */}
      <selectedStyle.CartItemImage
        src={image}
        alt="item"
        style={{
          width: "100%",
          height: "230px",
          objectFit: "cover",
          border: `1px solid ${theme?.colors.cartItemImageBorder }`,
          borderRadius: "8px",
          margin: "0 auto",
        }}
      />

      {/* Info Section */}
      <selectedStyle.CartItemInfo
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {/* Title */}
        <selectedStyle.CartItemTitle
          style={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            color: `${theme?.colors.cartItemTitle }`,
          }}
        >
          {title}
        </selectedStyle.CartItemTitle>

    
        <selectedStyle.CartItemVariantInfo
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          {colorHex && (
            <selectedStyle.ColorCircle
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                backgroundColor: colorHex,
                border: `1px solid ${theme?.colors.colorCircleBorder }`,
              }}
            />
          )}
          {size && (
            <selectedStyle.SizeCircle
              style={{
                padding: "5px",
                background: `${theme?.colors.sizeCircleBackground }`,
                color: `${theme?.colors.sizeCircleText }`,
                border: `1px solid ${theme?.colors.sizeCircleBorder }`,
                fontSize: "0.9rem",
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
            fontSize: "1.1rem",
            fontWeight: "bold",
            color: `${theme?.colors.cartItemPrice }`,
          }}
        >
          {(price / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </selectedStyle.CartItemPrice>

        {/* Buttons or Quantity */}
        <div
          style={{
            display: "flex",
            flexDirection: showButtons ? "row" : "column",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          {showButtons ? (
            <>
              <selectedStyle.CartItemButton
                onClick={() => cartViewModel.removeItem(variantId)}
                style={{
                  background: `${theme?.colors.cartItemButtonBackground }`,
                  color: `${theme?.colors.cartItemButtonHover }`,
                  padding: "8px 12px",
                  fontSize: "0.9rem",
                  borderRadius: "4px",
                }}
              >
                Supprimer
              </selectedStyle.CartItemButton>
              <selectedStyle.CartItemIncrDec style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <selectedStyle.IncrDecButton
                  onClick={() => cartViewModel.decrementQuantity(variantId)}
                  style={{
                    background: `${theme?.colors.incrDecButtonBackground }`,
                    color: `${theme?.colors.incrDecButtonHoverText }`,
                    padding: "6px 10px",
                    fontSize: "1rem",
                    borderRadius: "4px",
                  }}
                >
                  -
                </selectedStyle.IncrDecButton>
                <p style={{ fontWeight: "bold", fontSize: "1rem" }}>{quantity}</p>
                <selectedStyle.IncrDecButton
                  onClick={() => cartViewModel.incrementQuantity(variantId)}
                  style={{
                    background: `${theme?.colors.incrDecButtonBackground}`,
                    color: `${theme?.colors.incrDecButtonHoverText}`,
                    padding: "6px 10px",
                    fontSize: "1rem",
                    borderRadius: "4px",
                  }}
                >
                  +
                </selectedStyle.IncrDecButton>
              </selectedStyle.CartItemIncrDec>
            </>
          ) : (
            <selectedStyle.CartItemQuantity
              style={{
                fontSize: "0.9rem",
                color: `${theme?.colors.cartItemQuantityText }`,
              }}
            >
              Nombre d'items: {quantity}
            </selectedStyle.CartItemQuantity>
          )}
        </div>
      </selectedStyle.CartItemInfo>
    </CartItemContainer>
  );
});

export default CartItemCardTypeF;

const CartItemContainer = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 15px;
  padding: 15px;
  border: 1px solid #dee2e6;
  border-radius: 10px;
  background: #ffffff;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin: 5px 10px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    margin: 5px 0px;
  }
`;
