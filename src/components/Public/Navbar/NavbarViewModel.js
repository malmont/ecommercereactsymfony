import { makeAutoObservable } from "mobx";

class NavbarViewModel {
  user = null;
  height = 90;
  toggleMenuMobile = false;
  largeur = window.innerWidth;
  selectedCurrency = 'USD';
  selectedLanguage = 'English';
  cart = [];

  // Définitions des chemins
  loginPath = "/login";
  registerPath = "/register";
  dashboardPath = "/dashboard";
  profilePath = "/profile";
  homePath = "/";
  categoriesPath = "/Product";
  cartPath = "/cart";

  constructor(authContext, cartSelector) {
    this.user = authContext.user;
    this.cart = cartSelector((state) => state.cart);
    makeAutoObservable(this);
  }

  toogleUl() {
    this.toggleMenuMobile = !this.toggleMenuMobile;
  }


  handleCurrencyChange(currency) {
    this.selectedCurrency = currency;
  }

  handleLanguageChange(language) {
    this.selectedLanguage = language;
  }

  getTotalQuantity() {
    return this.cart.reduce((total, item) => total + item.quantity, 0);
  }

  updateWidth() {
    this.largeur = window.innerWidth;
    if (this.largeur > 622) {
      this.height = 90;
      this.toggleMenuMobile = false;
    }
  }
}

export default NavbarViewModel;
