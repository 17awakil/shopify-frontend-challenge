import { React, useEffect } from "react";
import { Typography, makeStyles, Paper } from "@material-ui/core";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getNominations,
  removeNomination,
} from "../../actions/nominationActions";
import NominationCard from "./NominationCard";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: "1em",
    justifyContent: "space-around",
    height: "inherit",
    backgroundColor: "#e6f6e8",
    marginTop: "2em",
    marginBottom: "2em",
    marginRight: "1em",
    marginLeft: "1em",
  },
  nominationsWrapper: {
    height: "inherit",
    overflow: "auto",
  },
});

/**
 * Nominations section that includes all the nominations for the user
 * @param {Array} props
 */
function Nominations(props) {
  const classes = useStyles();
  var list = [];
  useEffect(() => {
    props.getNominations();
  }, []);
  if (props.nominations !== undefined && props.nominations instanceof Array) {
    list = props.nominations.map((movie, i) => (
      <NominationCard
        Title={movie.Title}
        Poster={movie.Poster}
        Year={movie.Year}
        key={i}
        number={i}
        imdbID={movie.imdbID}
        removeNomination={props.removeNomination}
        getNominations={props.getNominations}
      ></NominationCard>
    ));
  }
  return (
    <Paper className={classes.root}>
      <Typography variant="h5" style={{ padding: "1em" }}>
        Nominations
      </Typography>
      <div className={classes.nominationsWrapper}>{list}</div>
    </Paper>
  );
}

Nominations.propTypes = {
  getNominations: PropTypes.func.isRequired,
  removeNomination: PropTypes.func.isRequired,
  nominations: PropTypes.array,
};
const mapStateToProps = (state) => ({
  nominations: state.nominations.items,
});
export default connect(mapStateToProps, { getNominations, removeNomination })(
  Nominations
);
