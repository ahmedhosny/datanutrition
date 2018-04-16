import React, { Component } from "react";
import glamorous from "glamorous";
import Typo from "./Typo";
import Line from "./Line";
import Plot from "react-plotly.js";

const GPlot = glamorous(Plot)({
  width: "100%",
  height: 900
});

class Pairplot extends Component {
  render() {
    const { raw } = this.props;
    // bottom left
    var trace1 = {
      x: raw["product_name"],
      y: raw["total_amount_of_payment_usdollars"],
      type: "histogram2d",
      colorscale: "Greys",
      reversescale: true,
      showlegend: false
    };
    // bottom right
    var trace2 = {
      x: raw["total_amount_of_payment_usdollars"],
      type: "histogram",
      xaxis: "x2",
      yaxis: "y2",
      showlegend: false,
      marker: {
        color: "white",
        line: {
          color: "black",
          width: 2
        }
      }
    };
    // top left
    var trace3 = {
      x: raw["product_name"],
      type: "histogram",
      xaxis: "x3",
      yaxis: "y3",
      showlegend: false,
      marker: {
        color: "white",
        line: {
          color: "black",
          width: 2
        }
      }
    };
    // top right
    var trace4 = {
      x: raw["total_amount_of_payment_usdollars"],
      y: raw["product_name"],
      type: "histogram2d",
      colorscale: "Greys",
      xaxis: "x4",
      yaxis: "y4",
      reversescale: true,
      xbins: {
        size: 100
      },
      showlegend: false
    };

    var data = [trace1, trace2, trace3, trace4];

    var layout = {
      autosize: true,
      title: "",
      xaxis: { domain: [0, 0.43] },
      yaxis: { domain: [0, 0.43] },
      xaxis4: {
        domain: [0.58, 1],
        anchor: "y4"
      },

      xaxis3: {
        domain: [0, 0.43],
        anchor: "y3"
      },
      xaxis2: { domain: [0.58, 1] },
      yaxis2: {
        domain: [0, 0.43],
        anchor: "x2"
      },
      yaxis3: { domain: [0.58, 1] },
      yaxis4: {
        domain: [0.58, 1],
        anchor: "x4"
      }
    };
    return (
      <div>
        <Typo content={"Pair Plot"} size={4} />
        <Line thickness={9} />
        <GPlot useResizeHandler={true} data={data} layout={layout} />
      </div>
    );
  }
}
export default Pairplot;
