import React, { useEffect, useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Artist from "./routes/Artist";
import Favourites from "./routes/Favourites";
import { ArtistEventsContext } from "./features/Contexts";
import { IArtistData, IEventsData } from "./DataInterfaces/DataInterfaces";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Artist />,
    },
    {
      path: "/favourites",
      element: <Favourites />,
    },
  ],
  { basename: "/crowded-frontend" }
);

function App() {
  const [artistState, setArtistState] = useState<IArtistData | null>(null);
  const [artistEvents, setArtistEvents] = useState<IEventsData[] | null>(null);
  const [favourites, setFavour] = useState<IEventsData[] | null>(null);

  const setFavourites = (items: IEventsData[]) => {
    localStorage.setItem("items", JSON.stringify(items));
    setFavour(items);
  };

  useEffect(() => {
    if (localStorage.getItem("items")) {
      const items = JSON.parse(localStorage.getItem("items")!);
      if (items) {
        setFavourites(items);
      }
    }
  }, []);

  return (
    <ArtistEventsContext.Provider
      value={{
        artistEvents,
        setArtistEvents,
        favouriteEvents: favourites,
        setFavouriteEvents: setFavourites,
        artistState,
        setArtistState,
      }}
    >
      <RouterProvider router={router} />
    </ArtistEventsContext.Provider>
  );
}

export default App;
