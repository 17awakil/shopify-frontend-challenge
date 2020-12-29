import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  makeStyles,
  Grid,
} from "@material-ui/core";
import RemoveIcon from "@material-ui/icons/Remove";
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyItems: "left",
    margin: "5px",
  },
  image: {
    width: "40px",
    alignSelf: "center",
  },
  button: {
    alignSelf: "center",
  },
});
export default function NominationCard(props) {
  const classes = useStyles();
  function handleClick() {
    props.removeNomination(props.imdbID);
    // props.getNominations();
  }
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
        <Typography variant="subtitle1">{props.Year}</Typography>
      </CardContent>
      <div className={classes.button}>
        <IconButton aria-label="remove" onClick={handleClick}>
          <RemoveIcon></RemoveIcon>
        </IconButton>
      </div>
    </Card>
  );
}
