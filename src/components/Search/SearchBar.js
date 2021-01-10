import { React, useState } from "react";
import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "100%",
    justifySelf: "center",
    alignSelf: "center",
    paddingTop: "0.5em",
  },
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifySelf: "center",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

/**
 * Represents search bar where user can search for movies to nominate
 * @param {Array} props
 */
export default function SearchBar(props) {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Search Movies"
          inputProps={{ "aria-label": "search movies" }}
          onChange={(e) => {
            e.preventDefault();
            props.onSubmit(e.target.value);
          }}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
}
