import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Grid, Button, Typography, Box, Container } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function CountryPage() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${name}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Network response was not ok. Status: ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        setCountry(data[0]);
        setError(null);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setError("Failed to fetch country data");
      });
  }, [name]);

  if (error) return <div>{error}</div>;
  if (!country) return <div>Loading...</div>;

  return (
    <Container maxWidth="md" sx={{ paddingTop: "100px" }}>
      <Button
        onClick={() => navigate(-1)}
        sx={{
          marginBottom: "20px",
          alignSelf: "start",
          backgroundColor: "inherit",
          textTransform: "none",
          display: "flex",
          alignItems: "center",
          border: "none",
          padding: 0,
          color: "inherit",
          "&:hover": {
            cursor: "pointer",
            transform: "scale(1.05)",
            backgroundColor: "lightgray",
            "@media (prefers-color-scheme: dark)": {
              backgroundColor: "#2B3844",
            },
          },
        }}
      >
        <ArrowBackIcon sx={{ marginRight: "8px", color: "inherit" }} />
        <Typography variant="body1" sx={{ color: "inherit" }}>
          Back
        </Typography>
      </Button>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          minHeight: "100vh",
          boxSizing: "border-box",
        }}
      >
        <Grid container spacing={4} sx={{ alignItems: "center" }}>
          <Grid item xs={12} md={6}>
            <img
              src={country.flags.svg}
              alt={`${country.name.common} flag`}
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              {country.name.common}
            </Typography>
            <Typography variant="body1">
              <strong>Native Name:</strong>{" "}
              {Object.values(country.name.nativeName)[0]?.common || "N/A"}
            </Typography>
            <Typography variant="body1">
              <strong>Population:</strong> {country.population.toLocaleString()}
            </Typography>
            <Typography variant="body1">
              <strong>Region:</strong> {country.region}
            </Typography>
            <Typography variant="body1">
              <strong>Sub Region:</strong> {country.subregion || "N/A"}
            </Typography>
            <Typography variant="body1">
              <strong>Capital:</strong> {country.capital[0]}
            </Typography>
            <Typography variant="body1">
              <strong>Top Level Domain:</strong> {country.tld.join(", ")}
            </Typography>
            <Typography variant="body1">
              <strong>Currencies:</strong>{" "}
              {Object.values(country.currencies)
                .map((c) => c.name)
                .join(", ")}
            </Typography>
            <Typography variant="body1">
              <strong>Languages:</strong>{" "}
              {Object.values(country.languages).join(", ")}
            </Typography>

            {country.borders && (
              <Box sx={{ marginTop: "20px" }}>
                <Typography variant="body1" gutterBottom>
                  <strong>Border Countries:</strong>
                </Typography>
                <Grid container spacing={1}>
                  {country.borders.map((border) => (
                    <Grid item key={border}>
                      <Button
                        onClick={() => navigate(`/${border.toLowerCase()}`)}
                        sx={{
                          textTransform: "none",
                          border: "none",
                          padding: "5px 10px",
                          color: "inherit",
                          backgroundColor: "inherit",
                          transition: "transform 0.2s, background-color 0.2s", // Smooth transition
                          "&:hover": {
                            cursor: "pointer",
                            transform: "scale(1.05)",
                            backgroundColor: "lightgray", // Light mode hover color
                            "@media (prefers-color-scheme: dark)": {
                              backgroundColor: "#2B3844", // Dark mode hover color
                            },
                          },
                        }}
                      >
                        {border}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default CountryPage;
