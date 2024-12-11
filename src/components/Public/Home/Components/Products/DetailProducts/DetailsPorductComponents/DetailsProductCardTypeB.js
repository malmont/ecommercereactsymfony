import React from "react";
import { HiCash } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { IoIosPaperPlane } from "react-icons/io";
import { BiAnalyse } from "react-icons/bi";
import { observer } from "mobx-react-lite";
import styled from "styled-components";

const DetailsProductCardTypeB = ({
  category,
  uniqueColors,
  selectedStyle,
  viewModel,
  handleAddToCart,
}) => {
  return (
    <selectedStyle.ContainerDetailsProduct as={ContainerDetailsProduct}>
      <selectedStyle.PrincipalDetailsDetailProduct as={PrincipalDetailsDetailProduct}>
        {/* Colonne gauche : Image */}
        <ImageWrapper>
          <selectedStyle.ImageEncadrement as={ImageEncadrement} 
          src={category.image}
          alt={category.name}/>
        </ImageWrapper>

        {/* Colonne droite : Détails du produit */}
        <DetailsWrapper>
          <ProductTitle>{category.name}</ProductTitle>
          <ProductPrice>
            {(category.price / 100).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </ProductPrice>

          {/* Color Selection */}
          <Section>
            <SectionTitle>Couleurs disponibles :</SectionTitle>
            <selectedStyle.ColorOptionsDetailProduct as ={ColorOptionsDetailProduct}>
              {uniqueColors.map((color) => (
                <selectedStyle.ColorButton as={ColorButton}
                key={color.id}
                onClick={() => viewModel.handleColorSelection(color.name)}
                isSelected={viewModel.selectedColor === color.name}
                color={color.codeHexa}
              />
              ))}
            </selectedStyle.ColorOptionsDetailProduct>
          </Section>

          {/* Sélection des tailles */}
          {viewModel.selectedColor && (
            <div>
              <h5>Sélectionnez</h5>
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
          <AddToCartButton
            className="btn btn-primary"
            onClick={handleAddToCart}
            disabled={!viewModel.selectedSize || !viewModel.selectedColor}>
            Ajouter au panier
          </AddToCartButton>
        </DetailsWrapper>
      </selectedStyle.PrincipalDetailsDetailProduct>

      {/* Liste des avantages */}
      <selectedStyle.FeatureDetailProduct as ={FeatureDetailProduct}>

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

export default observer(DetailsProductCardTypeB);

const ContainerDetailsProduct = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

const PrincipalDetailsDetailProduct = styled.div`
 display: flex;
 flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ImageEncadrement = styled.img`
  
  border-radius: 15px;
  object-fit: cover;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const DetailsWrapper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ProductTitle = styled.h2`
  font-size: 1.8rem;
  margin: 10px 0;
`;

const ProductPrice = styled.h2`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.primary || "#007bff"};
  margin-bottom: 20px;
`;

const Section = styled.div``;

const SectionTitle = styled.h5`
  margin-bottom: 10px;
`;

const ColorOptionsDetailProduct = styled.div`
  display: flex;
  gap: 10px;
`;

const ColorButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid
    ${(props) => (props.isSelected ? props.theme.colors.primary : "transparent")};
  background-color: ${(props) => props.color};
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const AddToCartButton = styled.button`
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary || "#007bff"};
  border: none;
  border-radius: 8px;
  color: #fff;
  padding: 10px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:disabled {
    background-color: ${(props) => props.theme.colors.disabled || "#d6d6d6"};
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: ${(props) => props.theme.colors.primaryHover || "#0056b3"};
  }
`;

const FeatureDetailProduct = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: space-around;
  margin-top: 20px;
`;
