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
                src={"/florida-poly-archery.png"}
                alt={"FPU Archery Logo"}
                width={200}
                height={150}
              />
            </a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
