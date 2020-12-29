import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import RemoveIcon from "@material-ui/icons/Remove";
const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-around",
    margin: "5px",
  },
  image: {
    width: "45px",
    alignSelf: "center",
    justifySelf: "start",
  },
  button: {
    alignSelf: "center",
  },
});
export default function NominationCard(props) {
  const classes = useStyles();
  function handleClick() {
    props.removeNomination(props.imdbID);
    props.getNominations();
  }
  return (
    <Card className={classes.root}>
      <div></div>
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
        <IconButton
          aria-label="remove"
          onClick={handleClick}
          title="Remove Nomination"
        >
          <RemoveIcon></RemoveIcon>
        </IconButton>
      </div>
    </Card>
  );
}
