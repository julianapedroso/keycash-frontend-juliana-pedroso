import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
    <main className="Home">
      <Header />
      <section className="home__main-content">
        {propertys.map((property) => {
          return (
            <InfoCard
              key={property.id}
              image={property.images}
              address1={property.address.formattedAddress}
              area={property.usableArea}
              bedroom={property.bedrooms}
              parking={property.parkingSpaces}
              bathroom={property.bathrooms}
              price={property.price}
            />
          );
        })}
      </section>
      <Footer />
    </main>
  );
};

export default Home;
