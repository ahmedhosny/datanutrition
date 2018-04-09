import React, { Component } from "react";
import glamorous from "glamorous";
import Typo from "./Typo";
import Line from "./Line";
import Plot from "react-plotly.js";

const GPlot = glamorous(Plot)({
  width: "100%",
  height: 900
});

class Matrix extends Component {
  render() {
    const { raw } = this.props;
    var trace1 = {
      z: [[1, 20, 30], [20, 1, 60], [30, 60, 1]],
      type: "heatmap"
    };

    var trace2 = {
      x: raw["physician_profile_id"],
      type: "histogram",
      xaxis: "x2",
      yaxis: "y2"
    };

    var trace3 = {
      x: raw["product_name"],
      type: "histogram",
      xaxis: "x3",
      yaxis: "y3"
    };

    var trace4 = {
      z: [[1, 20, 30], [20, 1, 60], [30, 60, 1]],
      type: "heatmap",
      xaxis: "x4",
      yaxis: "y4"
    };

    var data = [trace1, trace2, trace3, trace4];

    var layout = {
      autosize: true,
      title: "",
      xaxis: { domain: [0, 0.45] },
      yaxis: { domain: [0, 0.45] },
      xaxis4: {
        domain: [0.55, 1],
        anchor: "y4"
      },
      xaxis3: {
        domain: [0, 0.45],
        anchor: "y3"
      },
      xaxis2: { domain: [0.55, 1] },
      yaxis2: {
        domain: [0, 0.45],
        anchor: "x2"
      },
      yaxis3: { domain: [0.55, 1] },
      yaxis4: {
        domain: [0.55, 1],
        anchor: "x4"
      }
    };
    return (
      <div>
        <Typo content={"Matrix"} size={4} />
        <Line thickness={9} />
        <GPlot useResizeHandler={true} data={data} layout={layout} />
      </div>
    );
  }
}
export default Matrix;
