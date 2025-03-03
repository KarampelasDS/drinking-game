import Button from "../Button/Button";
import styles from "./PopUp.module.css";
import { FaUser } from "react-icons/fa";
import { useLangContext } from "../LangContext";

export default function PopUp(props) {
  const { lang } = useLangContext();
  return (
    <>
      <div className={styles.background} onClick={props.closeFunction}></div>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.players}>
            <FaUser />
            <h1>{props.players}</h1>
          </div>
          <h1 className={styles.headerText}>
            {lang === "en" ? "How to play:" : "Πως να παίξετε:"}
          </h1>
          <img
            className={styles.closeButton}
            onClick={props.closeFunction}
            src="/Images/close.svg"
          />
        </div>
        <img src={props.image} width={props.imageSize} />
        <p className={styles.paragraph}>{props.text}</p>
        <Button
          link={props.link}
          text={lang === "en" ? "Play Now" : "Παίξτε Τώρα"}
        />
      </div>
    </>
  );
}
