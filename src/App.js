import Search from "./components/Search/Search";
import { Provider } from "react-redux";
import store from "./store";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import GridTest from "./components/GridTest";
import Nominations from "./components/Nominations/Nominations";
import "./App.css";
import "./styles/Layout.css";

const useStyles = makeStyles({
  root: {
    display: "grid",
    gridTemplateColumns: "2fr 3fr 1fr",
    gridTemplateRows: "1fr 8fr",
    margin: "auto",
    rowGap: "1em",
    columnGap: "1em ",
    justifyContent: "center",
    justifyItems: "center",
    backgroundColor: "#fbf7ed",
    height: "100%",
  },
  navbar: {
    gridArea: "1 / 1/ span 1/ span 3",
    alignSelf: "start",
    justifySelf: "center",
    background: "#000",
    width: "100%",
    // padding: "0em",
  },
  search: {
    gridColumnStart: 2,
    gridColumnEnd: "span 2",
    gridRowStart: 2,
    height: "100%",
    width: "100%",
    overflowY: "auto",
    backgroundColor: "#fbf7ed",
    borderRadius: "25px",
    // outline: "solid",
    // paddingRight: "16px",
    // margin: "2em",
    // border: "5px",
  },
  nominations: {
    gridColumnStart: 1,
    gridRowStart: 2,
    gridRowEnd: "span 1",
    alignSelf: "start",
    height: "100%",
    width: "100%",
    backgroundColor: "#fbf7ed",
    borderRadius: "25px",
    overflow: "auto",
    // outline: "solid",
    // padding: "1em",
    // margin: "auto",
  },
});
function App() {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <div className="root layout App">
        <div className="navbar">
          <Typography variant="h3" align="center" style={{ color: "#fff" }}>
            The Shoppies
          </Typography>
        </div>
        {/* <Search className={classes.search}></Search> */}
        <div className={classes.search}>
          <Search></Search>
        </div>
        <div className={classes.nominations}>
          <Nominations className={classes.nominations}></Nominations>
        </div>
      </div>
    </Provider>
  );
}

export default App;
