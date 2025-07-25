import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function BlogPosts() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/posts.json')
      .then(response => response.json())
      .then(data => {
        // Sort posts by date, newest first
        const sortedPosts = [...data.posts].sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateB - dateA; // Descending order (newest first)
        });
        setPosts(sortedPosts);
      })
      .catch(error => console.error('Error loading posts:', error));
  }, []);

  return (
    <div className="blog-content">
      <h1 className="section-title">Blog Posts</h1>
      <div className="blog-posts">
        {posts.map(post => (
          <article
            key={post.id}
            className="blog-post"
            style={{ cursor: 'pointer' }}
            onClick={() => navigate(`/post/${post.id}`)}
          >
            <h2>{post.title}</h2>
            <div className="post-meta">
              <span className="post-date">{post.date}</span>
              <div className="post-tags">
                {post.tags.map((tag, index) => (
                  <span key={index} className="post-tag">{tag}</span>
                ))}
              </div>
            </div>
            <p className="post-description">{post.description}</p>
            <Link
              to={`/post/${post.id}`}
              className="read-more"
              onClick={e => e.stopPropagation()}
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

export default BlogPosts;
