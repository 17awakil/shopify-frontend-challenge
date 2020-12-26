import axios from "axios";
import { GET_MOVIES, MOVIES_LOADING } from "./types";

export const getMovies = (movieQuery) => (dispatch) => {
  axios
    .get(`http://www.omdbapi.com/?apiKey=e8c6c16e&type=movie&s=${movieQuery}`)
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
