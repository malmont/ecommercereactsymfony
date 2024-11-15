import React, { useContext } from "react";
import Navbar from "./Navbar_d"; 
import ResumeCart from "../../../components/Public/Cart/ResumeTotal/ResumeCartView";
import AuthContext from '../../../Contexts/authContext';

import { ThemeStyleContext } from '../../../theme/AdminContext'; 

const Container = () => {
  const { theme, style } = useContext(ThemeStyleContext); 

  return (
 
      <div>
        <Navbar
          ResumeCart={ResumeCart}
          AuthContext={AuthContext}
          useDependencies={useDependencies}
          selectedStyle={style} 
        />
      </div>

  );
};

export default Container;
