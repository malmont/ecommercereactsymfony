import React, { createContext, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AuthContext from '../src/Contexts/authContext';
import ProfileViewModel from '../src/components/Private/Profile/ProfileViewModel';
import CarouselViewModel from '../src/components/Public/Home/Components/Carousel/CarouselComp/CarouselViewModel';
import { useNavigate } from 'react-router-dom';
import RegisterViewModel from '../src/components/Public/register/RegisterViewModel';
import LoginViewModel from '../src/components/Public/Login/LoginViewModel';
import CartViewModel from '../src/components/Public/Cart/Total/CartViewModel';
import { fetchUserProfile, updateUserProfile } from '../src/components/Private/Profile/api';
import { getProductByOffers} from '../src/components/Public/Home/Components/Carousel/carouselApi';
import OrderListViewModel from '../src/components/Private/Dashboards/OrderListViewModel';
import AddressListViewModel from '../src/components/Private/Dashboards/AddressListViewModel';
import HeaderViewModel from '../src/components/Public/Home/Components/Header/HeaderViewModel';
import CarouselNewArrivalViewModel from '../src/components/Public/Home/Components/Carousel/NewArrival/CarouselNewArrivalViewModel';
import CarouselComp2ViewModel from '../src/components/Public/Home/Components/Carousel/Carouselcomp2/CarouselComp2ViewModel';
import CarouselComp3ViewModel from '../src/components/Public/Home/Components/Carousel/Carouselcomp3/CarouselComp3ViewModel';
import CarouselComp4ViewModel from '../src/components/Public/Home/Components/Carousel/Carouselcomp4/CarouselComp4ViewModel';
import CarouselBestSellerViewModel from '../src/components/Public/Home/Components/Carousel/BesSeller/CarouselBestSellerViewModel';
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
  const carouselViewModel = new CarouselViewModel(getProductByOffers);
  const carouselNewArrivalViewModel = new CarouselNewArrivalViewModel(getProductByOffers);
  const carouselBestSellerViewModel = new CarouselBestSellerViewModel(getProductByOffers);
  const carouselComp2ViewModel = new CarouselComp2ViewModel(getProductByOffers);
  const carouselComp3ViewModel = new CarouselComp3ViewModel(getProductByOffers);
  const carouselComp4ViewModel = new CarouselComp4ViewModel(getProductByOffers);
  const orderListViewModel = new OrderListViewModel(fetchUserOrders, user);
  const addressListViewModel = new AddressListViewModel(fetchAddresses, user);
  const carrierListViewModel = new CarrierListViewModel(fetchCarriers);
  const registerViewModel = new RegisterViewModel();
  
  // Passe tout le AuthContext au LoginViewModel
  const loginViewModel = new LoginViewModel({ login, logout, user }); 
  const cartViewModel = new CartViewModel(user, cart, dispatch);
  const headerViewModel = new HeaderViewModel();
  const checkoutViewModel = new CheckoutViewModel(cartViewModel, addressListViewModel, carrierListViewModel);
  const navbarViewModel = new NavbarViewModel({ user }, state => cart,navigate); 
  return (
    <DependencyContext.Provider value={{

      profileViewModel,
      carouselViewModel,
      registerViewModel,
      loginViewModel,
      cartViewModel,
      headerViewModel,
      carouselNewArrivalViewModel,
      carouselBestSellerViewModel,
      carouselComp2ViewModel,
      carouselComp3ViewModel,
      carouselComp4ViewModel,
      orderListViewModel,
      addressListViewModel,
      carrierListViewModel,
      checkoutViewModel,
      navbarViewModel
    }}>
      {children}
    </DependencyContext.Provider>
  );
};

export const useDependencies = () => {
  return useContext(DependencyContext);
};
