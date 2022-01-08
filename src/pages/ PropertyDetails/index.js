import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.scss';
import { BASE_URL } from '../../providers/constants';
import { useParams } from 'react-router-dom';
// Components
// import {Footer} from '../../components';

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
    <section key={id}>
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
            <main className="PropertyDetails">
              <article className="property">
                {/* <button id="back__home" /> */}
                <img
                  className="property__cover"
                  src={images}
                  alt="Property cover"
                />
                <section className="property__info">
                  <h5>{address.formattedAddress}</h5>
                  <section className="property__grid">
                    <p className="property__area">{usableArea}m²</p>
                    <p className="property__bedrooms">
                      {bedrooms === 1
                        ? `${bedrooms} quarto`
                        : `${bedrooms} quartos`}
                    </p>
                    <p className="property__parking">
                      {parkingSpaces === 1
                        ? `${parkingSpaces} vaga`
                        : `${parkingSpaces} vagas`}
                    </p>
                    <p className="property__bathrooms">
                      {bathrooms === 1
                        ? `${bathrooms} banheiro`
                        : `${bathrooms} banheiros`}
                    </p>
                  </section>
                  <p className="property__price-highlight">R$ {price}</p>
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
