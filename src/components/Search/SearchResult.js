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
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
import RemoveRoundedIcon from "@material-ui/icons/RemoveRounded";
const useStyles = makeStyles({
  root: {
    margin: "auto",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    width: "90px",
    alignSelf: "center",
    background: "#ddd",
  },
  checkButton: {
    color: "#00e676",
  },
  buttonWrapper: {
    display: "flex",
  },
  buttons: {
    justifySelf: "flex-end",
  },
});
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
        <Typography variant="subtitle1">{props.Year}</Typography>
      </CardContent>
      <div className={classes.buttonWrapper}>
        <IconButton>
          <AddRoundedIcon></AddRoundedIcon>
        </IconButton>
        <IconButton>
          <RemoveRoundedIcon></RemoveRoundedIcon>
        </IconButton>
      </div>
      {/* <IconButton disabled>
        <CheckRoundedIcon className={classes.checkButton}></CheckRoundedIcon>
      </IconButton> */}
    </Card>
  );
}
