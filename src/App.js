import Search from "./components/Search/Search";
import { Typography, Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import Nominations from "./components/Nominations/Nominations";
import "./App.css";
import "./styles/Layout.css";
import { React, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getNominations } from "./actions/nominationActions";
function App(props) {
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setClose(true);
  };

  return (
    <div className="wrapper App">
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
      <Snackbar
        open={props.nominations?.length === 5}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          You have nominated five movies!
        </Alert>
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
