import Head from 'next/head';
import { Fragment } from 'react';

import PostContent from '../../components/posts/post-detail/post-content/PostContent';
import { getPostData, getPostsFiles, removeFileExtension } from '../../lib/posts-util';

function PostDetailPage(props) {
  const { post } = props;

  return (
    <Fragment>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </Fragment>
  );
}

export default PostDetailPage;

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => removeFileExtension(fileName));

  const pathsArr = slugs.map((slug) => ({
    params: {
      slug: slug,
    },
  }));

  return {
    paths: pathsArr,
    fallback: false,
  };
}
