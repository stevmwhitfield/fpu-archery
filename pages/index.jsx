import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { useState, useEffect } from "react";
import Link from "next/link";
import { sanityClient } from "../lib/sanity";
import styles from "../styles/Home.module.scss";

const query = `
  *[_type=="content"] {
    _id,
    days,
    times,
    status,
    date
  }
`;

const HomePage = ({ content }) => {
  const [isCancelled, setIsCancelled] = useState(false);

  useEffect(() => {
    console.log(content.status);
    setIsCancelled(content.status);
  }, []);

  return (
    <div id="wrapper">
      <Header />
      <main id="main">
        <h1 className="page-header">Florida Poly Archery</h1>
        {isCancelled ? (
          <h2 className={styles.alert}>PRACTICE IS CANCELLED FOR TODAY!</h2>
        ) : null}
        <section className={styles.section}>
          <article>
            <h2>Practice Info</h2>
            <p>{content.times}</p>
            <p>{content.days}</p>
          </article>
        </section>
        <section className={styles.section}>
          <article>
            <Link href="/weather" passHref>
              <a className={styles["button-link"]}>see the weather</a>
            </Link>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;

export async function getStaticProps() {
  const data = await sanityClient.fetch(query);
  const content = data[0];
  return { props: { content } };
}
