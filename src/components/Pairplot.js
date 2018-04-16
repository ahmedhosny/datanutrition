import React, { Component } from "react";
import glamorous from "glamorous";
import Typo from "./Typo";
import Line from "./Line";
import Plot from "react-plotly.js";
import TextField from "material-ui/TextField";
import MenuItem from "material-ui/Menu/MenuItem";
import Grid from "material-ui/Grid";

const GPlot = glamorous(Plot)({
  width: "100%",
  height: 900
});

const marker = {
  color: "white",
  line: {
    color: "black",
    width: 2
  }
};

class Pairplot extends Component {
  state = {
    choiceA: "product_name",
    choiceB: "recipient_state"
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { raw } = this.props;
    const { choiceA, choiceB } = this.state;
    const choices = Object.keys(raw).map((item, idx) => {
      return {
        value: item,
        label: item
      };
    });
    // bottom left
    var trace1 = {
      x: raw[choiceA],
      y: raw[choiceB],
      type: "histogram2d",
      colorscale: "Greys",
      reversescale: true,
      showlegend: false
    };
    // bottom right
    var trace2 = {
      x: raw[choiceB],
      type: "histogram",
      xaxis: "x2",
      yaxis: "y2",
      showlegend: false,
      marker: marker
    };
    // top left
    var trace3 = {
      x: raw[choiceA],
      type: "histogram",
      xaxis: "x3",
      yaxis: "y3",
      showlegend: false,
      marker: marker
    };
    // top right
    var trace4 = {
      x: raw[choiceB],
      y: raw[choiceA],
      type: "histogram2d",
      colorscale: "Greys",
      xaxis: "x4",
      yaxis: "y4",
      reversescale: true,
      showlegend: false
    };

    var data = [trace1, trace2, trace3, trace4];

    var layout = {
      autosize: true,
      title: "",
      xaxis: { domain: [0, 0.43] },
      yaxis: { domain: [0, 0.43] },
      xaxis4: {
        domain: [0.57, 1],
        anchor: "y4"
      },
      xaxis3: {
        domain: [0, 0.43],
        anchor: "y3"
      },
      xaxis2: { domain: [0.57, 1] },
      yaxis2: {
        domain: [0, 0.43],
        anchor: "x2"
      },
      yaxis3: { domain: [0.57, 1] },
      yaxis4: {
        domain: [0.57, 1],
        anchor: "x4"
      }
    };

    var config = {
      displayModeBar: false,
      displaylogo: false
    };

    return (
      <div>
        <Typo content={"Pair Plot"} size={4} />
        <Line thickness={9} />
        <GPlot
          useResizeHandler={true}
          data={data}
          layout={layout}
          config={config}
        />

        <Grid container spacing={24}>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              select
              fullWidth={true}
              label="Variable A"
              value={this.state.choiceA}
              onChange={this.handleChange("choiceA")}
              helperText=""
              margin="normal"
            >
              {choices.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              select
              fullWidth={true}
              label="Variable B"
              value={this.state.choiceB}
              onChange={this.handleChange("choiceB")}
              helperText=""
              margin="normal"
            >
              {choices.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default Pairplot;
