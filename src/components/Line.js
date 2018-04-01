import React, { Component } from "react";
import PropTypes from "prop-types";
import glamorous from "glamorous";
/**
 * The component
 * @type {Object}
 */
class Line extends Component {
  /**
   * Render
   * @return {ReactElement}
   */
  render() {
    const { thickness } = this.props;
    const GDiv = glamorous.div({
      height: thickness * 1,
      backgroundColor: "black",
      marginTop: 0,
      marginBottom: 10
    });
    return <GDiv />;
  }
}
Line.propTypes = {
  thickness: PropTypes.number.isRequired
};
export default Line;
