import { useEffect, useState } from "react";

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/posts.json")
      .then((response) => response.json())
      .then((data) => setPosts(data.posts))
      .catch((error) => console.error("Error fetching blog posts:", error));
  }, []);

  return (
    <div className="blog-content">
      <h1 className="section-title">Blog</h1>
      <div className="blog-posts">
        {posts.map((post) => (
          <article key={post.id} className="blog-post">
            <h2>{post.title}</h2>
            <div className="post-meta">
              <span className="post-date">{new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
              <div className="post-tags">
                {post.tags.map((tag, index) => (
                  <span key={index} className="post-tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="post-content" dangerouslySetInnerHTML={{ __html: post.htmlContent }} />
            <a href="#" className="read-more">Read More</a>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
