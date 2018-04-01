import React, { Component } from "react";
import PropTypes from "prop-types";
import Glamorous from "glamorous";
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
    const { name, value, url } = this.props;
    const GDiv = Glamorous.div({
      display: "flex",
      verticalAlign: "bottom"
    });
    return (
      <div>
        <GDiv>
          <Typo content={name} type={3} />
          <Typo content={value} type={2} position={"right"} url={url} />
        </GDiv>
        <Line thickness={1} />
      </div>
    );
  }
}
Entry.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  url: PropTypes.bool.isRequired
};
Entry.defaultProps = {
  url: false
};
export default Entry;
