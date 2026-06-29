import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function getYouTubeVideoId(url) {
  const patterns = [
    /youtu\.be\/([^?&/]+)/,
    /youtube\.com\/watch\?v=([^?&/]+)/,
    /youtube\.com\/embed\/([^?&/]+)/,
    /youtube\.com\/shorts\/([^?&/]+)/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

function Post() {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch('/posts.json', { cache: 'no-store' })
      .then(response => response.json())
      .then(data => {
        const postData = data.posts.find(p => p.id === parseInt(id));
        setPost(postData);
      })
      .catch(error => console.error('Error loading post:', error));
  }, [id]);

  if (!post) {
    return <div className="post-loading">Loading...</div>;
  }

  const youtubeVideoId = post.youtubeUrl ? getYouTubeVideoId(post.youtubeUrl) : null;

  return (
    <div className="post-detail">
      <div className="post-detail-header">
        <Link to="/blog" className="back-button">← Back to Blog</Link>
        <h1>{post.title}</h1>
        <div className="post-meta">
          <span className="post-date">{post.date}</span>
          <div className="post-tags">
            {post.tags.map((tag, index) => (
              <span key={index} className="post-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="post-detail-content">
        {youtubeVideoId && (
          <div className="post-section">
            <div className="video-container">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}

        <div className="post-section">
          <p className="post-introduction">{post.fullContent.introduction}</p>
        </div>

        {post.fullContent.sections.map((section, index) => (
          <div key={index} className="post-section">
            <h2>{section.title}</h2>
            {section.content.split('\n\n').map((paragraph, i) => (
              <div key={i}>
                {paragraph.startsWith('```') && paragraph.endsWith('```') ? (
                  <pre className="code-block">
                    <code>
                      {paragraph.substring(
                        paragraph.indexOf('\n') + 1,
                        paragraph.lastIndexOf('\n')
                      )}
                    </code>
                  </pre>
                ) : (
                  paragraph.includes('- ') ? (
                    <ul className="post-list">
                      {paragraph.split('\n').map((item, j) => (
                        <li key={j}>{item.replace('- ', '')}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{paragraph}</p>
                  )
                )}
              </div>
            ))}
          </div>
        ))}

        <div className="post-section">
          <p className="post-conclusion">{post.fullContent.conclusion}</p>
        </div>
      </div>
    </div>
  );
}

export default Post; 