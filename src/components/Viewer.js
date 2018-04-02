import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "material-ui/Grid";
import Navigation from "./Navigation";
import Label from "./Label";

/**
 * The component
 * @type {Object}
 */
class Viewer extends Component {
  /**
   * Render
   * @return {ReactElement}
   */
  render() {
    const { data } = this.props;
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item md={3}>
            <Navigation />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Label data={data} />
          </Grid>
          <Grid item md={3} />
        </Grid>
      </div>
    );
  }
}
Viewer.propTypes = {
  data: PropTypes.object.isRequired
};
export default Viewer;
