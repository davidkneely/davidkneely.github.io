import React from 'react';
import '../App.css';
import BlogPosts from './BlogPosts';

function Blog() {
  return (
    <div className="content">
      <div className="blog-section">
        <BlogPosts />
      </div>
    </div>
  );
}

export default Blog; 