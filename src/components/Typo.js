import React, { Component } from "react";
import PropTypes from "prop-types";
import glamorous from "glamorous";
import { getInner } from "../utils/functions";

/**
 * The component
 * @type {Object}
 */
class Typo extends Component {
  /**
   * Render
   * @return {ReactElement}
   */
  render() {
    const dict = {
      1: {
        fontSize: 24,
        fontFamily: "HelveticaLTStd-Light"
      },
      2: {
        fontSize: 30,
        fontFamily: "HelveticaLTStd-Roman"
      },
      3: {
        fontSize: 36,
        fontFamily: "HelveticaLTStd-Bold"
      },
      4: {
        fontSize: 50,
        fontFamily: "HelveticaLTStd-Bold"
      },
      5: {
        fontSize: 60,
        fontFamily: "HelveticaLTStd-Bold"
      }
    };
    const { content, size, position, type, sub } = this.props;

    const GTypography = glamorous.div(dict[size]);
    const paddingLeft = position === "right" ? 20 : 0;
    const lineHeight = position === "right" || sub ? 1.3 : 1;
    const wordBreak = position === "right" ? "break-word" : "normal";
    const wordWrap = "break-word";
    const maxWidth = position === "" ? 400 : "";
    const inner = getInner(type, content);
    return (
      <GTypography
        style={{
          textAlign: position,
          flexGrow: 1,
          paddingLeft: paddingLeft,
          lineHeight: lineHeight,
          wordBreak: wordBreak,
          wordWrap: wordWrap,
          maxWidth: maxWidth
        }}
      >
        {inner}
      </GTypography>
    );
  }
}
Typo.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  type: PropTypes.number.isRequired,
  position: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  sub: PropTypes.bool.isRequired
};
Typo.defaultProps = {
  position: "",
  type: "text",
  sub: false
};
export default Typo;
