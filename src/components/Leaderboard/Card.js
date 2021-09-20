import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./_Card.module.scss";
import clsx from "clsx";
// import scholars from "./scholars.json";
import moment from "moment";

export default function Card(props) {
  const { t } = useTranslation();
  const [isFlip, setFlip] = useState(false);

  const toggleClass = () => {
    setFlip(!isFlip);
  };

  const [scholars, setScholars] = useState();

  const getData = () => {
    fetch("scholars/scholars.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setScholars(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {scholars && (
        <div className={styles.cartaGiratoria} onClick={toggleClass}>
          <div
            className={
              isFlip ? clsx(styles.cartaToken, styles.flip) : styles.cartaToken
            }
          >
            <div
              className={styles.front}
              style={{
                // backgroundImage: "url(./img/backgrounds/" + props.type + ".jpg)",
                backgroundImage: "url(./img/backgrounds/b1.jpg)",
              }}
            >
              <div className={styles.avatar}>
                <img
                  alt="avatarImage"
                  className={styles.avatarImage}
                  src={"./scholars/avatars/" + scholars[props.id].picture}
                />
              </div>

              <div className={styles.infoBox}>
                <div className={styles.info}>
                  <br />
                  <h1>{scholars[props.id].name}</h1>
                  <h5>
                    <div className={styles.textCenter}>
                      <strong>{t("leaderboard.team")}</strong>
                    </div>
                  </h5>
                  <div className={styles.textCenter}>
                    <strong>{scholars[props.id].team}</strong>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.back}>
              <div className={styles.backInfo}>
                <h3>
                  <strong>
                    <div className={styles.textCenter}>
                      {t("leaderboard.playerStats")}
                    </div>
                  </strong>
                </h3>
                <hr />
                <h5>
                  <strong>
                    <div className={styles.textCenter}>
                      {t("leaderboard.memberSince")}
                    </div>
                  </strong>
                </h5>
                <h5>
                  <strong>
                    <div
                      className={styles.textCenter}
                      style={{ fontSize: "120%" }}
                    >
                      {moment.unix(scholars[props.id].date).format("LL")}
                    </div>
                  </strong>
                </h5>
                <hr />

                {/* <!--Año de Egreso--> */}
                <h5>
                  <strong>
                    <div className={styles.textCenter}>
                      {t("leaderboard.level")}
                    </div>
                  </strong>
                </h5>
                <h5>
                  <strong>
                    <div
                      className={styles.textCenter}
                      style={{ fontSize: "120%" }}
                    >
                      {scholars[props.id].level} {t("leaderboard.cups")}
                    </div>
                  </strong>
                </h5>

                <hr />

                {/* <!--Hash de la transacción--> */}
                <h5>
                  <strong>
                    <div className={styles.textCenter}>
                      {t("leaderboard.slp")}
                    </div>
                  </strong>
                </h5>
                <h5>
                  <strong>
                    <div
                      className={styles.textCenter}
                      style={{ fontSize: "120%" }}
                    >
                      {scholars[props.id].slp}
                    </div>
                  </strong>
                </h5>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
