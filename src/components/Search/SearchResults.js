import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import SearchResult from "./SearchResult";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "1em",
    width: "100%",
    // background: "#ddd",
    padding: "1em",
    borderRadius: "25px",
    // overflowY: "scroll",
  },
  results: {
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "repeat(5,1fr)",
    rowGap: "1em",
    columnGap: "0.5em ",
    gridAutoRows: "minmax(100px,auto)",
    // display: "flex",
    // flexDirection: "row",
    // flexWrap: "wrap",
    // justifyContent: "space-between",
    padding: "0.5em",
    // overflowY: "scroll",
  },
  paper: {
    padding: "1em",
  },
}));
function SearchResults(props) {
  const classes = useStyles();
  if (props.movies !== undefined) {
    var list = props.movies.map((mov) => (
      <Grid item className="paper" key={mov.imdbID}>
        <SearchResult
          Title={mov.Title}
          Year={mov.Year}
          Poster={mov.Poster}
        ></SearchResult>
      </Grid>
    ));
  }
  return (
    <div className={classes.root}>
      <Typography>Search results...</Typography>
      <Grid container className={classes.results}>
        {list}
      </Grid>
    </div>
  );
}
export default SearchResults;
