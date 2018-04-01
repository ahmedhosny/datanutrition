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
        fontFamily: "HelveticaLTStd-Roman"
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
    const { content, type, position } = this.props;
    console.log(position);
    // const display = inline ? "inline" : "";
    const GTypography = glamorous.div(dict[type]);
    return <GTypography style={{ float: { position } }}>{content}</GTypography>;
  }
}
Typo.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  type: PropTypes.number.isRequired,
  position: PropTypes.string.isRequired
  // inline: PropTypes.bool.isRequired
};
Typo.defaultProps = {
  position: "left"
  // inline: true
};
export default Typo;

// display: "inline",
