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
    // justifyContent: "space-between",
    margin: "5px",
    alignItems: "center",
    padding: "5px",
  },
  image: {
    width: "45px",
    padding: "5px",
    // flexGrow: 1,
  },
  content: {
    padding: "4px",
    flexGrow: 2,
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
      <div style={{ padding: "5px" }}>
        <Typography variant="body1">{props.number + 1}</Typography>
      </div>
      <CardMedia
        className={classes.image}
        component="img"
        alt={props.Title}
        image={props.Poster}
        title={props.Title}
      ></CardMedia>
      <CardContent className={classes.content}>
        <Typography
          variant="body1"
          style={{ overflow: "hidden", textOverflow: "ellipsis" }}
        >
          {props.Title}
        </Typography>
        <Typography variant="subtitle1">({props.Year})</Typography>
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
