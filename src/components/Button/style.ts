import styled from 'styled-components';

export const ButtonDiv = styled.button`
  font-size: ${(props) => props.theme.fontSizes.large}};
  color: ${(props) => props.theme.colors.text}};
  border: 2px solid ${(props) => props.theme.colors.text}};
  box-sizing: inherit;
  cursor: pointer;
  display: inline-block;
  padding: 10px 20px;
  transition: all 0.5s;
  background: transparent;
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;

  &:hover {
    color: #000;
    background: ${(props) => props.theme.colors.primary}};
  }
}`;
