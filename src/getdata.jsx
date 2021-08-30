import React, { Component } from "react";
import axios from "axios";

export const getBlogs = () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
};

export const getBlog = (id) => {
  return axios.get("https://jsonplaceholder.typicode.com/posts/" + id);
};

export const saveBlog = (blog) => {
  const body = { ...blog };
  //   delete body._id;
  return axios.put(
    "https://jsonplaceholder.typicode.com/posts/" + blog.id,
    body
  );
};

// export default { getBlogs, getBlog };
