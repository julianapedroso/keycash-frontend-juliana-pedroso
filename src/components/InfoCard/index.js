import React from 'react';
import './styles.scss';
// Assets
import Cover from '../../assets/images/cover-ex.jpg';

const InfoCard = () => {
  return (
    <main className="InfoCard">
      <article className="card">
        <img className="card__cover" src={Cover} alt="" />
        <section className="card__info">
          <p>Apartamento</p>
          <h5>Rua da Consolação,</h5>
          <h6>Consolação - SP</h6>
          <article className="card__scale">
            <p className="card__info-ruler">45m²</p> 
            <p className="card__info-bed">2 quartos</p>
          </article>
          <h3 className="card__info-price">Total R$ 2.387</h3>
        </section>
      </article>
    </main>
  );
};

export default InfoCard;
