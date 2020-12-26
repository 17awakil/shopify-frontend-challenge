import { GET_MOVIES, MOVIES_LOADING } from "../actions/types";
const initialState = {
  items: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case MOVIES_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
