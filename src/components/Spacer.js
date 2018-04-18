import React, { Component } from "react";
import PropTypes from "prop-types";
import glamorous from "glamorous";
/**
 * The component
 * @type {Object}
 */
class Spacer extends Component {
  /**
   * Render
   * @return {ReactElement}
   */
  render() {
    const { location } = this.props;
    const GDiv = glamorous.div({
      height: 25,
      width: "100%",
      backgroundColor: location === "inside" ? "#fff" : "#eee",
      marginTop: 5,
      marginBottom: 5
    });
    return <GDiv />;
  }
}
Spacer.propTypes = {
  location: PropTypes.string.isRequired
};
Spacer.defaultProps = {
  location: "inside"
};
export default Spacer;
