import { createMuiTheme } from "@material-ui/core";
import FiraSansExtraCondensed from "./fonts/Fira Sans/FiraSansExtraCondensed-SemiBoldItalic.ttf";

const firaSans = {
  fontFamily: "Fira Sans Extra Condensed",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 600,
  src: `
    local('FiraSansExtraCondensed-SemiBoldItalic'),
    local('FiraSansExtraCondensed-Regular'),
    url(${FiraSansExtraCondensed}) format('ttf')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const theme = createMuiTheme({
  palette: {},
  typography: {
    fontFamily: [firaSans],
  },
});

export default theme;
