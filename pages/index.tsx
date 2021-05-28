import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/blogApi";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps, NextPage } from "next";
import { READ_BLOG } from "../lib/type";

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

interface Props {
  allPostsData: READ_BLOG[];
}

const Home: NextPage<Props> = ({ allPostsData }) => {
  return (
    <Layout home>
      <Head>…</Head>
      <section className={utilStyles.headingMd}>…</section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map((blog) => (
            <li className={utilStyles.listItem} key={blog.id}>
              <Link href={`/posts/${blog.id}`}>
                <a>{blog.title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={blog.created_at} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};
export default Home;
