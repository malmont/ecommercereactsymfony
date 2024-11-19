import { makeAutoObservable, runInAction } from "mobx";

class DetailsProductsViewModel {
  selectedSize = null;
  selectedColor = null;
  availableStock = null;

  constructor() {
    makeAutoObservable(this);
  }

  getUniqueColors(variants) {
    const uniqueColors = [];
    variants.forEach((variant) => {
      if (!uniqueColors.some((color) => color.id === variant.color.id)) {
        uniqueColors.push(variant.color);
      }
    });
    return uniqueColors;
  }

  getAvailableSizes(variants, selectedColor) {
    return variants
      .filter((variant) => variant.color.name === selectedColor)
      .map((variant) => variant.size);
  }

  updateStock(selectedSize, selectedColor, variants) {
    const matchingVariant = variants.find(
      (variant) =>
        variant.size.name === selectedSize && variant.color.name === selectedColor
    );
    runInAction(() => {
      this.availableStock = matchingVariant ? matchingVariant.stockQuantity : null;
    });
  }

  resetSelection() {
    runInAction(() => {
      this.selectedSize = null;
      this.availableStock = null;
    });
  }

  handleSizeSelection(sizeName, selectedColor, variants) {
    this.selectedSize = sizeName;
    this.updateStock(sizeName, selectedColor, variants);
  }

  handleColorSelection(colorName) {
    this.selectedColor = colorName;
    this.resetSelection();
  }
}

export default DetailsProductsViewModel;
