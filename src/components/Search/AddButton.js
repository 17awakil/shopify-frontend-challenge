import React from "react";
import { IconButton, makeStyles } from "@material-ui/core";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
const useStyles = makeStyles({
  buttonWrapper: {
    display: "flex",
  },
});

/**
 * Represents a conditionally rendered add button on a search result
 * @param {Array} props
 */
function AddButton(props) {
  const classes = useStyles();

  /**
   * Nominates the movie when add button is pressed
   */
  function handleAdd() {
    const newNomination = {
      Title: props.Title,
      Year: props.Year,
      imdbID: props.imdbID,
      Poster: props.Poster,
    };
    props.addNomination(newNomination);
  }

  // If movie isn't nominated already, display nominate button
  if (!props.nominations.find((nom) => nom.imdbID === props.imdbID)) {
    // Check if you can still nominate movies (< 5 nominations)
    if (props.nominations?.length !== 5) {
      return (
        <div className={classes.buttonWrapper}>
          <IconButton onClick={handleAdd} title="Nominate Movie">
            <AddRoundedIcon></AddRoundedIcon>
          </IconButton>
        </div>
      );
    }
    // Disable nominate button if there are >5 nominations
    else {
      return (
        <div className={classes.buttonWrapper}>
          <IconButton onClick={handleAdd} disabled title="Nominate Movie">
            <AddRoundedIcon></AddRoundedIcon>
          </IconButton>
        </div>
      );
    }
  }
  // Otherwise, movie is already nominated, and display a checked button
  else {
    return (
      <div className={classes.buttonWrapper}>
        <IconButton disabled title="Already nominated">
          <CheckRoundedIcon></CheckRoundedIcon>
        </IconButton>
      </div>
    );
  }
}

export default AddButton;
