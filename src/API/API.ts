import axios from "axios";
import { IArtistData, IEventsData } from "../DataInterfaces/DataInterfaces";

export const fetchArtistData = async (name: string) => {
  return await axios
    .post<IArtistData>("http://localhost:5000/", {
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
    .post("http://localhost:5000/events", {
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
