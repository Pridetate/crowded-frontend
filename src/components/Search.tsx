import React, { useEffect, useState } from "react";
import { Alert, Box, InputAdornment, TextField, Tooltip } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";

interface SearchProps {
  setSearchParams: (search: string, date: string) => void;
}

const Search = ({ setSearchParams }: SearchProps) => {
  const [searchName, setSearchName] = useState("");
  const [date, setDate] = useState("all");
  const [isErrorMessage, setIsErrorMessage] = useState(false);

  const searchHandler = () => {
    console.log("name, ", searchName);
    if (searchName) {
      setSearchParams(searchName, date);
    } else {
      setIsErrorMessage(true);
    }
  };
  useEffect(() => {
    if (isErrorMessage) {
      const timeId = setTimeout(() => {
        // After 5 seconds set the show value to false

        setIsErrorMessage(false);
      }, 5000);

      return () => {
        clearTimeout(timeId);
      };
    }
    // when there is an empty string, the alert is displayed for 5 seconds
  }, [isErrorMessage]);
  return (
    <Box mt={5} mb={2}>
      <TextField
        style={{ width: "100%" }}
        onChange={(e) => setSearchName(e.target.value)}
        value={searchName}
        id="outlined-basic"
        label="search artist"
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <Tooltip title="choose the type of events" placement="top">
                <FormControl fullWidth>
                  <Select
                    variant="filled"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={date}
                    label="Age"
                    onChange={(e) => {
                      setDate(e.target.value);
                    }}
                  >
                    <MenuItem value="all">all</MenuItem>
                    <MenuItem value="upcoming">upcoming</MenuItem>
                    <MenuItem value="past">past</MenuItem>
                  </Select>
                </FormControl>
              </Tooltip>
              <Tooltip title="Click to search" style={{ cursor: "pointer" }}>
                <SearchIcon onClick={() => searchHandler()} />
              </Tooltip>
            </InputAdornment>
          ),
        }}
      />
      {isErrorMessage && (
        <Box mt={2}>
          <Alert
            variant="outlined"
            severity="error"
            onClose={() => {
              setIsErrorMessage(false);
            }}
          >
            Please search a valid name
          </Alert>
        </Box>
      )}
    </Box>
  );
};

export default Search;
