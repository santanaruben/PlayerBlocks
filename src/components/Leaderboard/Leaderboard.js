import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useTranslation } from "react-i18next";
import Card from "./Card";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(1, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardName: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
  title: {
    // fontWeight: "bold",
  },
}));

export default function Leaderboard() {
  const classes = useStyles();
  const { t } = useTranslation();

  const [leaders, setLeaders] = useState();

  const getData = () => {
    fetch("scholars/leaders.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setLeaders(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography
          component="span"
          // variant="h4"
          align="center"
          color="textPrimary"
          className={classes.title}
          gutterBottom
        >
          <h1>{t("topnav.leaderboard")}</h1>
        </Typography>
        <Typography
          // variant="h5"
          align="center"
          color="textPrimary"
          component="p"
        >
          {t("leaderboard.details")}
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container component="main">
        <Grid container spacing={5} style={{ justifyContent: "center" }}>
          {/* <Grid container spacing={5} alignItems="flex-end"> */}
          {leaders &&
            leaders.map((item, i) => {
              return (
                <Grid item key={i}>
                  <Card id={item} />
                </Grid>
              );
            })}
        </Grid>
      </Container>
      <div className="bottomSpace" />
    </React.Fragment>
  );
}
