import React from "react";
import { IEventsData } from "../DataInterfaces/DataInterfaces";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import moment from "moment";

interface CustomTableProps {
  data: IEventsData[];
  setEventData: (value: IEventsData) => void;
  setOpen: (value: boolean) => void;
  favouriteEvents: IEventsData[] | null;
  events: boolean;
}
const CustomTable = ({
  data,
  setEventData,
  setOpen,
  favouriteEvents,
  events,
}: CustomTableProps) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ width: "100%" }} aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow style={{ backgroundColor: "#727fb0" }}>
              {events ? "Events" : "Favourites"}
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
      <TableContainer component={Paper} style={{ maxHeight: 300 }}>
        <Table sx={{ width: "100%" }} aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow style={{ backgroundColor: "#727fb0" }}>
              <TableCell>favourite</TableCell>
              <TableCell>Venue name</TableCell>
              <TableCell align="right">City</TableCell>
              <TableCell align="right">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((event) => (
              <TableRow
                key={event.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  cursor: "pointer",
                }}
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
    </>
  );
};

export default CustomTable;
