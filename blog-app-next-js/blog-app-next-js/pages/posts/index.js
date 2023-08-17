import Head from 'next/head';

import { getAllPosts } from '../../lib/posts-util';

import AllPosts from '../../components/posts/all-posts/AllPosts';
import { Fragment } from 'react';

function AllPostsPage(props) {
  const { posts } = props;

  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts."
        />
      </Head>
      <AllPosts posts={posts} />;
    </Fragment>
  );
}

export default AllPostsPage;

export function getStaticProps() {
  const featuredPosts = getAllPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
