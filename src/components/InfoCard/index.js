import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const InfoCard = (props) => {
  const { 
    title, 
    image, 
    address, 
    area, 
    bedroom, 
    parking, 
    bathroom, 
    price 
  } = props;

  return (
    <main className="InfoCard">
      <article className="card">
        <img className="card__cover" src={image} alt="Property cover" />
        <section className="card__info">
          <span>{title}</span>
          <h5>{address}</h5>
          <article className="card__scale">
            <p className="card__info-ruler">{area} m²</p>
            <p className="card__info-bed">{bedroom}</p>
            <p className="card__info-parking">{parking}</p>
            <p className="card__info-bathroom">{bathroom}</p>
          </article>
          <h3 className="card__info-price">
            R$ {price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
          </h3>
        </section>
      </article>
    </main>
  );
};

InfoCard.propTypes = {
  image: PropTypes.array,
  addess: PropTypes.string,
  area: PropTypes.number.isRequired,
  bedroom: PropTypes.string.isRequired,
  parking: PropTypes.string.isRequired,
  bathroom: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

InfoCard.defaultProps = {
  title: 'Conheça o imóvel',
};

export default InfoCard;
