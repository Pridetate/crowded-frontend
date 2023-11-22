import React from "react";

import { ArtistEventsContext } from "../features/Contexts";
import Header from "../components/Header";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import moment from "moment";
import EventModal from "../components/EventModal";
import { IEventsData } from "../DataInterfaces/DataInterfaces";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Favourites = () => {
  const { favouriteEvents } = React.useContext(ArtistEventsContext);
  const [eventData, setEventData] = React.useState<IEventsData | null>(null);
  const [open, setOpen] = React.useState(false);
  console.log(favouriteEvents);
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
        {favouriteEvents && favouriteEvents.length > 0 && (
          <TableContainer component={Paper}>
            <Table sx={{ width: "100%" }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>favourite</TableCell>
                  <TableCell>Venue name</TableCell>
                  <TableCell align="right">City</TableCell>
                  <TableCell align="right">Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {favouriteEvents.map((event) => (
                  <TableRow
                    key={event.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    onClick={() => {
                      setEventData(event);
                      setOpen(true);
                    }}
                  >
                    <TableCell>
                      <FavoriteIcon
                        color={
                          favouriteEvents?.some((ev) => ev.id === event.id)
                            ? "primary"
                            : "disabled"
                        }
                      />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {event.venue.name}
                    </TableCell>
                    <TableCell>{event.venue.city}</TableCell>
                    <TableCell>
                      {moment(event.datetime).format("YYYY-MM-DD")}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
      {eventData && (
        <EventModal open={open} close={() => setOpen(false)} data={eventData} />
      )}
    </Box>
  );
};

export default Favourites;
