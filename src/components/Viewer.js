import React, { Component } from "react";
import PropTypes from "prop-types";
import Glamorous from "glamorous";
import Grid from "@material-ui/core/Grid";
import Navigation from "./Navigation";
import Label from "./Label";
import ParallelCoords from "./ParallelCoords";
import Description from "./Description";
import { Element } from "react-scroll";

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
    const { data, raw } = this.props;
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
            <Element name={"introduction"}>
              <Description />
            </Element>
            <Label data={data} raw={raw} />
          </Grid>
          <Grid item xs={12} sm={12} md={2} />
        </Grid>
      </div>
    );
  }
}
Viewer.propTypes = {
  data: PropTypes.object.isRequired,
  raw: PropTypes.object.isRequired
};
export default Viewer;
//             <ParallelCoords />
