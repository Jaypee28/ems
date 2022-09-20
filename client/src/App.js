import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./css/style.css";
import Routes from "./Routes";

class App extends Component {
  render() {
    return (
      <Router>
      <main>
        <Routes/>
     </main>
     </Router>
    );
  }
}

export default App;
