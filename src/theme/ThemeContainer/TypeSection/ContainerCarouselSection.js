import { useAdminContext } from '../../AdminContext';

import CarouselComposantView from '../../../components/Public/Home/Components/Carousel/CarouselComposant/CarouselComposantView';
import { themes } from '../../All_themes'; 
import { ThemeProvider } from 'styled-components';


const ContainerCarouselSection = ({typeComponentSection,selectTypeProductFetch }) => {
  const { themeChoice,loadingSettings } = useAdminContext();
  if (loadingSettings) {
    return <div>Loading...</div>;
  }

  const selectedTheme = themes[themeChoice];
  
  return (
    <ThemeProvider theme={selectedTheme}>
      <div>
        <CarouselComposantView
        typeComponentSection={typeComponentSection}
        selectTypeProductFetch={selectTypeProductFetch}
        />
      </div>
    </ThemeProvider>
  );
};

export default ContainerCarouselSection;
