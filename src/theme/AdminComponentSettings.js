
import { useAdminContext } from './AdminContext';
import { themes } from './All_themes';
import { styles } from './All_styles';
import { componentsNavbar } from './All_components';
import { componentsSection1 } from './All_components';
import { ComponentTypeSection1, TypeProductFetch } from './All_components';
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

  } = useAdminContext();


  const handleNavbarChange = (event) => setNavbarComponent(event.target.value);
  const handleStyleChange = (event) => setStyleChoice(event.target.value);
  const handleThemeChange = (event) => setThemeChoice(event.target.value);


  const handleComponentsSection1 = (event) => {
    setSection1Component(event.target.value);
  };

  const handleSelectTypeProductFetch = (event) => {
    setselectTypeProductFetch(event.target.value);

  };

  const handleComponentTypeSection1 = (event) => setTypeComponentSection1(event.target.value);
  const handleComponentsSection2 = (event) => { setSection2Component(event.target.value); };
  const handleComponentTypeSection2 = (event) => setTypeComponentSection2(event.target.value);
  const handleSelectTypeProductFetchSection2 = (event) => setselectTypeProductFetchSection2(event.target.value);
  const handleComponentsSection3 = (event) => { setSection3Component(event.target.value); };
  const handleComponentTypeSection3 = (event) => setTypeComponentSection3(event.target.value);
  const handleSelectTypeProductFetchSection3 = (event) => setselectTypeProductFetchSection3(event.target.value);
  const handleComponentsSection4 = (event) => { setSection4Component(event.target.value); };
  const handleComponentTypeSection4 = (event) => setTypeComponentSection4(event.target.value);
  const handleSelectTypeProductFetchSection4 = (event) => setselectTypeProductFetchSection4(event.target.value);


  const handleSaveSettings = async () => {
    const settings = {
      navbarComponent,
      styleChoice,
      themeChoice,
      section1Component,
      typeComponentSection1,
      selectTypeProductFetch,
      selectTypeProductFetchSection2,
      selectTypeProductFetchSection3,
      selectTypeProductFetchSection4,
      typeComponentSection2,
      section2Component,
      typeComponentSection3,
      section3Component,
      typeComponentSection4,
      section4Component,
    };

    try {
      console.log('settings to save:', settings);
      await saveAdminSettings(settings);
      alert('Paramètres sauvegardés avec succès !');
    } catch (error) {
      console.error('Erreur lors de la sauvegarde des paramètres :', error);
      alert('Erreur lors de la sauvegarde des paramètres.');
    }
  };

  return (
    <Wrapper>
      <h5>Paramètres composants</h5>

      {/* Encadrement pour "Choix du style" */}
      <Card>

        <SettingGroup>
          <Label>Choix du Style</Label>
          <Select value={styleChoice} onChange={handleStyleChange}>
            {Object.keys(styles).map((styleKey) => (
              <option key={styleKey} value={styleKey}>
                {styleKey}
              </option>
            ))}
          </Select>
        </SettingGroup>
      </Card>

      {/* Encadrement pour "Choix du thème" */}
      <Card>
        <SettingGroup>
          <Label>Choix du thème</Label>
          <Select value={themeChoice} onChange={handleThemeChange}>
            {Object.keys(themes).map((themeKey) => (
              <option key={themeKey} value={themeKey}>
                {themeKey}
              </option>
            ))}
          </Select>
        </SettingGroup>
      </Card>

      {/* Encadrement pour "Choix de la Navbar" */}
      <Card>
        <SettingGroup>
          <Label>Choix de la Navbar</Label>
          <Select value={navbarComponent} onChange={handleNavbarChange}>
            {Object.keys(componentsNavbar).map((componentKey) => (
              <option key={componentKey} value={componentKey}>
                {componentsNavbar[componentKey].name}
              </option>
            ))}
          </Select>
        </SettingGroup>
      </Card>

      {/* Encadrement pour "Section 1" */}
      <Card>

        <SettingGroup>
          <Label>SECTION 1</Label>
          <Label>Choix type section 1</Label>
          <Select value={section1Component} onChange={handleComponentsSection1}>
            {Object.keys(componentsSection1).map((componentsSection1Key) => (
              <option key={componentsSection1Key} value={componentsSection1Key}>
                {componentsSection1[componentsSection1Key].name}
              </option>
            ))}
          </Select>
        </SettingGroup>

        <SettingGroup>
          <Label>Choix composant</Label>
          <Select value={typeComponentSection1} onChange={handleComponentTypeSection1}>
            {Object.keys(ComponentTypeSection1).map((ComponentTypeSection1Key) => (
              <option key={ComponentTypeSection1Key} value={ComponentTypeSection1Key}>
                {ComponentTypeSection1[ComponentTypeSection1Key].name}
              </option>
            ))}
          </Select>
        </SettingGroup>

        <SettingGroup>
          <Label>Choix type de produit</Label>
          <Select value={selectTypeProductFetch} onChange={handleSelectTypeProductFetch}>
            {Object.keys(TypeProductFetch).map((TypeProductFetchKey) => (
              <option key={TypeProductFetchKey} value={TypeProductFetchKey}>
                {TypeProductFetch[TypeProductFetchKey].name}
              </option>
            ))}
          </Select>
        </SettingGroup>
      </Card>

      {/* Encadrement pour "Section 2" */}
      <Card>
        <settingGroup>
          <Label>SECTION 2</Label>
          <Label>Choix type section 2</Label>
          <Select value={section2Component} onChange={handleComponentsSection2}>
            {Object.keys(componentsSection1).map((componentsSection2Key) => (
              <option key={componentsSection2Key} value={componentsSection2Key}>
                {componentsSection1[componentsSection2Key].name}
              </option>
            ))}
          </Select>
        </settingGroup>
        <settingGroup>
          <Label>Choix composant</Label>
          <Select value={typeComponentSection2} onChange={handleComponentTypeSection2}>
            {Object.keys(ComponentTypeSection1).map((ComponentTypeSection2Key) => (
              <option key={ComponentTypeSection2Key} value={ComponentTypeSection2Key}>
                {ComponentTypeSection1[ComponentTypeSection2Key].name}
              </option>
            ))}
          </Select>
        </settingGroup>

        <SettingGroup>
          <Label>Choix type de produit</Label>
          <Select value={selectTypeProductFetchSection2} onChange={handleSelectTypeProductFetchSection2}>
            {Object.keys(TypeProductFetch).map((TypeProductFetch2Key) => (
              <option key={TypeProductFetch2Key} value={TypeProductFetch2Key}>
                {TypeProductFetch[TypeProductFetch2Key].name}
              </option>
            ))}
          </Select>
        </SettingGroup>
      </Card>

      {/* Encadrement pour "Section 3" */}
      <Card>
        <SettingGroup>
          <Label>SECTION 3</Label>
          <Label>Choix type section 3</Label>
          <Select value={section3Component} onChange={handleComponentsSection3}>
            {Object.keys(componentsSection1).map((componentsSection3Key) => (
              <option key={componentsSection3Key} value={componentsSection3Key}>
                {componentsSection1[componentsSection3Key].name}
              </option>
            ))}
          </Select>
        </SettingGroup>
        <SettingGroup>
          <Label>Choix composant</Label>
          <Select value={typeComponentSection3} onChange={handleComponentTypeSection3}>
            {Object.keys(ComponentTypeSection1).map((ComponentTypeSection3Key) => (
              <option key={ComponentTypeSection3Key} value={ComponentTypeSection3Key}>
                {ComponentTypeSection1[ComponentTypeSection3Key].name}
              </option>
            ))}
          </Select>
        </SettingGroup>

        <SettingGroup>
          <Label>Choix type de produit</Label>
          <Select value={selectTypeProductFetchSection3} onChange={handleSelectTypeProductFetchSection3}>
            {Object.keys(TypeProductFetch).map((TypeProductFetch3Key) => (
              <option key={TypeProductFetch3Key} value={TypeProductFetch3Key}>
                {TypeProductFetch[TypeProductFetch3Key].name}
              </option>
            ))}
          </Select>
        </SettingGroup>
      </Card>

      {/* Encadrement pour "Section 4" */}
      <Card>
        <SettingGroup>
          <Label>SECTION 4</Label>
          <Label>Choix type section 4</Label>
          <Select value={section4Component} onChange={handleComponentsSection4}>
            {Object.keys(componentsSection1).map((componentsSection4Key) => (
              <option key={componentsSection4Key} value={componentsSection4Key}>
                {componentsSection1[componentsSection4Key].name}
              </option>
            ))}
          </Select>
        </SettingGroup>
        <SettingGroup>
          <Label>Choix composant</Label>
          <Select value={typeComponentSection4} onChange={handleComponentTypeSection4}>
            {Object.keys(ComponentTypeSection1).map((ComponentTypeSection4Key) => (
              <option key={ComponentTypeSection4Key} value={ComponentTypeSection4Key}>
                {ComponentTypeSection1[ComponentTypeSection4Key].name}
              </option>
            ))}
          </Select>
        </SettingGroup>

        <SettingGroup>
          <Label>Choix type de produit</Label>
          <Select value={selectTypeProductFetchSection4} onChange={handleSelectTypeProductFetchSection4}>
            {Object.keys(TypeProductFetch).map((TypeProductFetch4Key) => (
              <option key={TypeProductFetch4Key} value={TypeProductFetch4Key}>
                {TypeProductFetch[TypeProductFetch4Key].name}
              </option>
            ))}
          </Select>
        </SettingGroup>
      </Card>

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

const Card = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
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
