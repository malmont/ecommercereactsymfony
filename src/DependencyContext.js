import React, { createContext, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AuthContext from '../src/Contexts/authContext';
import ProfileViewModel from '../src/components/Private/Profile/ProfileViewModel';
import CarouselViewModel from '../src/components/Public/Home/Components/Carousel/CarouselComp/CarouselViewModel';

import RegisterViewModel from '../src/components/Public/register/RegisterViewModel';
import LoginViewModel from '../src/components/Public/Login/LoginViewModel';
import CartViewModel from '../src/components/Public/Cart/Total/CartViewModel';
import { fetchUserProfile, updateUserProfile } from '../src/components/Private/Profile/api';
import { getProductByOffers} from '../src/components/Public/Home/Components/Carousel/carouselApi';
import OrderListViewModel from '../src/components/Private/Dashboards/OrderListViewModel';
import AddressListViewModel from '../src/components/Private/Dashboards/AddressListViewModel';
import HeaderViewModel from '../src/components/Public/Home/Components/Header/HeaderViewModel';
import CarouselNewArrivalViewModel from '../src/components/Public/Home/Components/Carousel/NewArrival/CarouselNewArrivalViewModel';
import CarouselBestSellerViewModel from '../src/components/Public/Home/Components/Carousel/BesSeller/CarouselBestSellerViewModel';
import { fetchAddresses, fetchUserOrders,fetchCarriers } from '../src/components/Private/Dashboards/api';
import CarrierListViewModel from '../src/components/Private/Dashboards/CarrierListViewModel';


const DependencyContext = createContext();

export const DependencyProvider = ({ children }) => {
  const { login, logout, user } = useContext(AuthContext);  
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const profileViewModel = new ProfileViewModel(user, fetchUserProfile, updateUserProfile);
  const carouselViewModel = new CarouselViewModel(getProductByOffers);
  const carouselNewArrivalViewModel = new CarouselNewArrivalViewModel(getProductByOffers);
  const carouselBestSellerViewModel = new CarouselBestSellerViewModel(getProductByOffers);
  const orderListViewModel = new OrderListViewModel(fetchUserOrders, user);
  const addressListViewModel = new AddressListViewModel(fetchAddresses, user);
  const carrierListViewModel = new CarrierListViewModel(fetchCarriers);
  const registerViewModel = new RegisterViewModel();
  
  // Passe tout le AuthContext au LoginViewModel
  const loginViewModel = new LoginViewModel({ login, logout, user }); 
  const cartViewModel = new CartViewModel(user, cart, dispatch);
  const headerViewModel = new HeaderViewModel();

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
      orderListViewModel,
      addressListViewModel,
      carrierListViewModel
    }}>
      {children}
    </DependencyContext.Provider>
  );
};

export const useDependencies = () => {
  return useContext(DependencyContext);
};
