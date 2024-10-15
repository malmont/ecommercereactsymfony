import React, { useContext } from "react";
import Navbar from "./Navbar_d"; 
import ResumeCart from "../../../components/Public/Cart/ResumeTotal/ResumeCartView";
import AuthContext from '../../../Contexts/authContext';
import { useDependencies } from "../../../DependencyContext";
import { ThemeProvider } from 'styled-components';  
import { ThemeStyleContext } from '../../../theme/ThemeStyleContext'; 

const Container = () => {
  const { theme, style } = useContext(ThemeStyleContext); 

  return (
    <ThemeProvider theme={theme}>  
      <div>
        <Navbar
          ResumeCart={ResumeCart}
          AuthContext={AuthContext}
          useDependencies={useDependencies}
          selectedStyle={style} 
        />
      </div>
    </ThemeProvider>
  );
};

export default Container;
