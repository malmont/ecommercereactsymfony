import React from "react";
import { HiCash } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { IoIosPaperPlane } from "react-icons/io";
import { BiAnalyse } from "react-icons/bi";
import { observer } from "mobx-react-lite";

const DetailsProductCardTypeD = ({
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
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px",
        gap: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        maxWidth: "500px",
        margin: "auto",
      }}
    >
      {/* Image */}
      <div style={{ textAlign: "center" }}>
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

      {/* Détails principaux */}
      <div style={{ width: "100%", textAlign: "center" }}>
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

        {/* Sélection des couleurs */}
        <div style={{ marginBottom: "20px" }}>
          <h4>Sélectionnez une couleur :</h4>
          <selectedStyle.ColorOptionsDetailProduct
            style={{
              display: "flex",
              justifyContent: "center",
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
          <div style={{ marginBottom: "20px" }}>
            <h4>Sélectionnez une taille :</h4>
            <selectedStyle.SizeOptionsDetailProduct
              style={{
                display: "flex",
                justifyContent: "center",
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
      </div>

      {/* Bouton Ajouter au panier */}
      <button
        className="btn btn-primary"
        onClick={handleAddToCart}
        disabled={!viewModel.selectedSize || !viewModel.selectedColor}
        style={{
          width: "80%",
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

      {/* Avantages sous forme de ligne horizontale */}
      <selectedStyle.FeatureDetailProduct
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          padding: "10px 0",
          borderTop: "1px solid #ddd",
        }}
      >
        <selectedStyle.ObjectFeatureDetailProduct
          style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <HiCash size={30} />
          <p style={{ margin: "5px 0", fontSize: "0.9rem" }}>Paiement sécurisé</p>
        </selectedStyle.ObjectFeatureDetailProduct>
        <selectedStyle.ObjectFeatureDetailProduct
          style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <AiFillStar size={30} />
          <p style={{ margin: "5px 0", fontSize: "0.9rem" }}>Livraison rapide</p>
        </selectedStyle.ObjectFeatureDetailProduct>
        <selectedStyle.ObjectFeatureDetailProduct
          style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <IoIosPaperPlane size={30} />
          <p style={{ margin: "5px 0", fontSize: "0.9rem" }}>Suivi d'expédition</p>
        </selectedStyle.ObjectFeatureDetailProduct>
        <selectedStyle.ObjectFeatureDetailProduct
          style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <BiAnalyse size={30} />
          <p style={{ margin: "5px 0", fontSize: "0.9rem" }}>Retours faciles</p>
        </selectedStyle.ObjectFeatureDetailProduct>
      </selectedStyle.FeatureDetailProduct>
    </selectedStyle.ContainerDetailsProduct>
  );
};

export default observer(DetailsProductCardTypeD);
