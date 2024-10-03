import { makeAutoObservable, runInAction } from 'mobx';

class AddressListViewModel {
  addresses = [];
  loading = true;

  constructor(fetchAddresses, user) {
    makeAutoObservable(this);
    this.user = user;
    this.fetchAddresses = fetchAddresses;
    this.loadAddresses();
  }

  async loadAddresses() {
    if (!this.user) return;

    try {
      const data = await this.fetchAddresses(this.user.token);
      runInAction(() => {
        this.addresses = data;
        this.loading = false;
      });
    } catch (error) {
      console.error('Failed to load addresses:', error);
      runInAction(() => {
        this.loading = false;
      });
    }
  }

  // Ajout de la méthode getAddressById
  getAddressById(id) {
    return this.addresses.find((address) => address.id === id);
  }
}

export default AddressListViewModel;
