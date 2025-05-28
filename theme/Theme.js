import React, { createContext, useState } from "react";
import { ThemeProvider as ThemeProviderStyled } from "styled-components/native";
import {darkTheme} from './darkTheme'
import {lightTheme} from './lighTheme'


export const ThemeType = {
  light : 'light',
  dark: 'dark',
}

export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => { },
})

const themes = {
  light: lightTheme,
  dark: darkTheme
}

export const ThemeProvider = ({ children }) => {
  /* propiedade children (component filho) */
  const [theme, setTheme] = useState(ThemeType.light)

  function toggleTheme() {
 setTheme((prevTheme) => (prevTheme === ThemeType.light ? ThemeType.dark : ThemeType.light));
  }

return(
  <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <ThemeProviderStyled theme={themes[theme]}>
      {children}
    </ThemeProviderStyled>
  </ThemeContext.Provider>
);

};