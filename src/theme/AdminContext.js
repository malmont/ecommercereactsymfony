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
  const [navbarComponent, setNavbarComponent] = useState('typeA'); 
  const [styleChoice, setStyleChoice] = useState('style1'); 
  const [themeChoice, setThemeChoice] = useState('light'); 
  const [selectTypeProductFetch, setselectTypeProductFetch] = useState('bestsellers');
  const [showAdminSettings, setShowAdminSettings] = useState(true);
  const [loadingSettings, setLoadingSettings] = useState(true);
  const [selectTypeProductFetchSection2, setselectTypeProductFetchSection2] = useState('bestsellers');
  const [selectTypeProductFetchSection3, setselectTypeProductFetchSection3] = useState('bestsellers');
  const [selectTypeProductFetchSection4, setselectTypeProductFetchSection4] = useState('bestsellers');

  const fetchAdminSettings = async () => {
    try {
      const settings = await getAdminSettings(); 
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
        selectTypeProductFetchSection2(settings.selectTypeProductFetchSection2 || 'bestsellers');
        selectTypeProductFetchSection3(settings.selectTypeProductFetchSection3 || 'bestsellers');
        selectTypeProductFetchSection4(settings.selectTypeProductFetchSection4 || 'bestsellers');
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
    setselectTypeProductFetchSection4
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
};
