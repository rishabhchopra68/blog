import React, { Component } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, Switch, Route } from "react-router-dom";
import BlogDetails from "./blogdetails";
import { getBlogs } from "../getdata";

const Home = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    populateBlogs();
  }, []);

  function handleDelete(id) {
    let posts = [...data];
    posts = posts.filter((post) => post.id !== id);
    setdata(posts);
  }

  async function populateBlogs() {
    const { data } = await getBlogs();
    setdata(data.slice(0, 10));
  }

  //   const getData = async () => {
  //     try {
  //       const data = await axios.get(
  //         "https://jsonplaceholder.typicode.com/posts"
  //       );
  //       //   console.log(data.data.slice(0, 10));
  //       setdata(data.data.slice(0, 10));
  //     } catch (error) {
  //       console.log(error);
  //       return [];
  //     }
  //   };

  return (
    <div>
      <h1>Blogapp</h1>
      <Link to="/create"></Link>
      <ol className="list-group">
        {data.map((blog) => (
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
