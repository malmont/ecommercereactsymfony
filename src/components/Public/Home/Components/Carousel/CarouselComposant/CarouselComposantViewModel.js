import { makeAutoObservable, runInAction } from "mobx";
import { getProductByOffers } from '../carouselApi';
import ProductModel from '../../../../../../models/ProductModel';

class CarouselComposantViewModel {
  products = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  async loadProducts(selectTypeProductFetch) {
    try {
      const productsData = await getProductByOffers(selectTypeProductFetch);
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

export default CarouselComposantViewModel;
