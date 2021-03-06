import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

body {
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSizes.small}};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 700;
}

button {
  cursor: pointer;
}
`;
