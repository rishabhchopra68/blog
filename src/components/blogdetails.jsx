import React, { Component, useEffect } from "react";

const BlogDetails = (props) => {
  const id = props.match.params.id; // current blog ID

  function checkPageExists(id) {
    const data = JSON.parse(localStorage.getItem("data")).filter(
      (blog) => blog.id == id
    );
    console.log(data);
    if (!data[0]) {
      console.log("not found");
      props.history.push("/notfound");
      //   <Redirect to="/notfound"></Redirect>;
    }
  }

  function populateBlog() {
    checkPageExists(id);
  }

  useEffect(() => {
    // only for initial render

    populateBlog();
  }, []);

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
