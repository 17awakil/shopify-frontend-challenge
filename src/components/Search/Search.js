import React from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getMovies } from "../../actions/searchActions";
import {
  getNominations,
  addNomination,
  removeNomination,
} from "../../actions/nominationActions";
import { Typography } from "@material-ui/core";

function Search(props) {
  return (
    <div
      className="search"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "1em",
      }}
    >
      <Typography variant="h5" style={{ padding: "0.5em" }}>
        Search
      </Typography>
      <SearchBar onSubmit={props.getMovies}></SearchBar>
      <SearchResults
        movies={props.movies}
        getNominations={props.getNominations}
        addNomination={props.addNomination}
        removeNomination={props.removeNomination}
        nominations={props.nominations}
      ></SearchResults>
    </div>
  );
}
Search.propTypes = {
  getMovies: PropTypes.func.isRequired,
  addNomination: PropTypes.func.isRequired,
  removeNomination: PropTypes.func.isRequired,
  getNominations: PropTypes.func.isRequired,
  movies: PropTypes.array,
  nominations: PropTypes.array,
};
const mapStateToProps = (state) => ({
  movies: state.movies.items,
  nominations: state.nominations.items,
});
export default connect(mapStateToProps, {
  getMovies,
  getNominations,
  addNomination,
  removeNomination,
})(Search);
