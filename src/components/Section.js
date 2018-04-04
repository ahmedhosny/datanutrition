import React, { Component } from "react";
import PropTypes from "prop-types";
import Line from "./Line";
import Typo from "./Typo";
import Entry from "./Entry";
import EntryMulti from "./EntryMulti";
import { getType } from "../utils/functions";
import _ from "lodash";

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
    const { title, data } = this.props;
    let entries = [];
    let length = Object.keys(data).length - 1;
    let counter = 0;
    _.forEach(data, function(value, key) {
      let last = counter === length ? true : false;
      counter += 1;
      let entry;
      if (typeof data[key] === "string" || typeof data[key] === "number") {
        entry = (
          <Entry
            name={key}
            value={data[key]}
            key={key}
            type={getType(key)}
            last={last}
          />
        );
      } else {
        entry = (
          <EntryMulti
            name={key}
            object={data[key]}
            key={key}
            lastOverall={last}
          />
        );
      }
      entries.push(entry);
    });
    return (
      <div>
        <Typo content={title} size={4} />
        <Line thickness={9} />
        {entries}
      </div>
    );
  }
}
Section.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
};
export default Section;
