import React, { useState, useEffect } from 'react';
import Countries from './Countries';
import  './App.css';
import Search from './Search';

const url = 'https://restcountries.com/v3.1/all';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);

  /** Data fetch using async (asynchronous) method */
  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setFilteredCountries(data);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  const handleRemoveCountry = (name) => {
    const filter = filteredCountries.filter(
      (country) => country.name.common !== name
    );
    setFilteredCountries(filter);
  };

  const handleSearch = (searchValue) => {
    let value = searchValue.toLowerCase();
    const newCountries = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value);
    });
    setFilteredCountries(newCountries);
  };

  return (
    <>
      <br></br><br></br>
      <h1>Country App</h1>
      <br></br>
      <Search onSearch={handleSearch} />
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error.message}</h2>}
      {countries.length > 0 && (
        <Countries countries={filteredCountries} onRemoveCountry={handleRemoveCountry}/>
      )}
    </>
  );
};

export default App;
