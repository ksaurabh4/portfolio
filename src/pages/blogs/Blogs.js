import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Blog from "../../containers/blog/Blog";
import {blogSection} from '../../portfolio'
import BlogsImg from "./BlogsImg";
import "./BlogComponent.css";
import { Fade } from "react-reveal";
import { style } from "glamor";

function Blogs(props) {
  const theme = props.theme;
  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });
  return (
    <>
    <div className="blog-main">
      <Header theme={props.theme} setTheme={props.setTheme} />
      <div className="basic-blog">
      <Fade bottom duration={2000} distance="40px">
          <div className="projects-heading-div">
            <div className="projects-heading-img-div">
              <BlogsImg theme={theme} />
            </div>
            <div className="projects-heading-text-div">
              <h1
                className="projects-heading-text"
                style={{ color: theme.text }}
              >
                {blogSection.title}
              </h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {blogSection.subtitle}
              </p>
            </div>
          </div>
        </Fade>
        <Blog theme={props.theme} />
        <div className='blogsite-btn-div'><a {...styles} href={blogSection.link} target={`_blank`} className='general-btn'>CHECK MORE BLOGS</a></div>
        
      </div>
      <Footer theme={props.theme} />
    </div>
   
 </>);
}

export default Blogs;
