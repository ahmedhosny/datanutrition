import Papa from "papaparse";
import data from "../data";
import { getOrdinalNominal } from "./ordinalNominal";
import { getContinuousDiscrete } from "./continuousDiscrete";

// const url =
//   "https://raw.githubusercontent.com/ahmedhosny/datanutrition/master/src/utils/sample.csv";
const url =
  "https://raw.githubusercontent.com/ahmedhosny/datanutrition/master/src/utils/sample_missing.csv";

// all csv is parsed as string
export function getStats() {
  Papa.parse(url, {
    download: true,
    header: true,
    skipEmptyLines: true,
    complete: function(results) {
      const noOfRows = results.data.length;
      const transposed = Object.assign(
        ...Object.keys(results.data[0]).map(key => ({
          [key]: results.data.map(o => o[key])
        }))
      );
      const ordinalNominal = getOrdinalNominal(data, transposed, noOfRows);
      const continuousDiscrete = getContinuousDiscrete(
        data,
        transposed,
        noOfRows
      );
      console.log(JSON.stringify(continuousDiscrete));
    }
  });
}

/**
 * Calculate missing percentage
 * @param  {object} count    count from lodash
 * @param  {number} noOfRows number of entires
 * @return {string}          [either 0% or the actual %
 */
export function getMissingOrZero(count, noOfRows, which) {
  return count[which] === undefined
    ? "0%"
    : parseFloat(count[which] / noOfRows * 100)
        .toFixed(2)
        .toString() + "%";
}
