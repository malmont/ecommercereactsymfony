import React from 'react';
import { observer } from "mobx-react-lite";
import { useDependencies } from '../../../../../DependencyContext';
import { styles } from '../../../../../theme/AllStyles';
import { useAdminContext } from '../../../../../theme/AdminContext';

const CartItemCardTypeF = observer(({ id, image, title, price, quantity = 0, color, size, colorHex, variantId, showButtons }) => {
  const { cartViewModel } = useDependencies();
  const { styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice];

  return (
    <selectedStyle.CartItemContainer
      style={{
        display: "grid",
        width: "80%",
        gridTemplateColumns: "150px 1fr",
        gap: "15px",
        padding: "15px",
        border: `1px solid ${selectedStyle?.colors?.cartItemBorder || '#dee2e6'}`,
        borderRadius: "10px",
        background: `${selectedStyle?.colors?.cardBackground || '#ffffff'}`,
        alignItems: "center",
      }}
    >
      {/* Image */}
      <selectedStyle.CartItemImage
        src={image}
        alt="item"
        style={{
          width: "100%",
          height: "230px",
          objectFit: "cover",
          borderRadius: "8px",
          border: `1px solid ${selectedStyle?.colors?.cartItemImageBorder || '#dee2e6'}`,
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
            color: `${selectedStyle?.colors?.cartItemTitle || '#000000'}`,
          }}
        >
          {title}
        </selectedStyle.CartItemTitle>

        {/* Variant Info */}
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
                border: `1px solid ${selectedStyle?.colors?.colorCircleBorder || '#dee2e6'}`,
              }}
            />
          )}
          {size && (
            <selectedStyle.SizeCircle
              style={{
                padding: "5px",
                background: `${selectedStyle?.colors?.sizeCircleBackground || '#dee2e6'}`,
                color: `${selectedStyle?.colors?.sizeCircleText || '#000000'}`,
                border: `1px solid ${selectedStyle?.colors?.sizeCircleBorder || '#dee2e6'}`,
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
            color: `${selectedStyle?.colors?.cartItemPrice || '#000000'}`,
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
                  background: `${selectedStyle?.colors?.cartItemButtonBackground || '#e9ecef'}`,
                  color: `${selectedStyle?.colors?.cartItemButtonHover || '#007bff'}`,
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
                    background: `${selectedStyle?.colors?.incrDecButtonBackground || '#007bff'}`,
                    color: `${selectedStyle?.colors?.incrDecButtonHoverText || '#ffffff'}`,
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
                    background: `${selectedStyle?.colors?.incrDecButtonBackground || '#007bff'}`,
                    color: `${selectedStyle?.colors?.incrDecButtonHoverText || '#ffffff'}`,
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
                color: `${selectedStyle?.colors?.cartItemQuantityText || '#000000'}`,
              }}
            >
              Nombre d'items: {quantity}
            </selectedStyle.CartItemQuantity>
          )}
        </div>
      </selectedStyle.CartItemInfo>
    </selectedStyle.CartItemContainer>
  );
});

export default CartItemCardTypeF;