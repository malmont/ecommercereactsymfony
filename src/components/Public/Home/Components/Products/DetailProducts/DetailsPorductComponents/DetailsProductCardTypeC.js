import React from "react";
import { HiCash } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { IoIosPaperPlane } from "react-icons/io";
import { BiAnalyse } from "react-icons/bi";
import { observer } from "mobx-react-lite";

const DetailsProductCardTypeC = ({
  category,
  uniqueColors,
  selectedStyle,
  viewModel,
  handleAddToCart,
}) => {
  return (
    <selectedStyle.ContainerDetailsProduct
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", // Adapte les colonnes selon la largeur
        gap: "20px",
        padding: "20px",
      }}
    >
      {/* Colonne 1 : Image */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <selectedStyle.ImageEncadrement
          src={category.image}
          alt={category.name}
          style={{
            width: "100%",
            maxWidth: "300px",
            borderRadius: "15px",
          }}
        />
      </div>

      {/* Colonne 2 : Détails du produit */}
      <div>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px" }}>{category.name}</h2>
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

        {/* Sélection des couleurs */}
        <div style={{ marginBottom: "20px" }}>
          <h5>Sélectionnez</h5>
          <selectedStyle.ColorOptionsDetailProduct style={{ display: "flex", gap: "10px" }}>
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
              />
            ))}
          </selectedStyle.ColorOptionsDetailProduct>
        </div>

        {/* Sélection des tailles */}
        {viewModel.selectedColor && (
          <div style={{ marginBottom: "20px" }}>
            <h5>Sélectionnez</h5>
            <selectedStyle.SizeOptionsDetailProduct style={{ display: "flex", gap: "10px" }}>
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
            padding: "10px",
            borderRadius: "8px",
            backgroundColor: "#007bff",
            color: "#fff",
            fontSize: "1rem",
            border: "none",
            marginTop: "20px",
          }}
        >
          Ajouter au panier
        </button>
      </div>

      {/* Colonne 3 : Avantages */}
      <selectedStyle.FeatureDetailProduct
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "15px",
          padding: "10px",
        }}
      >
        <selectedStyle.ObjectFeatureDetailProduct>
          <HiCash size={30} />
          <p>Paiement sécurisé</p>
        </selectedStyle.ObjectFeatureDetailProduct>
        <selectedStyle.ObjectFeatureDetailProduct>
          <AiFillStar size={30} />
          <p>Livraison rapide</p>
        </selectedStyle.ObjectFeatureDetailProduct>
        <selectedStyle.ObjectFeatureDetailProduct>
          <IoIosPaperPlane size={30} />
          <p>Suivi d'expédition</p>
        </selectedStyle.ObjectFeatureDetailProduct>
        <selectedStyle.ObjectFeatureDetailProduct>
          <BiAnalyse size={30} />
          <p>Retours faciles</p>
        </selectedStyle.ObjectFeatureDetailProduct>
      </selectedStyle.FeatureDetailProduct>
    </selectedStyle.ContainerDetailsProduct>
  );
};

export default observer(DetailsProductCardTypeC);
