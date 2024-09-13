import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Grid,
  Button,
  Typography,
  Box,
  Container,
  useTheme,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function CountryPage() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);
  const theme = useTheme();

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
        if (data && data.length > 0) {
          setCountry(data[0]);
          setError(null);
        } else {
          setError("Country data is missing");
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setError("Failed to fetch country data");
      });
  }, [name]);

  if (error) return <div>{error}</div>;
  if (!country) return <div>Loading...</div>;

  const displayValue = (value) => {
    return value === "N/A" || !value ? "" : value;
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        paddingTop: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "70vh",
        paddingX: "16px",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          alignSelf: "flex-start",
          marginBottom: "20px",
          position: "relative",
          "@media (max-width: 600px)": {
            position: "absolute",
            top: "10px",
            left: "10px",
            zIndex: 10,
          },
        }}
      >
        <Button
          className="country-page-button"
          onClick={() => navigate(-1)}
          sx={{
            marginTop: "16px",
            marginLeft: "0px",
            backgroundColor: "inherit",
            textTransform: "none",
            display: "flex",
            alignItems: "center",
            border: "2px solid transparent",
            color: "inherit",
            "&:hover": {
              cursor: "pointer",
              transform: "scale(1.05)",
              border: `2px solid ${
                theme.palette.mode === "dark" ? "#ffffff" : "#000000"
              }`,
            },
          }}
        >
          <ArrowBackIcon sx={{ marginRight: "8px", color: "inherit" }} />
          <Typography variant="body1" sx={{ color: "inherit" }}>
            Back
          </Typography>
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "1200px",
          margin: "40px auto 0",
        }}
      >
        <Grid container spacing={4} sx={{ alignItems: "center" }}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              textAlign: "center",
              paddingRight: "40px",
            }}
          >
            {country.flags && country.flags.svg ? (
              <img
                src={country.flags.svg}
                alt={`${country.name.common} flag`}
                style={{
                  width: "100%",
                  maxHeight: "400px",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
              />
            ) : (
              <Typography variant="body1">No flag available</Typography>
            )}
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              textAlign: "left",
              paddingLeft: "40px",
            }}
          >
            <Typography variant="h3" gutterBottom>
              {country.name.common}
            </Typography>

            <Typography variant="body1">
              <strong>Native Name:</strong>{" "}
              {country.name.nativeName
                ? Object.values(country.name.nativeName)[0]?.common
                : ""}
            </Typography>
            <Typography variant="body1">
              <strong>Population:</strong>{" "}
              {country.population?.toLocaleString() || ""}
            </Typography>
            <Typography variant="body1">
              <strong>Region:</strong> {displayValue(country.region)}
            </Typography>
            <Typography variant="body1">
              <strong>Sub Region:</strong> {displayValue(country.subregion)}
            </Typography>
            <Typography variant="body1">
              <strong>Capital:</strong> {displayValue(country.capital?.[0])}
            </Typography>
            <Typography variant="body1">
              <strong>Top Level Domain:</strong> {country.tld?.join(", ") || ""}
            </Typography>
            <Typography variant="body1">
              <strong>Currencies:</strong>{" "}
              {country.currencies
                ? Object.values(country.currencies)
                    .map((c) => c.name)
                    .join(", ")
                : ""}
            </Typography>
            <Typography variant="body1">
              <strong>Languages:</strong>{" "}
              {country.languages
                ? Object.values(country.languages).join(", ")
                : ""}
            </Typography>

            <Typography
              variant="body1"
              gutterBottom
              sx={{ marginBottom: "8px", textAlign: "left" }}
            >
              <strong>Border Countries:</strong>
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              {country.borders &&
                country.borders.map((border) => (
                  <Button
                    key={border}
                    className="border-country-btn"
                    onClick={() => navigate(`/${border.toLowerCase()}`)}
                    sx={{
                      textTransform: "none",
                      border: "2px solid transparent",
                      padding: "1px 5px",
                      width: "70px",
                      color: "inherit",
                      backgroundColor: "inherit",
                      "&:hover": {
                        cursor: "pointer",
                        transform: "scale(1.05)",
                        border: `2px solid ${
                          theme.palette.mode === "dark" ? "#ffffff" : "#000000"
                        }`,
                      },
                    }}
                  >
                    {border}
                  </Button>
                ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default CountryPage;
