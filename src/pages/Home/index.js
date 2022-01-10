import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './styles.scss';
import { BASE_URL } from '../../providers/constants';
// Components
import { Header, InfoCard, Footer } from '../../components';

const Home = () => {
  const [properties, setProperties] = useState([]);
  const [searchProperties, setSearchProperties] = useState('');

  useEffect(() => {
    getProperties();
  }, []);

  const getProperties = async () => {
    await axios
      .get(`${BASE_URL}`)
      .then((res) => {
        const filtered = res.data.filter((item) => item.publish !== false);
        const sorted = filtered.sort((a, b) => a.price - b.price);
        setProperties(sorted);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleInputValue = (e) => {
    setSearchProperties(e.target.value);
  };

  const filteredProperty = useMemo(() => {
    return properties.filter((property) => {
      const result = property.address.formattedAddress.toLowerCase();
      return result.indexOf(searchProperties.toLocaleLowerCase()) > -1;
    });
  }, [properties, searchProperties]);

  return (
    <section className="Home">
      <Header />
      <section className="home__search-address">
        <input
          className="home__input-address"
          value={searchProperties}
          onChange={handleInputValue}
          type="text"
          placeholder="Busque pelo endereço desejado..."
        />
      </section>
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

      <main className="Home">
        <section className="home__main-content home__carousel">
          {filteredProperty.length <= 0 && (
            <>
            <h3 className="home__search-faild">Sem resultado para pesquisa :(</h3>
            </>
          )}
          {filteredProperty.map((property) => {
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
                <Link id="router__link" to={`/${id}`}>
                  <InfoCard
                    image={images}
                    address1={address.formattedAddress}
                    area={usableArea}
                    bedroom={
                      bedrooms === 1
                        ? `${bedrooms} quarto`
                        : `${bedrooms} quartos`
                    }
                    parking={
                      parkingSpaces === 1
                        ? `${parkingSpaces} vaga`
                        : `${parkingSpaces} vagas`
                    }
                    bathroom={
                      bathrooms === 1
                        ? `${bathrooms} banheiro`
                        : `${bathrooms} banheiros`
                    }
                    price={price}
                  />
                </Link>
              </article>
            );
          })}
        </section>
      </main>
      <Footer />
    </section>
  );
};

export default Home;
