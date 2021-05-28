import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/blogApi";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import { GetStaticProps, GetStaticPaths } from "next";
import { READ_BLOG } from "../../lib/type";
import { VFC } from "react";

interface Props {
  postData: READ_BLOG | null;
}
type PathProps = { id: string };

export const getStaticProps: GetStaticProps<Props, PathProps> = async ({
  params,
}) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};

export const getStaticPaths: GetStaticPaths<PathProps> = async () => {
  const id = await getAllPostIds();
  return {
    paths: id,
    fallback: false,
  };
};

const Post: VFC<Props> = ({ postData }: Props) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.created_at} />
        </div>
        <div>{postData.content}</div>
      </article>
    </Layout>
  );
};
export default Post;
