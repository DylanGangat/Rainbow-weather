import Link from "next/link";
import styles from "../styles/components/404.module.scss";
import Head from "next/head";
import Header from "../components/Header";

export default function ErrorPage() {
  return (
    <>
      <Head>
        <title>Weather App | Error Page</title>
        <meta
          name="description"
          content="Error page for when page is not found"
        />
      </Head>

      <main>
        <Header />
        <section className={styles["error-page"]}>
          <div className="container flow-content">
            <div>
              <h1 className={styles.title}>404</h1>
              <p className={styles.title}>Oooops!</p>
              <p className={styles.title}>Page Not Found</p>
            </div>
            <div>
              <p>This page does not exist or was removed!</p>
              <p>We suggest you back to home.</p>
            </div>
            <Link href="/">
              <a className="btn">Back to Home</a>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
