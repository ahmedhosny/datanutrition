import _ from "lodash";
import data from "../data";
import { getMissingOrZero } from "./statistics";
import { min, median, max, mean, standardDeviation } from "simple-statistics";

/**
 * Temporary to bind continuous and discrete
 */
let continuousDiscrete = data.statistics.continuous.concat(
  data.statistics.discrete
);

/**
 * Gets ordinal statistics
 * @param  {Object} data       data from my json
 * @param  {array} trasnposed  transposed from csv of actual data
 * @param  {number} noOfRows     number of rows.
 */
export function getContinuousDiscrete(data, trasnposed, noOfRows) {
  let stats = [];
  continuousDiscrete.map((m, index) => {
    const column = trasnposed[m.name];
    let columnFloat = [];
    column.map((item, idx) => {
      item !== "" ? columnFloat.push(parseFloat(item)) : null;
    });
    // based on original with potential missing values
    const count = _.countBy(column);
    const obj = {
      name: m.name,
      count: column.length,
      min: min(columnFloat),
      median: median(columnFloat).toFixed(2),
      max: max(columnFloat),
      mean: mean(columnFloat).toFixed(2),
      standardDeviation: standardDeviation(columnFloat).toFixed(2),
      missing: getMissingOrZero(count, noOfRows, ""),
      zeros: getMissingOrZero(count, noOfRows, "0")
    };
    stats.push(obj);
  });
  return stats;
}
