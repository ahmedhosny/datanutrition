import React, { Component } from "react";
import PropTypes from "prop-types";
import glamorous from "glamorous";
import Card, { CardContent } from "material-ui/Card";
import Section from "./Section";
import Header from "./Header";
import Spacer from "./Spacer";
import Statistics from "./Statistics";
import Pairplot from "./Pairplot";
import { Element } from "react-scroll";

import Typo from "./Typo";
import Line from "./Line";

/**
 * The component
 * @type {Object}
 */
class Label extends Component {
  /**
   * Render
   * @return {ReactElement}
   */
  render() {
    const { data, raw } = this.props;
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
        <GCard>
          <GCardContent>
            <Header title={data.title} />
            <Spacer />
            <Element name="metadata">
              <Section title={"Metadata"} data={data.metadata} />
            </Element>
            <Spacer />
            <Element name="provenance">
              <Section title={"Provenance"} data={data.provenance} />
            </Element>
            <Spacer />
            <Element name="variables">
              <Section title={"Variables"} data={data.variables} />
            </Element>
            <Spacer />
            <Element name="statistics">
              <Statistics data={data.statistics} />
            </Element>
            <Spacer />
            <Element name="pairplot">
              <Pairplot raw={raw} />
            </Element>
            <Spacer />
            <Element name="probabilistic">
              <Typo content={"Probabilistic Modelling"} size={4} />
              <Line thickness={9} />
              <img style={{ width: "100%" }} src="img/crosscat_results.png" />
            </Element>
          </GCardContent>
        </GCard>
      </div>
    );
  }
}
Label.propTypes = {
  data: PropTypes.object.isRequired,
  raw: PropTypes.object.isRequired
};
export default Label;
