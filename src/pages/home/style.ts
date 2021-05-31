import styled from 'styled-components';

export const CenterDiv = styled.div`
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 100px;
  text-align: center;

  font-size: ${(props) => props.theme.fontSizes.extraLarge}};

  @media(max-width: 800px) {
    font-size: ${(props) => props.theme.fontSizes.large}};
  }
`;

export const NameSpan = styled.span`
  color: ${(props) => props.theme.colors.primary};
`;

export const StyledHome = styled.div`
  height: 100vh;
`;
