import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CountryPage() {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${name}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok. Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setCountry(data[0]);
        setError(null);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        setError('Failed to fetch country data');
      });
  }, [name]);

  if (error) return <div>{error}</div>;
  if (!country) return <div>Loading...</div>;

  return (
    <div className="country-detail">
      <h1>{country.name.common}</h1>
      <img src={country.flags.svg} alt={`${country.name.common} flag`} width="150" height="100" />
      <p><strong>Native Name:</strong> {Object.values(country.name.nativeName)[0]?.common || 'N/A'}</p>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Sub Region:</strong> {country.subregion || 'N/A'}</p>
      <p><strong>Capital:</strong> {country.capital[0]}</p>
      <p><strong>Top Level Domain:</strong> {country.tld.join(', ')}</p>
      <p><strong>Currencies:</strong> {Object.values(country.currencies).map(c => c.name).join(', ')}</p>
      <p><strong>Languages:</strong> {Object.values(country.languages).join(', ')}</p>
    </div>
  );
}

export default CountryPage;