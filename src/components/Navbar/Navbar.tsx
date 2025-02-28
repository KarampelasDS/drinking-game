import styles from "./Navbar.module.css";
import { useState } from "react";

export default function Navbar(props) {
  const [navbar, setNavbar] = useState(false);

  const openSidebar = () => {
    setNavbar(true);
  };

  const closeSidebar = () => {
    setNavbar(false);
  };

  return (
    <>
      <button
        id={styles.openSidebar}
        onClick={openSidebar}
        aria-label="open sidebar"
        aria-expanded={navbar}
        aria-controls="navbar"
      >
        <img
          src="Images/hamburger.svg"
          width={40}
          height={40}
          alt="Open Sidebar"
        />
      </button>

      <nav>
        <ul
          className={navbar ? `${styles.navbar} ${styles.show}` : styles.navbar}
        >
          <li>
            <button
              id={styles.closeSidebar}
              onClick={closeSidebar}
              aria-label="close sidebar"
            >
              <img src="Images/close.svg" alt="Close Sidebar" />
            </button>
          </li>
          <li
            className={
              props.currentPage == "/"
                ? `${styles.homeLi} ${styles.activeLink}`
                : styles.homeLi
            }
          >
            <a href="/">Home</a>
          </li>
          <li
            className={
              props.currentPage == "/gamemodes" ? styles.activeLink : ""
            }
          >
            <a href="/gamemodes">Gamemodes</a>
          </li>
          <li
            className={props.currentPage == "/contact" ? styles.activeLink : ""}
          >
            <a href="/contact">Contact</a>
          </li>
          <li className={styles.accentLink}>
            <a href="/donate">Donate</a>
          </li>
        </ul>
        <div
          onClick={closeSidebar}
          id={styles.overlay}
          aria-hidden="true"
        ></div>
      </nav>
    </>
  );
}
