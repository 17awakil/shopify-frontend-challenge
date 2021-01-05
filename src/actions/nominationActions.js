import axios from "axios";
import {
  GET_NOMINATIONS,
  ADD_NOMINATION,
  REMOVE_NOMINATION,
  NOMINATIONS_LOADING,
} from "./types";

export const getNominations = () => (dispatch) => {
<<<<<<< HEAD
=======
  console.log("getting nominations");
>>>>>>> 414cfb594998f4a1e27d75188d2632512b0e07cf
  axios
    .get(
      "https://us-central1-shopify-frontend-challenge.cloudfunctions.net/api/nominations"
    )
    .then((nominations) => {
<<<<<<< HEAD
=======
      // console.log(nominations.data);
>>>>>>> 414cfb594998f4a1e27d75188d2632512b0e07cf
      dispatch({ type: GET_NOMINATIONS, payload: nominations.data });
    })
    .catch((e) => console.log(e));
};

export const addNomination = (nomination) => (dispatch) => {
  console.log("add nomination");
  axios
    .post(
      "https://us-central1-shopify-frontend-challenge.cloudfunctions.net/api/nominations",
      nomination
    )
    .then((res) => {
      dispatch({ type: ADD_NOMINATION, payload: res.data });
      dispatch(getNominations());
    })
    .catch((e) => console.log(e));
};

export const removeNomination = (nominationId) => (dispatch) => {
<<<<<<< HEAD
=======
  console.log("removing nomination");
>>>>>>> 414cfb594998f4a1e27d75188d2632512b0e07cf
  axios
    .delete(
      `https://us-central1-shopify-frontend-challenge.cloudfunctions.net/api/nominations/${nominationId}`
    )
    .then((res) => {
      dispatch({ type: REMOVE_NOMINATION, payload: res.data });
      dispatch(getNominations());
    })
    .catch((e) => console.log(e));
};

export const setMoviesLoading = () => {
  return {
    type: NOMINATIONS_LOADING,
  };
};
