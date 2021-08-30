import React, { Component, useEffect } from "react";
import { getBlogs } from "../getdata";
import { useState } from "react";

const BlogDetails = (props) => {
  console.log(props);

  const id = props.match.params.id; // current blog ID

  const [blogs, setblogs] = useState([]);

  async function populateBlogs() {
    const { data } = await getBlogs();
    setblogs(data.slice(0, 10));
  }
  useEffect(() => populateBlogs(), []);

  return (
    <div>
      {blogs.map((blog) => {
        if (blog.id == id) {
          return (
            <div style={{ margin: "20px" }} key={blog.id}>
              <h1>{blog.title}</h1>
              <br />
              <br />
              <p>{blog.body}</p>
            </div>
          );
        }
      })}
    </div>
  );
};

export default BlogDetails;
