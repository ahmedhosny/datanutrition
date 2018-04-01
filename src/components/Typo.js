import React, { Component } from "react";
import PropTypes from "prop-types";
import glamorous from "glamorous";
import Typography from "material-ui/Typography";

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
        fontSize: 42,
        fontFamily: "HelveticaLTStd-Bold"
      },
      5: {
        fontSize: 48,
        fontFamily: "HelveticaLTStd-Bold"
      }
    };
    const { content, type, position, url } = this.props;
    const GTypography = glamorous.div(dict[type]);
    const paddingLeft = position === "right" ? 20 : 0;
    const lineHeight = position === "right" ? 1.4 : 1;
    const inner = url ? (
      <a href={"http://" + content} target="_blank">
        {" "}
        {content}{" "}
      </a>
    ) : (
      content
    );
    return (
      <GTypography
        style={{
          textAlign: position,
          flexGrow: 1,
          paddingLeft: paddingLeft,
          lineHeight: lineHeight
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
  url: PropTypes.bool.isRequired
};
Typo.defaultProps = {
  position: "",
  url: false
};
export default Typo;
