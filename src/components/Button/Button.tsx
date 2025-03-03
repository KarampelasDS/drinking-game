import styles from "./Button.module.css";

export default function Button(props) {
  return (
    <a href={props.link}>
      <div className={styles.Button}>{props.text}</div>
    </a>
  );
}
