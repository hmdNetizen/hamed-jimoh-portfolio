import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    paddingLeft: "25%",
    paddingTop: "7em",

    marginTop: "-10%",
    height: "960px",
    background: theme.palette.common.darkBrown,

    [theme.breakpoints.down("md")]: {
      paddingLeft: "8.33333%",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "-17%",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "-25%",
    },
  },
}));

const Contact = () => {
  const classes = useStyles();
  //   const theme = useTheme();
  return (
    <Grid
      container
      direction="column"
      className={`${classes.contactContainer} contact-clip`}
    >
      <Typography variant="h2">Hello</Typography>
    </Grid>
  );
};

export default Contact;
