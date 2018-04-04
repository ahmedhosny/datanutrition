import React, { Component } from "react";
import PropTypes from "prop-types";
import Glamorous from "glamorous";
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
    const GGrid = Glamorous(Grid)({
      position: "sticky",
      top: 0,
      padding: "0px !important"
    });
    return (
      <div>
        <Grid container spacing={24}>
          <GGrid item xs={12} sm={12} md={2}>
            <Navigation />
          </GGrid>
          <Grid item xs={12} sm={12} md={8}>
            <Label data={data} />
          </Grid>
          <Grid item xs={12} sm={12} md={2} />
        </Grid>
      </div>
    );
  }
}
Viewer.propTypes = {
  data: PropTypes.object.isRequired
};
export default Viewer;
