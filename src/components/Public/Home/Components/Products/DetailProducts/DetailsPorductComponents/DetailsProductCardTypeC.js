import React from "react";
import { HiCash } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { IoIosPaperPlane } from "react-icons/io";
import { BiAnalyse } from "react-icons/bi";
import { observer } from "mobx-react-lite";
import styled from "styled-components";

const DetailsProductCardTypeC = ({
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

        {/* Add to Cart Button */}
        <AddToCartButton
          onClick={handleAddToCart}
          disabled={!viewModel.selectedSize || !viewModel.selectedColor}
        >
          Ajouter au panier
        </AddToCartButton>
      </DetailsWrapper>

      {/* Features Section */}
      <FeatureDetailProduct as={selectedStyle.FeatureDetailProduct}>
        <ObjectFeatureDetailProduct>
          <HiCash size={30} />
          <p>Paiement sécurisé</p>
        </ObjectFeatureDetailProduct>
        <ObjectFeatureDetailProduct>
          <AiFillStar size={30} />
          <p>Livraison rapide</p>
        </ObjectFeatureDetailProduct>
        <ObjectFeatureDetailProduct>
          <IoIosPaperPlane size={30} />
          <p>Suivi d'expédition</p>
        </ObjectFeatureDetailProduct>
        <ObjectFeatureDetailProduct>
          <BiAnalyse size={30} />
          <p>Retours faciles</p>
        </ObjectFeatureDetailProduct>
      </FeatureDetailProduct>
    </ContainerDetailsProduct>
  );
};

export default observer(DetailsProductCardTypeC);

// Styled Components
const ContainerDetailsProduct = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageEncadrement = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 15px;
  object-fit: cover;
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ProductTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 10px;
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

const SizeOptionsDetailProduct = styled.div`
  display: flex;
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
  justify-content: center;
  gap: 15px;
  padding: 10px;
`;

const ObjectFeatureDetailProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  text-align: center;

  p {
    margin: 0;
  }
`;
