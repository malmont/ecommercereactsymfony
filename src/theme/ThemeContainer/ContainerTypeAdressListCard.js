
import { ThemeProvider } from 'styled-components';
import { useAdminContext } from '../AdminContext';
import AdressListCardTypeA from '../../components/Private/Dashboards/AdressListCard/AddressListCardTypeA';
import AdressListCardTypeB from '../../components/Private/Dashboards/AdressListCard/AddressListCardTypeB';
import AdressListCardTypeC from '../../components/Private/Dashboards/AdressListCard/AddressListCardTypeC';
import AdressListCardTypeD from '../../components/Private/Dashboards/AdressListCard/AddressListCardTypeD';
import AdressListCardTypeE from '../../components/Private/Dashboards/AdressListCard/AddressListCardTypeE';
import AdressListCardTypeF from '../../components/Private/Dashboards/AdressListCard/AddressListCardTypeF';
import { themes } from '../All_themes'; 


const AdressListCardMap = {
  typeA: AdressListCardTypeA,
  typeB: AdressListCardTypeB,
  typeC: AdressListCardTypeC,
  typeD: AdressListCardTypeD,
  typeE: AdressListCardTypeE,
  typeF: AdressListCardTypeF,
  
};

const ContainerTypeAdressListCard = () => {
  const { themeChoice, adressListCardComponent ,loadingSettings} = useAdminContext();
  if (loadingSettings) {
    return <div>Loading...</div>;
  }
  console.log('themeChoice',themeChoice);
  const selectedTheme = themes[themeChoice] || themes.light;

  const AdressListCardComponent = AdressListCardMap[adressListCardComponent] || AdressListCardTypeA;
  return (
    <ThemeProvider theme={selectedTheme}>
      <div>
        <AdressListCardComponent
        />
      </div>
    </ThemeProvider>
  );
};

export default ContainerTypeAdressListCard;
