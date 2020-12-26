import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    margin: "auto",
    // width: "50%",
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    rowGap: "1em",
    columnGap: "0.5em ",
    gridAutoRows: "minmax(170px,auto)",
    background: "#eee",
    padding: "1em",
  },
  box1: {
    border: "#333 1px solid",
  },
});
export default function GridTest() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className="box1">
        Lorem lorem lorem Lorem lorem lorem Lorem lorem lorem Lorem lorem lorem
        Lorem lorem lorem Lorem lorem lorem Lorem lorem lorem Lorem lorem lorem
        Lorem lorem lorem Lorem lorem lorem Lorem lorem lorem Lorem lorem lorem
        Lorem lorem lorem
      </div>
      <div>Box1</div>
      <div>Box1</div>
      <div>Box1</div>
      <div>Box1</div>
      <div>Box1</div>
    </div>
  );
}
