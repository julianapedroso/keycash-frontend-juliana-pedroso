import React from 'react';
import './styles.scss';
// Assets
import Logo from '../../assets/images/logo-keycash.svg';
import Cover from '../../assets/images/cover.svg';
import CoverFull from '../../assets/images/cover-desktop.svg';

const Header = () => {
  return (
    <header className="Header">
      <section className="header__menu">
        <img className="header__logo" src={Logo} alt="Logo Keycash" />
      </section>
      <section className="header__cover">
        <img src={Cover} alt="Cover house" />
        <img
          className="header__cover-desktop"
          src={CoverFull}
          alt="Mix cover house"
        />
      </section>
    </header>
  );
};

export default Header;
