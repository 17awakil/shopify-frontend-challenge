import React from "react";
import { Grid, Typography, makeStyles, IconButton } from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import SearchResult from "./SearchResult";
const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "370px",
    padding: "1em",
  },
  results: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))",
    rowGap: "1em",
    columnGap: ".75em",
    overflow: "auto",
    height: "100%",
    width: "100%",
  },
  paper: {
    padding: "1em",
  },
  pages: {
    display: "flex",
    justifyContent: "space-around",
    padding: ".5em",
  },
}));

/**
 * The grid in which all search results are displayed for the user to nominate
 * @param {Array} props
 */
function SearchResults(props) {
  const classes = useStyles();
  if (props.movies !== undefined) {
    var list = props.movies.map((mov) => (
      <Grid item className="paper" key={mov.imdbID}>
        <SearchResult
          Title={mov.Title}
          Year={mov.Year}
          Poster={mov.Poster}
          imdbID={mov.imdbID}
          getNominations={props.getNominations}
          nominations={props.nominations}
          addNomination={props.addNomination}
        ></SearchResult>
      </Grid>
    ));
  }
  return (
    <div className={classes.root}>
      <Typography style={{ padding: "0.75em" }}>Search results...</Typography>
      <Grid container className={classes.results}>
        {list}
      </Grid>
    </div>
  );
}
export default SearchResults;
