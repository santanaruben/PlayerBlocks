import React, { useState } from "react";
import i18next from "i18next";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Translate from "@material-ui/icons/Translate";
import { useTranslation } from "react-i18next";
import delay from "delay";
import moment from "moment";
import "moment/locale/es";
import "moment/locale/en-ca";

export default function SwitchLanguage() {
  const [lang, setLang] = useState(i18next.language);
  const [anchorEl, setAnchorEl] = useState(null);
  const { t } = useTranslation();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // const changeLang = async (lang) => {
  //   await i18next.changeLanguage(lang);
  //   handleClose();
  // };

  async function changeLang() {
    if (lang === "es") {
      moment.locale("en-ca");
      await i18next.changeLanguage("en");
    } else {
      moment.locale("es");
      await i18next.changeLanguage("es");
    }
    setLang(i18next.language);
    handleClose();
  }

  async function run() {
    await delay(1000);
    setLang(i18next.language);
  }

  if (!lang) {
    run();
  }

  return (
    <>
      <IconButton
        aria-label="language"
        aria-controls="simple-menu"
        aria-haspopup="true"
        disableRipple
        style={{
          backgroundColor: "transparent",
          // margin: "0px 20px",
          padding: "0px",
        }}
        onClick={handleClick}
        title={t("topnav.changeLang")}
      >
        <Translate />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => changeLang("es")}
          style={{ fontFamily: "Gasalt-Black", fontSize: "18px" }}
        >
          Español
        </MenuItem>
        <MenuItem
          onClick={() => changeLang("en")}
          style={{ fontFamily: "Gasalt-Black", fontSize: "18px" }}
        >
          English
        </MenuItem>
      </Menu>
    </>
  );
}
