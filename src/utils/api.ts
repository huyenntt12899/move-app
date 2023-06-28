import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
// TODO: fix temporary
const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YmE1NjBlYjJlNWQ0ZWM3YjQxZTEzNjkxNWQ3MDMzYiIsInN1YiI6IjY0OWFmNjY1ZDM1ZGVhMDEyYzE3MGEyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8yFsC5a0SFAu79zMCVbdFRJKyil7CJ87Y9EZ1R25agQ";
// const TMDB_TOKEN = process.env.MOVIE_APP_TMDB_TOKEN;

const headers = {
  Authorization: "Bearer " + TMDB_TOKEN,
  accept: "application/json",
};

export const fetchDataFromApi = async (url: string, params?: any) => {
  try {
    const { data } = await axios.get(BASE_URL + url, { headers, params });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
