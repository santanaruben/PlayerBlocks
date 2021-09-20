import React from "react";
import { MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ButtonCollapse from "./ButtonCollapse";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
// import BlurOnIcon from "@material-ui/icons/BlurOn";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
// import BusinessIcon from "@material-ui/icons/Business";
import { Apps } from "@material-ui/icons";

const styles = (theme) => ({
  root: {
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      textAlign: "unset",
    },
  },
  icono: {
    marginRight: theme.spacing(2),
  },
  buttonBar: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    // margin: "10px",
  },
  link: {
    margin: theme.spacing(0, 2.5),
    color: "black",
    textDecoration: "none",
  },
  font: {
    fontFamily: "Gasalt-Black",
    fontSize: "18px",
  },
});

function MenuLeft(props) {
  const { t } = useTranslation();

  const top = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <div className={props.classes.root + " gasaltBlack"}>
      <ButtonCollapse icon={<Apps fontSize="large" />}>
        <Link to="/" className={props.classes.link} onClick={top}>
          <MenuItem className={props.classes.font}>
            <HomeOutlinedIcon className={props.classes.icono} />
            {t("topnav.home")}
          </MenuItem>
        </Link>

        <Link to="/acceptance" className={props.classes.link} onClick={top}>
          <MenuItem className={props.classes.font}>
            <VerifiedUserIcon className={props.classes.icono} />
            {t("topnav.acceptance")}
          </MenuItem>
        </Link>

        <Link to="/axie-infinity" className={props.classes.link} onClick={top}>
          <MenuItem className={props.classes.font}>
            <SportsEsportsIcon className={props.classes.icono} />
            {t("topnav.axieInfinity")}
          </MenuItem>
        </Link>

        <Link
          to="/monsta-infinite"
          className={props.classes.link}
          onClick={top}
        >
          <MenuItem className={props.classes.font}>
            <SportsEsportsIcon className={props.classes.icono} />
            {t("topnav.monstaInfinite")}
          </MenuItem>
        </Link>

        <Link to="/leaderboard" className={props.classes.link} onClick={top}>
          <MenuItem className={props.classes.font}>
            <EmojiEventsIcon className={props.classes.icono} />
            {t("topnav.leaderboard")}
          </MenuItem>
        </Link>

        <Link to="/about" className={props.classes.link} onClick={top}>
          <MenuItem className={props.classes.font}>
            <InfoOutlinedIcon className={props.classes.icono} />
            {t("topnav.about")}
          </MenuItem>
        </Link>

        {/* <Link to="/prueba" className={props.classes.link}>
          <MenuItem className={props.classes.font}>
            <BusinessIcon className={props.classes.icono} />
            {t("topnav.test")}
          </MenuItem>
        </Link> */}
      </ButtonCollapse>
      <div className={props.classes.buttonBar} id="appbar-collapse">
        <Link to="/" className={props.classes.link} onClick={top}>
          {t("topnav.home")}
        </Link>
        <Link to="/acceptance" className={props.classes.link} onClick={top}>
          {t("topnav.acceptance")}
        </Link>
        <Link to="/axie-infinity" className={props.classes.link} onClick={top}>
          {t("topnav.axieInfinity")}
        </Link>
        <Link
          to="/monsta-infinite"
          className={props.classes.link}
          onClick={top}
        >
          {t("topnav.monstaInfinite")}
        </Link>
        <Link to="/leaderboard" className={props.classes.link} onClick={top}>
          {t("topnav.leaderboard")}
        </Link>
        <Link
          to="/about"
          className={props.classes.link}
          onClick={top}
          style={{ marginRight: "30px" }}
        >
          {t("topnav.about")}
        </Link>
        {/* <Link to="/prueba" className={props.classes.link}>
          {t("topnav.test")}
        </Link> */}
      </div>
    </div>
  );
}

export default withStyles(styles)(MenuLeft);
