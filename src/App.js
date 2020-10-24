import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Theme from "./components/Theme";
import About from "./components/Sections/About";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Services from "./components/Sections/Services";
import Portfolio from "./components/Sections/Portfolio";

const useStyles = makeStyles((theme) => ({
  sectionContainer: {
    background: "#423125",
    paddingTop: "5em",
    paddingBottom: "5em",
  },
}));

function App() {
  const classes = useStyles();
  const [selectedItem, setselectedItem] = useState(0);
  const [pageCounter, setPageCounter] = useState(1);
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Grid container direction="column">
        <About
          selectedItem={selectedItem}
          setselectedItem={setselectedItem}
          pageCounter={pageCounter}
          setPageCounter={setPageCounter}
        />
        <Grid container direction="column" className={classes.sectionContainer}>
          <Services setPageCounter={setPageCounter} />
          <Portfolio />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
