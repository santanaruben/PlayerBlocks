import { Grid } from "@material-ui/core";
import React from "react";
import { useTranslation } from "react-i18next";

function NotFound() {
  const { t } = useTranslation();
  return (
    <>
      {/* <div id="NotFound"> */}
      <div>
        <Grid container justify="center" style={{ textAlign: "center" }}>
          <Grid item>
            <h1 style={{ textAlign: "center" }}>Ooops</h1>
            <p style={{ textAlign: "center" }}>{t("error.nothing")}</p>
            <img
              alt=""
              src={"img/axies/left/reptileGIF.gif"}
              style={{
                width: "200px",
              }}
            />
            <div id="NotFoundCreditImage">
              Illustration by{" "}
              <a href="https://dribbble.com/marina-f">Marina Fedoseenko</a> from{" "}
              <a href="https://icons8.com/">Icons8</a>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default NotFound;
