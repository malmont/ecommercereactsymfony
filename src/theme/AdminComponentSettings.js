import React from 'react';
import { useAdminContext } from './AdminContext'; 
import { themes } from './All_themes';
import { styles } from './All_styles'; 
import { componentsNavbar } from './All_components';
import { componentsSection1 } from './All_components';
import { ComponentTypeSection1 } from './All_components';
import { saveAdminSettings } from './adminSettingsService'; 
import styled from 'styled-components'; 

const AdminComponentSettings = () => {
  const {
    navbarComponent, 
    setNavbarComponent, 
    styleChoice, 
    setStyleChoice, 
    themeChoice, 
    setThemeChoice, 
    section1Component,
    setSection1Component,
    typeComponentSection1,
    setTypeComponentSection1,
  } = useAdminContext();

  const [section1Selected, setSection1Selected] = useState(false);

  const handleNavbarChange = (event) => setNavbarComponent(event.target.value);
  const handleStyleChange = (event) => setStyleChoice(event.target.value);
  const handleThemeChange = (event) => setThemeChoice(event.target.value);

  const handleComponentsSection1 = (event) => {
    setSection1Component(event.target.value);
    setSection1Selected(true); // Marque comme sélectionné dès qu'une option est choisie
  };

  const handleComponentTypeSection1 = (event) => setTypeComponentSection1(event.target.value);

  const handleSaveSettings = async () => {
    const settings = {
      navbarComponent,
      styleChoice,
      themeChoice,
      section1Component,
      typeComponentSection1,
    };

    try {
      await saveAdminSettings(settings); 
      alert('Paramètres sauvegardés avec succès !');
    } catch (error) {
      console.error('Erreur lors de la sauvegarde des paramètres :', error);
      alert('Erreur lors de la sauvegarde des paramètres.');
    }
  };

  return (
    <Wrapper>
      <h2>Paramètres du composant</h2>
      {/* Choix du style */}
      <SettingGroup>
        <Label>Choisissez un style :</Label>
        <Select value={styleChoice} onChange={handleStyleChange}>
          {Object.keys(styles).map((styleKey) => (
            <option key={styleKey} value={styleKey}>
              {styleKey}
            </option>
          ))}
        </Select>
      </SettingGroup>

      {/* Choix du thème */}
      <SettingGroup>
        <Label>Choisissez un thème :</Label>
        <Select value={themeChoice} onChange={handleThemeChange}>
          {Object.keys(themes).map((themeKey) => (
            <option key={themeKey} value={themeKey}>
              {themeKey}
            </option>
          ))}
        </Select>
      </SettingGroup>

      {/* Choix du composant Navbar */}
      <SettingGroup>
        <Label>Choisissez un composant Navbar :</Label>
        <Select value={navbarComponent} onChange={handleNavbarChange}>
          {Object.keys(componentsNavbar).map((componentKey) => (
            <option key={componentKey} value={componentKey}>
              {componentsNavbar[componentKey].name}
            </option>
          ))}
        </Select>
      </SettingGroup>

      {/* Choix du composant section1 */}
      <SettingGroup>
        <Label>Choisissez un composant de la section 1 :</Label>
        <Select value={section1Component} onChange={handleComponentsSection1}>
          {Object.keys(componentsSection1).map((componentKey) => (
            <option key={componentKey} value={componentKey}>
              {componentsSection1[componentKey].name}
            </option>
          ))}
        </Select>
      </SettingGroup>

      {/* Choix du type de composant - visible uniquement après sélection dans section1Component */}
      {section1Selected && (
        <SettingGroup>
          <Label>Choisissez un type de composant :</Label>
          <Select value={typeComponentSection1} onChange={handleComponentTypeSection1}>
            {Object.keys(ComponentTypeSection1).map((componentKey) => (
              <option key={componentKey} value={componentKey}>
                {ComponentTypeSection1[componentKey].name}
              </option>
            ))}
          </Select>
        </SettingGroup>
      )}

      {/* Bouton de sauvegarde */}
      <SaveButton onClick={handleSaveSettings}>
        Sauvegarder les paramètres
      </SaveButton>
    </Wrapper>
  );
};

export default AdminComponentSettings;

const Wrapper = styled.div`
  padding: 20px;
  max-width: 600px;
  margin-top: 90px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const SettingGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const SaveButton = styled.button`
  margin-top: 20px;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
