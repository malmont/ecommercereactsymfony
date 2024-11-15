import React, { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { useAdminContext } from '../AdminContext';
import ResumeCart from '../../components/Public/Cart/ResumeTotal/ResumeCartView';
import AuthContext from '../../Contexts/authContext';
import { useDependencies } from '../../DependencyContext';
import NavbarTypeA from '../../components/Public/Navbar/Navbar_a'; 
import NavbarTypeB from '../../components/Public/Navbar/Navbar_b';
import NavbarTypeD from '../../components/Public/Navbar/Navbar_d'; 
import NavbarTypeC from '../../components/Public/Navbar/Navbar_c'; 
import { themes } from '../All_themes'; 
import { styles } from '../All_styles'; 

const navbarMap = {
  typeA: NavbarTypeA,
  typeB: NavbarTypeB,
  typeC: NavbarTypeC,
  typeD: NavbarTypeD,
};

const ContainerTypeNavBar = () => {
  const { themeChoice, styleChoice, navbarComponent ,loadingSettings} = useAdminContext();
  if (loadingSettings) {
    return <div>Loading...</div>;
  }
  console.log('themeChoice',themeChoice);
  const selectedTheme = themes[themeChoice] || themes.light;
  const selectedStyle = styles[styleChoice];
  const NavbarComponent = navbarMap[navbarComponent] || NavbarTypeA;
  return (
    <ThemeProvider theme={selectedTheme}>
      <div>
        <NavbarComponent
          ResumeCart={ResumeCart}
          AuthContext={AuthContext}
          useDependencies={useDependencies}
          selectedStyle={selectedStyle}
        />
      </div>
    </ThemeProvider>
  );
};

export default ContainerTypeNavBar;
