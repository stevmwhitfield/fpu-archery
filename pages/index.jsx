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
    setIsCancelled(content.status);

    const today = new Date();
    const resetDate = new Date(content.date);
    const temp = new Date();
    temp.setDate(resetDate.getDate() + 1);
    if (today > resetDate) {
      resetStatus(temp);
    }
  }, []);

  const resetStatus = (newDate) => {
    const mutations = [
      {
        patch: {
          id: content._id,
          set: { status: false, date: newDate.toISOString() },
        },
      },
    ];

    fetch("https://5k3ranel.api.sanity.io/v2021-03-25/data/mutate/production", {
      method: "post",
      headers: {
        "Content-type": "application/json",
        Authorization:
          "Bearer skPaj3QBVbpNxCAYH78dDnaeeNr9iWwhYXGPMWqOv5pPH5XXMwgPJD3KhWJXGgScqSsTk8qw7IQSgNgDt",
      },
      body: JSON.stringify({ mutations }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

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
