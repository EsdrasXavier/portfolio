import styled from 'styled-components';

export const CenterDiv = styled.div`
  margin: auto;
  position: relative;
  text-align: center;
  top: 50%;
  font-size: ${(props) => props.theme.fontSizes.extraLarge}};
`;

export const NameSpan = styled.span`
  color: ${(props) => props.theme.colors.primary};
`;

export const StyledHome = styled.div`
  height: 100vh;
`;
