import React, { Component } from "react";
import PropTypes from "prop-types";
import Glamorous from "glamorous";
import Line from "./Line";
import Typo from "./Typo";
import Entry from "./Entry";
import { capitalizeFirstLetter, getType } from "../utils/functions";
import _ from "lodash";

/**
 * The component
 * @type {Object}
 */
class EntryMulti extends Component {
  /**
   * Render
   * @return {ReactElement}
   */
  render() {
    const { name, object } = this.props;
    console.log(object);
    const GDiv = Glamorous.div({
      marginLeft: 50
    });
    let entries = [];
    let lastKey = Object.keys(object)[Object.keys(object).length - 1];
    _.forEach(object, function(value, key) {
      let last = lastKey === key ? true : false;
      entries.push(
        <Entry
          name={key}
          value={value}
          key={key}
          type={getType(key)}
          sub={true}
          last={last}
        />
      );
    });
    return (
      <div>
        <Typo content={capitalizeFirstLetter(name)} size={3} />
        <Line thickness={1} />
        <GDiv>{entries}</GDiv>
        <Line thickness={3} />
      </div>
    );
  }
}
EntryMulti.propTypes = {
  name: PropTypes.string.isRequired,
  object: PropTypes.object.isRequired
};
export default EntryMulti;
