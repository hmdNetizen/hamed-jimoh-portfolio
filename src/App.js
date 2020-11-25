import React, { useState, useEffect } from "react";
import "./App.css";
// import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Theme from "./components/Theme";
import About from "./components/Sections/About";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Services from "./components/Sections/Services";
import Portfolio from "./components/Sections/Portfolio";
import Resume from "./components/Sections/Resume";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Contact from "./components/Sections/Contact";

import Footer from "./components/Sections/Footer";
import Skills from "./components/Sections/Skills";

const useStyles = makeStyles((theme) => ({
  sectionContainer: {
    background: "#423125",
    paddingBottom: "8em",
    position: "relative",
    zIndex: 1,
  },
  resumeContainer: {
    paddingLeft: "25%",
    paddingBottom: "10em",
    marginTop: "-20%",
    background: "#E4D4C8",

    [theme.breakpoints.down("md")]: {
      paddingLeft: "8.33333%",
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
      marginTop: "-25%",
    },
  },
}));

function App() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesXXS = useMediaQuery("(max-width:450px)");
  const matchesXXXS = useMediaQuery("(max-width:380px)");
  const matchesXXXXS = useMediaQuery("(max-width:340px)");

  const [selectedItem, setselectedItem] = useState(0);
  const [pageCounter, setPageCounter] = useState(1);

  useEffect(() => {
    function changePageOnScroll() {
      const XSBreakpoints = [0, 488, 2672, 4999, 6697, 8147];
      const XXSBreakpoints = [0, 560, 2736, 5060, 7080, 8956];
      const XXXSBreakpoints = [0, 534, 2907, 5192, 7574, 9281];
      const XXXXSBreakpoints = [0, 593, 3040, 5307, 8038, 9624];

      // If the screen matches 450px breakpoints
      matchesXS &&
        XSBreakpoints.forEach((bp, index) => {
          window.pageYOffset >= bp && setPageCounter(index + 1);
        });

      // If the screen matches 450px breakpoints
      matchesXXS &&
        XXSBreakpoints.forEach((bp, index) => {
          window.pageYOffset >= bp && setPageCounter(index + 1);
        });

      //If the screen matches 380px breakpoints
      matchesXXXS &&
        XXXSBreakpoints.forEach((bp, index) => {
          window.pageYOffset >= bp && setPageCounter(index + 1);
        });
      //If the screen matches 340px breakpoints
      matchesXXXXS &&
        XXXXSBreakpoints.forEach((bp, index) => {
          window.pageYOffset >= bp && setPageCounter(index + 1);
        });
    }
    window.addEventListener("scroll", changePageOnScroll, false);
    return () =>
      window.removeEventListener("scroll", changePageOnScroll, false);
  }, [
    pageCounter,
    setPageCounter,
    matchesXS,
    matchesXXS,
    matchesXXXS,
    matchesXXXXS,
  ]);
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Grid container direction="column" style={{ overflowX: "hidden" }}>
        <About
          selectedItem={selectedItem}
          setselectedItem={setselectedItem}
          pageCounter={pageCounter}
          setPageCounter={setPageCounter}
        />
        <Grid
          container
          direction="column"
          className={`${classes.sectionContainer} section-clip`}
          style={{ paddingBottom: matchesXXS ? "6em" : undefined }}
        >
          <Services setPageCounter={setPageCounter} />
          <Portfolio />
        </Grid>
        <Grid
          container
          direction="column"
          justify="center"
          className={`${classes.resumeContainer} section-clip`}
          style={{
            marginTop: matchesXXXXS ? "-40%" : matchesXXXS ? "-30%" : undefined,
          }}
        >
          <Resume />
          <Skills />
        </Grid>
        <Contact />
        <Footer />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
