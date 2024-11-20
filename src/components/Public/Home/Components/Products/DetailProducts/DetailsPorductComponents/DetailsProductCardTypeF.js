import React from "react";
import { HiCash } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { IoIosPaperPlane } from "react-icons/io";
import { BiAnalyse } from "react-icons/bi";
import { observer } from "mobx-react-lite";

const DetailsProductCardTypeF = ({
  category,
  uniqueColors,
  selectedStyle,
  viewModel,
  handleAddToCart,
}) => {
  return (
    <selectedStyle.ContainerDetailsProduct
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "20px",
        padding: "20px",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        maxWidth: "900px",
        margin: "auto",
      }}
    >
      {/* Colonne gauche : Image */}
      <div style={{ flex: "1", textAlign: "center" }}>
        <selectedStyle.ImageEncadrement
          src={category.image}
          alt={category.name}
          style={{
            width: "100%",
            maxWidth: "400px",
            borderRadius: "10px",
          }}
        />
      </div>

      {/* Colonne droite : Détails */}
      <div style={{ flex: "2", display: "flex", flexDirection: "column", gap: "20px" }}>
        <div>
          <h1 style={{ fontSize: "1.8rem", marginBottom: "10px" }}>{category.name}</h1>
          <h2
            style={{
              fontSize: "1.5rem",
              color: "#007bff",
              marginBottom: "20px",
            }}
          >
            {(category.price / 100).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </h2>
        </div>

        {/* Sélection des couleurs */}
        <div>
          <h4>Sélectionnez une couleur :</h4>
          <selectedStyle.ColorOptionsDetailProduct
            style={{
              display: "flex",
              gap: "10px",
            }}
          >
            {uniqueColors.map((color) => (
              <selectedStyle.ColorButton
                key={color.id}
                onClick={() => viewModel.handleColorSelection(color.name)}
                isSelected={viewModel.selectedColor === color.name}
                color={color.codeHexa}
                style={{
                  borderRadius: "50%",
                  width: "30px",
                  height: "30px",
                }}
                aria-label={`Sélectionnez la couleur ${color.name}`}
              />
            ))}
          </selectedStyle.ColorOptionsDetailProduct>
        </div>

        {/* Sélection des tailles */}
        {viewModel.selectedColor && (
          <div>
            <h4>Sélectionnez une taille :</h4>
            <selectedStyle.SizeOptionsDetailProduct
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              {viewModel
                .getAvailableSizes(category.variants, viewModel.selectedColor)
                .map((size) => (
                  <selectedStyle.SizeButton
                    key={size.id}
                    onClick={() =>
                      viewModel.handleSizeSelection(
                        size.name,
                        viewModel.selectedColor,
                        category.variants
                      )
                    }
                    isSelected={viewModel.selectedSize === size.name}
                    style={{
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    {size.name.charAt(0)}
                  </selectedStyle.SizeButton>
                ))}
            </selectedStyle.SizeOptionsDetailProduct>
          </div>
        )}

        {/* Stock disponible */}
        {viewModel.selectedSize && viewModel.selectedColor && (
          <selectedStyle.InfoSelectionDetailProduct>
            <p>
              Stock disponible :{" "}
              <strong>{viewModel.availableStock ?? "Indisponible"}</strong>
            </p>
          </selectedStyle.InfoSelectionDetailProduct>
        )}

        {/* Bouton Ajouter au panier */}
        <button
          className="btn btn-primary"
          onClick={handleAddToCart}
          disabled={!viewModel.selectedSize || !viewModel.selectedColor}
          style={{
            width: "100%",
            maxWidth: "250px",
            padding: "10px",
            borderRadius: "8px",
            backgroundColor: "#007bff",
            color: "#fff",
            fontSize: "1rem",
            border: "none",
          }}
        >
          Ajouter au panier
        </button>

        {/* Avantages sous forme de badges */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "15px",
            marginTop: "20px",
          }}
        >
          <selectedStyle.ObjectFeatureDetailProduct
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              padding: "5px 10px",
              backgroundColor: "#f1f1f1",
              borderRadius: "15px",
            }}
          >
            <HiCash size={20} />
            <span style={{ fontSize: "0.9rem" }}>Paiement sécurisé</span>
          </selectedStyle.ObjectFeatureDetailProduct>
          <selectedStyle.ObjectFeatureDetailProduct
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              padding: "5px 10px",
              backgroundColor: "#f1f1f1",
              borderRadius: "15px",
            }}
          >
            <AiFillStar size={20} />
            <span style={{ fontSize: "0.9rem" }}>Livraison rapide</span>
          </selectedStyle.ObjectFeatureDetailProduct>
          <selectedStyle.ObjectFeatureDetailProduct
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              padding: "5px 10px",
              backgroundColor: "#f1f1f1",
              borderRadius: "15px",
            }}
          >
            <IoIosPaperPlane size={20} />
            <span style={{ fontSize: "0.9rem" }}>Suivi d'expédition</span>
          </selectedStyle.ObjectFeatureDetailProduct>
          <selectedStyle.ObjectFeatureDetailProduct
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              padding: "5px 10px",
              backgroundColor: "#f1f1f1",
              borderRadius: "15px",
            }}
          >
            <BiAnalyse size={20} />
            <span style={{ fontSize: "0.9rem" }}>Retours faciles</span>
          </selectedStyle.ObjectFeatureDetailProduct>
        </div>
      </div>
    </selectedStyle.ContainerDetailsProduct>
  );
};

export default observer(DetailsProductCardTypeF);
