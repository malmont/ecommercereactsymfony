
import { makeAutoObservable, runInAction } from 'mobx';

class CarrierListViewModel {
  carriers = [];
  loading = true;

  constructor(fetchCarriers) {
    makeAutoObservable(this);
    this.fetchCarriers = fetchCarriers;
    this.loadCarriers();
  }

  async loadCarriers() {
    try {
      const data = await this.fetchCarriers();
      runInAction(() => {
        this.carriers = data;
        this.loading = false;
      });
    } catch (error) {
      console.error('Failed to load carriers:', error);
      runInAction(() => {
        this.loading = false;
      });
    }
  }
}

export default CarrierListViewModel;
