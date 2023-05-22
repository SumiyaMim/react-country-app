import React from 'react';
import  './Country.css';

const Country = (props) => {

  const { name, flags, capital, population, area } = props.country;

  const handleRemoveCountry = (name) => {
    props.onRemoveCountry(name);
  };

  return (
    <article className='country'>
      <div>
        <img src={flags.png} alt={name.common} className='flag'/>
        <h4>Name: {name.common}</h4>
        <h4>Population: {population}</h4>
        <h4>Capital: {capital}</h4>
        <h4>Area: {area}</h4>
        <button className='btn'
          onClick={() => {
            handleRemoveCountry(name.common);
          }}>
        Remove Country
        </button>
      </div>
    </article>
  );
};

export default Country;
