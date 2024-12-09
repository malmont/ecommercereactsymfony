import React from "react";
import { HiCash } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { IoIosPaperPlane } from "react-icons/io";
import { BiAnalyse } from "react-icons/bi";
import { observer } from "mobx-react-lite";
import styled from "styled-components";

const DetailsProductCardTypeD = ({
  category,
  uniqueColors,
  selectedStyle,
  viewModel,
  handleAddToCart,
}) => {
  return (
    <ContainerDetailsProduct as={selectedStyle.ContainerDetailsProduct}>
      {/* Image Section */}
      <ImageWrapper>
        <ImageEncadrement
          as={selectedStyle.ImageEncadrement}
          src={category.image}
          alt={category.name}
        />
      </ImageWrapper>

      {/* Product Details Section */}
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
          <ColorOptionsDetailProduct as={selectedStyle.ColorOptionsDetailProduct}>
            {uniqueColors.map((color) => (
              <ColorButton
                as={selectedStyle.ColorButton}
                key={color.id}
                onClick={() => viewModel.handleColorSelection(color.name)}
                isSelected={viewModel.selectedColor === color.name}
                color={color.codeHexa}
                aria-label={`Sélectionnez la couleur ${color.name}`}
              />
            ))}
          </ColorOptionsDetailProduct>
        </Section>

        {/* Size Selection */}
        {viewModel.selectedColor && (
          <Section>
            <SectionTitle>Tailles disponibles :</SectionTitle>
            <SizeOptionsDetailProduct as={selectedStyle.SizeOptionsDetailProduct}>
              {viewModel
                .getAvailableSizes(category.variants, viewModel.selectedColor)
                .map((size) => (
                  <SizeButton
                    as={selectedStyle.SizeButton}
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
                  </SizeButton>
                ))}
            </SizeOptionsDetailProduct>
          </Section>
        )}

        {/* Available Stock */}
        {viewModel.selectedSize && viewModel.selectedColor && (
          <InfoSelectionDetailProduct
            as={selectedStyle.InfoSelectionDetailProduct}
          >
            Stock disponible : <strong>{viewModel.availableStock ?? "Indisponible"}</strong>
          </InfoSelectionDetailProduct>
        )}
      </DetailsWrapper>

      {/* Add to Cart Button */}
      <AddToCartButton
        onClick={handleAddToCart}
        disabled={!viewModel.selectedSize || !viewModel.selectedColor}
      >
        Ajouter au panier
      </AddToCartButton>

      {/* Features Section */}
      <FeatureDetailProduct as={selectedStyle.FeatureDetailProduct}>
        <ObjectFeatureDetailProduct>
          <HiCash size={30} />
          <FeatureText>Paiement sécurisé</FeatureText>
        </ObjectFeatureDetailProduct>
        <ObjectFeatureDetailProduct>
          <AiFillStar size={30} />
          <FeatureText>Livraison rapide</FeatureText>
        </ObjectFeatureDetailProduct>
        <ObjectFeatureDetailProduct>
          <IoIosPaperPlane size={30} />
          <FeatureText>Suivi d'expédition</FeatureText>
        </ObjectFeatureDetailProduct>
        <ObjectFeatureDetailProduct>
          <BiAnalyse size={30} />
          <FeatureText>Retours faciles</FeatureText>
        </ObjectFeatureDetailProduct>
      </FeatureDetailProduct>
    </ContainerDetailsProduct>
  );
};

export default observer(DetailsProductCardTypeD);

// Styled Components
const ContainerDetailsProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  gap: 20px;
  background-color: ${(props) => props.theme.colors.cardBackground || "#f9f9f9"};
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: auto;
`;

const ImageWrapper = styled.div`
  text-align: center;
`;

const ImageEncadrement = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 15px;
  object-fit: cover;
`;

const DetailsWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const ProductTitle = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 10px;
`;

const ProductPrice = styled.h2`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.primary || "#007bff"};
  margin-bottom: 20px;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h4`
  margin-bottom: 10px;
`;

const ColorOptionsDetailProduct = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const ColorButton = styled.button`
  width: 30px;
  height: 30px;
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

const SizeOptionsDetailProduct = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const SizeButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: 2px solid
    ${(props) => (props.isSelected ? props.theme.colors.primary : "transparent")};
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const InfoSelectionDetailProduct = styled.div`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.textColor || "#343a40"};
`;

const AddToCartButton = styled.button`
  width: 80%;
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
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  border-top: 1px solid ${(props) => props.theme.colors.border || "#ddd"};
`;

const ObjectFeatureDetailProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FeatureText = styled.p`
  margin: 5px 0;
  font-size: 0.9rem;
`;
