import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

import { IEventsData } from "../DataInterfaces/DataInterfaces";
import { ArtistEventsContext } from "../features/Contexts";
import { Tooltip } from "@mui/material";
import { useNavigate } from "react-router";

interface ModalProps {
  open: boolean;
  close: () => void;
  data: IEventsData;
}

function EventModal({ open, close, data }: ModalProps) {
  const navigate = useNavigate();
  const { favouriteEvents, setFavouriteEvents } =
    React.useContext(ArtistEventsContext);

  return (
    <Dialog
      open={open}
      onClose={close}
      maxWidth="md"
      style={{ backdropFilter: "blur(5px)" }}
    >
      {data && (
        <Card sx={{ width: "100%" }}>
          <Box
            padding={4}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography variant="h6" style={{ color: "black" }}>
              VENUE:
            </Typography>
            <Typography variant="h6" style={{ color: "grey" }}>
              {data.venue.name}
            </Typography>
          </Box>
          <CardMedia
            component="img"
            height={300}
            width={300}
            image={
              data.artist?.image_url
                ? data.artist?.image_url
                : "https://photos.bandsintown.com/large/7971244.jpeg"
            }
            alt="Paella dish"
          />
          <CardContent>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="body2" style={{ color: "black" }}>
                City:
              </Typography>
              <Typography variant="body2" style={{ color: "grey" }}>
                {data.venue.city}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="body2" style={{ color: "black" }}>
                Country:
              </Typography>
              <Typography variant="body2" style={{ color: "grey" }}>
                {data.venue.country}
              </Typography>
            </Box>
          </CardContent>
          <CardActions disableSpacing>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <IconButton
                style={{ cursor: "pointer" }}
                onClick={() => {
                  if (favouriteEvents?.some((ev) => ev.id === data.id)) {
                    setFavouriteEvents(
                      favouriteEvents.filter((item) => item.id !== data.id)
                    );
                  } else {
                    if (favouriteEvents) {
                      setFavouriteEvents([...favouriteEvents, data]);
                    } else {
                      setFavouriteEvents([data]);
                    }
                  }
                }}
              >
                <Tooltip
                  title={
                    favouriteEvents?.some((ev) => ev.id === data.id)
                      ? "remove from favourites"
                      : "add to favourites"
                  }
                >
                  <FavoriteIcon
                    color={
                      favouriteEvents?.some((ev) => ev.id === data.id)
                        ? "primary"
                        : "disabled"
                    }
                  />
                </Tooltip>
              </IconButton>
              <Tooltip title="go to favourites">
                <IconButton
                  aria-label="share"
                  onClick={() => {
                    navigate("/favourites");
                    close();
                  }}
                >
                  <ShareIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Close">
                <IconButton aria-label="close" onClick={() => close()}>
                  <CloseIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </CardActions>
        </Card>
      )}
    </Dialog>
  );
}

export default EventModal;
