import React from "react";
import './blog.css'
import { blogs } from "../../portfolio";
import BlogCard from "../../components/blogCard/BlogCard";

function Blog(props) {
  const theme = props.theme;
  return (
    <div className="main" id="blogs">
      <div className="blogs-body-div">
        {blogs.blogs.map((blog) => {
          return <BlogCard blog={blog} theme={theme} />;
        })}
      </div>
    </div>
  );
}

export default Blog;
