import { createMuiTheme } from "@material-ui/core/styles";

const carafe = "#523A28";
const brown = "#A47551";
const tan = "#D0B49F";
const sandDollar = "#E4D4C8";
const darkBrown = "#423125";

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: carafe,
    },
    secondary: {
      main: brown,
    },
    common: {
      gold: carafe,
      brown: brown,
      tan: tan,
      dollar: sandDollar,
      darkBrown: darkBrown,
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",

    h2: {
      fontSize: "2.75rem",
      fontWeight: 700,
      color: tan,
    },
    h3: {
      color: carafe,
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h4: {
      fontSize: "2.25rem",
      fontWeight: 700,
      color: tan,
    },
    h5: {
      fontSize: "1.75rem",
      fontWeight: 500,
      color: tan,
    },
    h6: {
      fontSize: "1.25rem",
      fontWeight: 500,
      color: tan,
    },
    body1: {
      fontSize: "1.2rem",
    },
    body2: {
      fontSize: "1rem",
    },
    btn: {
      textTransform: "none",
      color: "#fff",
    },
    circle: {
      borderRadius: "50%",
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
    },
  },

  overrides: {
    MuiListItemText: {
      primary: {
        fontSize: "2rem",
      },
    },
    MuiSvgIcon: {
      root: {
        fontSize: "3rem",
      },
    },
    MuiList: {
      padding: {
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
    MuiGrid: {
      "spacing-xs-3": {
        width: "100%",
      },
      "spacing-xs-6": {
        width: "100%",
        margin: 0,
        paddingRight: 0,
      },
    },
    MuiCssBaseline: {
      "@global": {
        html: {
          scrollBehavior: "smooth",
        },
      },
    },
    MuiInputLabel: {
      root: {
        fontSize: "1rem",
        color: tan,
        "&$focused": {
          color: tan,
        },
      },
    },
    MuiInput: {
      underline: {
        "&:before": {
          borderBottom: `2px solid ${carafe}`,
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `2px solid ${carafe}`,
        },
        "&:after": {
          borderBottomColor: carafe,
        },
      },
    },
    MuiInputBase: {
      root: {
        color: carafe,
        fontSize: "1rem",
      },
    },
  },
});

export default Theme;
