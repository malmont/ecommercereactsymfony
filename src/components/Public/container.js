import React, { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { useAdminContext } from '../../theme/AdminContext';
import ResumeCart from '../../components/Public/Cart/ResumeTotal/ResumeCartView';
import AuthContext from '../../Contexts/authContext';
import { useDependencies } from '../../DependencyContext';
import NavbarTypeA from './Navbar/Navbar_a'; 
import NavbarTypeB from './Navbar/Navbar_b';
import NavbarTypeD from './Navbar/Navbar_d'; 
import NavbarTypeC from './Navbar/Navbar_c'; 
import { themes } from '../../theme/All_themes'; 
import { styles } from '../../theme/All_styles'; 


const navbarMap = {
  typeA: NavbarTypeA,
  typeB: NavbarTypeB,
  typeC: NavbarTypeC,
  typeD: NavbarTypeD,
};

const Container = () => {
  const { themeChoice, styleChoice, navbarComponent } = useAdminContext();

  const selectedTheme = themes[themeChoice];
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

export default Container;
