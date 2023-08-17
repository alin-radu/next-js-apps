import PostItem from '../post-item/PostItem';

import classes from './PostsGrid.module.css';

function PostsGrid(props) {
  const { posts } = props;

  const renderContent = posts.map((post) => <PostItem key={post.slug} post={post} />);

  return <ul className={classes.grid}>{renderContent}</ul>;
}

export default PostsGrid;
