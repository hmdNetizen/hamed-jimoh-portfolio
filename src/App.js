import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Theme from "./components/Theme";
import About from "./components/Sections/About";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Services from "./components/Sections/Services";
import Portfolio from "./components/Sections/Portfolio";
import Resume from "./components/Sections/Resume";

const useStyles = makeStyles((theme) => ({
  sectionContainer: {
    background: "#423125",
    paddingTop: "5em",
    paddingBottom: "8em",
    clipPath: "polygon(0 0, 100% 0, 100% 95%, 0 100%)",
  },
}));

function App() {
  const classes = useStyles();
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
        <Grid container direction="column" className={classes.sectionContainer}>
          <Services setPageCounter={setPageCounter} />
          <Portfolio />
        </Grid>
        <Resume />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
