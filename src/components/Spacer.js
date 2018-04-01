import React, { Component } from "react";
// import PropTypes from "prop-types";
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
    const GDiv = glamorous.div({
      height: 20,
      width: "100%",
      backgroundColor: "white",
      marginTop: 5,
      marginBottom: 5
    });
    return <GDiv />;
  }
}
export default Spacer;
