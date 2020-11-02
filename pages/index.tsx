import Head from "next/head";
import Layout from "../components/layout";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>Onos - Phillippine weather dashboard</title>
      </Head>
      <h1>Onos</h1>
    </Layout>
  );
}

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }
