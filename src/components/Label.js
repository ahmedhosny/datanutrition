import React, { Component } from "react";
import PropTypes from "prop-types";
import glamorous from "glamorous";
import Card, { CardContent } from "material-ui/Card";
import Metadata from "./Metadata";
import Header from "./Header";

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
            <Metadata data={data.metadata} />
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
