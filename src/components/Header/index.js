import React from 'react';
import './styles.scss';
// Assets
import Logo from '../../assets/images/logo-keycash.svg';
import Cover from '../../assets/images/cover.svg';

const Header = () => {
  return (
    <header className="Header">
      <section className="header__menu">
        <img className="header__logo" src={Logo} alt="Logo Keycash" />
      </section>
      <section className="header__cover">
        <img src={Cover} alt="Cover house" />
      </section>
    </header>
  );
};

export default Header;
