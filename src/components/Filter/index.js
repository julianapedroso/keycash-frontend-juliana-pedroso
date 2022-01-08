import React from 'react';
import './styles.scss';
// Components

const Filter = () => {
  return (
    <section className="Filter">
      <div className="filter__address">
        <input type="text" placeholder="Busque pelo endereço desejado" />
      </div>
      {/* <div className="areas">
        <input type="checkbox" id="scales" name="scales" checked />
        <label for="scales">20m²</label>
      </div>
      <div>
        <input type="checkbox" id="scales" name="scales" />
        <label for="scales">40m²</label>
      </div>
      <div>
        <input type="checkbox" id="scales" name="scales" />
        <label for="scales">60m²</label>
      </div>
      <div>
        <input type="checkbox" id="scales" name="scales" />
        <label for="scales">100m²</label>
      </div> */}

      <div className="filter__parking">
        <select name="parking" id="parking">
          <option value="description">Nº de vagas</option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>

      <div className="filter__bathroom">
        <select name="bathrooms" id="bathrooms">
          <option value="description">Nº de banheiros</option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>

      <div className="filter__bedroom">
        <select name="bedrooms" id="bedrooms">
          <option value="description">Nº de quartos</option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>

      <div className="filter__price">
        <select name="bedrooms" id="bedrooms">
          <option value="description">Escolha o valor</option>
          <option value="0">0</option>
          <option value="50000">50000</option>
          <option value="100000">100000</option>
          <option value="200000">200000</option>
        </select>
      </div>
    </section>
  );
};

export default Filter;
