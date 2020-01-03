import React from 'react';
import Layout from '../components/layout';
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/post-preview';
import ReadLink from '../components/read-link';

export default () => {
  const posts = usePosts();
  return (
    <Layout>
      <h1>Home</h1>
      <p>Some words about stuff.</p>
      <ReadLink to="/about/">Learn about me &rarr;</ReadLink>

      <h2>Some of my work</h2>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  );
};
