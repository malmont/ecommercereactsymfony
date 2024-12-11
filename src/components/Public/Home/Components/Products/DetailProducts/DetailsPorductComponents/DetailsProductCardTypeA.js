import React from "react";
import { HiCash } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { IoIosPaperPlane } from "react-icons/io";
import { BiAnalyse } from "react-icons/bi";
import { observer } from "mobx-react-lite";

const DetailsProductCardTypeA = ({
  category,
  uniqueColors,
  selectedStyle,
  viewModel,
  handleAddToCart,
}) => {
  return (
    <selectedStyle.ContainerDetailsProduct>
      <selectedStyle.PrincipalDetailsDetailProduct>
        <div className="row">
          <div className="col-md-6">
            <selectedStyle.ImageEncadrement
              src={category.image}
              alt={category.name}
            />
          </div>
          <div className="col-md-6 ">
            <h3>{category.name}</h3>
            <h2>
              {(category.price / 100).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </h2>
            <selectedStyle.ColorSelectionDetailProduct>
              <h5>Sélectionnez  </h5>
              <selectedStyle.ColorOptionsDetailProduct>
                {uniqueColors.map((color) => (
                  <selectedStyle.ColorButton
                    key={color.id}
                    onClick={() => viewModel.handleColorSelection(color.name)}
                    isSelected={viewModel.selectedColor === color.name}
                    color={color.codeHexa}
                  />
                ))}
              </selectedStyle.ColorOptionsDetailProduct>
            </selectedStyle.ColorSelectionDetailProduct>
            {viewModel.selectedColor && (
              <selectedStyle.SizeSelectionDetailProduct>
                <h5>Sélectionnez  </h5>
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
                      >
                        {size.name.charAt(0)}
                      </selectedStyle.SizeButton>
                    ))}
                </selectedStyle.SizeOptionsDetailProduct>
              </selectedStyle.SizeSelectionDetailProduct>
            )}
            {viewModel.selectedSize && viewModel.selectedColor && (
              <selectedStyle.InfoSelectionDetailProduct>
                <p>
                  Stock disponible :{" "}
                  <strong>{viewModel.availableStock ?? "Indisponible"}</strong>
                </p>
              </selectedStyle.InfoSelectionDetailProduct>
            )}
            <div class="div1 py-2"/>
            <selectedStyle.NavButton
           
              onClick={handleAddToCart}
              disabled={!viewModel.selectedSize || !viewModel.selectedColor}
            >
              Ajouter au panier
            </selectedStyle.NavButton>
            <div class="div1 py-2"/>
            <selectedStyle.FeatureDetailProduct>
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
          </div>
        </div>
      </selectedStyle.PrincipalDetailsDetailProduct>
    </selectedStyle.ContainerDetailsProduct>
  );
};

export default observer(DetailsProductCardTypeA);
