import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
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
    },
  },
  timelineBody: {
    position: "relative",
    paddingLeft: ".5em",
    marginBottom: "1em",

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
    color: theme.palette.common.brown,
    position: "absolute",
    top: ".5em",
    left: "-6.5em",
    fontSize: "1.2rem",
  },
}));

const Resume = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid container direction="column" className={classes.resumeContainer}>
      <Grid
        item
        style={{
          marginTop: "20%",
          paddingTop: "5em",
          paddingLeft: "10em",
          paddingRight: "5em",
        }}
      >
        <Grid container>
          <Grid item md className={classes.timeline}>
            <Grid container className={classes.timelineBody}>
              <Grid item>
                <Grid container className={classes.timelineItem}>
                  <Grid item>
                    <Typography variant="h5" className={classes.timelineDate}>
                      Aug 30
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
                        style={{
                          color: theme.palette.common.brown,
                          fontSize: "1.5rem",
                        }}
                      >
                        Operations Officer
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="body"
                        style={{
                          fontSize: "1rem",
                          color: theme.palette.common.darkBrown,
                        }}
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nisi corporis in ipsa aut soluta debitis, commodi ab
                        eum, sit, laboriosam architecto! Facilis, at soluta
                        tempora nam ducimus molestias dolorem fugiat. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Nisi
                        corporis in ipsa aut soluta debitis, commodi ab eum,
                        sit, laboriosam architecto! Facilis, at soluta tempora
                        nam ducimus molestias dolorem fugiat. Lorem ipsum dolor
                        sit amet consectetur adipisicing elit. Nisi corporis in
                        ipsa aut soluta debitis, commodi ab eum, sit, laboriosam
                        architecto! Facilis, at soluta tempora nam ducimus
                        molestias dolorem fugiat.
                      </Typography>
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
                      Aug 30
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
                        style={{
                          color: theme.palette.common.brown,
                          fontSize: "1.5rem",
                        }}
                      >
                        Operations Officer
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="body"
                        style={{
                          fontSize: "1rem",
                          color: theme.palette.common.darkBrown,
                        }}
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nisi corporis in ipsa aut soluta debitis, commodi ab
                        eum, sit, laboriosam architecto! Facilis, at soluta
                        tempora nam ducimus molestias dolorem fugiat. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Nisi
                        corporis in ipsa aut soluta debitis, commodi ab eum,
                        sit, laboriosam architecto! Facilis, at soluta tempora
                        nam ducimus molestias dolorem fugiat. Lorem ipsum dolor
                        sit amet consectetur adipisicing elit. Nisi corporis in
                        ipsa aut soluta debitis, commodi ab eum, sit, laboriosam
                        architecto! Facilis, at soluta tempora nam ducimus
                        molestias dolorem fugiat.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md>
            2015 - 2017 Turpis metus sit diam purus leo in varius ac quam. Nunc
            amet tristique volutpat adipiscing vulputate phasellus. Eget enim
            aliquam euismod mauris in vitae viverra blandit lectus diam feugiat.
            Nunc amet tristique volutpat adipiscing vulputate phasellus. Eget
            enim aliquam euismod. 2015 - 2017 Turpis metus sit diam purus leo in
            varius ac quam. Nunc amet tristique volutpat adipiscing vulputate
            phasellus. Eget enim aliquam euismod mauris in vitae viverra blandit
            lectus diam feugiat. Nunc amet tristique volutpat adipiscing
            vulputate phasellus. Eget enim aliquam euismod.
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Resume;
