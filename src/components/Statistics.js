import React, { Component } from "react";
import PropTypes from "prop-types";
import Line from "./Line";
import Typo from "./Typo";
import Table from "./Table";
import Spacer from "./Spacer";

/**
 * The component
 * @type {Object}
 */
class Section extends Component {
  /**
   * Render
   * @return {ReactElement}
   */
  render() {
    const { data } = this.props;
    return (
      <div>
        <Typo content={"Statistics"} size={4} />
        <Line thickness={9} />
        <Table title={"Ordinal"} data={data.ordinal} />
        <Spacer />
        <Table title={"Nominal"} data={data.nominal} />
        <Spacer />
        <Table title={"Continuous"} data={data.continuous} />
        <Spacer />
        <Table title={"Discrete"} data={data.discrete} />
      </div>
    );
  }
}
Section.propTypes = {
  data: PropTypes.object.isRequired
};
export default Section;
