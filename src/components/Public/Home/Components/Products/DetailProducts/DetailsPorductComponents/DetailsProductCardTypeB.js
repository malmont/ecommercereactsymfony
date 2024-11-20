import React from "react";
import { HiCash } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { IoIosPaperPlane } from "react-icons/io";
import { BiAnalyse } from "react-icons/bi";
import { observer } from "mobx-react-lite";

const DetailsProductCardTypeB = ({
  category,
  uniqueColors,
  selectedStyle,
  viewModel,
  handleAddToCart,
}) => {
  return (
    <selectedStyle.ContainerDetailsProduct>
      <selectedStyle.PrincipalDetailsDetailProduct>
        <div
          style={{
            display: "flex",
            flexDirection: "row", // Disposition horizontale principale
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          {/* Colonne gauche : Image */}
          <div style={{ flex: 1 }}>
            <selectedStyle.ImageEncadrement
              src={category.image}
              alt={category.name}
              style={{
                width: "100%",
                borderRadius: "15px",
              }}
            />
          </div>

          {/* Colonne droite : Détails du produit */}
          <div style={{ flex: 2 }}>
            <h1 style={{ fontSize: "1.8rem", margin: "10px 0" }}>{category.name}</h1>
            <h2 style={{ fontSize: "1.5rem", color: "#007bff", marginBottom: "20px" }}>
              {(category.price / 100).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </h2>

            {/* Sélection des couleurs */}
            <div style={{ marginBottom: "20px" }}>
              <h4>Sélectionnez une couleur :</h4>
              <selectedStyle.ColorOptionsDetailProduct>
                {uniqueColors.map((color) => (
                  <selectedStyle.ColorButton
                    key={color.id}
                    onClick={() => viewModel.handleColorSelection(color.name)}
                    isSelected={viewModel.selectedColor === color.name}
                    color={color.codeHexa}
                    style={{
                      margin: "0 10px",
                    }}
                  />
                ))}
              </selectedStyle.ColorOptionsDetailProduct>
            </div>

            {/* Sélection des tailles */}
            {viewModel.selectedColor && (
              <div style={{ marginBottom: "20px" }}>
                <h4>Sélectionnez une taille :</h4>
                <selectedStyle.SizeOptionsDetailProduct>
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
                          padding: "10px 15px",
                          margin: "5px",
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
              className="btn btn-primary p-2 my-4"
              onClick={handleAddToCart}
              disabled={!viewModel.selectedSize || !viewModel.selectedColor}
              style={{
                width: "100%",
                backgroundColor: "#007bff",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
                padding: "10px",
                fontSize: "1rem",
              }}
            >
              Ajouter au panier
            </button>
          </div>
        </div>

        {/* Liste des avantages positionnés à droite */}
        <selectedStyle.FeatureDetailProduct
          style={{
            display: "flex",
            alignItems: "flex-end", // Aligné à droite
            gap: "15px",
            marginTop: "20px",
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
      </selectedStyle.PrincipalDetailsDetailProduct>
    </selectedStyle.ContainerDetailsProduct>
  );
};

export default observer(DetailsProductCardTypeB);
