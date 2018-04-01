import React, { Component } from "react";
import PropTypes from "prop-types";
import Line from "./Line";
import Typo from "./Typo";

/**
 * The component
 * @type {Object}
 */
class Header extends Component {
  /**
   * Render
   * @return {ReactElement}
   */
  render() {
    const { title } = this.props;
    return (
      <div>
        <Typo content={"Dataset Facts"} type={5} />
        <Typo content={title} type={3} />
        <Line thickness={3} offset={false} />
      </div>
    );
  }
}
Header.propTypes = {
  title: PropTypes.string.isRequired
};
export default Header;
