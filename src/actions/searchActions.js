import axios from "axios";
import { GET_MOVIES, MOVIES_LOADING } from "./types";
import keys from "../config/key";

export const getMovies = (movieQuery) => (dispatch) => {
  axios
    .get(
      `https://www.omdbapi.com/?apiKey=${keys.apiKey}&type=movie&s=${movieQuery}`
    )
    .then((movies) => {
      dispatch({ type: GET_MOVIES, payload: movies.data.Search });
    })
    .catch((e) => console.log(e));
};

export const setMoviesLoading = () => {
  return {
    type: MOVIES_LOADING,
  };
};
