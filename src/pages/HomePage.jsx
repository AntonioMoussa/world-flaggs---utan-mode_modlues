import React, { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";
import Dropdown from "../components/Dropdown";
import Search from "../components/Search";
import { Container, Box, Grid } from "@mui/material";

function HomePage() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const sortedCountries = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sortedCountries);

        const uniqueRegions = [
          ...new Set(data.map((country) => country.region)),
        ];
        setRegions(uniqueRegions);
      });
  }, []);

  const filteredCountries = countries.filter(
    (country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedRegion === "" || country.region === selectedRegion) &&
      country.flags &&
      country.flags.png
  );

  return (
    <Container maxWidth="md" sx={{ paddingTop: "100px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          mb: 4,
        }}
      >
        <Search searchTerm={searchTerm} onSearch={setSearchTerm} />
        <Dropdown regions={regions} onSelectRegion={setSelectedRegion} />
      </Box>

      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {filteredCountries.map((country) => {
          console.log(country);
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={country.cca3}>
              <CountryCard country={country} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default HomePage;
