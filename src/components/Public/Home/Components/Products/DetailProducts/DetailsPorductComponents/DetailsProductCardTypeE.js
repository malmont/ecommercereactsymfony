import React, { useState } from "react";
import { HiCash } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { IoIosPaperPlane } from "react-icons/io";
import { BiAnalyse } from "react-icons/bi";
import { observer } from "mobx-react-lite";
import styled from "styled-components";

const DetailsProductCardTypeE = ({
  category,
  uniqueColors,
  selectedStyle,
  viewModel,
  handleAddToCart,
}) => {
  const [activeTab, setActiveTab] = useState("details");

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

      {/* Tabs Section */}
      <TabsWrapper>
        <TabButton
          active={activeTab === "details"}
          onClick={() => setActiveTab("details")}
        >
          Détails
        </TabButton>
        <TabButton
          active={activeTab === "advantages"}
          onClick={() => setActiveTab("advantages")}
        >
          Avantages
        </TabButton>
        <TabButton
          active={activeTab === "stock"}
          onClick={() => setActiveTab("stock")}
        >
          Stock
        </TabButton>
      </TabsWrapper>

      {/* Tab Content */}
      <TabContent>
        {activeTab === "details" && (
          <DetailsTab>
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
          </DetailsTab>
        )}

        {activeTab === "advantages" && (
          <AdvantagesTab>
            <Advantage>
              <HiCash size={30} />
              <FeatureText>Paiement sécurisé</FeatureText>
            </Advantage>
            <Advantage>
              <AiFillStar size={30} />
              <FeatureText>Livraison rapide</FeatureText>
            </Advantage>
            <Advantage>
              <IoIosPaperPlane size={30} />
              <FeatureText>Suivi d'expédition</FeatureText>
            </Advantage>
            <Advantage>
              <BiAnalyse size={30} />
              <FeatureText>Retours faciles</FeatureText>
            </Advantage>
          </AdvantagesTab>
        )}

        {activeTab === "stock" && (
          <StockTab>
            {viewModel.selectedSize && viewModel.selectedColor ? (
              <p>
                Stock disponible :{" "}
                <strong>{viewModel.availableStock ?? "Indisponible"}</strong>
              </p>
            ) : (
              <p>Veuillez sélectionner une taille et une couleur.</p>
            )}
          </StockTab>
        )}
      </TabContent>

      {/* Add to Cart Button */}
      <AddToCartButton
        onClick={handleAddToCart}
        disabled={!viewModel.selectedSize || !viewModel.selectedColor}
      >
        Ajouter au panier
      </AddToCartButton>
    </ContainerDetailsProduct>
  );
};

export default observer(DetailsProductCardTypeE);

// Styled Components
const ContainerDetailsProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.cardBackground || "#ffffff"};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: auto;
`;

const ImageWrapper = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const ImageEncadrement = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
`;

const TabsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const TabButton = styled.button`
  padding: 10px 20px;
  background-color: ${(props) =>
    props.active ? props.theme.colors.primary || "#007bff" : "#f1f1f1"};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) =>
      props.active ? props.theme.colors.primaryHover || "#0056b3" : "#e2e2e2"};
  }
`;

const TabContent = styled.div`
  width: 100%;
`;

const DetailsTab = styled.div`
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

const AdvantagesTab = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 15px;
`;

const Advantage = styled.div`
  text-align: center;
`;

const FeatureText = styled.p`
  margin-top: 5px;
  font-size: 0.9rem;
`;

const StockTab = styled.div`
  text-align: center;
`;

const AddToCartButton = styled.button`
  width: 80%;
  max-width: 250px;
  padding: 10px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.primary || "#007bff"};
  color: #fff;
  font-size: 1rem;
  border: none;
  margin-top: 20px;
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
