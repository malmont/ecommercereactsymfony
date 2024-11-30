import React from 'react';
import { observer } from "mobx-react-lite";
import { useDependencies } from '../../../../../DependencyContext';
import { styles } from '../../../../../theme/AllStyles';
import { useAdminContext } from '../../../../../theme/AdminContext';


const CartItemCardTypeD = observer(
  ({
    id,
    image,
    title,
    price,
    quantity = 0,
    color,
    size,
    colorHex,
    variantId,
    showButtons,
  }) => {
    const { cartViewModel } = useDependencies();
    const { styleChoice } = useAdminContext();
    const selectedStyle = styles[styleChoice];

    return (
      <selectedStyle.CartItemContainer
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "12px",
          background: `${(props) => props.theme.colors.cardBackground}`,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
      >
        {/* Image */}
        <selectedStyle.CartItemImage
          src={image}
          alt={title}
          style={{
            width: "100%",
            maxWidth: "500px",
            height: "auto",
            borderRadius: "12px",
            objectFit: "cover",
            border: `1px solid ${selectedStyle?.colors?.cartItemImageBorder || '#dee2e6'}`,
            margin: "0 auto",
          }}
        />

        {/* Informations */}
        <selectedStyle.CartItemInfo
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            textAlign: "center",
          }}
        >
          {/* Titre */}
          <selectedStyle.CartItemTitle
            style={{
              fontSize: "1.4rem",
              fontWeight: "bold",
              color: `${(props) => props.theme.colors.cartItemTitle}`,
            }}
          >
            {title}
          </selectedStyle.CartItemTitle>

          {/* Détails de la variante */}
          <selectedStyle.CartItemVariantInfo
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "center",
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
                  border: "1px solid #ccc",
                }}
              />
            )}
            {size && (
              <selectedStyle.SizeCircle
                style={{
                  padding: "5px",
                  background: `${(props) => props.theme.colors.sizeCircleBackground}`,
                  color: `${(props) => props.theme.colors.sizeCircleText}`,
                  border: "1px solid #ccc",
                  fontSize: "0.9rem",
                  fontWeight: "bold",
                  borderRadius: "4px",
                }}
              >
                {size.charAt(0)}
              </selectedStyle.SizeCircle>
            )}
          </selectedStyle.CartItemVariantInfo>

          {/* Prix */}
          <selectedStyle.CartItemPrice
            style={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: `${(props) => props.theme.colors.cartItemPrice}`,
            }}
          >
            {(price / 100).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </selectedStyle.CartItemPrice>
        </selectedStyle.CartItemInfo>

        {/* Boutons ou quantité */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {showButtons ? (
            <>
              {/* Décrément, Quantité, Incrément */}
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
                    background: `${(props) => props.theme.colors.incrDecButtonBackground}`,
                    color: `${(props) => props.theme.colors.incrDecButtonHoverText}`,
                    padding: "8px 12px",
                    fontSize: "1rem",
                    borderRadius: "8px",
                  }}
                >
                  -
                </selectedStyle.IncrDecButton>
                <p style={{ fontWeight: "bold", fontSize: "1rem", margin: "0 5px" }}>
                  {quantity}
                </p>
                <selectedStyle.IncrDecButton
                  onClick={() => cartViewModel.incrementQuantity(variantId)}
                  style={{
                    background: `${(props) => props.theme.colors.incrDecButtonBackground}`,
                    color: `${(props) => props.theme.colors.incrDecButtonHoverText}`,
                    padding: "8px 12px",
                    fontSize: "1rem",
                    borderRadius: "8px",
                  }}
                >
                  +
                </selectedStyle.IncrDecButton>
              </selectedStyle.CartItemIncrDec>

              {/* Bouton Supprimer */}
              <selectedStyle.CartItemButton
                onClick={() => cartViewModel.removeItem(variantId)}
                style={{
                  background: `${(props) => props.theme.colors.cartItemButtonBackground}`,
                  color: `${(props) => props.theme.colors.cartItemButtonHover}`,
                  padding: "10px 15px",
                  fontSize: "0.9rem",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Supprimer
              </selectedStyle.CartItemButton>
            </>
          ) : (
            <p
              style={{
                fontSize: "1rem",
                color: `${(props) => props.theme.colors.cartItemQuantityText}`,
              }}
            >
              Nombre d'items : {quantity}
            </p>
          )}
        </div>
      </selectedStyle.CartItemContainer>
    );
  }
);

export default CartItemCardTypeD;
