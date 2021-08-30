// create a form with all details filled for the current blog

import React, { Component } from "react";
import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
// import getBlogs from "../getdata";

import { getBlog, saveBlog } from "../getdata";

const BlogEdit = (props) => {
  const id = props.match.params.id; // current blog ID

  const [blog, setblog] = useState([]);

  async function populateBlogs() {
    const { data } = await getBlog(id);
    setblog(data);

    console.log(data);
    // currentblog = blogs.filter((blog) => blog.id == id);
    // setcurrblog(blogs.filter((blog) => blog.id == id));
  }

  useEffect(() => populateBlogs(), []);
  useEffect(() => {}, [blog]);

  //   console.log(currentblog);
  //   console.log(currentblog[0].title);

  //   handleSubmit = (event) => {
  //     let blog = {id:};

  //   }
  function handleChange(event) {
    // event.preventDefault();
    let field = event.target.name;

    let data = { ...blog };

    data[field] = event.target.value;
    setblog(data);
    // this.setState({ currentToDo: { ...currentToDo } });
  }
  async function handleSubmit(event) {
    event.preventDefault();
    const result = await saveBlog({ ...blog });
    console.log(blog);
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
