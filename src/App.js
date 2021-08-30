import logo from "./logo.svg";
import "./App.css";
import { Table } from "./components/table";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home";
import BlogDetails from "./components/blogdetails";
import { useState } from "react";
import BlogEdit from "./components/blogedit";

function App() {
  return (
    <div className="App">
      <main className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/viewblog/:id" component={BlogDetails} />
          <Route path="/editblog/:id" component={BlogEdit} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
