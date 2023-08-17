import PostsGrid from '../../posts/posts-grid/PostsGrid';
import classes from './FeaturedPosts.module.css';

function FeaturedPosts(props) {
  const { posts } = props;

  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}

export default FeaturedPosts;
