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
    const { thickness, offset } = this.props;
    const GDiv = glamorous.div({
      height: thickness * 3,
      backgroundColor: "black",
      marginTop: 0,
      marginBottom: 10
    });
    const marginLeft = offset ? 70 : 0;
    return <GDiv style={{ marginLeft: marginLeft }} />;
  }
}
Line.propTypes = {
  thickness: PropTypes.number.isRequired,
  offset: PropTypes.bool.isRequired
};
Line.defaultProps = {
  offset: false
};
export default Line;
