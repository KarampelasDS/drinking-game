import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
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
        <Image src="Images/hamburger.svg" width={40} height={40} alt="" />
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
              <Image src="Images/close.svg" width={40} height={40} alt="" />
            </button>
          </li>
          <li
            className={
              props.currentPage == "/"
                ? `${styles.homeLi} ${styles.activeLink}`
                : styles.homeLi
            }
          >
            <Link href="/" onClick={closeSidebar}>
              Home
            </Link>
          </li>
          <li
            className={
              props.currentPage == "/gamemodes" ? styles.activeLink : ""
            }
          >
            <Link href="/gamemodes" onClick={closeSidebar}>
              Gamemodes
            </Link>
          </li>
          <li
            className={props.currentPage == "/contact" ? styles.activeLink : ""}
          >
            <Link href="/contact" onClick={closeSidebar}>
              Contact
            </Link>
          </li>
          <li className={styles.accentLink}>
            <Link href="/donate" onClick={closeSidebar}>
              Donate
            </Link>
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
