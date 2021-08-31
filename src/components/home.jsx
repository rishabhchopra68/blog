import React, { Component } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, Switch, Route } from "react-router-dom";
import BlogDetails from "./blogdetails";
import { getBlogs } from "../getdata";
import { PropertyKeys } from "ag-grid-community";

const Home = (props) => {
  useEffect(() => {
    if (!localStorage.getItem("data")) {
      populateBlogs();
    }
    console.log("hello");
  }, []);

  function handleDelete(id) {
    let posts = [...JSON.parse(localStorage.getItem("data"))];
    posts = posts.filter((post) => post.id !== id);
    localStorage.setItem("data", JSON.stringify(posts));
    props.history.push("/");
  }

  async function populateBlogs() {
    const { data } = await getBlogs();
    localStorage.setItem("data", JSON.stringify(data.slice(0, 10)));
    props.history.push("/");
  }

  return (
    <div>
      <h1>Blogapp</h1>
      <Link to="/create"></Link>
      <ol className="list-group">
        {localStorage.getItem("data") &&
          JSON.parse(localStorage.getItem("data")).map((blog) => (
            <li key={blog.id}>
              {blog.title}
              <br></br>
              <Link to={"/viewblog/" + blog.id}>
                <button className="btn btn-success">View</button>
              </Link>
              <Link to={"/editblog/" + blog.id}>
                <button className="btn btn-primary">Edit</button>
              </Link>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(blog.id)}
              >
                Delete
              </button>
            </li>
          ))}
      </ol>
    </div>
  );
};

export default Home;
