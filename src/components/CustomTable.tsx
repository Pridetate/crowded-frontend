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
            <TableRow
              style={{
                backgroundColor: "#7e8cbd",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <span>{events ? "Events" : "Favourites"}</span>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
      <TableContainer component={Paper} style={{ maxHeight: 300 }}>
        <Table sx={{ width: "100%" }} aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow style={{ backgroundColor: "#727fb0" }}>
              <TableCell>
                <span>favourite</span>
              </TableCell>
              <TableCell>
                <span>Venue name</span>
              </TableCell>
              <TableCell>
                <span>City</span>
              </TableCell>
              <TableCell>
                <span>Date</span>
              </TableCell>
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
                  <span>{event.venue.name}</span>
                </TableCell>
                <TableCell>
                  <span>{event.venue.city}</span>
                </TableCell>
                <TableCell>
                  <span>{moment(event.datetime).format("YYYY-MM-DD")}</span>
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
