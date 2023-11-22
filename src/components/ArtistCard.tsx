import * as React from "react";

import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { ArtistEventsContext } from "../features/Contexts";
import { IEventsData } from "../DataInterfaces/DataInterfaces";
import EventModal from "./EventModal";
import CustomTable from "./CustomTable";

const ArtistCard = () => {
  const { artistEvents, artistState, favouriteEvents } =
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
        <Box mb={2}>
          <Card sx={{ width: "100%" }}>
            <CardMedia
              component="img"
              height="300"
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
        </Box>
      )}

      {artistEvents && artistEvents.length > 0 && (
        <CustomTable
          data={artistEvents}
          setEventData={setEventData}
          setOpen={setOpen}
          favouriteEvents={favouriteEvents}
          events={true}
        />
      )}
      {artistState && !artistEvents && (
        <Box>
          <Typography>No events for this artist</Typography>
        </Box>
      )}
      {!artistEvents && favouriteEvents && (
        <CustomTable
          data={favouriteEvents}
          setEventData={setEventData}
          setOpen={setOpen}
          favouriteEvents={favouriteEvents}
          events={false}
        />
      )}
      {eventData && (
        <EventModal open={open} close={() => setOpen(false)} data={eventData} />
      )}
    </Box>
  );
};

export default ArtistCard;
