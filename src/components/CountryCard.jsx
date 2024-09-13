import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

function CountryCard({ country }) {
  if (!country || !country.name || !country.flags || !country.flags.png) {
    return null;
  }

  return (
    <Grid item key={country.cca3}>
      <div className="country-card">
        <Link to={`/${country.cca3}`}>
          <img
            src={country.flags.svg || "path_to_default_flag.png"}
            alt={`${country.name.common} flag`}
            width="150"
            height="100"
          />
          <h2>{country.name.common}</h2>
          <p>
            <strong>Population:</strong> {country.population.toLocaleString()}
          </p>
          <p>
            <strong>Region:</strong> {country.region}
          </p>
          <p>
            <strong>Capital:</strong>{" "}
            {country.capital && country.capital.length > 0
              ? country.capital[0]
              : ""}
          </p>
        </Link>
      </div>
    </Grid>
  );
}

export default CountryCard;
