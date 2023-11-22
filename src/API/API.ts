import axios from "axios";
import { IArtistData, IEventsData } from "../DataInterfaces/DataInterfaces";

const BASE_API = "https://pride-crowded.onrender.com/";

export const fetchArtistData = async (name: string) => {
  return await axios
    .post<IArtistData>(BASE_API, {
      name,
    })
    .then(
      (response) => {
        console.log("res", response.data);
        return response.data as unknown as IArtistData;
      },
      (error) => {
        console.log("err", error);
      }
    );
};
export const fetchEventsData = async (name: string, date: string = "all") => {
  return await axios
    .post(`${BASE_API}events`, {
      name,
      date,
    })
    .then(
      (response) => {
        console.log("res", response.data);
        return response.data as unknown as IEventsData[];
      },
      (error) => {
        console.log("err", error);
      }
    );
};
