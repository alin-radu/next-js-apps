import PostsGrid from '../posts-grid/PostsGrid';

import classes from './AllPosts.module.css';

function AllPosts(props) {
  const { posts } = props;

  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
}

export default AllPosts;
