import React from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getMovies } from "../../actions/searchActions";
import { getNominations, addNomination } from "../../actions/nominationActions";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1em",
    height: "inherit",
    width: "inherit",
  },
});
/**
 * Represents Search container that includes SearchBar and SearchResults
 * @param {Array} props
 */
function Search(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h5" style={{ padding: "1em" }}>
        Search
      </Typography>
      <SearchBar onSubmit={props.getMovies}></SearchBar>
      <SearchResults
        movies={props.movies}
        getNominations={props.getNominations}
        nominations={props.nominations}
        addNomination={props.addNomination}
      ></SearchResults>
    </div>
  );
}
Search.propTypes = {
  getMovies: PropTypes.func.isRequired,
  getNominations: PropTypes.func.isRequired,
  addNomination: PropTypes.func.isRequired,
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
})(Search);
