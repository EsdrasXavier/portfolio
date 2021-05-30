import * as React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/global';
import { combineTheme, dark, light } from '../styles/themes';
import { ThemeContextType } from './type';

export const ThemeContext = React.createContext<ThemeContextType>({
  theme: combineTheme(light),
  toogleTheme: () => null
});

const ThemeContextProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = React.useState<DefaultTheme>(combineTheme(light));

  const toogleTheme = () => {
    setTheme(
      theme.title === 'light' ? combineTheme(dark) : combineTheme(light)
    );
  };

  return (
    <ThemeContext.Provider value={{ theme: theme, toogleTheme: toogleTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
