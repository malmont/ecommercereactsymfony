import { makeAutoObservable } from "mobx";
import CategoryIcon from '@mui/icons-material/Category';
import HomeIcon from '@mui/icons-material/Home';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';

class NavbarViewModel {
  user = null;
  height = 90;
  toggleMenuMobile = false;
  largeur = window.innerWidth;
  selectedCurrency = 'USD';
  selectedLanguage = 'English';
  cart = [];

  loginPath = "/login";
  registerPath = "/register";
  dashboardPath = "/dashboard";
  profilePath = "/profile";
  homePath = "/";
  categoriesPath = "/Product";
  cartPath = "/cart";

  icons = {
    CategoryIcon,
    HomeIcon,
    DashboardCustomizeIcon,
    PeopleAltIcon,
    LogoutIcon,
    PersonIcon,
    HowToRegIcon,
    ShoppingCartIcon,
    MenuIcon
  };

  constructor(authContext, cartSelector, navigate) {
    this.user = authContext.user;
    this.cart = cartSelector((state) => state.cart);
    this.navigate = navigate;
    makeAutoObservable(this);
  }

  toogleMenu = () => {
    if (this.height === 90) {
      this.height = 250;
      setTimeout(() => {
        this.toggleMenuMobile = true;
      }, 600);
    } else {
      this.height = 90;
      this.toggleMenuMobile = false;
    }
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

  getNavLinkClass = (isActive) => {
    return isActive ? "activeLink" : "noActiveLink";
  }

  getNavLinkCategoryClass = (isActive) => {
    return isActive ? "activeLink" : "noActiveLinkCategory";
  }

  shouldShowShoppingCart = () => {
    return this.largeur > 800;
  }

  shouldShowMobileMenu = () => {
    return this.toggleMenuMobile && this.largeur < 800;
  }

  navigateToCart = () => {
    this.navigate(this.cartPath);
  }
}

export default NavbarViewModel;