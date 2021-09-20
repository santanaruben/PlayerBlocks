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
}));

export default function Acceptance() {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="md">
      {/* <CssBaseline /> */}
      <div className={classes.root}>
        <Typography color="textPrimary" component="span">
          <h1>{t("topnav.acceptance")}</h1>
          <Grid container justify="center" style={{ textAlign: "justify" }}>
            <Grid item>{t("acceptance.body")}</Grid>
          </Grid>
        </Typography>
      </div>
      <div className="bottomSpace" />
    </Container>
  );
}
