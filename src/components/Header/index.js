import React from 'react';
import './styles.scss';
// Assets
import Logo from '../../assets/images/logo-keycash.svg';

const Header = () => {
  return (
    <div className="Header">
      <img className="header__logo" src={Logo} alt="Logo Keycash" />
    </div>
  );
};

export default Header;
