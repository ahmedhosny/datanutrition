import React, { Component } from "react";
import PropTypes from "prop-types";
import glamorous from "glamorous";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";
import Line from "./Line";
import { CardActions } from "material-ui/Card";
import Typo from "./Typo";
import Entry from "./Entry";
import EntryMulti from "./EntryMulti";
import { capitalizeFirstLetter, getType } from "../utils/functions";
import _ from "lodash";

/**
 * The component
 * @type {Object}
 */
class MetaData extends Component {
  /**
   * Render
   * @return {ReactElement}
   */
  render() {
    const { data } = this.props;
    let entries = [];
    _.forEach(data, function(value, key) {
      let entry;
      if (typeof data[key] === "string" || typeof data[key] === "number") {
        entry = (
          <Entry name={key} value={data[key]} key={key} type={getType(key)} />
        );
      } else {
        entry = <EntryMulti name={key} object={data[key]} key={key} />;
      }
      entries.push(entry);
    });
    return (
      <div>
        <Typo content={"Metadata"} size={4} />
        <Line thickness={9} />
        {entries}
      </div>
    );
  }
}
MetaData.propTypes = {
  data: PropTypes.object.isRequired
};
export default MetaData;

// <Line thickness={1} />
// <Line thickness={1} offset={true} />
// <Line thickness={2} />
// <Typography component="p">
//   Lizards are a widespread group of squamate reptiles, with over 6,000
//   species, ranging across all continents except Antarctica
// </Typography>
// <Line thickness={2} offset={true} />
// <Line thickness={3} />
// <Line thickness={3} offset={true} />
// {data.title}
// <Typo content={"tiny"} type={1} />
// <Typo content={"small"} type={2} />
// <Typo content={"medium"} type={3} />
// <Typo content={"large"} type={4} />
// <Typo content={"huge"} type={5} />
//
// <Typography component="p">
//   Lizards are a widespread group of squamate reptiles, with over 6,000
//   species, ranging across all continents except Antarctica
// </Typography>
// <CardActions>
//   <Button size="small" color="primary">
//     Share
//   </Button>
//   <Button size="small" color="primary">
//     Learn More
//   </Button>
// </CardActions>
