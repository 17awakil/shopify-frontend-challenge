import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  makeStyles,
  Snackbar,
} from "@material-ui/core";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
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
  buttons: {
    justifySelf: "flex-end",
  },
});
export default function SearchResult(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleAdd() {
    console.log("handle add");
    const newNomination = {
      Title: props.Title,
      Year: props.Year,
      imdbID: props.imdbID,
      Poster: props.Poster,
    };
    props.addNomination(newNomination);
    props.getNominations();
  }
  function AddButton() {
    if (!props.nominations.find((nom) => nom.imdbID === props.imdbID)) {
      return (
        <div className={classes.buttonWrapper}>
          <IconButton onClick={handleAdd} title="Nominate Movie">
            <AddRoundedIcon></AddRoundedIcon>
          </IconButton>
        </div>
      );
    } else {
      return (
        <div className={classes.buttonWrapper}>
          <IconButton disabled title="Already nominated">
            <CheckRoundedIcon></CheckRoundedIcon>
          </IconButton>
        </div>
      );
    }
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
        <Typography variant="subtitle1">({props.Year})</Typography>
      </CardContent>
      <AddButton></AddButton>
    </Card>
  );
}
