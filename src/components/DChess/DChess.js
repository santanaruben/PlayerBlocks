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

export default function DChess() {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="md">
      {/* <CssBaseline /> */}
      <div className={classes.root}>
        <Typography color="textPrimary" component="span">
          <h1>{t("topnav.dchess")}</h1>
          <img
            alt=""
            src={"img/dchess/logos/dchess.jpg"}
            style={{ width: "100%", marginBottom: "20px" }}
          />
          <Grid container justify="center" style={{ textAlign: "justify" }}>
            <Grid item>{t("dchess.body1")}</Grid>
            <Grid item>
              <iframe
                className={classes.img}
                width="800"
                height="315"
                src="https://www.youtube.com/embed/ZiwuKi33p3A"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </Grid>
            <h2 className={classes.sub}>{t("axieInfinity.makeMoneyTitle")}</h2>
            <img alt="" src={"img/dchess/body/5.jpg"} className={classes.img} />
            <Grid item>{t("dchess.body2")}</Grid>
            <h2 className={classes.sub}>{t("dchess.title3")}</h2>
            <img alt="" src={"img/dchess/body/9.jpg"} className={classes.img} />
            <Grid item>{t("dchess.body3")}</Grid>
            <img alt="" src={"img/dchess/body/3.jpg"} className={classes.img} />
            <Grid item>{t("dchess.body4")}</Grid>
            <img alt="" src={"img/dchess/body/6.jpg"} className={classes.img} />
            <Grid item>{t("dchess.body5")}</Grid>
            <img alt="" src={"img/dchess/body/4.jpg"} className={classes.img} />
            <Grid item>{t("dchess.body6")}</Grid>
            <h2 className={classes.sub}>{t("dchess.body7")}</h2>
            <img alt="" src={"img/dchess/body/7.jpg"} className={classes.img} />
            <Grid item>{t("dchess.body8")}</Grid>
            <img
              alt=""
              src={"img/dchess/body/10.png"}
              className={classes.img}
            />
          </Grid>
        </Typography>
      </div>
      <div className="bottomSpace" />
    </Container>
  );
}
