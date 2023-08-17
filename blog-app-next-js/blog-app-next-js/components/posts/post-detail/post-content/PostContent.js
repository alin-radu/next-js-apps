import Image from 'next/image';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';

import PostHeader from '../post-header/PostHeader';

import classes from './PostContent.module.css';

SyntaxHighlighter.registerLanguage('js', js);

function PostContent(props) {
  const { post } = props;
  const { slug, title, image, content } = post;

  const imagePath = `/images/posts/${slug}/${image}`;

  const customRenderers = {
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === 'img') {
        const image = node.children[0];
        const imagePath = `/images/posts/${post.slug}/${image.properties.src}`;

        return (
          <div className={classes.image}>
            <Image src={imagePath} alt={title} width={600} height={300} />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },

    code(code) {
      const { className, children } = code;
      const language = className.split('-')[1]; // className is something like language-js => We need the "js" part here
      return (
        <SyntaxHighlighter style={atomDark} language={language}>
          {children}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
