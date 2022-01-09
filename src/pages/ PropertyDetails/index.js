import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.scss';
import { BASE_URL } from '../../providers/constants';
import { Link, useParams } from 'react-router-dom';
// Assets
import IArrowBack from '../../assets/icons/arrow-back.svg';
import IArea from '../../assets/icons/ruler.svg';
import IBedroom from '../../assets/icons/bed.svg';
import ICar from '../../assets/icons/car.svg';
import IBath from '../../assets/icons/bathroom.svg';

const PropertyDetails = () => {
  const [propertyDetails, setPropertyDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getPropertyDetails();
  }, []);

  const getPropertyDetails = async () => {
    await axios
      .get(`${BASE_URL}`)
      .then((res) => {
        console.log(res.data);
        setPropertyDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section>
      {propertyDetails
        .filter((list) => list.id === id)
        .map((list) => {
          const {
            images,
            address,
            usableArea,
            parkingSpaces,
            bedrooms,
            bathrooms,
            price,
          } = list;
          return (
            <main className="PropertyDetails" key={id}>
              <article className="property">
                <Link to={'/'}>
                  <button id="back__home">
                    <img
                      className="arrow__back"
                      src={IArrowBack}
                      alt="Arrow back icon"
                    />
                  </button>
                </Link>
                <img
                  className="property__cover"
                  src={images}
                  alt="Property cover"
                />
                <section className="property__info">
                  <h5>{address.formattedAddress}</h5>
                  <p className="property__description">
                    Confira as informações deste imóvel e aproveite para visitar
                    a galeria de fotos.
                  </p>
                  <section className="property__grid">
                    <div className="property__flex">
                      <img src={IArea} alt="Ruler icon" />
                      <p className="property__area">{usableArea}m²</p>
                    </div>
                    <div className="property__flex">
                      <img src={IBedroom} alt="Bed icon" />
                      <p className="property__bedrooms">
                        {bedrooms === 1
                          ? `${bedrooms} quarto`
                          : `${bedrooms} quartos`}
                      </p>
                    </div>
                    <div className="property__flex">
                      <img src={ICar} alt="Car icon" />
                      <p className="property__parking">
                        {parkingSpaces === 1
                          ? `${parkingSpaces} vaga`
                          : `${parkingSpaces} vagas`}
                      </p>
                    </div>
                    <div className="property__flex">
                      <img src={IBath} alt="Bath icon" />
                      <p className="property__bathrooms">
                        {bathrooms === 1
                          ? `${bathrooms} banheiro`
                          : `${bathrooms} banheiros`}
                      </p>
                    </div>
                  </section>
                  <p className="property__price-description">
                    <strong>Gostou?</strong> Este lindo imóvel pode ser seu,
                    pelo valor de
                  </p>
                  <p className="property__price-highlight">
                    R${' '}
                    {price.toLocaleString('pt-br', {
                      minimumFractionDigits: 2,
                    })}{' '}
                    <spam className="property__price-condition">
                      Confira as melhores condições*
                    </spam>
                  </p>
                  <a href="https://keycash.io/" target="_blank">
                    <small className="property__price-info">
                      Veja como funciona o programa de crédito da{' '}
                      <spam className="highlight">Keycash</spam>.
                    </small>
                  </a>
                </section>
              </article>
              {/* <Footer /> */}
            </main>
          );
        })}
    </section>
  );
};

export default PropertyDetails;
