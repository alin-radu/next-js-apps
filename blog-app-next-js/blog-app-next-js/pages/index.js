import { Fragment } from 'react';
import Head from 'next/head';

import { getFeaturedPosts } from '../lib/posts-util';

import FeaturedPosts from '../components/home-page/featured-posts/FeaturedPosts';
import Hero from '../components/home-page/hero/Hero';

function HomePage(props) {
  const { posts } = props;

  return (
    <Fragment>
      <Head>
        <title>Welcome</title>
        <meta name="description" content="Web development,programming blog." />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
}

export default HomePage;

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
