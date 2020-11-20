import React, { useState, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import CircularProgress from "@material-ui/core/CircularProgress";

import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import LightSpeed from "react-reveal/LightSpeed";

import chatIcon from "../../assets/chat.svg";
import phoneIcon from "../../assets/phone.svg";
import emailIcon from "../../assets/envelope.svg";
import SendIcon from "../SendIcon";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    paddingLeft: "25%",
    paddingTop: "17em",
    paddingBottom: "5em",

    [theme.breakpoints.down("lg")]: {
      paddingTop: "12em",
    },

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
    border: `2px solid ${theme.palette.common.gold}`,
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
  alert: {
    background: theme.palette.common.dollar,

    "&: .MuiAlert-icon": {
      fill: "red",
    },
  },
  alertMessage: {
    color: theme.palette.common.darkBrown,
  },
  alertIcon: {
    "& > *": {
      fill: theme.palette.common.darkBrown,
    },
  },
  closeAlert: {
    "& .MuiSvgIcon-root": {
      fill: theme.palette.common.darkBrown,
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
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

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
      setLoading(true);
      setOpen(true);
    }
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setLoading(false);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const buttonContent = (
    <Fragment>
      Submit
      <SendIcon
        disabled={
          name.trim() === "" ||
          email.trim() === "" ||
          emailHelper !== "" ||
          message.length < 1
        }
      />
    </Fragment>
  );

  return (
    <Grid
      container
      direction="column"
      id="contact"
      alignItems="center"
      className={`${classes.contactContainer}`}
      style={{ marginTop: matchesXXSS ? "-45%" : undefined }}
    >
      <Grid item>
        <LightSpeed left>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            style={{ fontSize: "1.75rem", marginBottom: ".75em" }}
          >
            Interested in working together?
          </Typography>
        </LightSpeed>
      </Grid>
      <Grid item container style={{ marginBottom: "1em" }} justify="center">
        <Grid item>
          <img
            src={phoneIcon}
            alt="Phone icon"
            style={{ marginRight: ".5em" }}
          />
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            style={{ color: theme.palette.common.dollar, fontSize: ".85rem" }}
          >
            <a
              href="tel:+2347086937133"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              +234-708-693-7133
            </a>
          </Typography>
        </Grid>
      </Grid>
      <Grid item container justify="center" style={{ marginBottom: "2em" }}>
        <Grid item>
          <img
            src={emailIcon}
            alt="Email Icon"
            style={{ marginRight: ".5em" }}
          />
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            style={{ color: theme.palette.common.dollar, fontSize: ".85rem" }}
          >
            <a
              href="mailto:hameed.jimoh1601@gmail.com"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              hameed.jimoh1601@gmail.com
            </a>
          </Typography>
        </Grid>
      </Grid>
      <Grid item container justify="center">
        <Grid item style={{ marginRight: ".5em" }}>
          <Fade bottom>
            <Typography
              variant="body1"
              paragraph
              style={{ color: theme.palette.common.dollar }}
            >
              Let's chat!
            </Typography>
          </Fade>
        </Grid>
        <Grid item>
          <Fade bottom>
            <img
              src={chatIcon}
              alt="An icon indicating chat correspondence"
              width={30}
            />
          </Fade>
        </Grid>
      </Grid>

      <Slide left>
        <form
          onSubmit={handleFormSubmit}
          style={{
            background: theme.palette.common.dollar,
            border: `.25px solid ${theme.palette.common.brown}`,
            borderRadius: 5,
          }}
        >
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
              maxWidth: matchesSM ? "100%" : 650,
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
                  name.trim() === "" ||
                  email.trim() === "" ||
                  emailHelper !== "" ||
                  message.length < 1
                }
                variant="contained"
                className={classes.button}
              >
                {loading ? <CircularProgress /> : buttonContent}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Slide>
      {!loading && (
        <Snackbar
          open={open}
          autoHideDuration={5000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={handleClose}
            variant="standard"
            classes={{
              standardSuccess: classes.alert,
              message: classes.alertMessage,
              icon: classes.alertIcon,
              action: classes.closeAlert,
            }}
          >
            Message sent successfully.
          </Alert>
        </Snackbar>
      )}
    </Grid>
  );
};

export default Contact;
