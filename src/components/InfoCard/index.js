import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const InfoCard = (props) => {
  const {
    title,
    image,
    address1,
    address2,
    area,
    bedroom,
    parking,
    bathroom,
    price,
  } = props;

  return (
    <main className="InfoCard">
      <article className="card">
        <img className="card__cover" src={image} alt="Property cover" />
        <section className="card__info">
          <span>{title}</span>
          <h5>{address1}</h5>
          <h6>{address2}</h6>
          <article className="card__scale">
            <p className="card__info-ruler">{area} m²</p>
            <p className="card__info-bed">{bedroom} quartos</p>
            <p className="card__info-parking">{parking} vagas</p>
            <p className="card__info-bathroom">{bathroom} banheiros</p>
          </article>
          <h3 className="card__info-price">R$ {price}</h3>
        </section>
      </article>
    </main>
  );
};

InfoCard.propTypes = {
  image: PropTypes.array,
  addess1: PropTypes.string,
  address2: PropTypes.string,
  area: PropTypes.number.isRequired,
  bedroom: PropTypes.number.isRequired,
  parking: PropTypes.number.isRequired,
  bathroom: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

InfoCard.defaultProps = {
  title: 'Conheça o imóvel',
};

export default InfoCard;
