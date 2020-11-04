import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import chatIcon from "../../assets/chat.svg";
import SendIcon from "../SendIcon";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    paddingLeft: "25%",
    paddingTop: "12em",
    paddingBottom: "5em",

    marginTop: "-10%",
    background: theme.palette.common.darkBrown,

    [theme.breakpoints.down("md")]: {
      paddingLeft: "8.33333%",
      marginTop: "-15%",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "-17%",
      paddingLeft: 0,
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "-25%",
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.tan}`,
    borderRadius: 5,
  },
  button: {
    ...theme.typography.btn,
    background: theme.palette.secondary.main,
    width: "100%",

    "&:hover": {
      background: theme.palette.secondary.dark,
    },
  },
}));

const Contact = () => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesXXS = useMediaQuery("(max-width: 430px)");
  const matchesXXSS = useMediaQuery("(max-width: 350px)");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  const validateEmail = (event) => {
    let valid;
    setEmail(event.target.value);
    valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
      event.target.value
    );
    if (!valid) {
      setEmailHelper("Invalid email");
    } else {
      setEmailHelper("");
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (name.trim() !== "" && email.trim() !== "" && message.trim() !== "") {
      console.log("form submitted");
    }
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={`${classes.contactContainer}`}
      style={{ marginTop: matchesXXSS ? "-45%" : undefined }}
    >
      <Grid item>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          style={{ fontSize: "1.75rem", marginBottom: ".75em" }}
        >
          Interested in working together?
        </Typography>
      </Grid>
      <Grid item container justify="center">
        <Grid item style={{ marginRight: ".5em" }}>
          <Typography
            variant="body1"
            paragraph
            style={{ color: theme.palette.common.dollar }}
          >
            Let's chat!
          </Typography>
        </Grid>
        <Grid item>
          <img
            src={chatIcon}
            alt="An icon indicating chat correspondence"
            width={30}
          />
        </Grid>
      </Grid>
      <form onSubmit={handleFormSubmit}>
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          style={{
            paddingTop: matchesXXS ? "1.5em" : "3em",
            paddingBottom: matchesXXS ? "1.5em" : "5em",
            paddingLeft: matchesXXS
              ? "1em"
              : matchesXS
              ? "2em"
              : matchesSM
              ? "3em"
              : "5em",
            paddingRight: matchesXXS
              ? "1em"
              : matchesXS
              ? "2em"
              : matchesSM
              ? "3em"
              : "5em",
            border: `.25px solid ${theme.palette.common.brown}`,
            maxWidth: matchesSM ? "100%" : 650,
            borderRadius: 5,
          }}
        >
          <Grid item style={{ marginBottom: "1em" }}>
            <TextField
              id="name"
              label="Name*"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              style={{ width: matchesXXSS ? 250 : matchesXXS ? 300 : 350 }}
            />
          </Grid>
          <Grid item style={{ marginBottom: "1em" }}>
            <TextField
              id="email"
              label="Email*"
              name="email"
              error={emailHelper !== ""}
              helperText={emailHelper}
              value={email}
              onChange={validateEmail}
              style={{ width: matchesXXSS ? 250 : matchesXXS ? 300 : 350 }}
            />
          </Grid>
          <Grid item style={{ marginBottom: "2em" }}>
            <TextField
              id="phone"
              label="Phone"
              name="phone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              style={{ width: matchesXXSS ? 250 : matchesXXS ? 300 : 350 }}
            />
          </Grid>
          <Grid item style={{ marginBottom: "1em" }}>
            <label
              style={{
                display: "block",
                color: theme.palette.common.tan,
                marginBottom: ".5em",
              }}
            >
              Message*
            </label>
            <TextField
              id="message"
              name="message"
              value={message}
              InputProps={{ disableUnderline: true }}
              onChange={(event) => setMessage(event.target.value)}
              rows={10}
              multiline
              placeholder="Shoot me a message..."
              className={classes.message}
              style={{ width: matchesXXSS ? 250 : matchesXXS ? 300 : 350 }}
            />
          </Grid>
          <Grid
            item
            style={{ width: matchesXXSS ? 250 : matchesXXS ? 300 : 350 }}
          >
            <Button
              type="submit"
              disabled={
                name.trim() === "" || emailHelper !== "" || message.length < 1
              }
              variant="contained"
              className={classes.button}
            >
              Submit
              <SendIcon
                disabled={
                  name.trim() === "" || emailHelper !== "" || message.length < 1
                }
              />
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};

export default Contact;
