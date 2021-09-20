import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/StarBorder";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useTranslation } from "react-i18next";

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
    padding: theme.spacing(4, 0, 6),
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
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          <Grid item xs={12} md={4} order={{ xs: 2, sm: 2, md: 1 }}>
            <Card>
              <CardHeader
                title={"Gold"}
                subheader={null}
                titleTypographyProps={{ align: "center" }}
                subheaderTypographyProps={{
                  align: "center",
                  color: "textPrimary",
                }}
                className={classes.cardHeader}
              />
              <CardContent>
                <div className={classes.cardName}>
                  <Typography component="h4" variant="h4" color="textPrimary">
                    {"Name"}
                  </Typography>
                </div>
                <ul>
                  <Typography component="li" variant="subtitle1" align="center">
                    {"Picture"}
                  </Typography>
                </ul>
              </CardContent>
              <CardActions>
                <Button fullWidth variant="outlined" color="primary">
                  {"Details"}
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={4} order={{ xs: 1, sm: 1, md: 2 }}>
            <Card>
              <CardHeader
                title={"Diamond"}
                subheader={"Best"}
                titleTypographyProps={{ align: "center" }}
                subheaderTypographyProps={{
                  align: "center",
                  color: "textPrimary",
                }}
                action={<StarIcon />}
                className={classes.cardHeader}
              />
              <CardContent>
                <div className={classes.cardName}>
                  <Typography component="h4" variant="h4" color="textPrimary">
                    {"Name"}
                  </Typography>
                </div>
                <ul>
                  <Typography component="li" variant="subtitle1" align="center">
                    {"Picture"}
                  </Typography>
                </ul>
              </CardContent>
              <CardActions>
                <Button fullWidth variant="contained" color="primary">
                  {"Details"}
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={4} order={{ xs: 3, sm: 3, md: 3 }}>
            <Card>
              <CardHeader
                title={"Silver"}
                subheader={null}
                titleTypographyProps={{ align: "center" }}
                subheaderTypographyProps={{
                  align: "center",
                  color: "textPrimary",
                }}
                className={classes.cardHeader}
              />
              <CardContent>
                <div className={classes.cardName}>
                  <Typography component="h4" variant="h4" color="textPrimary">
                    {"Name"}
                  </Typography>
                </div>
                <ul>
                  <Typography component="li" variant="subtitle1" align="center">
                    {"Picture"}
                  </Typography>
                </ul>
              </CardContent>
              <CardActions>
                <Button fullWidth variant="outlined" color="primary">
                  {"Details"}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <div className="bottomSpace" />
    </React.Fragment>
  );
}
