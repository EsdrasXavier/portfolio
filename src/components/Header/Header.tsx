import React from 'react';
import Switch from 'react-switch';
import { ThemeContext } from '../../context/themeContext';

const Header: React.FC = () => {
  const { toogleTheme, theme } = React.useContext(ThemeContext);

  return (
    <div>
      <Switch checked={theme.title !== 'light'} onChange={toogleTheme} />
    </div>
  );
};

export default Header;
