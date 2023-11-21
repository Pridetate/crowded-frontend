import React, { useState } from "react";
import ArtistCard from "../components/ArtistCard";
import { useSearchArtistData } from "../hooks/useSearchArtistData";
import Search from "../components/Search";
import LoadingSpinner from "../components/Spinner";
import { Box, Typography } from "@mui/material";
import Header from "../components/Header";

const Artist = () => {
  const [searchParams, setSearchParams] = useState("");
  const [date, setDate] = useState("");
  const { loading, successful } = useSearchArtistData(searchParams, date);

  const setAllVariables = (
    search_parameter: string,
    date_parameter: string
  ) => {
    setSearchParams(search_parameter);
    setDate(date_parameter);
  };
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "70%",
        }}
      >
        <Header />
        <Search setSearchParams={setAllVariables} />
        {loading ? (
          <LoadingSpinner />
        ) : !successful ? (
          <Typography>failed to fetch data</Typography>
        ) : (
          <>
            <ArtistCard />
          </>
        )}
      </Box>
    </Box>
  );
};

export default Artist;
