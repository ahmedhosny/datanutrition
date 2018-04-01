import React, { Component } from "react";
import PropTypes from "prop-types";
import Glamorous from "glamorous";
import Line from "./Line";
import Typo from "./Typo";
import { capitalizeFirstLetter } from "../utils/functions";
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
    const { name, value, type, sub, last } = this.props;
    const GDiv = Glamorous.div({
      display: "flex",
      verticalAlign: "bottom"
    });
    console.log(last);
    return (
      <div>
        <GDiv>
          <Typo
            content={capitalizeFirstLetter(name)}
            size={sub ? 2 : 3}
            sub={sub}
          />
          <Typo
            content={value}
            size={2}
            position={"right"}
            type={type}
            sub={sub}
          />
        </GDiv>
        {last ? null : <Line thickness={sub ? 1 : 3} />}
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
  type: PropTypes.string.isRequired,
  sub: PropTypes.bool.isRequired,
  last: PropTypes.bool.isRequired
};
Entry.defaultProps = {
  type: "text",
  sub: false,
  last: false
};
export default Entry;
