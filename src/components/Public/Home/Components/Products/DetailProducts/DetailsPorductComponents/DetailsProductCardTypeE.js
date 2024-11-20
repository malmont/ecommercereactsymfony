import React, { useState } from "react";
import { HiCash } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { IoIosPaperPlane } from "react-icons/io";
import { BiAnalyse } from "react-icons/bi";
import { observer } from "mobx-react-lite";

const DetailsProductCardTypeE = ({
  category,
  uniqueColors,
  selectedStyle,
  viewModel,
  handleAddToCart,
}) => {
  const [activeTab, setActiveTab] = useState("details");

  return (
    <selectedStyle.ContainerDetailsProduct
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        maxWidth: "600px",
        margin: "auto",
      }}
    >
      {/* Image */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
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

      {/* Onglets */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <button
          onClick={() => setActiveTab("details")}
          style={{
            padding: "10px 20px",
            backgroundColor: activeTab === "details" ? "#007bff" : "#f1f1f1",
            color: activeTab === "details" ? "#fff" : "#000",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Détails
        </button>
        <button
          onClick={() => setActiveTab("advantages")}
          style={{
            padding: "10px 20px",
            backgroundColor: activeTab === "advantages" ? "#007bff" : "#f1f1f1",
            color: activeTab === "advantages" ? "#fff" : "#000",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Avantages
        </button>
        <button
          onClick={() => setActiveTab("stock")}
          style={{
            padding: "10px 20px",
            backgroundColor: activeTab === "stock" ? "#007bff" : "#f1f1f1",
            color: activeTab === "stock" ? "#fff" : "#000",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Stock
        </button>
      </div>

      {/* Contenu des onglets */}
      {activeTab === "details" && (
        <div style={{ textAlign: "center" }}>
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
        </div>
      )}

      {activeTab === "advantages" && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <HiCash size={30} />
            <p>Paiement sécurisé</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <AiFillStar size={30} />
            <p>Livraison rapide</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <IoIosPaperPlane size={30} />
            <p>Suivi d'expédition</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <BiAnalyse size={30} />
            <p>Retours faciles</p>
          </div>
        </div>
      )}

      {activeTab === "stock" && (
        <div style={{ textAlign: "center" }}>
          {viewModel.selectedSize && viewModel.selectedColor ? (
            <p>
              Stock disponible :{" "}
              <strong>{viewModel.availableStock ?? "Indisponible"}</strong>
            </p>
          ) : (
            <p>Veuillez sélectionner une taille et une couleur.</p>
          )}
        </div>
      )}

      {/* Bouton Ajouter au panier (toujours visible) */}
      <button
        className="btn btn-primary"
        onClick={handleAddToCart}
        disabled={!viewModel.selectedSize || !viewModel.selectedColor}
        style={{
          width: "80%",
          maxWidth: "250px",
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
    </selectedStyle.ContainerDetailsProduct>
  );
};

export default observer(DetailsProductCardTypeE);
