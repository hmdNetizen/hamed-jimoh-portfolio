import React from "react";
import "../../components/progress.css";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ProgressBar from "react-customizable-progressbar";

import getTechProgress from "./../TechProgress";
import ProgressIcon from "../ProgressIcon";
import HorizontalProgress from "./../HorizontalProgress";
import "./../horizontalProgress.css";

import LightSpeed from "react-reveal/LightSpeed";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles((theme) => ({
  skillsContainer: {
    paddingLeft: "25%",
    paddingBottom: "10em",
    marginTop: "-20%",
    background: theme.palette.common.dollar,

    [theme.breakpoints.down("md")]: {
      paddingLeft: "8.33333%",
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
      marginTop: "-25%",
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

const Skills = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesSMX = useMediaQuery("(max-width:890px)");
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesXXS = useMediaQuery("(max-width:420px)");

  return (
    <Grid
      item
      container
      id="skills"
      direction="column"
      justify="center"
      style={{
        paddingTop: "5em",
      }}
    >
      <Grid item>
        <LightSpeed>
          <Typography
            align="center"
            variant="h3"
            style={{ fontSize: "1.75rem", margin: 0 }}
            gutterBottom
          >
            My toolbox of skills
          </Typography>
        </LightSpeed>
      </Grid>
      <Grid item>
        <Fade bottom>
          <Typography
            variant="body1"
            paragraph
            align="center"
            style={{ fontSize: "1rem", color: theme.palette.common.gold }}
          >
            These are tools and technologies I am comfortable with:
          </Typography>
        </Fade>
      </Grid>
      {/* Progress Bar */}
      <Grid
        item
        style={{
          paddingLeft: matchesSM ? 0 : matchesMD ? "2.5em" : "3em",
          paddingRight: matchesSM ? 0 : matchesMD ? "1em" : "2em",
        }}
      >
        <Grid container justify="space-around" spacing={6}>
          {getTechProgress().map((tech) => (
            <Grid
              item
              key={tech.id}
              style={{
                marginBottom: "3em",
              }}
              md
            >
              <Fade bottom>
                <ProgressBar
                  radius={100}
                  progress={tech.progress}
                  strokeWidth={28}
                  strokeColor={theme.palette.common.brown}
                  strokeLinecap="butt"
                  trackStrokeWidth={14}
                  trackStrokeLinecap="butt"
                  counterClockwise
                  initialAnimation
                  initialAnimationDelay={2}
                >
                  <div
                    className={classes.indicator}
                    style={{
                      transform: matchesXXS
                        ? "translateY(-57%)"
                        : tech.title === "Responsive Design"
                        ? "translateY(-45%)"
                        : undefined,
                      top:
                        matchesXXS && tech.title === "Responsive Design"
                          ? "43%"
                          : tech.title === "Responsive Design"
                          ? "36%"
                          : undefined,
                    }}
                  >
                    <div>
                      <ProgressIcon
                        path={tech.path}
                        fill={theme.palette.common.gold}
                        width={matchesXXS ? 35 : 50}
                      />
                    </div>
                  </div>
                  <h4 className={classes.progressTitle}>{tech.title}</h4>
                </ProgressBar>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid
        item
        container
        justify="center"
        style={{
          paddingTop: "1.5em",
          paddingLeft: matchesXS ? "2em" : "5em",
          paddingRight: matchesXS ? "2em" : "5em",
          paddingBottom: matchesSMX ? "3em" : undefined,
        }}
      >
        <Grid style={{ marginBottom: "2em" }}>
          <LightSpeed>
            <Typography
              variant="h3"
              align="center"
              gutterBottom
              style={{ fontSize: "1.75rem" }}
            >
              Soft Skills
            </Typography>
          </LightSpeed>
        </Grid>
        <Grid item container justify={matchesSMX ? "center" : "space-around"}>
          <Grid item style={{ marginBottom: "3em" }}>
            <Fade bottom>
              <HorizontalProgress done={80} attribute="Creativity" />
            </Fade>
          </Grid>
          <Grid item style={{ marginBottom: "3em" }}>
            <Fade bottom>
              <HorizontalProgress done={99} attribute="Integrity" />
            </Fade>
          </Grid>
          <Grid item style={{ marginBottom: "3em" }}>
            <Fade bottom>
              <HorizontalProgress done={92} attribute="Collaboration" />
            </Fade>
          </Grid>
          <Grid item style={{ marginBottom: "3em" }}>
            <Fade bottom>
              <HorizontalProgress done={75} attribute="Problem-Solving" />
            </Fade>
          </Grid>
          <Grid item style={{ marginBottom: "3em" }}>
            <Fade bottom>
              <HorizontalProgress done={95} attribute="Communication" />
            </Fade>
          </Grid>
          <Grid item>
            <Fade bottom>
              <HorizontalProgress done={82} attribute="Organisation" />
            </Fade>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Skills;
