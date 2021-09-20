import delay from "delay";
import i18next from "i18next";
import React, { useState } from "react";
// import { useEffect } from "react";
// import Spinner from "../helpers/Spinner";
import { PuffLoader as Spinner } from "react-spinners";

export default function SwitchLanguage() {
  const [lang, setLang] = useState(i18next.language);

  // useEffect(() => {
  //   let mounted = true;
  //   i18next.changeLanguage().then(() => {
  //     if (mounted) {
  //       setLang(i18next.language);
  //     }
  //   });
  //   return () => {
  //     mounted = false;
  //   };
  // }, []);

  async function changeLang() {
    if (lang === "es") await i18next.changeLanguage("en");
    else await i18next.changeLanguage("es");
    setLang(i18next.language);
  }

  function toggleLang() {
    if (lang === "en") return "es";
    else return "en";
  }

  async function run() {
    await delay(1000);
    setLang(i18next.language);
  }

  if (!lang) {
    run();
    return <Spinner loading={true} size={50} />;
  }
  return (
    <img
      height="20px"
      title={toggleLang().toUpperCase()}
      src={`./img/flags/${toggleLang()}.png`}
      alt="Language Flag"
      onClick={() => changeLang()}
    />
  );
}
