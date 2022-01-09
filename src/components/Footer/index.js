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
          <a
            href="https://www.linkedin.com/in/julianacristinapedroso/"
            target="_blank"
          >
            <img src={ILinkedin} alt="LinkedIn icon" />
          </a>
        </section>
        <section className="footer__social-media-item">
          <a href="https://www.instagram.com/juuhcristina_/" target="_blank">
            <img src={IInstagram} alt="Instagram icon" />
          </a>
        </section>
        <section className="footer__social-media-item">
          <a
            href="https://www.facebook.com/profile.php?id=100002345582996"
            target="_blank"
          >
            <img src={IFacebook} alt="Facebook icon" />
          </a>
        </section>
      </main>
      <div className="footer__copy">
        <h3>
          Aplicação desenvolvida com ❤️ por{' '}
          <a href="https://github.com/julianapedroso" target="_blank">
            Juliana Pedroso
          </a>
          <p>2022 - Todos os Direitos Reservados.</p>
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
