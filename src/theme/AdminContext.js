import React, { createContext, useContext, useState, useEffect } from 'react';
import { getAdminSettings } from './adminSettingsService'; 

const AdminContext = createContext();

export const useAdminContext = () => {
  return useContext(AdminContext);
};

export const AdminProvider = ({ children }) => {
  const [section1Component, setSection1Component] = useState('typeA'); 
  const [typeComponentSection1, setTypeComponentSection1] = useState('typeA'); 
  const [navbarComponent, setNavbarComponent] = useState('typeA'); 
  const [styleChoice, setStyleChoice] = useState('style1'); 
  const [themeChoice, setThemeChoice] = useState('light'); 
  const [showAdminSettings, setShowAdminSettings] = useState(true);
  const [loadingSettings, setLoadingSettings] = useState(true);

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
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
};
