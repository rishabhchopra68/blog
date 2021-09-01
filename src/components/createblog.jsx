import React, { Component } from "react";
import { useState } from "react";

const CreateBlog = (props) => {
  const data = JSON.parse(localStorage.getItem("data"));

  const id = data[data.length - 1].id + 1;

  const [blog, setblog] = useState({ id: id, userId: 1 }); // to set/use current blog details

  function handleSubmit(event) {
    event.preventDefault();
    // const result = await saveBlog({ ...blog });
    let posts = JSON.parse(localStorage.getItem("data"));

    posts.push({ ...blog });
    // console.log(posts);
    // console.log({ ...blog });

    localStorage.setItem("data", JSON.stringify(posts));

    props.history.push("/");
  }

  function handleChange(event) {
    let field = event.target.name;
    let data = { ...blog };
    data[field] = event.target.value;
    setblog(data);
  }

  return (
    <div>
      <h1> Create Blog</h1>
      <form className="form-group" onSubmit={handleSubmit}>
        <label>Id</label>
        <input value={id} className="form-control" readOnly></input>
        <label>Title</label>
        <input
          name="title"
          className="form-control"
          onChange={handleChange}
          value={blog.title}
          required
        ></input>
        <label>Body</label>
        <input
          name="body"
          className="form-control"
          value={blog.body}
          onChange={handleChange}
          required
        ></input>
        <button type="submit" className="btn btn-primary">
          Publish Changes
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
