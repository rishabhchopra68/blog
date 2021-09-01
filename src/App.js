import logo from "./logo.svg";
import "./App.css";
import { Table } from "./components/table";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home";
import BlogDetails from "./components/blogdetails";
import { useState } from "react";
import BlogEdit from "./components/blogedit";
import CreateBlog from "./components/createblog";
import NotFound from "./components/pagenotfound";

function App() {
  return (
    <div className="App">
      <main className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/viewblog/:id" component={BlogDetails} />
          <Route path="/editblog/:id" component={BlogEdit} />
          <Route path="/createblog" component={CreateBlog} />
          <Route path="/notfound" component={NotFound} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
