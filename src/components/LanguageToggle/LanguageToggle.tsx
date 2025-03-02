import { Switch } from "@mui/material";
import styles from "./LanguageToggle.module.css";
import { useLangContext } from "@/components/LangContext";

export default function LanguageToggle() {
  const { lang, toggleLang } = useLangContext();

  return (
    <div className={styles.container}>
      <div className={styles.languageToggle}>
        <img src="/Images/Flags/UKFlag.svg" width={40} />
        <Switch checked={lang === "gr" ? true : false} onClick={toggleLang} />
        <img src="/Images/Flags/GreekFlag.svg" width={40} />
      </div>
      <h2>Lanuage is {lang}</h2>
    </div>
  );
}
