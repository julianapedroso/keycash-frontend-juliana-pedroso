import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.scss';
import { BASE_URL } from '../../providers/constants';
import { Link, useParams } from 'react-router-dom';
// Libs
import 'react-gallery-carousel/dist/index.css';
import Carousel from 'react-gallery-carousel';
// Assets
import IArrowBack from '../../assets/icons/arrow-back.svg';
import IArea from '../../assets/icons/ruler.svg';
import IBedroom from '../../assets/icons/bed.svg';
import ICar from '../../assets/icons/car.svg';
import IBath from '../../assets/icons/bathroom.svg';

const PropertyDetails = () => {
  const [propertyDetails, setPropertyDetails] = useState([]);
  const [images, setImages] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getPropertyDetails();
  }, []);

  useEffect(() => {
    getImages();
  }, []);

  const getPropertyDetails = async () => {
    await axios
      .get(`${BASE_URL}`)
      .then((res) => {
        setPropertyDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getImages = async () => {
    await axios
      .get(`${BASE_URL}`)
      .then((res) => {
        setImages(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main className="PropertyDetails">
      <section className="images__main-content images__carousel">
        {images
          .filter((image) => image.id === id)
          .map((image) => {
            return (
              <section className="property__images">
                <Carousel autoPlayInterval={4000} key={image.id}>
                  <img
                    className="property__cover"
                    src={image.images[0]}
                    alt="Property cover"
                  />
                  <img
                    className="property__cover"
                    src={image.images[1]}
                    alt="Property cover"
                  />
                  <img
                    className="property__cover"
                    src={image.images[2]}
                    alt="Property cover"
                  />
                  <img
                    className="property__cover"
                    src={image.images[3]}
                    alt="Property cover"
                  />
                  <img
                    className="property__cover"
                    src={image.images[4]}
                    alt="Property cover"
                  />
                  <img
                    className="property__cover"
                    src={image.images[5]}
                    alt="Property cover"
                  />
                  <img
                    className="property__cover"
                    src={image.images[6]}
                    alt="Property cover"
                  />
                </Carousel>
              </section>
            );
          })}
      </section>
      <Link to={'/'}>
        <button id="back__home">
          <img className="arrow__back" src={IArrowBack} alt="Arrow back icon" />
        </button>
      </Link>
      <section className="PropertyDetails">
        {propertyDetails
          .filter((list) => list.id === id)
          .map((list) => {
            const {
              id,
              address,
              usableArea,
              parkingSpaces,
              bedrooms,
              bathrooms,
              price,
            } = list;
            return (
              <main className="PropertyDetails">
                <article className="property">
                  <section className="property__info" key={id}>
                    <h5>{address.formattedAddress}</h5>
                    <p className="property__description">
                      Confira as informações deste imóvel e aproveite para
                      visitar a galeria de fotos.
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
              </main>
            );
          })}
      </section>
    </main>
  );
};

export default PropertyDetails;
