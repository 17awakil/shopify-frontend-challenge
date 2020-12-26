import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import NominationCard from "./NominationCard";
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    padding: "1em",
    justifyItems: "center",
  },
});

const movies = [
  {
    Title: "The Godfather",
    Year: "2007",
    id: "tt0068646",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Godfather",
    Year: "2007",
    id: "tt0068646",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Godfather",
    Year: "2007",
    id: "tt0068646",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Godfather",
    Year: "2007",
    id: "tt0068646",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Godfather",
    Year: "2007",
    id: "tt0068646",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
];
function Nominations() {
  const classes = useStyles();
  var list = movies.map((movie) => (
    <NominationCard
      Title={movie.Title}
      Poster={movie.Poster}
      Year={movie.Year}
    ></NominationCard>
  ));
  return (
    <div className={classes.root}>
      <Typography variant="h6">Nominations</Typography>
      {list}
    </div>
  );
}
export default Nominations;
