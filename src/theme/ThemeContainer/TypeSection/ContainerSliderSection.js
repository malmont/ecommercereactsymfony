import { useAdminContext } from '../../AdminContext';
import SliderTypeA from '../../../components/Public/Home/Components/sliders/SliderTypeA';
import SliderTypeB from '../../../components/Public/Home/Components/sliders/SliderTypeB';
import SliderTypeC from '../../../components/Public/Home/Components/sliders/SliderTypeC';
import SliderTypeD from '../../../components/Public/Home/Components/sliders/SliderTypeD';
import SliderTypeE from '../../../components/Public/Home/Components/sliders/SliderTypeE';
import SliderTypeF from '../../../components/Public/Home/Components/sliders/SliderTypeF';
import { themes } from '../../All_themes'; 
import { ThemeProvider } from 'styled-components';

const sliderMap = {
  typeA: SliderTypeA,
  typeB: SliderTypeB,
  typeC: SliderTypeC,
  typeD: SliderTypeD,
  typeE: SliderTypeE,
  typeF: SliderTypeF,
};

const ContainerSliderSection = ({typeComponentSection }) => {
  const { themeChoice,loadingSettings } = useAdminContext();
  if (loadingSettings) {
    return <div>Loading...</div>;
  }
  const selectedTheme = themes[themeChoice];


  const Slider = sliderMap[typeComponentSection] || SliderTypeA;

  return (
    <ThemeProvider theme={selectedTheme}>
      <div>
        <Slider

        />
      </div>
    </ThemeProvider>
  );
};

export default ContainerSliderSection;
