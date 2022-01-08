import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.scss';
import { BASE_URL } from '../../providers/constants';
// Components
import { Header, Filter, InfoCard, Footer } from '../../components';

const Home = () => {
  const [propertys, setPropertys] = useState([]);

  useEffect(() => {
    getPropertys();
  }, []);

  const getPropertys = async () => {
    await axios
      .get(`${BASE_URL}`)
      .then((res) => {
        setPropertys(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Header />
      <section className="Home">
        <h1 className="home__title">Imóveis disponíveis</h1>
        <p className="home__description">
          Quando o assunto é imóvel, a{' '}
          <span className="home__description-highlight">Keycash</span> oferece
          as melhores soluções.
        </p>
        <p className="home__description">
          Confira os principais imóveis recomendados para você.
        </p>
      </section>

      <Filter />
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
              <article className="home__main-item" key={id}>
                <InfoCard
                  image={images}
                  address1={address.formattedAddress}
                  area={usableArea}
                  bedroom={bedrooms}
                  parking={parkingSpaces}
                  bathroom={bathrooms}
                  price={price}
                />
              </article>
            );
          })}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
