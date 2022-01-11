import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shahzada Ali Hassan - Shopify Cross Domain Tracking</title>
        <meta
          name="description"
          content="Generated by Shahzada Ali Hassan - Shopify Cross Domain Tracking"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {" "}
        <p>
          Welcome to{" "}
          <a href="https://Shahzadaalihassan.com">Shahzadaalihassan</a>
        </p>
        <h2 className={styles.title}>
          Read the{" "}
          <a href="https://www.shahzadaalihassan.com/blog/shopify-cross-domain-tracking">
            Blog Post
          </a>
        </h2>
        <h4>
          {" "}
          Click to test the cross domain{" "}
          <a href="https://hassanamzdemo1.myshopify.com/">
            Shopify Cross Domain Tracking
          </a>
        </h4>{" "}
      </main>
    </div>
  );
}
