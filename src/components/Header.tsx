import { Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Box
      mt={2}
      mb={2}
      sx={{
        width: "96%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#656966",
        paddingLeft: "2%",
        paddingRight: "2%",
        paddingBottom: "2%",
      }}
    >
      <Button
        style={{ textDecoration: "underline", color: "black" }}
        onClick={() => navigate("/")}
      >
        Artist details
      </Button>
      <Button
        style={{ textDecoration: "underline", color: "black" }}
        onClick={() => navigate("/favourites")}
      >
        Favourites
      </Button>
    </Box>
  );
};

export default Header;
