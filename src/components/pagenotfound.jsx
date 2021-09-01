import React, { Component } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <Link to="/">
        <button className="btn btn-sm btn-primary">Return to Safety</button>
      </Link>
    </div>
  );
};

export default NotFound;
