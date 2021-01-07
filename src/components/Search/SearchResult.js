import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";
import AddButton from "./AddButton";
const useStyles = makeStyles({
  root: {
    margin: "auto",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: "90px",
    alignSelf: "center",
    paddingTop: "10px",
  },
  checkButton: {
    color: "#00e676",
  },
  buttonWrapper: {
    display: "flex",
  },
});

/**
 * Represents a movie result found from a movie search
 * @param {Array} props
 *
 */
export default function SearchResult(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.image}
        component="img"
        alt={props.Title}
        image={props.Poster}
        title={props.Title}
      ></CardMedia>
      <CardContent>
        <Typography variant="body1">{props.Title}</Typography>
        <Typography variant="subtitle1">({props.Year})</Typography>
      </CardContent>
      <AddButton
        Title={props.Title}
        Year={props.Year}
        Poster={props.Poster}
        imdbID={props.imdbID}
        addNomination={props.addNomination}
        nominations={props.nominations}
      ></AddButton>
    </Card>
  );
}
