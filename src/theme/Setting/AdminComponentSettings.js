import React from "react";
import { useAdminContext } from "../AdminContext";
import { styles } from "../AllStyles";
import { themes } from "../All_themes";
import { componentsNavbar, componentsSection1, ComponentTypeCategoryCard } from "../All_components";
import { ComponentTypeSection1, TypeProductFetch } from "../All_components";
import SectionSettings from "../../theme/Setting/SectionSettings";
import SettingCard from "../../theme/Setting/SettingCard";
import { saveAdminSettings } from "../adminSettingsService";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const AdminComponentSettings = () => {
  const location = useLocation();
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
    setselectTypeProductFetchSection4,
    selectTypeProductFetchSection5,
    setselectTypeProductFetchSection5,
    selectTypeProductFetchSection6,
    setselectTypeProductFetchSection6,
    selectTypeProductFetchSection7,
    setselectTypeProductFetchSection7,
    typeComponentSection5,
    setTypeComponentSection5,
    typeComponentSection6,
    setTypeComponentSection6,
    typeComponentSection7,
    setTypeComponentSection7,
    section5Component,
    setSection5Component,
    section6Component,
    setSection6Component,
    section7Component,
    setSection7Component,
    typeCategoryCard,
    setTypeCategoryCard,
    detailsProductCardComponent,
    setDetailsProductCardComponent,
    setCartItemCardComponent,
    cartItemCardComponent,
    setTotalCardComponent,
    totalCardComponent,
    checkoutCardComponent,
    setCheckoutCardComponent,
    accountDashboardComponent,
    setAccountDashboardComponent,
  } = useAdminContext();

  // Configuration centralisée des sections
  const sections = [
    {
      id: "section1",
      name: "Section 1",
      component: section1Component,
      setComponent: setSection1Component,
      type: typeComponentSection1,
      setType: setTypeComponentSection1,
      productFetch: selectTypeProductFetch,
      setProductFetch: setselectTypeProductFetch,
    },
    {
      id: "section2",
      name: "Section 2",
      component: section2Component,
      setComponent: setSection2Component,
      type: typeComponentSection2,
      setType: setTypeComponentSection2,
      productFetch: selectTypeProductFetchSection2,
      setProductFetch: setselectTypeProductFetchSection2,
    },
    {
      id: "section3",
      name: "Section 3",
      component: section3Component,
      setComponent: setSection3Component,
      type: typeComponentSection3,
      setType: setTypeComponentSection3,
      productFetch: selectTypeProductFetchSection3,
      setProductFetch: setselectTypeProductFetchSection3,
    },
    {
      id: "section4",
      name: "Section 4",
      component: section4Component,
      setComponent: setSection4Component,
      type: typeComponentSection4,
      setType: setTypeComponentSection4,
      productFetch: selectTypeProductFetchSection4,
      setProductFetch: setselectTypeProductFetchSection4,
    },
    {
      id: "section5",
      name: "Section 5",
      component: section5Component,
      setComponent: setSection5Component,
      type: typeComponentSection5,
      setType: setTypeComponentSection5,
      productFetch: selectTypeProductFetchSection5,
      setProductFetch: setselectTypeProductFetchSection5,
    },
    {
      id: "section6",
      name: "Section 6",
      component: section6Component,
      setComponent: setSection6Component,
      type: typeComponentSection6,
      setType: setTypeComponentSection6,
      productFetch: selectTypeProductFetchSection6,
      setProductFetch: setselectTypeProductFetchSection6,
    },
    {
      id: "section7",
      name: "Section 7",
      component: section7Component,
      setComponent: setSection7Component,
      type: typeComponentSection7,
      setType: setTypeComponentSection7,
      productFetch: selectTypeProductFetchSection7,
      setProductFetch: setselectTypeProductFetchSection7,
    },
  ];

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
      selectTypeProductFetchSection5,
      selectTypeProductFetchSection6,
      selectTypeProductFetchSection7,
      typeComponentSection5,
      typeComponentSection6,
      typeComponentSection7,
      section5Component,
      section6Component,
      section7Component,
      typeCategoryCard,
      detailsProductCardComponent,
      cartItemCardComponent,
      totalCardComponent,
      checkoutCardComponent,
      accountDashboardComponent,
    };

    try {
      console.log("settings to save:", settings);
      await saveAdminSettings(settings);
      alert("Paramètres sauvegardés avec succès !");
    } catch (error) {
      console.error("Erreur lors de la sauvegarde des paramètres :", error);
      alert("Erreur lors de la sauvegarde des paramètres.");
    }
  };
  const isCategoryPage = location.pathname === "/Product";
  const isHomePage = location.pathname === "/";
  const isDetailsProductCardComponent = location.pathname === "/DetailsProducts";
  const isCartItemCardComponent = location.pathname === "/cart";
  const isCheckoutPage = location.pathname === "/CheckoutPage";
  const isAccountDashboardComponent = location.pathname === "/dashboard";

  return (
    <Wrapper>
      <h5>Paramètres composants</h5>

      {/* Paramètres généraux */}
      <SettingCard
        label="Choix du Style"
        value={styleChoice}
        onChange={(event) => setStyleChoice(event.target.value)}
        options={styles}
      />
      <SettingCard
        label="Choix du thème"
        value={themeChoice}
        onChange={(event) => setThemeChoice(event.target.value)}
        options={themes}
      />
      <SettingCard
        label="Choix de la Navbar"
        value={navbarComponent}
        onChange={(event) => setNavbarComponent(event.target.value)}
        options={componentsNavbar}
      />

      {isCategoryPage && (
        <SettingCard
          label="Choix de la categoryCard"
          value={typeCategoryCard}
          onChange={(event) => setTypeCategoryCard(event.target.value)}
          options={ComponentTypeCategoryCard}
        />
      )}
      {isDetailsProductCardComponent && (
        <SettingCard
          label="Choix de la categoryCard"
          value={detailsProductCardComponent}
          onChange={(event) => setDetailsProductCardComponent(event.target.value)}
          options={ComponentTypeCategoryCard}
        />
      )}

      {(isCartItemCardComponent || isCheckoutPage) && (
        <SettingCard
          label="Choix ItemCard"
          value={cartItemCardComponent}
          onChange={(event) => setCartItemCardComponent(event.target.value)}
          options={ComponentTypeCategoryCard}
        />
      )}

      {(isCartItemCardComponent || isCheckoutPage) && (
        <SettingCard
          label="Choix TotalCard"
          value={totalCardComponent}
          onChange={(event) => setTotalCardComponent(event.target.value)}
          options={ComponentTypeCategoryCard}
        />
      )}

      {(isCartItemCardComponent || isCheckoutPage) && (
        <SettingCard
          label="Choix CheckoutCard"
          value={checkoutCardComponent}
          onChange={(event) => setCheckoutCardComponent(event.target.value)}
          options={ComponentTypeCategoryCard}
        />
      )}

      {isAccountDashboardComponent && (
        <SettingCard
          label="Choix du Dashboard"
          value={accountDashboardComponent}
          onChange={(event) => setAccountDashboardComponent(event.target.value)}
          options={ComponentTypeCategoryCard}
        />
      )}



      {/* Paramètres des sections */}
      {isHomePage &&
        sections.map((section) => (
          <SectionSettings
            key={section.id}
            section={section}
            options={{
              components: componentsSection1,
              types: ComponentTypeSection1,
              productFetch: TypeProductFetch,
            }}
          />
        ))}

      <SaveButton onClick={handleSaveSettings}>
        Sauvegarder les paramètres
      </SaveButton>
    </Wrapper>
  );
};

export default AdminComponentSettings;

const Wrapper = styled.div`
  padding: 20px;
  max-width: 800px;
  margin-top: 90px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
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
