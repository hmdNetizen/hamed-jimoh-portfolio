import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import seoIcon from "../../assets/seoIcon.svg";
import websiteIcon from "../../assets/websiteIcon.svg";
import featuresIcon from "../../assets/featuresIcon.svg";
import cartIcon from "../../assets/cartIcon.svg";
import resume from "../../assets/Hamed Jimoh.pdf";

import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

const useStyles = makeStyles((theme) => ({
  headerText: {
    color: theme.palette.common.dollar,
    fontSize: "1rem",
    fontWeight: 300,
  },
  card: {
    background: "#594334",
    padding: "1em .5em",
    width: "100%",
    height: "20em",

    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
  },
  avatar: {
    display: "block",
    margin: "0 auto .5em",
    width: 80,
    height: 80,
  },
  cardHeader: {
    fontSize: "1rem",
    fontWeight: 700,
    textAlign: "center",
    color: theme.palette.common.tan,
    marginBottom: ".5em",
  },
  cardContent: {
    color: theme.palette.common.dollar,
    lineHeight: "1.8",
    fontWeight: 300,
    fontSize: ".85rem",
  },
  button: {
    ...theme.typography.btn,
    border: `2px solid ${theme.palette.common.tan}`,
    borderRadius: 50,
    fontSize: "1.2rem",
    padding: "1em 1.75em",

    "&:hover": {
      background: theme.palette.common.tan,
    },
  },
}));

const Services = ({ setPageCounter }) => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesXXXS = useMediaQuery("(max-width:320px)"); //if screen width is equals or less than 320px

  return (
    <Grid
      item
      container
      direction="column"
      id="services"
      style={{
        paddingLeft: matchesSM ? 0 : matchesMD ? "8.33333%" : "25%",
        paddingTop: "5em",
      }}
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        style={{
          paddingLeft: matchesXS ? "1em" : "3em",
          paddingRight: matchesXS ? "1em" : "3em",
        }}
      >
        <Grid item>
          <Fade bottom>
            <Typography
              variant="h2"
              gutterBottom
              style={{
                marginBottom: "1em",
              }}
            >
              Services
            </Typography>
          </Fade>
        </Grid>
        <Grid item>
          <Fade bottom>
            <Typography
              variant="h4"
              align={matchesSM ? "center" : undefined}
              style={{
                fontSize: "1.25rem",
                color: theme.palette.common.dollar,
                fontWeight: 500,
                marginBottom: "1em",
              }}
            >
              Do you want a perfect website?
            </Typography>
          </Fade>
        </Grid>
        <Grid item>
          <Fade bottom>
            <Typography
              variant="body1"
              paragraph
              className={classes.headerText}
              align={matchesSM ? "center" : undefined}
            >
              I build websites with amazing looks and fast load-times that do
              one thing: Get You Results.
            </Typography>
          </Fade>
        </Grid>
        <Grid item style={{ marginTop: "1em", marginBottom: "1em" }}>
          <Fade bottom>
            <Typography
              variant="body1"
              paragraph
              align={matchesSM ? "center" : undefined}
              className={classes.headerText}
            >
              Whatever you have in mind, you should know - I build with a
              goal-oriented eye for precision.
            </Typography>
          </Fade>
        </Grid>
        <Grid item>
          <Fade bottom>
            <Typography
              variant="body1"
              paragraph
              align={matchesSM ? "center" : undefined}
              className={classes.headerText}
            >
              When we're done, you will have a site that gets the job done in
              style.
            </Typography>
          </Fade>
        </Grid>
        <Grid
          item
          container
          justify="center"
          alignItems={matchesSM ? "center" : undefined}
          direction={matchesSM ? "column" : "row"}
          style={{ marginTop: "2em", marginBottom: "5em" }}
        >
          <Grid
            item
            style={{
              marginRight: matchesSM ? 0 : "3em",
              marginBottom: matchesSM ? "3em" : 0,
            }}
          >
            <Slide left>
              <Button
                variant="outlined"
                href={resume}
                download
                className={classes.button}
                style={{ padding: matchesXXXS && ".25em 1em" }}
              >
                Download my CV
              </Button>
            </Slide>
          </Grid>
          <Grid item>
            <Slide right>
              <Button
                variant="outlined"
                className={classes.button}
                style={{ padding: matchesXXXS && ".5em 1em" }}
                href="#portfolio"
              >
                Check my Portfolio
              </Button>
            </Slide>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : undefined}
          style={{
            paddingLeft: matchesXS ? "1em" : "3em",
            paddingRight: matchesXS ? "1em" : "3em",
            paddingBottom: "3em",
          }}
        >
          <Grid
            item
            md
            sm={10}
            xs={12}
            style={{
              marginRight: matchesSM ? 0 : "2em",
              marginBottom: matchesSM ? "3em" : 0,
            }}
          >
            <Fade bottom>
              <Card classes={{ root: classes.card }}>
                <img
                  src={websiteIcon}
                  alt="Website Icon"
                  className={classes.avatar}
                />
                <CardContent>
                  <Typography variant="h5" className={classes.cardHeader}>
                    Own a Website that Works
                  </Typography>
                  <Typography
                    variant="body2"
                    align={matchesXS ? "justify" : undefined}
                    className={classes.cardContent}
                  >
                    You want a website. It must look great and you want it to
                    work... All the time. Well, that's why I'm here! I help you
                    by designing, building, and hosting a beautiful site that'll
                    generate good leads and grow your business.
                  </Typography>
                </CardContent>
              </Card>
            </Fade>
          </Grid>
          <Grid item md sm={10} xs={12}>
            <Fade bottom>
              <Card classes={{ root: classes.card }}>
                <img src={seoIcon} alt="Seo Icon" className={classes.avatar} />
                <CardContent>
                  <Typography variant="h5" className={classes.cardHeader}>
                    Become Famous with SEO
                  </Typography>
                  <Typography
                    variant="body2"
                    align={matchesXS ? "justify" : undefined}
                    className={classes.cardContent}
                  >
                    An impressive Google ranking means more people see your
                    fantastic blog post or revolutionary product. I ensure you
                    have a leading ranking with best SEO practices. Give your
                    content the audience it deserves!
                  </Typography>
                </CardContent>
              </Card>
            </Fade>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : undefined}
          style={{
            paddingLeft: matchesXS ? "1em" : "3em",
            paddingRight: matchesXS ? "1em" : "3em",
          }}
        >
          <Grid
            item
            md
            sm={10}
            xs={12}
            style={{
              marginRight: matchesSM ? 0 : "2em",
              marginBottom: matchesSM ? "3em" : 0,
            }}
          >
            <Fade bottom>
              <Card classes={{ root: classes.card }}>
                <img
                  src={featuresIcon}
                  alt="Control Features Icon"
                  className={classes.avatar}
                />
                <CardContent>
                  <Typography variant="h5" className={classes.cardHeader}>
                    Control the Features
                  </Typography>
                  <Typography
                    align={matchesXS ? "justify" : undefined}
                    variant="body2"
                    className={classes.cardContent}
                  >
                    Do you feel restricted by all the drag-and-drop web builders
                    out there? I provide a powerful custom code solution that
                    fits your exact needs. At the end, you'll own a fast, great
                    looking site.
                  </Typography>
                </CardContent>
              </Card>
            </Fade>
          </Grid>
          <Grid item md sm={10} xs={12}>
            <Fade bottom>
              <Card classes={{ root: classes.card }}>
                <img
                  src={cartIcon}
                  alt="Shopping Cart"
                  className={classes.avatar}
                />
                <CardContent>
                  <Typography variant="h5" className={classes.cardHeader}>
                    Sell Your Stuff Online
                  </Typography>
                  <Typography
                    variant="body2"
                    align={matchesXS ? "justify" : undefined}
                    className={classes.cardContent}
                  >
                    You have an idea. You want to turn it into an online
                    business without all the hassle. Perfect! I'm here to help
                    you set up an e-commerce store that looks amazing and makes
                    you money.
                  </Typography>
                </CardContent>
              </Card>
            </Fade>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Services;
