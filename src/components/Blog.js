import React from 'react';
import '../App.css';

function Blog() {
  return (
    <div className="content">
      <div className="blog-section">
        <h1 className="section-title">Blog Posts</h1>
        <div className="blog-posts">
          {/* Example blog post */}
          <article className="blog-post">
            <h2>Latest Blog Post Title</h2>
            <div className="post-meta">
              <span className="post-date">January 1, 2024</span>
              <span className="post-category">Technology</span>
            </div>
            <p className="post-excerpt">
              This is a preview of the blog post content. Click to read more about this interesting topic...
            </p>
            <a href="#" className="read-more">Read More</a>
          </article>
          {/* Add more blog posts as needed */}
        </div>
      </div>
    </div>
  );
}

export default Blog; 