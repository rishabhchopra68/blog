import React, { Component, useEffect } from "react";
import { getBlogs } from "../getdata";
import { useState } from "react";
import { Link } from "react-router-dom";

const BlogDetails = (props) => {
  const id = props.match.params.id; // current blog ID

  return (
    <div>
      {JSON.parse(localStorage.getItem("data")).map((blog) => {
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
      {/* <Link to="/"> */}
      <button
        className="btn btn-primary"
        onClick={() => props.history.push("/")}
      >
        Done
      </button>
      {/* </Link> */}
    </div>
  );
};

export default BlogDetails;
