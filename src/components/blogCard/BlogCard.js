import React from "react";
import "./BlogCard.css";
import { Fade } from "react-reveal";
import { style } from "glamor";

function BlogCard(props) {
  const blog = props.blog;
  const theme = props.theme;
  const styles = style({
    boxShadow: `0px 2px 5px ${blog.color_code}`,
    border: `1px solid ${blog.color_code}`,
    ":hover": {
      boxShadow: `0 5px 15px ${blog.color_code}`,
    },
  });

  return (
    <Fade bottom duration={2000} distance="20px">
      <div className="blog-card" {...styles}>
        <div className="content">
          <a
            href={blog.blog_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="content-overlay"></div>
            <div
              className="blog-header"
              style={{ backgroundColor: blog.color_code }}
            >
              <img
                className="blog_img"
                src={blog.logo_path}
                alt={blog.alt_name}
              />
            </div>
            
          </a>
        </div>
        <div className="blog-body">
          <h3
            className="blog-body-subtitle"
            style={{ color: theme.secondaryText }}
          >
            {blog.subtitle}
          </h3>
        </div>
      </div>
    </Fade>
  );
}

export default BlogCard;
