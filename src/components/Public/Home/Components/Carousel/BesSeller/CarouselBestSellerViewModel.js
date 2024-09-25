import { makeAutoObservable, runInAction } from "mobx";
import { getProductByOffers } from '../carouselApi';
import ProductModel from '../../../../../../models/ProductModel';

class CarouselBestSellerViewModel {
  products = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  async loadProducts() {
    try {
      const productsData = await getProductByOffers('bestsellers');
      const productsArray = Object.values(productsData);
      const products = productsArray.map(product => new ProductModel(product));

      runInAction(() => {
        this.products = products;
        this.loading = false;
      });
    } catch (error) {
      console.error('Failed to load products:', error);
      runInAction(() => {
        this.loading = false;
      });
    }
  }
}

export default CarouselBestSellerViewModel;
