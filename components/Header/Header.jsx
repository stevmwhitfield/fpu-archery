import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header id={styles.header}>
      <nav id={styles.nav}>
        <div id={styles.logo}>
          <Link href="/" passHref>
            <a>
              <Image
                src={
                  "https://floridapoly.edu/student-affairs/student-development/teams/assets/archery/archery-mark-small.png"
                }
                alt={"FPU Archery Logo"}
                width={128}
                height={96}
              />
            </a>
          </Link>
        </div>
        <ul className={styles["nav-list"]}>
          <li className={styles["nav-item"]}>
            <Link href="/" passHref>
              <a className={styles["nav-link"]}>Home</a>
            </Link>
          </li>
          <li className={styles["nav-item"]}>
            <Link href="/weather" passHref>
              <a className={styles["nav-link"]}>Weather</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
