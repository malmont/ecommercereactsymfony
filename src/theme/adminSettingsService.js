import { API_BASE_URL } from '../constants/apiConstants';

export const getAdminSettings = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}admin-settings`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur lors de la récupération des paramètres:', error);
    return null;
  }
};

export const saveAdminSettings = async (settings) => {
  try {
    const { navbarComponent,
      styleChoice,
      themeChoice,
      section1Component,
      typeComponentSection1, } = settings;
    const response = await fetch(`${API_BASE_URL}admin-settings`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        navbarComponent,
        styleChoice,
        themeChoice,
        section1Component,
        typeComponentSection1,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to save settings: ${response.statusText}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error('Error saving admin settings:', error);
    throw error;
  }
};
