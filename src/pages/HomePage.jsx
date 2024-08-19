import React, { useEffect, useState } from 'react';
import CountryCard from '../components/CountryCard';
import Dropdown from '../components/Dropdown';
import Search from '../components/Search';

function HomePage() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        const sortedCountries = data.sort((a, b) => a.name.common.localeCompare(b.name.common));
        setCountries(sortedCountries);

        // Hämta unika regioner
        const uniqueRegions = [...new Set(data.map(country => country.region))];
        setRegions(uniqueRegions);
      });
  }, []);

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedRegion === '' || country.region === selectedRegion)
  );

  return (
    <div className="home-page">
      <div className="search-filter-container">
        <Search searchTerm={searchTerm} onSearch={setSearchTerm} />
        <Dropdown regions={regions} onSelectRegion={setSelectedRegion} />
      </div>

      <div className="countries-grid">
        {filteredCountries.map(country => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;