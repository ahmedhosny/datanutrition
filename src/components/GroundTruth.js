import React, { Component } from "react";
import glamorous from "glamorous";
import Typo from "./Typo";
import Line from "./Line";
import Plot from "react-plotly.js";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import _ from "lodash";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const GPlot = glamorous(Plot)({
  width: "100%",
  height: 300
});

const marker = {
  color: "white",
  line: {
    color: "black",
    width: 2
  }
};

class GroundTruth extends Component {
  state = {
    choice: "total_amount_of_payment_usdollars",
    correlation: true // positive
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleChangeSwitch = name => event => {
    this.setState({
      [name]: event.target.checked
    });
  };

  render() {
    const { data } = this.props;
    const { choice, correlation } = this.state;
    const choices = Object.keys(data).map((item, idx) => {
      return {
        value: item,
        label: item
      };
    });
    const keys = Object.keys(data[choice]);
    const values = Object.values(data[choice]);
    var dataPlotly = {
      x: keys,
      y: _.fill(Array(keys.length), choice),
      z: values,
      type: "heatmap",
      colorscale: "Greys",
      reversescale: correlation ? true : false,
      showlegend: false,
      zmin: correlation ? 0 : -1,
      zmax: correlation ? 1 : 0
    };

    var layout = {
      autosize: true,
      margin: {
        l: 300,
        r: 50,
        b: 120,
        t: 50,
        pad: 4
      },
      title: ""
    };

    var config = {
      displayModeBar: false,
      displaylogo: false
    };

    return (
      <div>
        <Typo content={"Ground Truth Correlations"} size={4} />
        <Line thickness={9} />
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12} md={12}>
            <FormControlLabel
              control={
                <Switch
                  checked={correlation}
                  onChange={this.handleChangeSwitch("correlation")}
                  value="correlation"
                  color="primary"
                />
              }
              label={
                correlation ? "positive correlation" : "negative correlation"
              }
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              select
              fullWidth={true}
              label="Variable"
              value={this.state.choice}
              onChange={this.handleChange("choice")}
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
        <GPlot
          useResizeHandler={true}
          data={[dataPlotly]}
          layout={layout}
          config={config}
        />
      </div>
    );
  }
}
export default GroundTruth;
