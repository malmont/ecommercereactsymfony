// OrderListViewModel.js
import { makeAutoObservable, runInAction } from 'mobx';

class OrderListViewModel {
  orders = [];
  loading = true;

  constructor(fetchUserOrders, user) {
    makeAutoObservable(this);
    this.user = user;
    this.fetchUserOrders = fetchUserOrders;
    this.loadOrders();
  }

  async loadOrders() {
    if (!this.user) return;

    try {
      const data = await this.fetchUserOrders(this.user.token);
      runInAction(() => {
        this.orders = data;
        this.loading = false;
      });
    } catch (error) {
      console.error('Failed to load orders:', error);
      runInAction(() => {
        this.loading = false;
      });
    }
  }
}
export default OrderListViewModel;