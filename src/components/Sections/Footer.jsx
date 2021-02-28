import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import SvgIcon from "@material-ui/core/SvgIcon";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    paddingLeft: "25%",
    background: theme.palette.common.darkBrown,

    [theme.breakpoints.down("md")]: {
      paddingLeft: "8.33333%",
    },

    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
    },
  },
  githubLink: {
    textDecoration: "none",
    color: theme.palette.common.tan,
    fontWeight: 500,
    display: "flex",

    "&:hover": {
      color: theme.palette.common.dollar,
    },
  },
}));

const Footer = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Grid
      container
      direction="column"
      //   alignItems="center"
      className={classes.footerContainer}
    >
      <Grid item container justify="center" alignItems="center">
        <a
          href="https://github.com/hmdNetizen/hamed-jimoh-portfolio"
          className={classes.githubLink}
        >
          <Grid item style={{ marginRight: 5 }}>
            <SvgIcon {...props} style={{ width: 20, height: 20 }}>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </SvgIcon>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ fontSize: ".85rem" }}
            >
              View the code of this site
            </Typography>
          </Grid>
        </a>
      </Grid>
      <Grid
        item
        container
        justify="center"
        align={matchesXS ? "center" : undefined}
        direction={matchesXS ? "column" : "row"}
      >
        <Grid
          item
          style={{
            marginRight: matchesXS ? 0 : 5,
            color: theme.palette.common.tan,
          }}
        >
          <Typography variant="body1" paragraph style={{ fontSize: ".85rem" }}>
            &copy; 2021 Hamed Jimoh.
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            paragraph
            style={{ fontSize: ".85rem", color: theme.palette.common.tan }}
          >
            All rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
