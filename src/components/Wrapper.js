import React, { Component } from "react";
import PropTypes from "prop-types";
import glamorous from "glamorous";
import Card, { CardContent } from "material-ui/Card";
import Section from "./Section";
import Header from "./Header";
import Spacer from "./Spacer";
import Statistics from "./Statistics";
import PairPlot from "./PairPlot";
import GroundTruth from "./GroundTruth";
import { Element } from "react-scroll";
import Typo from "./Typo";
import Line from "./Line";

/**
 * The component
 * @type {Object}
 */
class Wrapper extends Component {
  /**
   * Render
   * @return {ReactElement}
   */
  render() {
    const { name, content } = this.props;
    const GCard = glamorous(Card)({
      border: "5px solid black",
      padding: 0
    });
    const GCardContent = glamorous(CardContent)({
      paddingLeft: "16px !important",
      paddingRight: "16px !important"
    });
    return (
      <div>
        <Spacer location={"outside"} />
        <GCard>
          <GCardContent>
            <Element name={name}>{content}</Element>
            <Spacer />
          </GCardContent>
        </GCard>
      </div>
    );
  }
}
Wrapper.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.element.isRequired
};
export default Wrapper;
