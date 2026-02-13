import React from "react";

function BlogCard({ blog, onSelect }) {
  return (
    <div className="blog-card" onClick={() => onSelect(blog)}>
      <h3>{blog.title}</h3>

      <p className="meta">
        By {blog.author} • {blog.date}
      </p>

      <p>{blog.summary}</p>

      <span className="read-more">Read More →</span>
    </div>
  );
}

export default BlogCard;
