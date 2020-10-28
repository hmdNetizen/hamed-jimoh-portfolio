import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FiberManualRecordOutlinedIcon from "@material-ui/icons/FiberManualRecordOutlined";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import Hidden from "@material-ui/core/Hidden";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Slider from "react-slick";
import arrowBack from "../../assets/back.png";

const useStyles = makeStyles((theme) => ({
  arrowButton: {
    background: theme.palette.common.tan,
    padding: ".5em 1.5em",

    "&:hover": {
      background: theme.palette.common.tan,

      "& $arrow": {
        transform: "translateX(-5px)",
        transition: "transform .5s ease",
      },
    },
  },
  arrow: {
    height: 60,
    width: 60,

    [theme.breakpoints.down("sm")]: {
      height: 45,
      width: 45,
    },

    [theme.breakpoints.down("xs")]: {
      height: 30,
      width: 30,
    },
  },
  listItem: {
    paddingLeft: 0,
    paddingRight: 0,
  },

  listText: {
    fontSize: "1rem",
    color: theme.palette.common.dollar,
  },
  button: {
    ...theme.typography.btn,
    borderRadius: 50,
    border: `2px solid ${theme.palette.common.tan}`,
    fontSize: "1.25rem",
    padding: ".5em .85em",

    "&:hover": {
      background: theme.palette.common.gold,
    },
    [theme.breakpoints.only("md")]: {
      padding: ".5em .9em",
    },
  },
  //   techs: {

  //   }
}));
const SelectedProject = (props) => {
  const { setIsSelected, setSelectedProject, selectedProject, ...rest } = props;

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesMDX = useMediaQuery("(max-width:1030px)");
  const matchesMDXX = useMediaQuery("(max-width:978px)");
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesXXS = useMediaQuery("(max-width:450px)");
  const matchesXXXS = useMediaQuery("(max-width:340px)");

  return (
    <Grid
      container
      direction="column"
      style={{
        padding: matchesXXS
          ? "0 1em 5em 1em"
          : matchesXS
          ? "0 2em 5em 2em"
          : matchesSM
          ? "0 4em 5em 4em"
          : matchesMDX
          ? "0 4em 5em 6em"
          : "0 5em 5em 6em",
        overflowX: "hidden",
      }}
    >
      <Grid item style={{ marginBottom: "1.5em" }}>
        <Button
          variant="contained"
          className={classes.arrowButton}
          onClick={() => {
            setIsSelected(false);
            setSelectedProject([]);
          }}
        >
          <img src={arrowBack} alt="Back Arrow" className={classes.arrow} />
        </Button>
      </Grid>
      {selectedProject.map((project) => (
        <Grid
          item
          container
          direction={matchesSM ? "column" : undefined}
          key={project.id}
          spacing={6}
          alignItems={matchesSM ? "center" : undefined}
          justify={matchesSM ? "center" : undefined}
        >
          <Hidden mdUp>
            <Grid item>
              <Typography
                variant={matchesSM ? "h4" : "h5"}
                gutterBottom
                align={matchesSM ? "center" : undefined}
                style={{ marginBottom: matchesSM ? 0 : ".75em" }}
              >
                {project.name}
              </Typography>
            </Grid>
          </Hidden>
          <Grid item md>
            <Grid container direction="column">
              <Grid
                item
                style={{
                  maxWidth: matchesXXXS
                    ? "14em"
                    : matchesXXS
                    ? "17em"
                    : matchesXS
                    ? "20em"
                    : matchesSM
                    ? "27em"
                    : "25em",
                }}
              >
                <Slider {...settings}>
                  {project.images.map((image) => (
                    <img key={image.id} src={image.link} alt={image.alt} />
                  ))}
                </Slider>
              </Grid>
              <Grid
                container
                direction="column"
                alignItems={matchesSM ? "center" : undefined}
              >
                <Hidden smDown>
                  <Grid item style={{ marginTop: "2em" }}>
                    <Typography
                      variant="h6"
                      align="center"
                      gutterBottom
                      style={{ marginBottom: "1.5em" }}
                    >
                      Technologies Used
                    </Typography>
                  </Grid>

                  <Grid item container justify="center" alignItems="center">
                    {project.techs.map((tech) => (
                      <Grid
                        item
                        key={tech.id}
                        style={{
                          marginRight:
                            tech.alt === "Rebrandly Logo" ? 0 : "1em",
                        }}
                      >
                        <Tooltip title={tech.title} arrow {...rest}>
                          <img
                            src={tech.logo}
                            alt={tech.alt}
                            width={tech.alt === "Rebrandly Logo" ? 115 : 25}
                            className={classes.techs}
                          />
                        </Tooltip>
                      </Grid>
                    ))}
                  </Grid>
                </Hidden>
              </Grid>
            </Grid>
          </Grid>

          <Grid item md>
            <Grid
              container
              direction="column"
              alignItems={matchesSM ? "center" : undefined}
            >
              <Hidden smDown>
                <Grid item>
                  <Typography
                    variant={matchesSM ? "h4" : "h5"}
                    gutterBottom
                    style={{ marginBottom: ".75em" }}
                  >
                    {project.name}
                  </Typography>
                </Grid>
              </Hidden>
              <Grid item>
                <Typography
                  variant="h5"
                  gutterBottom
                  style={{ fontSize: matchesSM ? "1.5rem" : "1.25rem" }}
                >
                  Descriptions
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  paragraph
                  style={{
                    fontSize: "1rem",
                    color: theme.palette.common.dollar,
                    marginBottom: "1.25em",
                  }}
                  align={matchesSM ? "center" : undefined}
                >
                  {project.description}
                </Typography>
              </Grid>
              <Grid item container direction="column">
                <Grid item>
                  <Typography
                    variant="h6"
                    gutterBottom
                    style={{ fontSize: matchesSM ? "1.25rem" : "1rem" }}
                    align={matchesSM ? "center" : undefined}
                  >
                    Functionalities
                  </Typography>
                </Grid>
                <Grid item>
                  <List disablePadding>
                    {project.functionalities.map((functionality) => (
                      <Fragment key={functionality.id}>
                        <ListItem classes={{ root: classes.listItem }}>
                          <ListItemIcon>
                            <FiberManualRecordOutlinedIcon
                              fontSize="small"
                              style={{
                                width: "1.5em",
                                height: "1.5em",
                                fill: theme.palette.common.dollar,
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText classes={{ primary: classes.listText }}>
                            {functionality.description}
                          </ListItemText>
                        </ListItem>
                        {functionality.hasOwnProperty("options") &&
                          functionality.options.length > 0 && (
                            <List style={{ marginLeft: "3em" }}>
                              {functionality.options.map((option, index) => (
                                <ListItem
                                  key={index}
                                  classes={{ root: classes.listItem }}
                                >
                                  <ListItemIcon style={{ minWidth: 40 }}>
                                    <FiberManualRecordIcon
                                      fontSize="small"
                                      style={{
                                        width: "1em",
                                        height: "1em",
                                        fill: theme.palette.common.dollar,
                                      }}
                                    />
                                  </ListItemIcon>
                                  <ListItemText
                                    classes={{ primary: classes.listText }}
                                  >
                                    {option}
                                  </ListItemText>
                                </ListItem>
                              ))}
                            </List>
                          )}
                      </Fragment>
                    ))}
                  </List>
                </Grid>
                <Hidden mdUp>
                  <Grid item style={{ marginTop: "2em" }}>
                    <Typography
                      variant="h6"
                      align="center"
                      gutterBottom
                      style={{ marginBottom: "1.5em" }}
                    >
                      Technologies Used
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    container
                    justify="center"
                    alignItems="center"
                    style={{ width: "100%", overflowX: "hidden" }}
                  >
                    {project.techs.map((tech) => (
                      <Grid
                        item
                        key={tech.id}
                        style={{
                          marginRight:
                            tech.alt === "Rebrandly Logo" ? 0 : "1em",
                        }}
                      >
                        <Tooltip title={tech.title} arrow {...rest}>
                          <img
                            src={tech.logo}
                            alt={tech.alt}
                            width={tech.alt === "Rebrandly Logo" ? 115 : 25}
                            className={classes.techs}
                          />
                        </Tooltip>
                      </Grid>
                    ))}
                  </Grid>
                </Hidden>
                <Grid
                  item
                  container
                  direction={matchesXXS ? "column" : "row"}
                  alignItems={matchesXXS ? "center" : undefined}
                  justify={matchesMD ? "center" : undefined}
                  style={{ marginTop: "3em" }}
                >
                  {selectedProject.map((project) =>
                    project.hasOwnProperty("liveURL") ? (
                      <Fragment key={project.id}>
                        <Grid
                          item
                          style={{
                            marginRight: matchesXXS
                              ? 0
                              : matchesMD
                              ? "1.2em"
                              : "2em",
                          }}
                        >
                          <Button
                            variant="outlined"
                            href={`${project.liveURL}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={classes.button}
                            size="large"
                            style={{
                              padding: matchesXXS
                                ? ".65em 2.5em"
                                : matchesSM
                                ? ".5em 1.5em"
                                : matchesMDX
                                ? ".35em .5em"
                                : matchesMDXX
                                ? ".25em .35em"
                                : undefined,
                              marginBottom: matchesXXS ? "1.5em" : 0,
                              fontSize: matchesSM
                                ? undefined
                                : matchesMD
                                ? "1rem"
                                : undefined,
                            }}
                          >
                            Live Project
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button
                            variant="outlined"
                            href={`${project.repo}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={classes.button}
                            size="large"
                            style={{
                              padding: matchesXXS
                                ? ".65em 2.5em"
                                : matchesSM
                                ? ".5em 1.5em"
                                : matchesMDX
                                ? ".35em .5em"
                                : matchesMDXX
                                ? ".25em .35em"
                                : undefined,
                              fontSize: matchesSM
                                ? undefined
                                : matchesMD
                                ? "1rem"
                                : undefined,
                            }}
                          >
                            GitHub Link
                          </Button>
                        </Grid>
                      </Fragment>
                    ) : (
                      <Grid item>
                        <Button
                          variant="outlined"
                          href={`${project.repo}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={classes.button}
                          size="large"
                        >
                          GitHub Link
                        </Button>
                      </Grid>
                    )
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default SelectedProject;
