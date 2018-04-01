import React, { Component } from "react";
import Viewer from "./components/Viewer";
import data from "./data";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Dataset nutrition label</h1>
        </header>
        <Viewer data={data} />
      </div>
    );
  }
}

export default App;
