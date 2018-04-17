import React, { Component } from "react";
import glamorous from "glamorous";
import Plot from "react-plotly.js";
import _ from "lodash";

const GPlot = glamorous(Plot)({
  width: "100%",
  height: 500
});

class ParallelCoords extends Component {
  render() {
    var trace = {
      type: "parcoords",
      opacity: 0.5,
      line: {
        color: [1, 2, 3, 4, 5, 6, 7],
        colorscale: "Jet"
      },
      labelfont: {
        size: 24
      },
      labelfont: {
        size: 18
      },
      tickfont: {
        size: 14
      },
      dimensions: [
        {
          range: [1, 7],
          constraintrange: [1, 7],
          tickvals: [1, 2, 3, 4, 5, 6, 7],
          ticktext: _.reverse([
            "metadata",
            "provenance",
            "variables",
            "statistics",
            "pairplots",
            "probabilistic modeling",
            "ground truth correlations"
          ]),
          label: "module",
          values: [1, 2, 3, 4, 5, 6, 7]
        },
        {
          range: [1, 3],
          tickvals: [1, 2, 3],
          ticktext: ["no exposure", "semi-exposure", "full exposure"],
          label: "exposes dataset",
          values: _.reverse([1, 1, 2, 2, 3, 3, 3])
        },
        {
          range: [1, 3],
          tickvals: [1, 2, 3],
          ticktext: ["full automated", "semi-automated", "fully manual"],
          label: "preparation effort",
          values: _.reverse([3, 3, 3, 1, 1, 2, 2])
        },
        {
          range: [1, 3],
          tickvals: [1, 2, 3],
          ticktext: ["factual", "semi-subjective", "subjective"],
          label: "subjectivity",
          values: _.reverse([1, 1, 2, 1, 1, 3, 1])
        },
        {
          range: [1, 3],
          tickvals: [1, 2, 3],
          ticktext: ["static", "semi-interactive", "interactive"],
          label: "interactivity",
          values: _.reverse([1, 1, 1, 1, 3, 1, 1])
        },
        {
          range: [1, 3],
          tickvals: [1, 2, 3],
          ticktext: ["low", "medium", "high"],
          label: "skill required",
          values: _.reverse([1, 1, 1, 2, 2, 3, 2])
        }
      ]
    };

    var layout = {
      margin: {
        l: 200,
        r: 120,
        b: 70,
        t: 150,
        pad: 4
      },
      autosize: true,
      title: "Module Attributes",
      paper_bgcolor: "#eee",
      titlefont: {
        size: 24
      },
      xaxis: {
        linewidth: 50
      },
      yaxis: {
        linewidth: 50
      }
    };

    var config = {
      displayModeBar: false,
      displaylogo: false
    };

    return (
      <div>
        <GPlot
          useResizeHandler={true}
          data={[trace]}
          layout={layout}
          config={config}
        />
      </div>
    );
  }
}

export default ParallelCoords;
