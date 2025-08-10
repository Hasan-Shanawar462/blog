import React from 'react';
import { useParams } from 'react-router-dom';
import { usePosts } from '../hooks/useposts'; // adjust path if needed
import { FaRegImage } from 'react-icons/fa';

const PostPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const { posts } = usePosts();

  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return (
      <p className="text-center my-5" role="alert" aria-live="polite">
        Post not found
      </p>
    );
  }

  return (
    <article className="container my-5" style={{ maxWidth: '720px' }}>
      <h1 className="mb-4">{post.title}</h1>

      {post.image ? (
        <img
          src={post.image}
          alt={post.title}
          className="img-fluid rounded mb-3"
          style={{ maxHeight: '300px', objectFit: 'cover', width: '100%' }}
          loading="lazy"
        />
      ) : (
        <div
          className="d-flex justify-content-center align-items-center mb-4"
          style={{
            height: '300px',
            backgroundColor: '#f0f0f0',
            borderRadius: '1rem',
            color: '#888',
            fontSize: '6rem',
            width: '100%',
          }}
          aria-label="Placeholder image"
          role="img"
        >
          <FaRegImage />
        </div>
      )}

      <div
        style={{ whiteSpace: 'pre-line', fontSize: '1.1rem', lineHeight: '1.6' }}
      >
        {post.content}
      </div>
    </article>
  );
};

export default PostPage;
