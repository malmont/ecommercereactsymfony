import { useAdminContext } from '../../AdminContext';
import EmailCardTypeA from '../../../components/Public/Home/Components/EmailCard/EmailCardTypeA';
import EmailCardTypeB from '../../../components/Public/Home/Components/EmailCard/EmailCardTypeB';
import EmailCardTypeC from '../../../components/Public/Home/Components/EmailCard/EmailCardTypeC';
import EmailCardTypeE from '../../../components/Public/Home/Components/EmailCard/EmailCardTypeD';
import EmailCardTypeF from '../../../components/Public/Home/Components/EmailCard/EmailCardTypeE';
import EmailCardTypeG from '../../../components/Public/Home/Components/EmailCard/EmailCardTypeF';
import { themes } from '../../All_themes'; 
import { ThemeProvider } from 'styled-components';

const emailCardMap = {
  typeA: EmailCardTypeA,
  typeB: EmailCardTypeB,
  typeC: EmailCardTypeC,
  typeD: EmailCardTypeE,
  typeE: EmailCardTypeF,
  typeF: EmailCardTypeG,
};

const ContainerSliderSection = ({typeComponentSection }) => {
  const { themeChoice,loadingSettings } = useAdminContext();
  if (loadingSettings) {
    return <div>Loading...</div>;
  }
  const selectedTheme = themes[themeChoice];


  const EmailCard = emailCardMap[typeComponentSection] || EmailCardTypeA;

  return (
    <ThemeProvider theme={selectedTheme}>
      <div>
        <EmailCard

        />
      </div>
    </ThemeProvider>
  );
};

export default ContainerSliderSection;
