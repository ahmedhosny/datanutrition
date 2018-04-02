import React, { Component } from "react";
import PropTypes from "prop-types";
import Glamorous from "glamorous";
import Typo from "./Typo";

/**
 * The component
 * @type {Object}
 */
class Navigation extends Component {
  /**
   * Render
   * @return {ReactElement}
   */
  render() {
    const GDiv = Glamorous.div({
      padding: 20,
      color: "#696969"
    });
    return (
      <GDiv>
        <Typo content={"This is nothing but a demo."} size={3} />
      </GDiv>
    );
  }
}
export default Navigation;
