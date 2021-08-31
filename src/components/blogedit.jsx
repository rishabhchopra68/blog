// create a form with all details filled for the current blog

import React, { Component } from "react";
import { useState, useEffect } from "react";
// import getBlogs from "../getdata";

import { getBlog, saveBlog } from "../getdata";

const BlogEdit = (props) => {
  const id = props.match.params.id; // current blog ID

  const [blog, setblog] = useState([]); // to set/use current blog details

  async function populateBlog() {
    // getting blog data
    const { data } = await getBlog(id);
    setblog(data);
  }

  useEffect(() => {
    // only for initial render
    console.log("changed");
    populateBlog(blog);
  }, []);

  function handleChange(event) {
    // event.preventDefault();
    let field = event.target.name;
    let data = { ...blog };
    data[field] = event.target.value;
    setblog(data);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    // const result = await saveBlog({ ...blog });
    let posts = JSON.parse(localStorage.getItem("data"));

    posts = posts.map((post) => {
      if (post.id == id) {
        return { ...blog };
      }
      return post;
    });
    localStorage.setItem("data", JSON.stringify(posts));

    props.history.push("/");
  }

  return (
    <div>
      <h1> Edit blog</h1>
      <form className="form-group" onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          name="title"
          className="form-control"
          onChange={handleChange}
          value={blog.title}
        ></input>
        <label>Body</label>
        <input
          name="body"
          className="form-control"
          value={blog.body}
          onChange={handleChange}
        ></input>
        <button type="submit" className="btn btn-primary">
          Publish Changes
        </button>
      </form>
    </div>
  );
};

export default BlogEdit;
