import React from 'react';
import { Link } from 'react-router-dom';

function CountryCard({ country }) {
  if (!country || !country.name || !country.capital || !country.flags) {
    return <div>Invalid country data</div>;
  }

  return (
    <div className="country-card">
      <Link to={`/${country.cca3}`}>
        <img src={country.flags.svg} alt={`${country.name.common} flag`} width="150" height="100" />
        <h2>{country.name.common}</h2>
        <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
        <p><strong>Region:</strong> {country.region}</p>
        <p><strong>Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}</p>
      </Link>
    </div>
  );
}

export default CountryCard;