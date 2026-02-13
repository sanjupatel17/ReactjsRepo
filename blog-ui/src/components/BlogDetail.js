import React from "react";

function BlogDetail({ blog, goBack }) {
  return (
    <div className="detail-card">
      <h2>{blog.title}</h2>

      <p className="meta">
        By {blog.author} • {blog.date}
      </p>

      <p className="content">{blog.content}</p>

      <button onClick={goBack}>← Back to Blogs</button>
    </div>
  );
}

export default BlogDetail;
