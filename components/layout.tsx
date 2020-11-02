import Head from "next/head";
import styles from "./layout.module.css";

export const siteTitle = "Onos";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <title>Onos</title>
      <Head>
        <link rel="icon" href="/images/onos-logo.png" />
        <meta
          name="description"
          content="Philippine Seallite Weather Dashboard"
        />
        <meta property="og:image" content={`/images/onos-logo.png`} />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="stylesheet"
          href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
        ></link>
      </Head>

      {children}
    </div>
  );
}
