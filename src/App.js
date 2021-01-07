import { React, useState, useEffect } from "react";
import { Typography, Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import Search from "./components/Search/Search";
import Nominations from "./components/Nominations/Nominations";
// import "./App.css";
import "./styles/Layout.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getNominations } from "./actions/nominationActions";
/**
 * App entry point
 * @param {Array} props
 */
function App(props) {
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (props.nominations?.length === 5) setOpen(true);
    else setOpen(false);
  });

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="wrapper">
      <section className="navbar">
        <Typography variant="h3" align="center" style={{ color: "#fff" }}>
          The Shoppies
        </Typography>
      </section>
      <div className="content-container">
        <section className="nominations">
          <Nominations></Nominations>
        </section>
        <section className="search">
          <Search></Search>
        </section>
      </div>
      <Snackbar open={open} autoHideDuration={2000} handleClose={handleClose}>
        <Alert severity="success">You have nominated five movies!</Alert>
      </Snackbar>
    </div>
  );
}
Search.propTypes = {
  getNominations: PropTypes.func.isRequired,
  nominations: PropTypes.array,
};
const mapStateToProps = (state) => ({
  nominations: state.nominations.items,
});
export default connect(mapStateToProps, {
  getNominations,
})(App);
