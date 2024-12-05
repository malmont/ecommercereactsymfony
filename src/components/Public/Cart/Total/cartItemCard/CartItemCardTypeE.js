import React from 'react';
import { observer } from "mobx-react-lite";
import { useDependencies } from '../../../../../DependencyContext';
import { styles } from '../../../../../theme/AllStyles';
import { useAdminContext } from '../../../../../theme/AdminContext';
import { useTheme } from 'styled-components';

const CartItemCardTypeE = observer(({ id, image, title, price, quantity = 0, color, size, colorHex, variantId, showButtons }) => {
  const { cartViewModel } = useDependencies();
  const { styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice];
  const theme = useTheme();
  return (
    <selectedStyle.CartItemContainer
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        padding: "15px",
        border: `1px solid ${theme?.colors.cartItemBorder }`,
        borderRadius: "10px",
        background: `${theme?.colors.cardBackground }`,
      }}
    >
      {/* Image */}
      <selectedStyle.CartItemImage
        src={image}
        alt="item"
        style={{
          width: "100%",
          maxWidth: "500px",
          height: "auto",
          borderRadius: "12px",
          objectFit: "cover",
          border: `1px solid ${theme?.colors.cartItemImageBorder }`,
          margin: "0 auto",
        }}
      />

      {/* Info */}
      <selectedStyle.CartItemInfo
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "10px",
        }}
      >
        {/* Title */}
        <selectedStyle.CartItemTitle
          style={{
            fontSize: "1.1rem",
            fontWeight: "bold",
            color: `${theme?.colors.cartItemTitle }`,
          }}
        >
          {title}
        </selectedStyle.CartItemTitle>

        {/* Variant Info */}
        <selectedStyle.CartItemVariantInfo
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
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
            fontSize: "1rem",
            fontWeight: "bold",
            color: `${theme?.colors.cartItemPrice }`,
          }}
        >
          {(price / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </selectedStyle.CartItemPrice>
      </selectedStyle.CartItemInfo>

      {/* Buttons or Quantity */}
      <div
        style={{
          display: "flex",
          flexDirection: showButtons ? "row" : "column",
          justifyContent: "space-between",
          alignItems: "center",
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
            <selectedStyle.CartItemIncrDec style={{ display: "flex", alignItems: "center", gap: "10px" }}>
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
                  background: `${theme?.colors.incrDecButtonBackground }`,
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
    </selectedStyle.CartItemContainer>
  );
});

export default CartItemCardTypeE;
