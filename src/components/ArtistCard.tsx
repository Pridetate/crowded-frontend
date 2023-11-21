import * as React from "react";
import moment from "moment-timezone";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Modal,
  Tooltip,
  Typography,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Navigate, useNavigate } from "react-router";
import { ArtistEventsContext } from "../features/Contexts";
import { IEventsData } from "../DataInterfaces/DataInterfaces";
import EventModal from "./EventModal";

const ArtistCard = () => {
  const { artistEvents, artistState, setFavouriteEvents, favouriteEvents } =
    React.useContext(ArtistEventsContext);
  const [eventData, setEventData] = React.useState<IEventsData | null>(null);
  const [open, setOpen] = React.useState(false);

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      {artistState && (
        <Card sx={{ width: "100%" }}>
          <CardMedia
            component="img"
            height="194"
            image={artistState.image_url}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.primary">
              name
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {artistState.name}
            </Typography>
          </CardContent>
        </Card>
      )}

      {artistEvents && artistEvents.length > 0 && (
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
              {artistEvents.map((event) => (
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
      {artistState && !artistEvents && (
        <Box>
          <Typography>No events for this artist</Typography>
        </Box>
      )}
      {eventData && (
        <EventModal open={open} close={() => setOpen(false)} data={eventData} />
      )}
    </Box>
  );
};

export default ArtistCard;
