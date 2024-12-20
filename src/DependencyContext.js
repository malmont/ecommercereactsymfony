import React, { createContext, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AuthContext from '../src/Contexts/authContext';
import ProfileViewModel from '../src/components/Private/Profile/ProfileViewModel';
import { useNavigate } from 'react-router-dom';
import RegisterViewModel from '../src/components/Public/register/RegisterViewModel';
import LoginViewModel from '../src/components/Public/Login/LoginViewModel';
import CartViewModel from '../src/components/Public/Cart/Total/CartViewModel';
import { fetchUserProfile, updateUserProfile } from '../src/components/Private/Profile/api';
import { getProductByOffers} from '../src/components/Public/Home/Components/Carousel/carouselApi';
import OrderListViewModel from '../src/components/Private/Dashboards/OrderListViewModel';
import DetailsProductsViewModel from '../src/components/Public/Home/Components/Products/DetailProducts/DetailsProductsViewModel';
import AddressListViewModel from '../src/components/Private/Dashboards/AddressListViewModel';
import CarouselComposantViewModel from '../src/components/Public/Home/Components/Carousel/CarouselComposant/CarouselComposantViewModel';
import { fetchAddresses, fetchUserOrders,fetchCarriers } from '../src/components/Private/Dashboards/api';
import CarrierListViewModel from '../src/components/Private/Dashboards/CarrierListViewModel';
import CheckoutViewModel from '../src/components/Public/Cart/Total/CheckoutViewModel';
import NavbarViewModel from '../src/components/Public/Navbar/NavbarViewModel'; 


const DependencyContext = createContext();

export const DependencyProvider = ({ children }) => {
  const { login, logout, user } = useContext(AuthContext);  
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profileViewModel = new ProfileViewModel(user, fetchUserProfile, updateUserProfile);
  const carouselViewModelSection1 = new CarouselComposantViewModel(getProductByOffers);
  const carouselViewModelSection2 = new CarouselComposantViewModel(getProductByOffers);
  const carouselViewModelSection3 = new CarouselComposantViewModel(getProductByOffers);
  const carouselViewModelSection4 = new CarouselComposantViewModel(getProductByOffers);
  const carouselViewModelSection5 = new CarouselComposantViewModel(getProductByOffers);
  const carouselViewModelSection6 = new CarouselComposantViewModel(getProductByOffers);
  const carouselViewModelSection7 = new CarouselComposantViewModel(getProductByOffers);
  const orderListViewModel = new OrderListViewModel(fetchUserOrders, user);
  const addressListViewModel = new AddressListViewModel(fetchAddresses, user);
  const carrierListViewModel = new CarrierListViewModel(fetchCarriers);
  const registerViewModel = new RegisterViewModel();
  const detailsProductsViewModel = new DetailsProductsViewModel();
  
  // Passe tout le AuthContext au LoginViewModel
  const loginViewModel = new LoginViewModel({ login, logout, user }); 
  const cartViewModel = new CartViewModel(user, cart, dispatch);

  const checkoutViewModel = new CheckoutViewModel(cartViewModel, addressListViewModel, carrierListViewModel);
  const navbarViewModel = new NavbarViewModel({ user }, state => cart,navigate); 
  return (
    <DependencyContext.Provider value={{
      profileViewModel,
      registerViewModel,
      loginViewModel,
      cartViewModel,
      carouselViewModelSection1,
      carouselViewModelSection2,
      carouselViewModelSection3,
      carouselViewModelSection4,
      carouselViewModelSection5,
      carouselViewModelSection6,
      carouselViewModelSection7,
      orderListViewModel,
      addressListViewModel,
      carrierListViewModel,
      checkoutViewModel,
      navbarViewModel,
      detailsProductsViewModel
    }}>
      {children}
    </DependencyContext.Provider>
  );
};

export const useDependencies = () => {
  return useContext(DependencyContext);
};
