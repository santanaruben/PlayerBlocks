import { Grid } from "@material-ui/core";
import React from "react";
import { useTranslation } from "react-i18next";
// import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    // marginLeft: theme.spacing(4),
    // marginRight: theme.spacing(4),
    marginTop: theme.spacing(4),
    whiteSpace: "pre-line",
    fontSize: "18px",
  },
  imgDiv: {
    textAlign: "center",
    margin: "30px 0px 0px 0px",
    width: "100%",
  },
  img: {
    maxWidth: "100%",
    margin: "30px 0px",
    objectFit: "cover",
    // maxHeight: "100%",
  },
  imgSmall: {
    maxWidth: "100%",
  },
}));

export default function AxieInfinity() {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="md">
      {/* <CssBaseline /> */}
      <div className={classes.root}>
        <Typography color="textPrimary" component="span">
          <h1>{t("topnav.axieInfinity")}</h1>
          <img
            alt=""
            src={"img/axies/logos/axie-infinity.jpg"}
            style={{ width: "100%", marginBottom: "20px" }}
          />
          <Grid container justify="center" style={{ textAlign: "justify" }}>
            <Grid item>{t("axieInfinity.whatIsAxieBody")}</Grid>
            <h2 className={classes.sub}>
              {t("axieInfinity.whatAreAxiesTitle")}
            </h2>
            <Grid item>{t("axieInfinity.whatAreAxiesBody")}</Grid>
            <h2 className={classes.sub}>{t("axieInfinity.makeMoneyTitle")}</h2>
            <Grid item>{t("axieInfinity.makeMoneyBody")}</Grid>
            <h2 className={classes.sub}>{t("axieInfinity.loseTitle")}</h2>
            <Grid item>{t("axieInfinity.loseBody")}</Grid>
            <h2 className={classes.sub}>{t("axieInfinity.axieTitle")}</h2>
            <Grid item>{t("axieInfinity.axieBody1")}</Grid>
            <img
              alt=""
              src={"img/axies/game/axieInfo.png"}
              className={classes.img}
            />
            <Grid item>{t("axieInfinity.axieBody2")}</Grid>
            <div className={classes.imgDiv}>
              <img
                alt=""
                src={"img/axies/game/types.png"}
                className={classes.imgSmall}
              />
            </div>
            <h2 className={classes.sub}>{t("axieInfinity.gameplay")}</h2>
            <Grid item>{t("axieInfinity.gameplayBody1")}</Grid>
            <img
              alt=""
              src={"img/axies/game/begin.jpg"}
              className={classes.img}
            />
            <Grid item>{t("axieInfinity.gameplayBody2")}</Grid>
            <img
              alt=""
              src={"img/axies/game/daily.jpg"}
              className={classes.img}
            />
            <h2 className={classes.sub}>{t("axieInfinity.adventure")}</h2>
            <img
              alt=""
              src={"img/axies/game/adventure.jpg"}
              className={classes.img}
            />
            <Grid item>{t("axieInfinity.gameplayBody3")}</Grid>
            <h2 className={classes.sub}>{t("axieInfinity.arena")}</h2>
            <Grid item>{t("axieInfinity.gameplayBody4")}</Grid>
            <h2 className={classes.sub}>{t("axieInfinity.position")}</h2>
            <Grid item>{t("axieInfinity.gameplayBody5")}</Grid>
            <img
              alt=""
              src={"img/axies/game/position.jpg"}
              className={classes.img}
            />
          </Grid>
        </Typography>
      </div>
      <div className="bottomSpace" />
    </Container>
  );
}
