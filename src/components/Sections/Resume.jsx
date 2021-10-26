import React from "react";
import "../utils/progress.css";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { works } from "../dataset/work-experience";

import LightSpeed from "react-reveal/LightSpeed";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles((theme) => ({
  timelineBody: {
    position: "relative",
    paddingLeft: ".5em",
    marginBottom: "2em",

    "&::after": {
      content: '""',
      height: "90%",
      width: 4,
      position: "absolute",
      background: theme.palette.common.gold,
      top: "3em",
      left: "-1.5em",

      [theme.breakpoints.down("xs")]: {
        left: "-2.5em",
      },
    },
  },
  timelineItem: {
    position: "relative",

    "&::after": {
      content: '""',
      width: 35,
      height: 35,
      borderRadius: "50%",
      border: `4px solid ${theme.palette.common.gold}`,
      background: theme.palette.common.dollar,
      position: "absolute",
      top: ".25em",
      left: "-3em",

      [theme.breakpoints.down("xs")]: {
        width: 25,
        height: 25,
        left: "-3.65em",
      },
    },
  },
  timelineDate: {
    color: theme.palette.common.gold,
    position: "absolute",
    top: ".7em",
    left: "-6.5em",
    fontSize: "1rem",
  },
  timeframe: {
    fontSize: ".9rem",
    lineHeight: 1,
    fontWeight: 500,
    color: theme.palette.common.brown,
  },
  experienceList: {
    fontSize: ".9rem",
    color: theme.palette.common.gold,

    "&:not(:last-child)": {
      marginBottom: ".5em",
    },
  },
  role: {
    color: theme.palette.common.brown,
    fontSize: "1.2rem",
    fontWeight: 500,
  },
  organisation: {
    color: theme.palette.common.gold,
    fontSize: "1rem",
    fontWeight: 700,
  },
  educationTimeline: {
    marginLeft: 0,

    [theme.breakpoints.down("md")]: {
      marginLeft: "7em",
    },

    [theme.breakpoints.down("sm")]: {
      marginLeft: "4.5em",
    },

    [theme.breakpoints.down("xs")]: {
      marginLeft: "1em",
    },
    "&::after": {
      height: "70%",
    },
  },
  indicator: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    position: "absolute",
    top: "50%",
    transform: "translateY(-55%)",
    width: "100%",
    height: "100%",
    margin: "0 auto",
    userSelect: "none",
  },
  progressTitle: {
    margin: 0,
    textAlign: "center",
    color: theme.palette.common.gold,
  },
}));

const Resume = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesSMXX = useMediaQuery("(max-width:768px)");
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesXXXS = useMediaQuery("(max-width:380px)");
  const matchesXXXXS = useMediaQuery("(max-width:340px)");

  return (
    <Grid
      container
      direction="column"
      id="resume"
      style={{
        marginTop: "20%",
        paddingTop: !matchesMD ? "7em" : "5em",
        paddingRight: "2em",
        paddingLeft: "2em",
      }}
    >
      <Grid item>
        <Grid container>
          <Grid
            item
            className={classes.timeline}
            style={{
              paddingLeft: matchesXXXS
                ? "4.5em"
                : matchesXS
                ? "5em"
                : matchesSM
                ? "6em"
                : "8.5em",
            }}
          >
            <Grid
              item
              style={{
                marginBottom: "1em",
                marginLeft: matchesXXXS ? "-5em" : matchesMD ? 0 : "-6em",
              }}
            >
              <LightSpeed>
                <Typography
                  align={matchesXXXS ? "center" : undefined}
                  variant="h3"
                  style={{
                    fontSize: "1.75rem",
                  }}
                >
                  Experience
                </Typography>
              </LightSpeed>
            </Grid>
            {/* First work experience section */}
            {works.map((work) => (
              <Grid container className={classes.timelineBody} key={work.id}>
                <Grid item>
                  <Grid container className={classes.timelineItem}>
                    <Grid item>
                      <LightSpeed left>
                        <Typography
                          variant="h5"
                          className={classes.timelineDate}
                        >
                          {work.year}
                        </Typography>
                      </LightSpeed>
                    </Grid>
                    <Grid
                      item
                      container
                      direction="column"
                      className={classes.timelineContent}
                    >
                      <Grid item style={{ marginTop: ".35em" }}>
                        <Fade bottom>
                          <Typography
                            variant="h4"
                            gutterBottom
                            className={classes.role}
                          >
                            {work.role}
                          </Typography>
                        </Fade>
                      </Grid>
                      <Grid item>
                        <Fade bottom>
                          <Typography
                            variant="h5"
                            gutterBottom
                            className={classes.organisation}
                          >
                            {work.company}
                          </Typography>
                        </Fade>
                      </Grid>
                      <Grid item>
                        <Fade bottom>
                          <Typography
                            variant="body1"
                            paragraph
                            className={classes.timeframe}
                          >
                            {work.period}
                          </Typography>
                        </Fade>
                      </Grid>
                      <Grid item>
                        <Fade bottom>
                          <ul
                            style={{
                              margin: 0,
                              paddingLeft: "1em",
                              maxWidth: matchesSMXX
                                ? "35em"
                                : matchesSM
                                ? undefined
                                : matchesMD
                                ? "40em"
                                : undefined,
                            }}
                          >
                            {work.duties.map((duty) => (
                              <li className={classes.experienceList} key={duty}>
                                {duty}
                              </li>
                            ))}
                          </ul>
                        </Fade>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Grid
            item
            style={{
              marginTop: "5em",
              paddingLeft: matchesXXXXS
                ? 0
                : matchesXS
                ? ".75em"
                : matchesMD
                ? "1.5em"
                : "8.5em",
            }}
          >
            <Grid
              item
              style={{
                marginBottom: "1em",
                marginLeft: matchesXXXS
                  ? 0
                  : matchesXS
                  ? "5em"
                  : matchesMD
                  ? "7em"
                  : 0,
              }}
            >
              <LightSpeed>
                <Typography
                  variant="h3"
                  style={{
                    fontSize: "1.75rem",
                  }}
                  align={matchesXXXS ? "center" : undefined}
                >
                  Education
                </Typography>
              </LightSpeed>
            </Grid>
            <Grid
              container
              className={`${classes.timelineBody} ${classes.educationTimeline}`}
            >
              <Grid item>
                <Grid container className={classes.timelineItem}>
                  <Grid
                    item
                    container
                    direction="column"
                    className={classes.timelineContent}
                  >
                    <Grid item style={{ marginTop: ".5em" }}>
                      <Fade bottom>
                        <Typography
                          variant="h4"
                          gutterBottom
                          className={classes.role}
                          style={{ fontSize: "1rem" }}
                        >
                          2013 - 2017
                        </Typography>
                      </Fade>
                    </Grid>
                    <Grid item>
                      <Fade bottom>
                        <Typography
                          variant="h5"
                          gutterBottom
                          className={classes.organisation}
                        >
                          University of Ilorin, Ilorin
                        </Typography>
                      </Fade>
                    </Grid>
                    <Grid item>
                      <Fade bottom>
                        <Typography
                          variant="body1"
                          className={classes.timeframe}
                          style={{
                            color: theme.palette.common.gold,
                            marginBottom: ".5em",
                          }}
                        >
                          B.Sc. Political Science
                        </Typography>
                      </Fade>
                    </Grid>
                    <Grid item>
                      <Fade bottom>
                        <Typography
                          variant="body1"
                          style={{
                            color: theme.palette.common.brown,
                            fontSize: ".85rem",
                          }}
                        >
                          Second Class Hons. - Upper Division
                        </Typography>
                      </Fade>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              className={`${classes.timelineBody} ${classes.educationTimeline}`}
            >
              <Grid item>
                <Grid container className={classes.timelineItem}>
                  <Grid
                    item
                    container
                    direction="column"
                    className={classes.timelineContent}
                  >
                    <Grid item style={{ marginTop: ".5em" }}>
                      <Fade bottom>
                        <Typography
                          variant="h4"
                          gutterBottom
                          className={classes.role}
                          style={{ fontSize: "1rem" }}
                        >
                          2002 - 2008
                        </Typography>
                      </Fade>
                    </Grid>
                    <Grid item>
                      <Fade bottom>
                        <Typography
                          variant="h5"
                          gutterBottom
                          className={classes.organisation}
                        >
                          Jibril Martin Memorial Grammer School.
                        </Typography>
                      </Fade>
                    </Grid>
                    <Grid item>
                      <Fade bottom>
                        <Typography
                          variant="body1"
                          style={{
                            color: theme.palette.common.brown,
                            fontSize: ".85rem",
                          }}
                        >
                          Senior Secondary School Certificate.
                        </Typography>
                      </Fade>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Resume;
