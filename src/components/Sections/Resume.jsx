import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  resumeContainer: {
    paddingLeft: "25%",
    paddingBottom: "10em",
    marginTop: "-20%",
    background: theme.palette.common.tan,

    [theme.breakpoints.down("md")]: {
      paddingLeft: "8.33333%",
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
      marginTop: "-25%",
    },
  },
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
      background: theme.palette.common.tan,
      position: "absolute",
      top: ".25em",
      left: "-3em",
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
    fontSize: "1.25rem",
    fontWeight: 500,
  },
  organisation: {
    color: theme.palette.common.gold,
    fontSize: "1rem",
    fontWeight: 700,
  },
  educationTimeline: {
    "&::after": {
      height: "70%",
    },
  },
}));

const Resume = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  //   const matchesMDX = useMediaQuery("(max-width:978px)");
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesSMX = useMediaQuery("(max-width:768px)");
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  //   const matchesXXS = useMediaQuery("(max-width:450px)");
  const matchesXXXS = useMediaQuery("(max-width:380px)");
  const matchesXXXXS = useMediaQuery("(max-width:340px)");
  return (
    <Grid
      container
      direction="column"
      className={classes.resumeContainer}
      style={{
        marginTop: matchesXXXXS ? "-40%" : matchesXXXS ? "-30%" : undefined,
      }}
    >
      <Grid
        item
        style={{
          marginTop: "20%",
          paddingTop: "7em",
          paddingLeft: matchesXS ? "7em" : "8.5em",
          paddingRight: "2em",
        }}
      >
        <Grid container spacing={6}>
          <Grid item lg className={classes.timeline}>
            <Grid
              item
              style={{
                marginBottom: "1em",
                marginLeft: !matchesMD ? "-6em" : 0,
              }}
            >
              <Typography
                align={matchesXXXS ? "center" : undefined}
                variant="h3"
                style={{
                  fontSize: "1.75rem",
                }}
              >
                Experience
              </Typography>
            </Grid>
            <Grid container className={classes.timelineBody}>
              <Grid item>
                <Grid container className={classes.timelineItem}>
                  <Grid item>
                    <Typography variant="h5" className={classes.timelineDate}>
                      2020
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    container
                    direction="column"
                    className={classes.timelineContent}
                  >
                    <Grid item style={{ marginTop: ".35em" }}>
                      <Typography
                        variant="h4"
                        gutterBottom
                        className={classes.role}
                      >
                        Operations Officer
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="h5"
                        gutterBottom
                        className={classes.organisation}
                      >
                        The Shred Station
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="body1"
                        paragraph
                        className={classes.timeframe}
                      >
                        Jan 2020 - Present
                      </Typography>
                    </Grid>
                    <Grid item>
                      <ul
                        style={{
                          margin: 0,
                          paddingLeft: "1em",
                          maxWidth: matchesSMX
                            ? "35em"
                            : matchesSM
                            ? undefined
                            : matchesMD
                            ? "40em"
                            : undefined,
                        }}
                      >
                        <li className={classes.experienceList}>
                          Oversee and direct daily company administrative
                          processes and procedures
                        </li>
                        <li className={classes.experienceList}>
                          Planning and management of project execution
                        </li>
                        <li className={classes.experienceList}>
                          Oversee the destruction of clients’ confidential
                          documents and the eventual recycling
                        </li>
                        <li className={classes.experienceList}>
                          Track and maintain budgets of operational costs
                        </li>
                        <li className={classes.experienceList}>
                          Set operational goals to meet or exceed performance
                          expectations.
                        </li>
                        <li className={classes.experienceList}>
                          Development and promotion of efficiency through the
                          implementation of improved operational frameworks and
                          procedures
                        </li>
                      </ul>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container className={classes.timelineBody}>
              <Grid item>
                <Grid container className={classes.timelineItem}>
                  <Grid item>
                    <Typography variant="h5" className={classes.timelineDate}>
                      2019
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    container
                    direction="column"
                    className={classes.timelineContent}
                  >
                    <Grid item style={{ marginTop: ".35em" }}>
                      <Typography
                        variant="h4"
                        gutterBottom
                        className={classes.role}
                      >
                        I.T. Technical Support
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="h5"
                        gutterBottom
                        className={classes.organisation}
                      >
                        A. C. Harmony Enterprise Nig. Ltd. Onitsha, Anambra
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="body1"
                        paragraph
                        className={classes.timeframe}
                      >
                        April 2019 - October 2019
                      </Typography>
                    </Grid>
                    <Grid item>
                      <ul
                        style={{
                          margin: 0,
                          paddingLeft: "1em",
                          maxWidth: matchesSMX
                            ? "35em"
                            : matchesSM
                            ? undefined
                            : matchesMD
                            ? "40em"
                            : undefined,
                        }}
                      >
                        <li className={classes.experienceList}>
                          Install and configure computer hardware operating
                          systems and applications
                        </li>
                        <li className={classes.experienceList}>
                          Monitor and maintain computer systems and networks
                        </li>
                        <li className={classes.experienceList}>
                          Talk staff through a series of actions either
                          face-to-face or over the phone, to help set up systems
                          or resolve issues
                        </li>
                        <li className={classes.experienceList}>
                          Troubleshoot system and network problems, diagnosing
                          and solving hardware or software faults
                        </li>
                        <li className={classes.experienceList}>
                          Provide support, including procedural documentation
                          and relevant reports
                        </li>
                        <li className={classes.experienceList}>
                          Supervision and the verification of the posting of
                          purchases, transfers and sales made using the
                          automated web application software.
                        </li>
                      </ul>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container className={classes.timelineBody}>
              <Grid item>
                <Grid container className={classes.timelineItem}>
                  <Grid item>
                    <Typography variant="h5" className={classes.timelineDate}>
                      2018
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    container
                    direction="column"
                    className={classes.timelineContent}
                  >
                    <Grid item style={{ marginTop: ".35em" }}>
                      <Typography
                        variant="h4"
                        gutterBottom
                        className={classes.role}
                      >
                        Government &amp; Civic Education Teacher
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="h5"
                        gutterBottom
                        className={classes.organisation}
                      >
                        Anglican Girls Secondary School, Nnewi
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="body1"
                        paragraph
                        className={classes.timeframe}
                      >
                        February 2018 - March 2019
                      </Typography>
                    </Grid>
                    <Grid item>
                      <ul
                        style={{
                          margin: 0,
                          paddingLeft: "1em",
                          maxWidth: matchesSMX
                            ? "35em"
                            : matchesSM
                            ? undefined
                            : matchesMD
                            ? "40em"
                            : undefined,
                        }}
                      >
                        <li className={classes.experienceList}>
                          Impart the students with knowledge relating to
                          citizenship and government, structured in line with
                          the school curriculum.
                        </li>
                        <li className={classes.experienceList}>
                          Examine the students’ comprehension and assimilation
                          through class exercises and assignments.
                        </li>
                        <li className={classes.experienceList}>
                          Research using different textbooks and online
                          resources to provide students with in-depth knowledge
                          and examples relating to the topic of discourse.
                        </li>
                        <li className={classes.experienceList}>
                          In addition to knowledge impartation, help develop
                          students’ personalities by sermonizing them on basic
                          moral precepts.
                        </li>
                      </ul>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg>
            <Grid item style={{ marginBottom: "1em" }}>
              <Typography
                variant="h3"
                style={{
                  fontSize: "1.75rem",
                }}
                align={matchesXXXS ? "center" : undefined}
              >
                Education
              </Typography>
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
                      <Typography
                        variant="h4"
                        gutterBottom
                        className={classes.role}
                        style={{ fontSize: "1rem" }}
                      >
                        2013 - 2017
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="h5"
                        gutterBottom
                        className={classes.organisation}
                      >
                        University of Ilorin, Ilorin
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="body1"
                        className={classes.timeframe}
                        style={{
                          color: theme.palette.common.gold,
                          marginBottom: ".5em",
                        }}
                      >
                        Political Science
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="body1"
                        style={{
                          color: theme.palette.common.brown,
                          fontSize: ".85rem",
                        }}
                      >
                        Second Class Hons. - Upper Division
                      </Typography>
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
                      <Typography
                        variant="h4"
                        gutterBottom
                        className={classes.role}
                        style={{ fontSize: "1rem" }}
                      >
                        2002 - 2008
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="h5"
                        gutterBottom
                        className={classes.organisation}
                      >
                        Jibril Martin Memorial Grammer School.
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="body1"
                        style={{
                          color: theme.palette.common.brown,
                          fontSize: ".85rem",
                        }}
                      >
                        Senior Secondary School Certificate.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              className={classes.timelineItem}
              style={{ marginLeft: ".65em" }}
            ></Grid>
            <Grid
              item
              container
              direction="column"
              style={{ marginTop: "7em" }}
            >
              <Grid item>
                <Typography
                  align={matchesXXXS ? "center" : undefined}
                  variant="h3"
                  style={{ fontSize: "1.75rem" }}
                >
                  Skills
                </Typography>
              </Grid>
              <Grid item container></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Resume;
