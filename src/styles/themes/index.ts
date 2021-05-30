import { CustomTheme, DefaultTheme } from 'styled-components';
import dark from './dark';
import light from './light';

const defaultTheme = {
  fontSizes: {
    small: '16px',
    medium: '18px',
    large: '20px',
    extraLarge: '35px'
  }
};

function combineTheme(theme: CustomTheme): DefaultTheme {
  return { ...defaultTheme, ...theme };
}

export { combineTheme, dark, light };
