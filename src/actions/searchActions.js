import axios from "axios";
import { GET_MOVIES, MOVIES_LOADING } from "./types";

export const getMovies = (movieQuery) => (dispatch) => {
  axios
<<<<<<< HEAD
    .get(`https://www.omdbapi.com/?apiKey=e8c6c16e&type=movie&s=${movieQuery}`)
=======
    .get(`http://www.omdbapi.com/?apiKey=e8c6c16e&type=movie&s=${movieQuery}`)
>>>>>>> 414cfb594998f4a1e27d75188d2632512b0e07cf
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
