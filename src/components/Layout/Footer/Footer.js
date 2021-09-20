import styles from "./_Footer.module.scss";
import { Link } from "@material-ui/core";
import React from "react";
import TelegramIcon from "@material-ui/icons/Telegram";
import TwitterIcon from "@material-ui/icons/Twitter";
import AcknowledgmentDialog from "./AcknowledgmentDialog";

function Copyright() {
  return (
    <div className={styles.text}>
      {/* <Typography color="textPrimary"> */}
      {"© "}
      <Link color="inherit" href="#">
        PlayerBlocks
      </Link>{" "}
      {new Date().getFullYear()}
      {/* </Typography> */}
    </div>
  );
}

function Social() {
  return (
    <div className={styles.social}>
      <div className={styles.iconSocial}>
        <Link color="inherit" target="_blank" href="https://t.me/playerblocks">
          <TelegramIcon fontSize="small" className={styles.icon} />
        </Link>
      </div>
      <div className={styles.iconSocial}>
        <Link
          color="inherit"
          target="_blank"
          href="https://twitter.com/playerblocks"
        >
          <TwitterIcon fontSize="small" className={styles.icon} />
        </Link>
      </div>
      <div className={styles.iconSocial}>
        <AcknowledgmentDialog />
      </div>
    </div>
  );
}

const Footer = () => (
  <>
    <footer className={styles.footer}>
      <Copyright />
      <Social />
      {/* <br />
      <br />
      <Copyright /> */}
    </footer>
  </>
);

export default Footer;
