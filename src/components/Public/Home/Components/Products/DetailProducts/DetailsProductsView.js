import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useObserver } from "mobx-react-lite";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../../../redux/cartSlice";
import { useDependencies } from '../../../../../../DependencyContext';
import DetailsProductCardTypeA from "./DetailsPorductComponents/DetailsProductCardTypeA"; 
import { styles } from "../../../../../../theme/AllStyles";
import { useAdminContext } from "../../../../../../theme/AdminContext";

const DetailsProductsView = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
 
  const { detailsProductsViewModel: viewModel } = useDependencies();
  const { styleChoice,loadingSettings } = useAdminContext();
  useEffect(() => {
    if (!state || !state.category) {
      console.error("Missing category data.");
    }
  }, [state]);

  const handleAddToCart = () => {
    const { selectedSize, selectedColor } = viewModel;
    if (selectedSize && selectedColor) {
      const selectedVariant = state.category.variants.find(
        (variant) =>
          variant.size.name === selectedSize && variant.color.name === selectedColor
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

  return useObserver(() => {
    if (!state || !state.category) {
      return <p>Loading...</p>;
    }
    const uniqueColors = viewModel.getUniqueColors(state.category.variants);
    
    
    if (loadingSettings) {
      return <div>Loading...</div>;
    }
    const selectedStyle = styles[styleChoice];

    return (
        <DetailsProductCardTypeA
          category={state.category}
          uniqueColors={uniqueColors}
          selectedStyle={selectedStyle}
          viewModel={viewModel}
          handleAddToCart={handleAddToCart}
        />
      );
    });
  };

export default DetailsProductsView;
