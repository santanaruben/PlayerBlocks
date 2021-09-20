import AppBar from "@material-ui/core/AppBar";
// import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import SwitchLanguage from "../../../helpers/SwitchLanguage";
import MenuLeft from "./MenuLeft";
import MenuRight from "./MenuRight";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    // borderBottom: `1px solid ${theme.palette.divider}`,
    background: "white",
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
    margin: theme.spacing(0, 0, 0, 2),
    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing(0),
    },
  },
  link: {
    margin: theme.spacing(0, 1),
    color: "black",
    textDecoration: "none",
  },
  buttonSign: {
    background: "darkgrey",
    "&:hover, &:focus, &:active": {
      background: "darkgrey",
      color: "white",
    },
    borderRadius: 0,
  },
  buttonLogin: {
    background: "black",
    "&:hover, &:focus, &:active": {
      background: "black",
      color: "white",
    },
    borderRadius: 0,
  },
  buttonFlag: {
    borderRadius: 0,
    marginRight: "13px",
    padding: 0,
    minWidth: "unset",
  },
}));

export default function TopNav() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="fixed"
        // elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Grid item>
            <Link to="/">
              <img alt="logo" id="topbarLogo" src="img/logo/logo.png" />
            </Link>
          </Grid>
          <span className={classes.toolbarTitle}>
            <MenuLeft />
          </span>
          {/* <Button variant="text" className={classes.buttonFlag}> */}
          <SwitchLanguage />
          {/* </Button> */}
          <MenuRight />
        </Toolbar>
      </AppBar>
      <div id="navSpace"></div>
    </React.Fragment>
  );
}
