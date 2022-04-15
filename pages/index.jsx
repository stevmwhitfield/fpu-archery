import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { useState } from "react";
import styles from "../styles/Home.module.scss";

const HomePage = () => {
  const [isCancelled, setIsCancelled] = useState(false);

  const toggleState = () => {
    setIsCancelled(!isCancelled);
  };

  return (
    <div id="wrapper">
      <Header />
      <main id="main">
        <button onClick={toggleState}>Toggle State</button>
        <h1 className="page-header">Florida Poly Archery</h1>
        {isCancelled ? (
          <h2 className={styles.alert}>PRACTICE IS CANCELLED FOR TODAY!</h2>
        ) : null}
        <section className={styles.section}>
          <article>
            <h2>Practice Info</h2>
            <p>3:00 PM to 5:00 PM</p>
            <p>Tuesday, Wednesday, Friday</p>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
