import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import SearchResult from "./SearchResult";
// import useMediaQuery from "@material-ui/core/useMediaQuery";
// import json2mq from "json2mq";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "1em",
    width: "100%",
    // background: "#ddd",
    padding: "1em",
    // borderRadius: "25px",
  },
  results: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))",
    rowGap: "1em",
    columnGap: ".5em",
    overflowY: "auto",
    paddingBottom: "1em",
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
          // key={mov.imdbID}
          imdbID={mov.imdbID}
          addNomination={props.addNomination}
          removeNomination={props.removeNomination}
          getNominations={props.getNominations}
          nominations={props.nominations}
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
