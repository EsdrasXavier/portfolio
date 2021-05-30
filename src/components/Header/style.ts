import styled from 'styled-components';

export const HeaderDiv = styled.div`
  background: ${(props) => props.theme.colors.header};
  color: #fdfdfd;
  font-size: 1.2rem;
  padding: 1rem 1.5rem;
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: flex-end;
`;

export const Nav = styled.div`
  display: flex;
  margin-right: 1vh;

  div {
    margin-left: 1vh;
    margin-right: 1vh;
    cursor: pointer;
  }
`;
