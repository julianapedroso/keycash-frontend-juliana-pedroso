import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.scss';
import { BASE_URL } from '../../providers/constants';
// Components
import { Header, InfoCard, Footer } from '../../components';

const Home = () => {
  const [propertys, setPropertys] = useState([]);

  useEffect(() => {
    getPropertys();
  }, []);

  const getPropertys = () => {
    axios
      .get(`${BASE_URL}`)
      .then((res) => {
        console.log(res.data);
        setPropertys(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Header />
      <main className="Home">
        <section className="home__main-content home__carousel">
          {propertys.map((property) => {
            const {
              id,
              images,
              address,
              usableArea,
              bedrooms,
              parkingSpaces,
              bathrooms,
              price,
            } = property;
            return (
              <div className="home__main-item">
                <InfoCard
                  key={id}
                  image={images}
                  address1={address.formattedAddress}
                  area={usableArea}
                  bedroom={bedrooms}
                  parking={parkingSpaces}
                  bathroom={bathrooms}
                  price={price}
                />
              </div>
            );
          })}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
