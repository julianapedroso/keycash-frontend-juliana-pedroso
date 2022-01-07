import React from 'react';
import './styles.scss';
// Assets
import IFacebook from '../../assets/icons/facebook.svg';
import IInstagram from '../../assets/icons/instagram.svg';
import ILinkedin from '../../assets/icons/linkedin.svg';

const Footer = () => {
  return (
    <footer className="Footer">
      <main className="footer__social-media">
        <section className="footer__social-media-item">
          <a href="https://www.facebook.com/KeyCashOficial" target="_blank">
            <img src={IFacebook} alt="Facebook icon" />
          </a>
        </section>
        <section className="footer__social-media-item">
          <a href="https://www.instagram.com/keycashoficial/" target="_blank">
            <img src={IInstagram} alt="Instagram icon" />
          </a>
        </section>
        <section className="footer__social-media-item">
          <a
            href="https://www.linkedin.com/company/keycash-inc/"
            target="_blank"
          >
            <img src={ILinkedin} alt="LinkedIn icon" />
          </a>
        </section>
      </main>
      <div className="footer__copy">
        <p>2022 - Todos os Direitos Reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
