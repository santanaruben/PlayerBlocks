import React from "react";
import { Button, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ButtonCollapse from "./ButtonCollapse";
// import { Link } from "@material-ui/core";
import { Link as LinkRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
// import { VpnKeyOutlined } from "@material-ui/icons";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import { Person } from "@material-ui/icons";

const styles = (theme) => ({
  root: {
    // marginLeft: theme.spacing(2),
  },
  icono: {
    marginRight: theme.spacing(2),
  },
  buttonBar: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  link: {
    margin: theme.spacing(0, 1.5),
    color: "black",
  },
  buttonSign: {
    margin: theme.spacing(0, 1.5),
    "&:hover, &:focus, &:active": {
      background: "transparent",
    },
    borderRadius: 0,
    width: "90px",
    textTransform: "none",
    fontFamily: "Gasalt-Black",
    fontSize: "18px",
  },
  buttonLogin: {
    background: "black",
    "&:hover, &:focus, &:active": {
      background: "black",
      color: "white",
    },
    borderRadius: 0,
    width: "90px",
    textTransform: "none",
    fontFamily: "Gasalt-Black",
    fontSize: "18px",
    marginLeft: "30px",
  },
});

function MenuRight(props) {
  const { classes } = props;
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <ButtonCollapse
        icon={<Person fontSize="large" style={{ marginLeft: "10px" }} />}
      >
        {/* <Link
          target="apptab"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdsE7cg5mmcbzQwnnjFuiX306b7_qOR0Ou39zd733ftoqiuAw/viewform?usp=sf_link"
          className={classes.link}
          underline="none"
        >
          <MenuItem style={{ fontFamily: "Gasalt-Black", fontSize: "18px" }}>
            <VpnKeyOutlined className={classes.icono} />
            {t("topnav.sign")}
          </MenuItem>
        </Link> */}
        <LinkRouter
          to="/register"
          style={{ color: "black", textDecoration: "none" }}
        >
          <MenuItem style={{ fontFamily: "Gasalt-Black", fontSize: "18px" }}>
            <HowToRegIcon className={classes.icono} />
            {t("topnav.sign")}
          </MenuItem>
        </LinkRouter>
      </ButtonCollapse>
      <div className={classes.buttonBar} id="appbar-collapse">
        {/* <Button
          color="primary"
          variant="contained"
          className={classes.buttonLogin}
          target="apptab"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdsE7cg5mmcbzQwnnjFuiX306b7_qOR0Ou39zd733ftoqiuAw/viewform?usp=sf_link"
        >
          {t("topnav.sign")}
        </Button> */}
        <LinkRouter to="/register" style={{ textDecoration: "none" }}>
          <Button
            color="primary"
            variant="contained"
            className={classes.buttonLogin}
          >
            {t("topnav.sign")}
          </Button>
        </LinkRouter>
      </div>
    </div>
  );
}

export default withStyles(styles)(MenuRight);
