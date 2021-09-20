import { Grid } from "@material-ui/core";
import { Link } from "@material-ui/core";
import React from "react";
import TelegramIcon from "@material-ui/icons/Telegram";
import TwitterIcon from "@material-ui/icons/Twitter";
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
  block: {
    width: "100%",
    display: "inline-flex",
    justifyContent: "center",
    marginTop: "20px",
    color: "#5829AF",
  },
  img: {
    maxWidth: "80%",
    margin: "30px 0px",
  },
  iconSocial: { margin: "0px 20px" },
  icon: { fontSize: "50px" },
}));

function Social() {
  const classes = useStyles();
  return (
    <div className={classes.block}>
      <div className={classes.iconSocial}>
        <Link color="inherit" target="_blank" href="https://t.me/playerblocks">
          <TelegramIcon fontSize="small" className={classes.icon} />
        </Link>
      </div>
      <div className={classes.iconSocial}>
        <Link
          color="inherit"
          target="_blank"
          href="https://twitter.com/playerblocks"
        >
          <TwitterIcon fontSize="small" className={classes.icon} />
        </Link>
      </div>
    </div>
  );
}

export default function About() {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="md">
      {/* <CssBaseline /> */}
      <div className={classes.root}>
        <Typography color="textPrimary" component="span">
          <h1>{t("topnav.about")}</h1>
          {/* <img
          alt=""
          src={"img/axies/logos/axie-infinity.jpg"}
          style={{ width: "100%", marginBottom: "20px" }}
        /> */}
          <Grid container justify="center" style={{ textAlign: "justify" }}>
            <Grid item>{t("about.body")}</Grid>
            <Social />
            <br />
            <h2 className={classes.sub}>{t("about.mission")}</h2>
            <Grid item>{t("about.missionText")}</Grid>
            <h2 className={classes.sub}>{t("about.vision")}</h2>
            <Grid item>{t("about.visionText")}</Grid>
            <h2 className={classes.sub}>{t("about.values")}</h2>
            <Grid item>{t("about.valuesText")}</Grid>
            <div className="bottomSpace" />
          </Grid>
        </Typography>
      </div>
    </Container>
  );
}
