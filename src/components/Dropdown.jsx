import React from 'react';

function Dropdown({ regions, onSelectRegion }) {
  return (
    <select onChange={(e) => onSelectRegion(e.target.value)} className="dropdown">
      <option value="">Filter by Region</option>
      {regions.map(region => (
        <option key={region} value={region}>
          {region}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;