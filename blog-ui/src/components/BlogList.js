import React from "react";
import BlogCard from "./BlogCard";

function BlogList({ blogs, onSelect }) {
  return (
    <>
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} onSelect={onSelect} />
      ))}
    </>
  );
}

export default BlogList;
