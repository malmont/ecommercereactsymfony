import React from 'react';
import { observer } from "mobx-react-lite";
import { useDependencies } from '../../../../../DependencyContext';
import { styles } from '../../../../../theme/AllStyles';
import { useAdminContext } from '../../../../../theme/AdminContext';

const CartItemCardTypeC = observer(({ id, image, title, price, quantity = 0, color, size, colorHex, variantId, showButtons }) => {
  const { cartViewModel } = useDependencies();
  const { styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice];

  return (
    <selectedStyle.CartItemContainer
      style={{
        display: "grid",
        gridTemplateColumns: "80px auto auto",
        gap: "15px",
        padding: "20px",
        border: `1px solid ${(props) => props.theme.colors.cartItemBorder}`,
        borderRadius: "8px",
        background: `${(props) => props.theme.colors.cardBackground}`,
      }}
    >

      <selectedStyle.CartItemImage
        src={image}
        alt="item"
        style={{
          width: "80px",
          height: "160px",
          borderRadius: "8px",
          objectFit: "cover",
          border: `1px solid ${(props) => props.theme.colors.cartItemImageBorder}`,
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
            color: `${(props) => props.theme.colors.cartItemTitle}`,
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
                border: `1px solid ${(props) => props.theme.colors.colorCircleBorder}`,
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
                background: `${(props) => props.theme.colors.sizeCircleBackground}`,
                color: `${(props) => props.theme.colors.sizeCircleText}`,
                border: `1px solid ${(props) => props.theme.colors.sizeCircleBorder}`,
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
            color: `${(props) => props.theme.colors.cartItemPrice}`,
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
          justifyContent: "center",
          alignItems: "flex-end",
          gap: "10px",
        }}
      >
        {showButtons ? (
          <>
            <selectedStyle.CartItemButton
              onClick={() => cartViewModel.removeItem(variantId)}
              style={{
                background: `${(props) => props.theme.colors.cartItemButtonBackground}`,
                color: `${(props) => props.theme.colors.cartItemButtonHover}`,
                padding: "8px 12px",
                fontSize: "0.9rem",
                borderRadius: "4px",
              }}
            >
              Supprimer
            </selectedStyle.CartItemButton>
            <selectedStyle.CartItemIncrDec style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <selectedStyle.IncrDecButton
                onClick={() => cartViewModel.decrementQuantity(variantId)}
                style={{
                  background: `${(props) => props.theme.colors.incrDecButtonBackground}`,
                  color: `${(props) => props.theme.colors.incrDecButtonHoverText}`,
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
                  background: `${(props) => props.theme.colors.incrDecButtonBackground}`,
                  color: `${(props) => props.theme.colors.incrDecButtonHoverText}`,
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
              color: `${(props) => props.theme.colors.cartItemQuantityText}`,
            }}
          >
            Nombre d'items: {quantity}
          </selectedStyle.CartItemQuantity>
        )}
      </div>
    </selectedStyle.CartItemContainer>
  );
});

export default CartItemCardTypeC;
