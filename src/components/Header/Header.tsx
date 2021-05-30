import React from 'react';
import Switch from 'react-switch';
import { HeaderDiv, Nav } from './style';
import { ThemeContext } from '../../context/themeContext';

const Header: React.FC = () => {
  const { toogleTheme, theme } = React.useContext(ThemeContext);

  return (
    <HeaderDiv>
      <Nav>
        <div>Home</div>
        <div>About</div>
        <div>Contact</div>
      </Nav>
      <Switch checked={theme.title !== 'light'} onChange={toogleTheme} />
    </HeaderDiv>
  );
};

export default Header;
