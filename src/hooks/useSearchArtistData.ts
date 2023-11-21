import { useContext, useEffect, useState } from "react";
import { fetchArtistData, fetchEventsData } from "../API/API";
import { ArtistEventsContext } from "../features/Contexts";

export const useSearchArtistData = (artist_name: string, date: string) => {
  const { setArtistEvents, setArtistState } = useContext(ArtistEventsContext);

  const [loading, setLoading] = useState(false);
  const [successful, setIsSuccessful] = useState(false);

  const getArtistAndEvents = async () => {
    setLoading(true);
    const data = await fetchArtistData(artist_name);
    if (data && data.name) {
      setArtistState(data);
      console.log("data, ", data);
      const events = await fetchEventsData(data.name, date);
      if (events) {
        setArtistEvents(events);
        console.log("events done");
      }

      setIsSuccessful(true);
    }
    setLoading(false);
  };

  // console.log("art, ", artistState);
  useEffect(() => {
    if (artist_name) {
      getArtistAndEvents();
    } else {
      setIsSuccessful(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [artist_name, date]);
  return {
    loading,
    successful,
  };
};
