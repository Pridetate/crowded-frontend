import { createContext } from "react";
import { IArtistData, IEventsData } from "../DataInterfaces/DataInterfaces";

interface IArtist {
  artistState: IArtistData | null;
  setArtistState: (value: IArtistData) => void;
}
interface IArtistEvents {
  artistEvents: IEventsData[] | null;
  setArtistEvents: (value: IEventsData[]) => void;
  favouriteEvents: IEventsData[] | null;
  setFavouriteEvents: (value: IEventsData[]) => void;
  artistState: IArtistData | null;
  setArtistState: (value: IArtistData) => void;
}
interface IFavouriteEvents {
  favouriteEvents: IEventsData[] | null;
  setFavouriteEvents: (value: IEventsData[]) => void;
}

export const ArtistContext = createContext<IArtist>({
  artistState: null,
  setArtistState: () => {},
});

export const ArtistEventsContext = createContext<IArtistEvents>({
  artistEvents: null,
  setArtistEvents: () => {},
  artistState: null,
  setArtistState: () => {},
  favouriteEvents: null,
  setFavouriteEvents: () => {},
});

export const FavouritesContext = createContext<IFavouriteEvents>({
  favouriteEvents: null,
  setFavouriteEvents: () => {},
});
