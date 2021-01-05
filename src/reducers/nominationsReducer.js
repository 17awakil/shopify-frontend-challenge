import {
  REMOVE_NOMINATION,
  GET_NOMINATIONS,
  ADD_NOMINATION,
  NOMINATIONS_LOADING,
} from "../actions/types";
const initialState = {
  items: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_NOMINATIONS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case REMOVE_NOMINATION:
      return {
        ...state.items,
        items: state.items.filter((item) => item.imdbID !== action.payload),
        loading: false,
      };
    case ADD_NOMINATION:
      return {
        ...state,
        items: [action.payload, ...state.items],
      };
    case NOMINATIONS_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
