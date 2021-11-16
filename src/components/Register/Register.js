import React from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import "./Register.css";

const useStyles = makeStyles((theme) => ({
  root: {
    // marginLeft: theme.spacing(4),
    // marginRight: theme.spacing(4),
    marginTop: theme.spacing(4),
    whiteSpace: "pre-line",
    fontSize: "18px",
  },
  img: {
    width: "100%",
    margin: "10px 0px",
    objectFit: "cover",
    // maxHeight: "100%",
  },
}));

export default function Register() {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="md">
      <div className={classes.root}>
        <Grid item>
          <Link to="/register/axie">
            <img
              alt="axie"
              className={classes.img}
              src="img/axies/logos/axie-infinity.jpg"
            />
          </Link>
        </Grid>
        <Grid item>
          <Link to="/register/dchess">
            <img
              alt="dchess"
              className={classes.img}
              src="img/dchess/logos/dchess.jpg"
            />
          </Link>
        </Grid>
      </div>
    </Container>
  );
}
