import React from "react";
import styles from "./HomeParallax.module.scss";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import { withTranslation } from "react-i18next";

// Little helpers ...
const url = (name, wrap = false) =>
  `${wrap ? "url(" : ""}img/${name}${wrap ? ")" : ""}`;

class HomeParallax extends React.Component {
  render() {
    const { t } = this.props;
    return (
      <>
        <div className={styles.root}>
          {/* <div style={{ marginBottom: "-14vh" }}> */}
          <div style={{ marginBottom: "-8vh" }}>
            <Parallax ref={(ref) => (this.parallax = ref)} pages={3}>
              <ParallaxLayer
                offset={1}
                speed={1}
                style={{
                  backgroundColor: "forestgreen",
                }}
              />
              <ParallaxLayer
                offset={1.9999}
                speed={1}
                style={{
                  backgroundColor: "sandybrown",
                }}
              />
              <ParallaxLayer
                offset={2}
                speed={1}
                style={{
                  backgroundColor: "mediumturquoise",
                }}
              />
              <ParallaxLayer
                offset={0}
                speed={0}
                factor={3}
                style={{
                  backgroundImage: url("par/stars.svg", true),
                  backgroundSize: "cover",
                }}
              />
              <ParallaxLayer
                offset={0.2}
                speed={-0.4}
                style={{ pointerEvents: "none" }}
              >
                <img
                  alt=""
                  src={url("axies/left/bird3.png")}
                  className={styles.flySlow}
                  style={{ width: "25%", marginLeft: "75%" }}
                />
              </ParallaxLayer>
              <ParallaxLayer
                offset={0.5}
                speed={0.3}
                style={{ pointerEvents: "none" }}
              >
                <img
                  alt=""
                  src={url("axies/right/bird2.png")}
                  className={styles.flyMedium}
                  style={{ width: "25%", marginLeft: "1%" }}
                />
              </ParallaxLayer>
              <ParallaxLayer
                offset={0.905}
                speed={0.2}
                style={{ pointerEvents: "none" }}
              >
                <img
                  alt=""
                  src={url("axies/left/bird.png")}
                  className={styles.flySlow}
                  style={{ width: "15%", marginLeft: "55%" }}
                />
              </ParallaxLayer>
              <ParallaxLayer
                offset={0.95}
                speed={0.3}
                style={{ pointerEvents: "none" }}
              >
                <img
                  alt=""
                  src={url("axies/left/bird4.png")}
                  className={styles.flyFast}
                  style={{ width: "20%", marginLeft: "80%" }}
                />
              </ParallaxLayer>
              {/* <ParallaxLayer
                offset={0.98}
                speed={2}
                style={{ pointerEvents: "none" }}
              >
                <img
                  alt=""
                  src={url("axies/right/bird5.png")}
                  style={{ width: "25%", marginLeft: "25%" }}
                />
              </ParallaxLayer> */}
              <ParallaxLayer offset={0.4} speed={0.8} style={{ opacity: 0.1 }}>
                <img
                  alt=""
                  src={url("par/cloud.svg")}
                  style={{ display: "block", width: "20%", marginLeft: "25%" }}
                />
                <img
                  alt=""
                  src={url("par/cloud.svg")}
                  style={{ display: "block", width: "10%", marginLeft: "15%" }}
                />
              </ParallaxLayer>
              <ParallaxLayer offset={0.5} speed={0.5} style={{ opacity: 0.1 }}>
                <img
                  alt=""
                  src={url("par/cloud.svg")}
                  style={{ display: "block", width: "20%", marginLeft: "70%" }}
                />
                <img
                  alt=""
                  src={url("par/cloud.svg")}
                  style={{ display: "block", width: "20%", marginLeft: "50%" }}
                />
              </ParallaxLayer>
              <ParallaxLayer offset={0.99} speed={0.2} style={{ opacity: 0.2 }}>
                <img
                  alt=""
                  src={url("par/cloud.svg")}
                  style={{ display: "block", width: "10%", marginLeft: "10%" }}
                />
                <img
                  alt=""
                  src={url("par/cloud.svg")}
                  style={{ display: "block", width: "20%", marginLeft: "75%" }}
                />
              </ParallaxLayer>

              <ParallaxLayer offset={1.4} speed={1} style={{ opacity: 1 }}>
                <img
                  alt=""
                  src={url("otros/bush.png")}
                  style={{ display: "block", width: "30%", marginLeft: "75%" }}
                />
              </ParallaxLayer>
              <ParallaxLayer offset={1.4} speed={1} style={{ opacity: 1 }}>
                <img
                  alt=""
                  src={url("otros/bush.png")}
                  style={{ display: "block", width: "30%", marginLeft: "-5%" }}
                />
              </ParallaxLayer>

              <ParallaxLayer
                offset={1.65}
                speed={0.9}
                style={{ pointerEvents: "none" }}
              >
                <img
                  alt=""
                  src={url("axies/right/beast2.png")}
                  style={{ width: "25%", marginLeft: "20%" }}
                />
              </ParallaxLayer>

              <ParallaxLayer offset={1.98} speed={0.5} style={{ opacity: 0.7 }}>
                <img
                  alt=""
                  src={url("otros/cactus.png")}
                  style={{ display: "block", width: "22%", marginLeft: "60%" }}
                />
              </ParallaxLayer>
              <ParallaxLayer offset={1.99} speed={0.5} style={{ opacity: 0.7 }}>
                <img
                  alt=""
                  src={url("otros/cactus.png")}
                  style={{ display: "block", width: "15%", marginLeft: "-5%" }}
                />
              </ParallaxLayer>

              <ParallaxLayer offset={1.1} speed={1} style={{ opacity: 1 }}>
                <img
                  alt=""
                  src={url("otros/bush.png")}
                  style={{ display: "block", width: "15%", marginLeft: "70%" }}
                />
              </ParallaxLayer>
              <ParallaxLayer offset={1.1} speed={1} style={{ opacity: 1 }}>
                <img
                  alt=""
                  src={url("otros/bush.png")}
                  style={{ display: "block", width: "15%", marginLeft: "-5%" }}
                />
              </ParallaxLayer>

              <ParallaxLayer
                offset={1.5}
                speed={1.3}
                style={{ pointerEvents: "none" }}
              >
                <img
                  alt=""
                  src={url("axies/left/plant.png")}
                  style={{ width: "20%", marginLeft: "0%" }}
                />
              </ParallaxLayer>
              <ParallaxLayer
                offset={1.2}
                speed={1}
                style={{ pointerEvents: "none" }}
              >
                <img
                  alt=""
                  src={url("axies/left/plant3.png")}
                  style={{ width: "17%", marginLeft: "80%" }}
                />
              </ParallaxLayer>
              <ParallaxLayer
                offset={1.9}
                speed={0.3}
                style={{ pointerEvents: "none" }}
              >
                <img
                  alt=""
                  src={url("axies/right/beast3.png")}
                  style={{ width: "27%", marginLeft: "75%" }}
                />
              </ParallaxLayer>

              <ParallaxLayer
                offset={1.95}
                speed={0.5}
                style={{ pointerEvents: "none" }}
              >
                <img
                  alt=""
                  src={url("axies/left/bug2.png")}
                  style={{ width: "13%", marginLeft: "24%" }}
                />
              </ParallaxLayer>
              <ParallaxLayer
                offset={1.95}
                speed={0.4}
                style={{ pointerEvents: "none" }}
              >
                <img
                  alt=""
                  src={url("axies/left/bug.png")}
                  style={{ width: "20%", marginLeft: "12%" }}
                />
              </ParallaxLayer>
              <ParallaxLayer
                offset={1.61}
                speed={0.8}
                style={{ pointerEvents: "none" }}
              >
                <img
                  alt=""
                  src={url("axies/left/plant4.png")}
                  style={{ width: "27%", marginLeft: "75%" }}
                />
              </ParallaxLayer>
              <ParallaxLayer
                offset={1.9}
                speed={0.2}
                style={{ pointerEvents: "none" }}
              >
                <img
                  alt=""
                  src={url("axies/left/reptile.png")}
                  style={{ width: "27%", marginLeft: "30%" }}
                />
              </ParallaxLayer>
              {/* <ParallaxLayer
                offset={2}
                speed={-0.3}
                style={{
                  backgroundSize: "80%",
                  backgroundPosition: "center",
                  backgroundImage: url("par/clients.svg", true),
                }}
              /> */}
              <ParallaxLayer
                offset={0.0}
                speed={0.1}
                onClick={() => this.parallax.scrollTo(1)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div className={styles.welcomeContainer}>
                  <p className={styles.welcome}>{t("home.welcome")}</p>
                </div>
                {/* <img
                  alt=""
                  src={url("par/server.svg")}
                  style={{ width: "20%" }}
                /> */}
              </ParallaxLayer>

              <ParallaxLayer
                offset={0.98}
                speed={2}
                style={{ pointerEvents: "none" }}
              >
                <img
                  alt=""
                  src={url("axies/right/bird6.png")}
                  className={styles.flyFast}
                  style={{ width: "25%", marginLeft: "25%" }}
                />
              </ParallaxLayer>
              <ParallaxLayer
                offset={2.6}
                speed={-0.2}
                style={{ pointerEvents: "none" }}
              >
                <img
                  alt=""
                  src={url("axies/left/aquatic.png")}
                  className={styles.flyMedium}
                  style={{ width: "27%", marginLeft: "75%" }}
                />
              </ParallaxLayer>
              <ParallaxLayer
                offset={2.5}
                speed={0.4}
                style={{ pointerEvents: "none" }}
              >
                <img
                  alt=""
                  src={url("axies/right/aquatic2.png")}
                  className={styles.flySlow}
                  style={{ width: "27%", marginLeft: "15%" }}
                />
              </ParallaxLayer>

              <ParallaxLayer
                offset={2.2}
                speed={0.9}
                style={{ pointerEvents: "none" }}
              >
                <img
                  alt=""
                  src={url("axies/left/aquatic3.png")}
                  className={styles.flyFast}
                  style={{ width: "27%", marginLeft: "1%" }}
                />
              </ParallaxLayer>

              <ParallaxLayer
                offset={1}
                speed={1}
                onClick={() => this.parallax.scrollTo(2)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* <img
                  alt=""
                  src={url("par/bash.svg")}
                  style={{ width: "40%" }}
                /> */}
                <div className={styles.welcomeContainer}>
                  <p className={styles.welcome}>
                    {t("home.weAre")}
                    <a
                      href="https://ubiburner.com/"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "white" }}
                    >
                      UBI Burner
                    </a>
                  </p>
                </div>
              </ParallaxLayer>
              <ParallaxLayer
                offset={2}
                speed={1}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={() => this.parallax.scrollTo(0)}
              >
                {/* <img
                  alt=""
                  src={url("par/clients-main.svg")}
                  style={{ width: "40%" }}
                /> */}
                <div className={styles.welcomeContainer}>
                  <p className={styles.welcome}>{t("home.apply")}</p>
                </div>
              </ParallaxLayer>
            </Parallax>
          </div>
        </div>
      </>
    );
  }
}

export default withTranslation()(HomeParallax);
