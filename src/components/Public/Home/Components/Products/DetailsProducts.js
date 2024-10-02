import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { addToCart } from "../../../../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { HiCash } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { IoIosPaperPlane } from "react-icons/io";
import { BiAnalyse } from "react-icons/bi";

export default function DetailsProducts() {
  const { state } = useLocation();
  const dispatch = useDispatch();



  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [availableStock, setAvailableStock] = useState(null);

  console.log("Données reçues : ", state);  
  
    if (!state || !state.category) {
      return <p>Loading...</p>; 
    }

  const getUniqueColors = (variants) => {
    const uniqueColors = [];
    variants.forEach((variant) => {
      if (!uniqueColors.some((color) => color.id === variant.color.id)) {
        uniqueColors.push(variant.color);
      }
    });
    return uniqueColors;
  };

  const getAvailableSizes = (variants, selectedColor) => {
    return variants
      .filter((variant) => variant.color.name === selectedColor)
      .map((variant) => variant.size);
  };

  const updateStock = (selectedSize, selectedColor, variants) => {
    const matchingVariant = variants.find(
      (variant) =>
        variant.size.name === selectedSize && variant.color.name === selectedColor
    );
    if (matchingVariant) {
      setAvailableStock(matchingVariant.stockQuantity);
    } else {
      setAvailableStock(null);
    }
  };

  const handleAddToCart = () => {
    if (selectedSize && selectedColor) {
      const selectedVariant = state.category.variants.find(
        (variant) => variant.size.name === selectedSize && variant.color.name === selectedColor
      );
      
      if (selectedVariant) {
        const selectedColorDetails = selectedVariant.color; 
        dispatch(
          addToCart({
            id: state.category.id,
            title: state.category.name,
            image: state.category.image,
            price: state.category.price,
            size: selectedSize,   
            color: selectedColor,
            colorHex: selectedColorDetails.codeHexa,  
            variantId: selectedVariant.id, 
          })
        );
      } else {
        alert("Le variant sélectionné n'est pas disponible.");
      }
    } else {
      alert("Veuillez sélectionner une taille et une couleur.");
    }
  };
  const uniqueColors = getUniqueColors(state.category.variants);

  return (
    <Wrapper>
      <div className="principalDetails">
        <div className="row">
          <div className="col-md-6">
            <img
              className="imageEncadrement"
              width={530}
              src={state.category.image}
              alt={state.category.name} 
            />
          </div>
          <div className="col-md-6 center">
            <h1>{state.category.name}</h1>
            <h2>{(state.category.price / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</h2> 

            <div className="colorSelection">
              <h4>Sélectionnez une couleur :</h4>
              <div className="colorOptions">
                {uniqueColors.map((color) => (
                  <ColorButton
                    key={color.id}
                    onClick={() => {
                      setSelectedColor(color.name);
                      setSelectedSize(null); 
                      setAvailableStock(null); 
                    }}
                    isSelected={selectedColor === color.name}
                    color={color.codeHexa}
                  />
                ))}
              </div>
            </div>
            {selectedColor && (
              <div className="sizeSelection">
                <h4>Sélectionnez une taille :</h4>
                <div className="sizeOptions">
                  {getAvailableSizes(state.category.variants, selectedColor).map((size) => (
                    <SizeButton
                      key={size.id}
                      onClick={() => {
                        setSelectedSize(size.name);
                        updateStock(size.name, selectedColor, state.category.variants);
                      }}
                      isSelected={selectedSize === size.name}
                    >
                      {size.name.charAt(0)} 
                    </SizeButton>
                  ))}
                </div>
              </div>
            )}
            {selectedColor && (
              <div className="infoSelection">
                <p>Couleur sélectionnée : <strong>{selectedColor}</strong></p>
              </div>
            )}
            {selectedSize && (
              <div className="infoSelection">
                <p>Taille sélectionnée : <strong>{selectedSize}</strong></p>
              </div>
            )}
            {selectedSize && selectedColor && (
              <div className="infoSelection">
                <p>Stock disponible : <strong>{availableStock ?? "Indisponible"}</strong></p>
              </div>
            )}

            <button
              className="btn btn-primary p-2 my-4 activeButton"
              onClick={handleAddToCart}
              disabled={!selectedSize || !selectedColor}
            >
              Ajouter au panier
            </button>

            <div className="Feature">
              <div className="objectFeature">
                <HiCash size={30} />
                <p>Paiement sécurisé</p>
              </div>
              <div className="objectFeature">
                <AiFillStar size={30} />
                <p>Livraison rapide</p>
              </div>
              <div className="objectFeature">
                <IoIosPaperPlane size={30} />
                <p>Suivi d'expédition</p>
              </div>
              <div className="objectFeature">
                <BiAnalyse size={30} />
                <p>Retours faciles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .imageEncadrement {
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 10px;
    width: 100%;
    max-width: 500px;
    margin: auto;
  }
  .center {
    text-align: start;
    padding: 20px;
  }
  .sizeSelection,
  .colorSelection {
    margin: 20px 0;
  }
  .colorOptions, .sizeOptions {
    display: flex;
    gap: 10px;
    margin-top: 10px;
  }
  h4 {
    margin-bottom: 10px;
  }
  .infoSelection {
    margin-top: 10px;
    font-size: 16px;
    font-weight: 500;
  }
  .Feature {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
  }
  .objectFeature {
    text-align: center;
  }
  .objectFeature p {
    margin-top: 10px;
    font-size: 14px;
  }
`;

const SizeButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid ${(props) => (props.isSelected ? "#007BFF" : "#ccc")};
  background-color: ${(props) => (props.isSelected ? "#007BFF" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: #007BFF;
    color: white;
  }
`;

const ColorButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid ${(props) => (props.isSelected ? "#007BFF" : "#ccc")};
  background-color: ${(props) => props.color};
  cursor: pointer;

  &:hover {
    border: 2px solid #007BFF;
  }
`;
