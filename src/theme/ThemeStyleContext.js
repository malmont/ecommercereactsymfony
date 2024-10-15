
import React, { createContext, useState, useEffect } from 'react';
import { themes } from './All_themes';
import { styles } from './All_styles';

export const ThemeStyleContext = createContext();

export const ThemeStyleProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.dark);  
  const [style, setStyle] = useState(styles.style7); 

  useEffect(() => {
    fetch('/api/user-preferences')
      .then((response) => response.json())
      .then((data) => {
        const selectedTheme = themes[data.preferredTheme] || themes.light;
        const selectedStyle = styles[data.preferredStyle] || styles.style1;
        setTheme(selectedTheme);
        setStyle(selectedStyle);
      });
  }, []);

  return (
    <ThemeStyleContext.Provider value={{ theme, style }}>
      {children}
    </ThemeStyleContext.Provider>
  );
};
