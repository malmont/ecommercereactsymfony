import React from 'react';
import { observer } from "mobx-react-lite";
import { useDependencies } from '../../../../../DependencyContext';
import { styles } from '../../../../../theme/AllStyles';
import { useAdminContext } from '../../../../../theme/AdminContext';
import { useTheme } from 'styled-components';

const CartItemCardTypeB = observer(({ id, image, title, price, quantity = 0, color, size, colorHex, variantId, showButtons }) => {
  const { cartViewModel } = useDependencies();
  const { styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice];
  const theme = useTheme();
  return (
    <selectedStyle.CartItemContainer
      style={{
        flexDirection: "row",
        padding: "20px",
        gap: "15px",
        border: `1px solid ${theme.colors.cartItemBorder}`,
        background: theme.colors.cardBackground,
        borderRadius: "10px",
 
      }}
    >
    
      <selectedStyle.CartItemImage
        src={image}
        alt="item"
        style={{
          width: "200px",
          height: "300px",
          borderRadius: "8px",
          objectFit: "cover",
          marginBottom: "10px",
          border: `1px solid ${theme.colors.cartItemImageBorder}`,
        }}
      />

      {/* Info Section */}
      <selectedStyle.CartItemInfo
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Title */}
        <selectedStyle.CartItemTitle
          style={{
            fontSize: "1.1rem",
            fontWeight: "bold",
            color: theme.colors.cartItemTitle,
          }}
        >
          {title}
        </selectedStyle.CartItemTitle>

        {/* Variant Info */}
        <selectedStyle.CartItemVariantInfo
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "10px",
          }}
        >
          {colorHex && (
            <selectedStyle.ColorCircle
              color={colorHex}
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                border: `2px solid ${theme.colors.colorCircleBorder}` ,
              }}
            />
          )}
          {size && (
            <selectedStyle.SizeCircle
              style={{
                width: "24px",
                height: "24px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: `${theme.colors.sizeCircleBackground}`,
                color: `${theme.colors.sizeCircleText}`,
                border: `1px solid ${theme.colors.sizeCircleBorder}`,
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

        {/* Buttons or Quantity Display */}
        {showButtons ? (
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <selectedStyle.CartItemButton
              onClick={() => cartViewModel.removeItem(variantId)}
              style={{
                background: `${theme.colors.cartItemButtonBackground}`,
                color: `${theme.colors.cartItemButtonHover}`,
                padding: "6px 12px",
                fontSize: "0.9rem",
                borderRadius: "5px",
              }}
            >
              Supprimer
            </selectedStyle.CartItemButton>
            <selectedStyle.CartItemIncrDec style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <selectedStyle.IncrDecButton
                onClick={() => cartViewModel.decrementQuantity(variantId)}
                style={{
                  background: `${theme.colors.incrDecButtonBackground}`,
                  color: `${theme.colors.incrDecButtonHoverText}`,
                  borderRadius: "5px",
                  padding: "5px",
                }}
              >
                -
              </selectedStyle.IncrDecButton>
              <p style={{ fontWeight: "bold", fontSize: "1rem" }}>{quantity}</p>
              <selectedStyle.IncrDecButton
                onClick={() => cartViewModel.incrementQuantity(variantId)}
                style={{
                  background: `${theme.colors.incrDecButtonBackground}`,
                  color: `${theme.colors.incrDecButtonHoverText}`,
                  borderRadius: "5px",
                  padding: "5px",
                }}
              >
                +
              </selectedStyle.IncrDecButton>
            </selectedStyle.CartItemIncrDec>
          </div>
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
      </selectedStyle.CartItemInfo>
    </selectedStyle.CartItemContainer>
  );
});

export default CartItemCardTypeB;
