import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secundary: string;
      background: string;
      text: string;
      header: string;
    };

    fontSizes: {
      small: string;
      medium: string;
      large: string;
      extraLarge: string;
    };
  }

  export interface CustomTheme {
    title: string;
    colors: {
      primary: string;
      secundary: string;
      background: string;
      text: string;
      header: string;
    };
  }
}
