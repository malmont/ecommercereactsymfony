import React from "react";
import { HiCash } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { IoIosPaperPlane } from "react-icons/io";
import { BiAnalyse } from "react-icons/bi";
import { observer } from "mobx-react-lite";
import styled from "styled-components";

const DetailsProductCardTypeF = ({
  category,
  uniqueColors,
  selectedStyle,
  viewModel,
  handleAddToCart,
}) => {
  return (
    <ContainerDetailsProduct as={selectedStyle.ContainerDetailsProduct}>
      {/* Left Column: Image */}
      <ImageWrapper>
        <ImageEncadrement
          as={selectedStyle.ImageEncadrement}
          src={category.image}
          alt={category.name}
        />
      </ImageWrapper>

      {/* Right Column: Details */}
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
          <SectionTitle>Sélectionnez une couleur :</SectionTitle>
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
            <SectionTitle>Sélectionnez une taille :</SectionTitle>
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

        {/* Stock Availability */}
        {viewModel.selectedSize && viewModel.selectedColor && (
          <StockInfo>
            Stock disponible : <strong>{viewModel.availableStock ?? "Indisponible"}</strong>
          </StockInfo>
        )}

        {/* Add to Cart Button */}
        <AddToCartButton
          onClick={handleAddToCart}
          disabled={!viewModel.selectedSize || !viewModel.selectedColor}
        >
          Ajouter au panier
        </AddToCartButton>

        {/* Features */}
        <FeaturesWrapper>
          <Feature>
            <HiCash size={20} />
            <FeatureText>Paiement sécurisé</FeatureText>
          </Feature>
          <Feature>
            <AiFillStar size={20} />
            <FeatureText>Livraison rapide</FeatureText>
          </Feature>
          <Feature>
            <IoIosPaperPlane size={20} />
            <FeatureText>Suivi d'expédition</FeatureText>
          </Feature>
          <Feature>
            <BiAnalyse size={20} />
            <FeatureText>Retours faciles</FeatureText>
          </Feature>
        </FeaturesWrapper>
      </DetailsWrapper>
    </ContainerDetailsProduct>
  );
};

export default observer(DetailsProductCardTypeF);

// Styled Components
const ContainerDetailsProduct = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.cardBackground || "#ffffff"};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  margin: auto;
`;

const ImageWrapper = styled.div`
  flex: 1;
  text-align: center;
  min-width: 300px;
`;

const ImageEncadrement = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
  object-fit: cover;
`;

const DetailsWrapper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 300px;
`;

const ProductTitle = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 10px;
  text-align: center;
`;

const ProductPrice = styled.h2`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.primary || "#007bff"};
  margin-bottom: 20px;
  text-align: center;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h4`
  margin-bottom: 10px;
`;

const ColorOptionsDetailProduct = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
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
  gap: 10px;
  justify-content: center;
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

const StockInfo = styled.p`
  text-align: center;
`;

const AddToCartButton = styled.button`
  width: 100%;
  max-width: 250px;
  padding: 10px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.primary || "#007bff"};
  color: #fff;
  font-size: 1rem;
  border: none;
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

const FeaturesWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  margin:auto;
  gap: 15px;
  margin-top: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
  background-color: ${(props) => props.theme.colors.secondaryBackground || "#f1f1f1"};
  border-radius: 15px;
`;

const FeatureText = styled.span`
  font-size: 0.9rem;
`;
