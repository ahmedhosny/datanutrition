import React, { Component } from "react";
import PropTypes from "prop-types";
import glamorous from "glamorous";
import Card, { CardContent } from "material-ui/Card";
import Section from "./Section";
import Header from "./Header";
import Spacer from "./Spacer";

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
    const { data } = this.props;
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
            <Section title={"Metadata"} data={data.metadata} />
            <Spacer />
            <Section title={"Provenance"} data={data.provenance} />
          </GCardContent>
        </GCard>
      </div>
    );
  }
}
Label.propTypes = {
  data: PropTypes.object.isRequired
};
export default Label;
