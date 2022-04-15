import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/" passHref>
              <a>
                <Image
                  src={
                    "https://floridapoly.edu/student-affairs/student-development/teams/assets/archery/archery-mark-small.png"
                  }
                  alt={"FPU Archery Logo"}
                  width={100}
                  height={75}
                />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/weather" passHref>
              <a>Weather</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
