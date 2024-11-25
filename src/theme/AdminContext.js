import React, { createContext, useContext, useState, useEffect } from 'react';
import { getAdminSettings } from './adminSettingsService'; 


const AdminContext = createContext();

export const useAdminContext = () => {
  return useContext(AdminContext);
};

export const AdminProvider = ({ children }) => {
  const [section1Component, setSection1Component] = useState('typeA'); 
  const [typeComponentSection1, setTypeComponentSection1] = useState('typeA'); 
  const [section2Component, setSection2Component] = useState('typeA'); 
  const [typeComponentSection2, setTypeComponentSection2] = useState('typeA');
  const [section3Component, setSection3Component] = useState('typeA'); 
  const [typeComponentSection3, setTypeComponentSection3] = useState('typeA');
  const [section4Component, setSection4Component] = useState('typeA'); 
  const [typeComponentSection4, setTypeComponentSection4] = useState('typeA');
  const [section5Component, setSection5Component] = useState('typeA'); 
  const [typeComponentSection5, setTypeComponentSection5] = useState('typeA');
  const [section6Component, setSection6Component] = useState('typeA'); 
  const [typeComponentSection6, setTypeComponentSection6] = useState('typeA');
  const [section7Component, setSection7Component] = useState('typeA'); 
  const [typeComponentSection7, setTypeComponentSection7] = useState('typeA');
  const [navbarComponent, setNavbarComponent] = useState('typeA'); 
  const [styleChoice, setStyleChoice] = useState('style1'); 
  const [themeChoice, setThemeChoice] = useState('light'); 
  const [selectTypeProductFetch, setselectTypeProductFetch] = useState('bestsellers');
  const [showAdminSettings, setShowAdminSettings] = useState(true);
  const [loadingSettings, setLoadingSettings] = useState(true);
  const [selectTypeProductFetchSection2, setselectTypeProductFetchSection2] = useState('bestsellers');
  const [selectTypeProductFetchSection3, setselectTypeProductFetchSection3] = useState('bestsellers');
  const [selectTypeProductFetchSection4, setselectTypeProductFetchSection4] = useState('bestsellers');
  const [selectTypeProductFetchSection5, setselectTypeProductFetchSection5] = useState('bestsellers');
  const [selectTypeProductFetchSection6, setselectTypeProductFetchSection6] = useState('bestsellers');
  const [selectTypeProductFetchSection7, setselectTypeProductFetchSection7] = useState('bestsellers');
  const [typeCategoryCard, setTypeCategoryCard] = useState('typeA');
  const [detailsProductCardComponent , setDetailsProductCardComponent] = useState('typeA');
  const [cartItemCardComponent, setCartItemCardComponent] = useState('typeA');
  const [totalCardComponent, setTotalCardComponent] = useState('typeA');
  const [checkoutCardComponent, setCheckoutCardComponent] = useState('typeA');
  const [accountDashboardComponent, setAccountDashboardComponent] = useState('typeA');
  const [orderListCardComponent, setOrderListCardComponent] = useState('typeA');
  const [adressListCardComponent , setAdressListCardComponent] = useState('typeA');

  const fetchAdminSettings = async () => {
    try {
      const settings = await getAdminSettings(); 
      console.log('settings from fetchAdminSettings', settings);
      if (settings) {
        console.log('settings', settings);
        setNavbarComponent(settings.navbarComponent || 'typeA');
        setStyleChoice(settings.styleChoice || 'style1');
        setThemeChoice(settings.themeChoice || 'light');
        setSection1Component(settings.section1Component || 'typeA');
        setTypeComponentSection1(settings.typeComponentSection1 || 'typeA');
        setselectTypeProductFetch(settings.selectTypeProductFetch || 'bestsellers');
        setSection2Component(settings.section2Component || 'typeA');
        setTypeComponentSection2(settings.typeComponentSection2 || 'typeA');
        setSection3Component(settings.section3Component || 'typeA');
        setTypeComponentSection3(settings.typeComponentSection3 || 'typeA');
        setSection4Component(settings.section4Component || 'typeA');
        setTypeComponentSection4(settings.typeComponentSection4 || 'typeA');
        setselectTypeProductFetchSection2(settings.selectTypeProductFetchSection2 || 'bestsellers');
        setselectTypeProductFetchSection3(settings.selectTypeProductFetchSection3 || 'bestsellers');
        setselectTypeProductFetchSection4(settings.selectTypeProductFetchSection4 || 'bestsellers');
        setselectTypeProductFetchSection5(settings.selectTypeProductFetchSection5 || 'bestsellers');
        setselectTypeProductFetchSection6(settings.selectTypeProductFetchSection6 || 'bestsellers');
        setselectTypeProductFetchSection7(settings.selectTypeProductFetchSection7 || 'bestsellers');
        setSection5Component(settings.section5Component || 'typeA');
        setTypeComponentSection5(settings.typeComponentSection5 || 'typeA');
        setSection6Component(settings.section6Component || 'typeA');
        setTypeComponentSection6(settings.typeComponentSection6 || 'typeA');
        setSection7Component(settings.section7Component || 'typeA');
        setTypeComponentSection7(settings.typeComponentSection7 || 'typeA');
        setTypeCategoryCard(settings.typeCategoryCard || 'typeA');
        setDetailsProductCardComponent(settings.detailsProductCardComponent || 'typeA');
        setCartItemCardComponent(settings.cartItemCardComponent || 'typeA');
        setTotalCardComponent(settings.totalCardComponent || 'typeA');
        setCheckoutCardComponent(settings.checkoutCardComponent || 'typeA');
        setAccountDashboardComponent(settings.accountDashboardComponent || 'typeA');
        setOrderListCardComponent(settings.orderListCardComponent || 'typeA');

      }
    } catch (error) {
      console.error('Erreur lors de la récupération des paramètres:', error);
    } finally {
      setLoadingSettings(false); 
    }
  };

  useEffect(() => {
    fetchAdminSettings();
  }, []);

  useEffect(() => {
    const savedVisibility = localStorage.getItem('showAdminSettings');
    if (savedVisibility !== null) {
      setShowAdminSettings(JSON.parse(savedVisibility));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('showAdminSettings', JSON.stringify(showAdminSettings));
  }, [showAdminSettings]);

  const toggleAdminSettings = () => {
    setShowAdminSettings(!showAdminSettings);
  };

  const value = {
    navbarComponent, 
    setNavbarComponent, 
    styleChoice, 
    setStyleChoice, 
    themeChoice, 
    setThemeChoice, 
    showAdminSettings, 
    toggleAdminSettings,
    section1Component,
    setSection1Component,
    typeComponentSection1,
    setTypeComponentSection1,
    loadingSettings,
    selectTypeProductFetch,
    setselectTypeProductFetch,
    section2Component,
    setSection2Component,
    typeComponentSection2,
    setTypeComponentSection2,
    section3Component,
    setSection3Component,
    typeComponentSection3,
    setTypeComponentSection3,
    section4Component,
    setSection4Component,
    typeComponentSection4,
    setTypeComponentSection4,
    selectTypeProductFetchSection2,
    setselectTypeProductFetchSection2,
    selectTypeProductFetchSection3,
    setselectTypeProductFetchSection3,
    selectTypeProductFetchSection4,
    setselectTypeProductFetchSection4,
    section5Component,
    setSection5Component,
    typeComponentSection5,
    setTypeComponentSection5,
    selectTypeProductFetchSection5,
    setselectTypeProductFetchSection5,
    section6Component,
    setSection6Component,
    typeComponentSection6,
    setTypeComponentSection6,
    selectTypeProductFetchSection6,
    setselectTypeProductFetchSection6,
    section7Component,
    setSection7Component,
    typeComponentSection7,
    setTypeComponentSection7,
    selectTypeProductFetchSection7,
    setselectTypeProductFetchSection7,
    typeCategoryCard,
    setTypeCategoryCard,
    detailsProductCardComponent,
    setDetailsProductCardComponent,
    cartItemCardComponent,
    setCartItemCardComponent,
    totalCardComponent,
    setTotalCardComponent,
    checkoutCardComponent,
    setCheckoutCardComponent,
    accountDashboardComponent,
    setAccountDashboardComponent,
    orderListCardComponent,
    setOrderListCardComponent,
    adressListCardComponent,
    setAdressListCardComponent,
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
};
