import React from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getMovies } from "../../actions/searchActions";
import { getNominations, addNomination } from "../../actions/nominationActions";
import { Typography, makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1em",
    height: "inherit",
    width: "inherit",
    backgroundColor: "#e6f6e8",
    marginTop: "2em",
    marginBottom: "2em",
    marginRight: "1em",
    marginLeft: "1em",
  },
});
/**
 * Represents Search container that includes SearchBar and SearchResults
 * @param {Array} props
 */
function Search(props) {
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={1}>
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
    </Paper>
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
