import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuOpen from "@material-ui/icons/MenuOpen";
import useMediaQuery from "@material-ui/core/useMediaQuery";
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

import { socials } from "../dataset/socials";
import portrait from "../../assets/portrait.jpg";
import passport from "../../assets/passport.png";
import home from "../../assets/home.svg";
import email from "../../assets/email.svg";
import devices from "../../assets/devices.svg";
import file from "../../assets/file.svg";
import skills from "../../assets/tools.svg";
import portfolio from "../../assets/portfolio.svg";

import { makeStyles, useTheme } from "@material-ui/core/styles";

import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal/LightSpeed";

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
    paddingLeft: "3.5em",
    paddingRight: "3.5em",

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
  avatarCircleLG: {
    position: "relative",
    borderRadius: "50%",
    background: "#a57b5c",
    width: 170,
    height: 170,

    [theme.breakpoints.down("sm")]: {
      background: "#eddfd5",
      width: 140,
      height: 140,
    },
  },

  avatarCircleMD: {
    ...theme.typography.circle,
    width: 150,
    height: 150,
    background: "#967258",

    [theme.breakpoints.down("sm")]: {
      background: "#efdbce",
      width: 120,
      height: 120,
    },
  },

  avatarCircleSM: {
    ...theme.typography.circle,
    width: 130,
    height: 130,
    background: "#84624a",

    [theme.breakpoints.down("sm")]: {
      background: "#edd2c0",
      width: 100,
      height: 100,
    },
  },

  avatar: {
    width: 110,
    height: 110,
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",

    [theme.breakpoints.down("sm")]: {
      width: 80,
      height: 80,
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
  { id: 1, label: "Home", icon: home, link: "/#homepage" },
  {
    id: 2,
    label: "Services",
    icon: devices,
    link: "/#services",
  },
  {
    id: 3,
    label: "Portfolio",
    icon: portfolio,
    link: "/#portfolio",
  },
  {
    id: 4,
    label: "Resume",
    icon: file,
    link: "/#resume",
  },
  { id: 5, label: "Skills", icon: skills, link: "/#skills" },
  { id: 6, label: "Contact", icon: email, link: "/#contact" },
];

const About = () => {
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
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent); //For smooth swipe experience for iOS devices

  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);

  useEffect(() => {
    [...lists].forEach((list) => {
      switch (window.location.pathname) {
        case list.link:
          if (selectedItem !== list.id) {
            setSelectedItem(list.id);
          }
          break;
        default:
          break;
      }
    });
  }, [selectedItem]);

  return (
    <Grid
      item
      container
      direction="row"
      id="homepage"
      className={classes.aboutContainer}
    >
      {/* Left section grid on medium and large screens but on the top for small and Xsmall screens */}
      <Grid item className={`${classes.leftGrid}`} lg={3} md={1} sm={12}>
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
            direction={matchesSM ? "row" : "column"}
            alignItems={matchesSM ? "center" : undefined}
            justify={matchesSM ? "space-between" : undefined}
            style={{
              marginBottom: !matchesSM ? "2em" : 0,
              marginLeft: matchesXS ? 0 : matchesSM ? "1em" : 0,
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
                marginRight: matchesXS ? "1.5em" : matchesSM ? "4em" : 0,
              }}
            >
              <Grid
                container
                alignItems="center"
                justify="center"
                style={{
                  marginTop: matchesSM ? 0 : "1em",
                }}
              >
                <Grid item>
                  <Typography
                    variant="h5"
                    gutterBottom
                    style={{
                      fontFamily: "Pacifico, cursive",
                      color: theme.palette.common.dollar,
                    }}
                  >
                    &lt;Hamed J. /&gt;
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
              <div className={classes.avatarCircleLG}>
                <div className={classes.avatarCircleMD}>
                  <div className={classes.avatarCircleSM}>
                    <Avatar
                      alt="Hamed's Photo"
                      src={passport}
                      size={20}
                      className={classes.avatar}
                    />
                  </div>
                </div>
              </div>
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
            <List
              disablePadding
              style={{ marginTop: !matchesSM ? "2em" : "-1.2em" }}
            >
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
                    setSelectedItem(list.id);
                    setOpenDrawer(false);
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
        lg={5}
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
            <Fade left>
              <div className={classes.avatarCircleLG}>
                <div className={classes.avatarCircleMD}>
                  <div className={classes.avatarCircleSM}>
                    <Avatar
                      alt="Hamed's Photo"
                      src={passport}
                      size={20}
                      className={classes.avatar}
                    />
                  </div>
                </div>
              </div>
            </Fade>
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
              : 0,
          }}
        >
          <Fade top>
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
          </Fade>
        </Grid>
        <Grid item style={{ marginTop: matchesXXS ? ".75em" : undefined }}>
          <LightSpeed left>
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
          </LightSpeed>
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
              <Grid item key={social.id}>
                <Fade bottom>
                  <Tooltip
                    title={social.title}
                    arrow
                    className={classes.tooltip}
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
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Hidden smDown>
        <Grid
          item
          lg={4}
          md={6}
          className={`${classes.gridUtils} ${classes.rightGrid}`}
          style={{
            backgroundColor: theme.palette.common.gold,
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src={portrait} alt="Hamed Portrait" style={{ width: "100%" }} />
        </Grid>
      </Hidden>
    </Grid>
  );
};

export default About;
