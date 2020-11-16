import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuOpen from "@material-ui/icons/MenuOpen";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Tooltip from "@material-ui/core/Tooltip";
import SvgIcon from "@material-ui/core/SvgIcon";
import HighlightOff from "@material-ui/icons/HighlightOff";

import portrait from "../../assets/photo.jpg";
import passport from "../../assets//passport.png";
import home from "../../assets/home.svg";
import email from "../../assets/email.svg";
import devices from "../../assets/devices.svg";
import file from "../../assets/file.svg";
import skills from "../../assets/tools.svg";
import portfolio from "../../assets/portfolio.svg";

import { makeStyles, useTheme } from "@material-ui/core/styles";

import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles((theme) => ({
  aboutContainer: {
    height: "100vh",
    width: "100%",

    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
  },

  gridUtils: {
    height: "100%",
    width: "100%",
  },

  leftGrid: {
    [theme.breakpoints.down("sm")]: {
      height: 59,
    },
  },

  middleGrid: {
    backgroundColor: theme.palette.common.dollar,
    paddingLeft: "4em",
    paddingRight: "4em",

    [theme.breakpoints.down("md")]: {
      paddingLeft: "3em",
      paddingRight: "3em",
    },

    [theme.breakpoints.down("sm")]: {
      paddingTop: "2em",
      paddingBottom: "2em",
    },

    [theme.breakpoints.down("xs")]: {
      marginTop: 59,
      paddingLeft: "2.5em",
      paddingRight: "2.5em",
      paddingTop: "4em",
      paddingBottom: "4em",
    },
  },

  rightGrid: {
    backgroundColor: theme.palette.common.tan,
  },

  menuGrid: {
    marginTop: ".5em",
    marginLeft: ".5em",

    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
      marginLeft: 0,
    },
  },
  menu: {
    width: 40,
    height: 40,
    color: "#fff",
  },
  divider: {
    width: "7em",
    height: 3,
    background: "#fff",
    marginLeft: "1em",
    marginRight: "1em",
  },
  title: {
    textTransform: "uppercase",
    color: theme.palette.common.tan,
  },
  bio: {
    fontWeight: 400,
    color: "#fff",
  },
  avatar: {
    width: 150,
    height: 150,

    [theme.breakpoints.down("xs")]: {
      width: 100,
      height: 100,
    },
  },
  drawer: {
    width: "25%",
    background: theme.palette.secondary.dark,

    [theme.breakpoints.down("md")]: {
      width: 337,
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: "5em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  close: {
    width: 40,
    height: 40,
    color: "#fff",
  },
  listButton: {
    paddingLeft: "3em",
    color: theme.palette.common.dollar,

    [theme.breakpoints.down("xs")]: {
      paddingLeft: "2em",
    },

    "&:hover": {
      background: theme.palette.secondary.light,
    },
  },

  listIcon: {
    color: theme.palette.common.dollar,
    marginRight: "1.5em",
  },

  listSelected: {
    background: theme.palette.secondary.light,
  },
  listText: {
    fontSize: "2rem",
  },
  nameStyle: {
    fontSize: "4.25rem",
    fontWeight: 800,
    color: theme.palette.common.brown,

    [theme.breakpoints.down("md")]: {
      fontSize: "3.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
    },

    [theme.breakpoints.down("xs")]: {
      fontSize: "2.5rem",
    },
  },
  profileText: {
    lineHeight: 1.7,
    color: theme.palette.primary.light,

    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  tooltip: {
    color: theme.palette.primary.dark,
  },
}));

const lists = [
  { id: 1, pageCount: "01", label: "Home", icon: home, link: "#homepage" },
  {
    id: 2,
    pageCount: "02",
    label: "Services",
    icon: devices,
    link: "#services",
  },
  {
    id: 3,
    pageCount: "03",
    label: "Portfolio",
    icon: portfolio,
    link: "#portfolio",
  },
  {
    id: 4,
    pageCount: "04",
    label: "Resume",
    icon: file,
    link: "#resume",
  },
  { id: 5, pageCount: "05", label: "Skills", icon: skills, link: "#skills" },
  { id: 6, pageCount: "06", label: "Contact", icon: email, link: "#contact" },
];

const socials = [
  {
    id: 0,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/hamed-jimoh-166b58189/",
    path:
      "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    id: 1,
    title: "Twitter",
    url: "https://twitter.com/hmdNetizen",
    path:
      "M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z",
  },
  {
    id: 2,
    title: "Facebook",
    url: "https://facebook.com/HameedAyindeJimoh/",
    path:
      "M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z",
  },
  {
    id: 3,
    title: "Github",
    url: "https://github.com/hmdNetizen",
    path:
      "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  },
];

const About = (props) => {
  const {
    selectedItem,
    setselectedItem,
    pageCounter,
    setPageCounter,
    ...rest
  } = props;
  const classes = useStyles();
  const theme = useTheme();
  const matchesMDOnly = useMediaQuery(theme.breakpoints.only("md"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesXSS = useMediaQuery("(max-width:465px)"); //if screen width is equals or less than 465px
  const matchesXXS = useMediaQuery("(max-width:450px)"); //if screen width is equals or less than 450px
  const matchesXXSS = useMediaQuery("(max-width:400px)"); //if screen width is equals or less than 400px
  const matchesXXXS = useMediaQuery("(max-width:320px)"); //if screen width is equals or less than 320px
  const matchesXXXSS = useMediaQuery("(max-width:290px)"); //if screen width is equals or less than 320px
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent); //For smooth swipe experience for iOS devices

  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    const pageHeight = document.getElementById("homepage").clientHeight;
    console.log("About Page Height " + pageHeight);
    const aboutHeight = 781;
    window.addEventListener(
      "scroll",
      (e) => {
        if (window.pageYOffset > (aboutHeight / 2) * 1.2) {
          setPageCounter(2);
        } else if (window.pageYOffset < (aboutHeight / 2) * 1.2) {
          setPageCounter(1);
        }
      },
      false
    );
  }, [setPageCounter]);

  return (
    <Grid
      item
      container
      direction="row"
      id="homepage"
      className={classes.aboutContainer}
    >
      {/* Left section grid on medium and large screens but on the top for small and Xsmall screens */}
      <Grid
        item
        className={`${classes.gridUrils} ${classes.leftGrid}`}
        lg={3}
        md={1}
        sm={12}
      >
        <Grid
          item
          style={{
            position: "fixed",
            background: theme.palette.common.gold,
            width: matchesSM ? "100%" : matchesMDOnly ? "8.333333%" : "25%",
            height: matchesSM ? 59 : "100%",
            zIndex: matchesSM ? 1301 : 5,
          }}
        >
          <Grid
            item
            container
            alignItems={matchesSM ? "center" : undefined}
            direction={matchesSM ? "row" : "column"}
            style={{
              marginBottom: !matchesSM ? "2em" : 0,
              marginLeft: matchesXXXS ? 0 : matchesSM ? "1em" : 0,
            }}
          >
            <Grid item className={classes.menuGrid}>
              <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                {matchesSM && openDrawer ? (
                  <HighlightOff className={classes.close} />
                ) : (
                  <MenuOpen
                    className={classes.menu}
                    style={{
                      width: matchesXXXS && "30px",
                      height: matchesXXXS && "30px",
                    }}
                  />
                )}
              </IconButton>
            </Grid>
            <Grid
              item
              style={{
                display: matchesMDOnly ? "none" : undefined,
                marginLeft: matchesSM && "auto",
                marginRight: matchesXXXS ? "1.5em" : matchesSM ? "4em" : 0,
              }}
            >
              <Grid
                container
                alignItems="center"
                justify="center"
                style={{
                  marginTop: matchesSM ? 0 : "1.5em",
                }}
              >
                <Grid item>
                  <Typography
                    variant="body1"
                    style={{
                      fontWeight: 700,
                      color: theme.palette.common.tan,
                      fontSize: matchesXXXS && ".95rem",
                    }}
                  >
                    {`0${pageCounter}`}
                  </Typography>
                </Grid>
                <Grid item>
                  <Divider className={classes.divider} />
                </Grid>
                <Grid item>
                  <Typography
                    variant="body1"
                    style={{
                      fontWeight: 700,
                      color: "#fff",
                      fontSize: matchesXXXS && ".95rem",
                    }}
                  >
                    {`0${lists.length}`}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Hidden mdDown>
            <Grid
              item
              container
              justify="center"
              style={{ marginBottom: "2em" }}
            >
              <Avatar
                alt="Hamed's Photo"
                src={passport}
                size={20}
                className={classes.avatar}
              />
            </Grid>
            <Grid
              item
              container
              direction="column"
              style={{ marginLeft: "2em" }}
            >
              <Grid item>
                <Typography variant="body2" className={classes.title}>
                  Name
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" className={classes.bio}>
                  Hamed Jimoh
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              style={{
                marginLeft: "2em",
                marginTop: "2em",
                marginBottom: "2em",
              }}
            >
              <Grid item>
                <Typography variant="body2" className={classes.title}>
                  Role
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" className={classes.bio}>
                  Frontend Web Developer
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              style={{ marginLeft: "2em", marginBottom: "2em" }}
            >
              <Grid item>
                <Typography variant="body2" className={classes.title}>
                  Email
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" className={classes.bio}>
                  hameed.jimoh1601@gmail.com
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              style={{ marginLeft: "2em" }}
            >
              <Grid item>
                <Typography variant="body2" className={classes.title}>
                  Phone
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" className={classes.bio}>
                  +2347086937133
                </Typography>
              </Grid>
            </Grid>
          </Hidden>
          {/* The swipeable navigation drawer */}
          <SwipeableDrawer
            disableBackdropTransition={!iOS}
            disableDiscovery={iOS}
            open={openDrawer}
            onOpen={() => setOpenDrawer(true)}
            onClose={() => setOpenDrawer(false)}
            classes={{ paper: classes.drawer }}
          >
            {!matchesSM && (
              <IconButton
                onClick={() => setOpenDrawer(false)}
                style={{ maxWidth: 70, marginLeft: "auto" }}
              >
                <HighlightOff className={classes.close} />
              </IconButton>
            )}
            {/* Hide Page counter and line divider when the breakpoint is below 960px */}
            <Hidden smDown>
              <Grid
                container
                alignItems="center"
                justify="center"
                style={{
                  marginTop: matchesSM ? 0 : "1.5em",
                }}
              >
                <Grid item>
                  <Typography
                    variant="body1"
                    style={{
                      fontWeight: 700,
                      color: theme.palette.common.tan,
                    }}
                  >
                    {`0${pageCounter}`}
                  </Typography>
                </Grid>
                <Grid item>
                  <Divider className={classes.divider} />
                </Grid>
                <Grid item>
                  <Typography
                    variant="body1"
                    style={{ fontWeight: 700, color: "#fff" }}
                  >
                    {`0${lists.length}`}
                  </Typography>
                </Grid>
              </Grid>
            </Hidden>
            {/* Rendering The navigation menu and icon dynamically */}
            <List style={{ marginTop: !matchesSM ? "2em" : 0 }}>
              {lists.map((list) => (
                <ListItem
                  component="a"
                  href={list.link}
                  key={list.id}
                  button
                  divider
                  classes={{
                    root: classes.listButton,

                    selected: classes.listSelected,
                  }}
                  selected={selectedItem === list.id}
                  onClick={() => {
                    setselectedItem(list.id);
                    setOpenDrawer(false);
                    setPageCounter(list.id);
                  }}
                >
                  <ListItemIcon classes={{ root: classes.listIcon }}>
                    <img
                      src={list.icon}
                      alt={`${list.label} Icon`}
                      width={40}
                      height={40}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={list.label}
                    classes={{ root: classes.listText }}
                  />
                </ListItem>
              ))}
            </List>
          </SwipeableDrawer>
        </Grid>
      </Grid>
      {/* Middle section grid */}
      <Grid
        item
        container
        direction="column"
        justify={matchesSM ? undefined : "center"}
        alignItems={matchesSM ? "center" : undefined}
        lg={4}
        md={5}
        className={`${classes.gridUtils} ${classes.middleGrid}`}
        style={{
          // marginTop: matchesXXXSS ? 35 : matchesXXXS ? 58 : undefined,
          paddingLeft: matchesXXSS && "1.5em",
          paddingRight: matchesXXSS && "1.5em",
          paddingTop: matchesXXXS
            ? "2.25em"
            : matchesXXSS
            ? "3.5em"
            : matchesXXS
            ? "3em"
            : matchesXSS
            ? "2em"
            : undefined,
          paddingBottom: matchesXXXS
            ? "2.25em"
            : matchesXXSS
            ? "3.5em"
            : matchesXXS
            ? "4em"
            : undefined,
        }}
      >
        <Hidden mdUp>
          <Grid
            item
            style={{
              marginBottom: matchesXXS ? "1em" : "2em",
            }}
          >
            <Avatar
              alt="Hamed's Photo"
              src={passport}
              size={20}
              className={classes.avatar}
            />
          </Grid>
        </Hidden>
        <Grid
          item
          style={{
            marginBottom: matchesXXS
              ? ".5em"
              : matchesSM
              ? "2em"
              : matchesMD
              ? "1em"
              : "1em",
          }}
        >
          <Typography
            variant="body1"
            paragraph
            style={{
              fontSize: matchesXS ? "1.2rem" : matchesMD ? "1.5rem" : "1.75",
              color: theme.palette.primary.dark,
            }}
          >
            Hello, my name is
          </Typography>
        </Grid>
        <Grid item style={{ marginTop: matchesXXS ? ".75em" : undefined }}>
          <Zoom top>
            <Typography
              variant="h1"
              paragraph
              className={classes.nameStyle}
              style={{
                fontSize: matchesXXXS
                  ? "1.75rem"
                  : matchesXXS
                  ? "2rem"
                  : undefined,
                margin: matchesXS ? 0 : undefined,
              }}
            >
              Hamed Jimoh
            </Typography>
          </Zoom>
        </Grid>
        <Grid
          item
          style={{
            marginTop: matchesXS ? "3em" : "2em",
            marginBottom: matchesSM ? "3em" : "4em",
            maxWidth: matchesXS ? "25em" : matchesSM ? "35em" : undefined,
          }}
        >
          <Fade bottom>
            <Typography
              variant="body1"
              paragraph
              className={classes.profileText}
            >
              A frontend web developer from Lagos, Nigeria. I spend a lot of my
              time learning and building stuff for the web through carefully
              crafted code and user-friendly design and implementation.
            </Typography>
          </Fade>
        </Grid>
        <Grid item style={{ marginLeft: matchesXXXS && "-1em" }}>
          <Grid container justify={matchesMDOnly ? undefined : "center"}>
            {socials.map((social) => (
              <Fade top>
                <Grid item key={social.id}>
                  <Tooltip
                    title={social.title}
                    arrow
                    className={classes.tooltip}
                    {...rest}
                  >
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconButton>
                        <SvgIcon color="primary" fontSize="large">
                          <path d={social.path} />
                        </SvgIcon>
                      </IconButton>
                    </a>
                  </Tooltip>
                </Grid>
              </Fade>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Hidden smDown>
        <Grid
          item
          lg={5}
          md={6}
          className={`${classes.gridUtils} ${classes.rightGrid}`}
        >
          <img
            src={portrait}
            alt="Hamed Portrait"
            style={{ width: "100%", height: "100%" }}
          />
        </Grid>
      </Hidden>
    </Grid>
  );
};

export default About;
