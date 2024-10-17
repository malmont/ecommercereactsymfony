import React, { createContext, useContext, useState, useEffect } from 'react';
import { getAdminSettings } from './adminSettingsService'; 

const AdminContext = createContext();

export const useAdminContext = () => {
  return useContext(AdminContext);
};

export const AdminProvider = ({ children }) => {
  const [navbarComponent, setNavbarComponent] = useState('typeA'); 
  const [styleChoice, setStyleChoice] = useState('style1'); 
  const [themeChoice, setThemeChoice] = useState('light'); 
  const [showAdminSettings, setShowAdminSettings] = useState(true);


  const fetchAdminSettings = async () => {
    try {
      const settings = await getAdminSettings(); 
      if (settings) {
        setNavbarComponent(settings.navbarComponent || 'typeA');
        setStyleChoice(settings.styleChoice || 'style1');
        setThemeChoice(settings.themeChoice || 'light');
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des paramètres:', error);
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
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
};
