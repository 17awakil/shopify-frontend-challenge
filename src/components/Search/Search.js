import React from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getMovies } from "../../actions/searchActions";
import { Grid, Typography } from "@material-ui/core";

function Search(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "1em",
        // overflowY: "scroll",
        // border: "1em",
      }}
    >
      <SearchBar onSubmit={props.getMovies}></SearchBar>
      <SearchResults movies={props.movies}></SearchResults>
    </div>
  );
}
Search.propTypes = {
  getMovies: PropTypes.func.isRequired,
  movies: PropTypes.array,
};
const mapStateToProps = (state) => ({
  movies: state.movies.items,
});
export default connect(mapStateToProps, { getMovies })(Search);
