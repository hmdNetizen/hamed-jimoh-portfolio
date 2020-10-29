import React, { useState, Fragment, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconButton from "@material-ui/core/IconButton";
import FilterListIcon from "@material-ui/icons/FilterList";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Tooltip from "@material-ui/core/Tooltip";
import getProjects from "../ProjectList";
import SelectedProject from "./SelectedProject";

import { useTheme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  filterIcon: {
    fill: theme.palette.common.dollar,
  },
  menu: {
    background: "#c4c4c4",
  },
  menuItem: {
    background: "transparent",
    "&:hover": {
      background: "transparent",
      color: theme.palette.common.brown,
    },
  },

  listItemText: {
    fontSize: "1.2rem",
    marginLeft: "2em",
    marginRight: "2em",
  },

  menuSelected: {
    color: theme.palette.common.brown,
  },
  card: {
    position: "relative",
    height: 300,
    cursor: "pointer",
    marginLeft: "auto",
    marginRight: "auto",

    "&:hover": {
      "& $projectText": {
        left: 0,
        transition: "all .2s ease-in",
      },
    },
  },
  projectImg: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  projectText: {
    width: "100%",
    height: "100%",
    background:
      "radial-gradient(circle, rgba(208,180,159,0.9724264705882353) 0%, rgba(164,117,81,1) 100%)",
    color: theme.palette.common.dollar,
    position: "absolute",
    zIndex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    left: "-100%",
    transition: "all .2s ease-in",
  },
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
    padding: ".5em 1.5em",

    "&:hover": {
      background: theme.palette.common.gold,
    },
    [theme.breakpoints.only("md")]: {
      padding: ".5em .9em",
    },
  },
}));

const Portfolio = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXXS = useMediaQuery("(max-width:450px)");

  const [projects, setProjects] = useState(getProjects);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState(1);
  const [selectedProject, setSelectedProject] = useState([]);
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const sortByNewest = () => {
    const newProjects = [...projects];
    newProjects.sort((a, b) => b.date - a.date);

    setProjects(newProjects);
  };

  const sortByOldest = () => {
    const newProjects = [...projects];
    newProjects.sort((a, b) => a.date - b.date);

    setProjects(newProjects);
  };

  const sortByName = () => {
    const newProjects = [...projects];
    newProjects.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );

    setProjects(newProjects);
  };

  const handleProjectSelect = (id) => {
    const newProjects = [...projects];
    newProjects.filter((project) =>
      project.id === id ? (project.selected = true) : (project.selected = false)
    );

    const filteredProject = newProjects.filter((project) => project.selected);

    setSelectedProject(filteredProject);
  };

  const allProjects = (
    <Fragment>
      <Grid
        item
        container
        alignItems="center"
        justify="space-between"
        style={{
          paddingLeft: "2em",
          paddingRight: "2em",
        }}
      >
        <Grid item>
          <Typography
            variant="h2"
            gutterBottom
            style={{ fontSize: matchesXXS ? "2rem" : undefined }}
          >
            Projects
          </Typography>
        </Grid>
        {/* Filter Icon and text section */}
        <Grid item>
          <Tooltip
            title={
              <h4
                style={{
                  fontSize: "1rem",
                  margin: 0,
                  padding: "1em",
                }}
              >
                Sort
              </h4>
            }
            aria-label="sort"
          >
            <IconButton
              aria-controls="customized-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <FilterListIcon classes={{ root: classes.filterIcon }} />
            </IconButton>
          </Tooltip>
          <Menu
            elevation={0}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            classes={{ paper: classes.menu }}
          >
            <MenuItem
              classes={{
                root: classes.menuItem,
                selected: classes.menuSelected,
              }}
              onClick={() => {
                setSelectedMenu(1);
                setProjects(getProjects);
                handleClose();
              }}
            >
              <ListItemText
                primary="All"
                classes={{ primary: classes.listItemText }}
              />
            </MenuItem>
            <MenuItem
              classes={{
                root: classes.menuItem,
                selected: classes.menuSelected,
              }}
              selected={selectedMenu === 2}
              onClick={() => {
                setSelectedMenu(2);
                sortByNewest();
                handleClose();
              }}
            >
              <ListItemText
                primary="Newest"
                classes={{ primary: classes.listItemText }}
              />
            </MenuItem>

            <MenuItem
              classes={{
                root: classes.menuItem,
                selected: classes.menuSelected,
              }}
              selected={selectedMenu === 3}
              onClick={() => {
                setSelectedMenu(3);
                sortByName();
                handleClose();
              }}
            >
              <ListItemText
                primary="Name"
                classes={{ primary: classes.listItemText }}
              />
            </MenuItem>

            <MenuItem
              classes={{
                root: classes.menuItem,
                selected: classes.menuSelected,
              }}
              selected={selectedMenu === 4}
              onClick={() => {
                setSelectedMenu(4);
                sortByOldest();
                handleClose();
              }}
            >
              <ListItemText
                primary="Oldest"
                classes={{ primary: classes.listItemText }}
              />
            </MenuItem>
          </Menu>
        </Grid>
      </Grid>
      <Grid
        item
        container
        justify={matchesSM ? "center" : undefined}
        style={{
          paddingLeft: "2em",
          paddingRight: "2em",
          marginTop: "3em",
          marginBottom: "5em",
        }}
        spacing={matchesSM ? undefined : 3}
      >
        {projects.map((project) => (
          <Grid
            item
            key={project.id}
            lg={4}
            md={6}
            sm={9}
            xs={12}
            style={{
              marginTop: matchesSM ? "1em" : 0,
              marginBottom: matchesSM ? "1em" : 0,
            }}
            className="animate__animated animate__zoomIn"
            onClick={() => {
              handleProjectSelect(project.id);
              setIsSelected(true);
            }}
          >
            <Card className={classes.card}>
              <img
                src={project.img}
                alt={project.alt}
                className={classes.projectImg}
              />
              <CardContent className={classes.projectText}>
                <Typography
                  variant="h4"
                  style={{ fontWeight: 700, textAlign: "center" }}
                >
                  {project.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );

  // Displays individual project selected

  useEffect(() => {
    // const pageHeight = document.getElementById("portfolio").clientHeight;
    // console.log("Portfolio section height " + pageHeight);
    // const portfolioHeight = 848;
  });

  return (
    <Grid
      item
      container
      direction="column"
      style={{
        paddingLeft: matchesSM ? 0 : matchesMD ? "8.33333%" : "25%",
      }}
      id="portfolio"
    >
      {!isSelected ? (
        allProjects
      ) : (
        <SelectedProject
          setIsSelected={setIsSelected}
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
      )}
    </Grid>
  );
};

export default Portfolio;
