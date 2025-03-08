import { Switch } from "@mui/material";
import styles from "./LanguageToggle.module.css";
import { useLangContext } from "@/components/LangContext";
import Image from "next/image";

export default function LanguageToggle() {
  const { lang, toggleLang } = useLangContext();

  return (
    <div className={styles.container}>
      <div className={styles.languageToggle}>
        <Image src="/Images/Flags/UKFlag.svg" width={40} height={60} alt="" />
        <Switch checked={lang === "gr" ? true : false} onClick={toggleLang} />
        <Image
          src="/Images/Flags/GreekFlag.svg"
          width={40}
          height={60}
          alt=""
        />
      </div>
    </div>
  );
}
