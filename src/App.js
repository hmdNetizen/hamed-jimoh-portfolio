import React, { useState } from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Theme from "./components/Theme";
import About from "./components/Sections/About";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Services from "./components/Sections/Services";
import Portfolio from "./components/Sections/Portfolio";
import Resume from "./components/Sections/Resume";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Contact from "./components/Sections/Contact";

import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const useStyles = makeStyles((theme) => ({
  sectionContainer: {
    background: "#423125",
    paddingTop: "5em",
    paddingBottom: "8em",
  },
}));

function App() {
  const classes = useStyles();
  const matchesXXS = useMediaQuery("(max-width:450px)");
  const [selectedItem, setselectedItem] = useState(0);
  const [pageCounter, setPageCounter] = useState(1);
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
        <Resume />
        <Contact />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
