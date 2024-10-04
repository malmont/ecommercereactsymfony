import { makeAutoObservable, runInAction } from 'mobx';

class CheckoutViewModel {
  selectedCarrier = null;
  selectedAddress = null;
  selectedPaymentMethod = null;
  cart = [];
  totalPriceWithTax = 0;
  paymentMethods = [
    { id: 1, name: 'Credit Card', image: 'https://img.icons8.com/color/48/000000/visa.png' },
    { id: 2, name: 'PayPal', image: 'https://img.icons8.com/color/48/000000/paypal.png' },
    { id: 3, name: 'Bank Transfer', image: 'https://img.icons8.com/color/48/000000/bank.png' }
  ];

  constructor(cartViewModel, addressListViewModel, carrierListViewModel) {
    makeAutoObservable(this);
    this.cartViewModel = cartViewModel;
    this.addressListViewModel = addressListViewModel;
    this.carrierListViewModel = carrierListViewModel;
    this.cart = cartViewModel.cart;
    this.totalPriceWithTax = cartViewModel.totalPriceWithTax;
  }

  selectCarrier(id) {
    const selected = this.carrierListViewModel.carriers.find((carrier) => carrier.id === id);
    runInAction(() => {
      this.selectedCarrier = selected;
    });
  }

  selectAddress(id) {
    const selected = this.addressListViewModel.addresses.find((address) => address.id === id);
    runInAction(() => {
      this.selectedAddress = selected;
    });
  }

  selectPaymentMethod(id) {
    const selected = this.paymentMethods.find((method) => method.id === id);
    runInAction(() => {
      this.selectedPaymentMethod = selected;
    });
  }

  isCheckoutReady() {
    return this.selectedCarrier && this.selectedAddress && this.selectedPaymentMethod;
  }
}

export default CheckoutViewModel;
