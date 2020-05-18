import React, { Component } from "react";
import PropTypes from "prop-types";
import glamorous from "glamorous";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Section from "./Section";
import Header from "./Header";
import Spacer from "./Spacer";
import Statistics from "./Statistics";
import PairPlot from "./PairPlot";
import GroundTruth from "./GroundTruth";
import Probabilistic from "./Probabilistic";
import { Element } from "react-scroll";
import Typo from "./Typo";
import Line from "./Line";
import Wrapper from "./Wrapper";

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
        <Wrapper name="" content={<Header title={data.title} />} />
        <Wrapper
          name="metadata"
          content={<Section title={"Metadata"} data={data.metadata} />}
        />
        <Wrapper
          name="provenance"
          content={<Section title={"Provenance"} data={data.provenance} />}
        />
        <Wrapper
          name="variables"
          content={<Section title={"Variables"} data={data.variables} />}
        />
        <Wrapper
          name="statistics"
          content={<Statistics data={data.statistics} />}
        />
        <Wrapper name="pairplot" content={<PairPlot raw={raw} />} />
        <Wrapper
          name="probabilistic"
          content={<Probabilistic data={data.probabilistic} />}
        />
        <Wrapper
          name="groundtruth"
          content={<GroundTruth data={data.groundtruth} />}
        />
      </div>
    );
  }
}
Label.propTypes = {
  data: PropTypes.object.isRequired,
  raw: PropTypes.object.isRequired
};
export default Label;
