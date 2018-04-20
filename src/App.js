import React, { Component } from "react";
import Viewer from "./components/Viewer";
import Papa from "papaparse";
import data from "./data";
import { getStats } from "./utils/statistics";
import "./App.css";

/**
 * Only run to get statistics in the console
 */
// getStats();

const url =
  "https://raw.githubusercontent.com/ahmedhosny/datanutrition/master/src/utils/sample_missing.csv";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      raw: {}
    };
    this.formatData = this.formatData.bind(this);
  }
  formatData(results) {
    const transposed = Object.assign(
      ...Object.keys(results.data[0]).map(key => ({
        [key]: results.data.map(o => o[key])
      }))
    );
    this.setState({
      raw: transposed
    });
  }
  componentWillMount() {
    Papa.parse(url, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: this.formatData
    });
  }
  render() {
    const { raw } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={"img/logo-s.png"} style={{ height: "100%" }} />
          <div style={{ height: "100%", flex: 1 }}>
            <h1 className="App-title">Dataset Nutrition Label Prototype</h1>
          </div>
        </header>
        <Viewer data={data} raw={raw} />
      </div>
    );
  }
}

export default App;
