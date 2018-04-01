import React, { Component } from "react";
import PropTypes from "prop-types";
import glamorous from "glamorous";
import Line from "./Line";
import Typo from "./Typo";
/**
 * The component
 * @type {Object}
 */
class Entry extends Component {
  /**
   * Render
   * @return {ReactElement}
   */
  render() {
    const { name, value } = this.props;
    return (
      <div>
        <Typo content={name} type={3} />
        <Typo content={value} type={2} position={"right"} />
        <Line thickness={1} />
      </div>
    );
  }
}
// Entry.propTypes = {
//   name: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired
// };
export default Entry;
