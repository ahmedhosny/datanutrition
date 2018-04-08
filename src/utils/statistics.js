import Papa from "papaparse";
import data from "../data";
import _ from "lodash";

const url =
  "https://raw.githubusercontent.com/ahmedhosny/datanutrition/master/src/utils/sample.csv";

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
      const stats = getOrdinal(data, transposed, noOfRows);
      console.log(stats);
    }
  });
}

/**
 * Gets ordinal statistics
 * @param  {Object} data       data from my json
 * @param  {array} trasnposed  transposed from csv of actual data
 * @param  {number} noOfRows     number of rows.
 */
function getOrdinal(data, trasnposed, noOfRows) {
  let stats = [];
  data.statistics.ordinal.map((m, index) => {
    const column = trasnposed[m.name];
    const count = _.countBy(column);
    const uniqueEntries = _.uniq(column).length;
    console.log(count);
    const obj = {
      name: m.name,
      count: column.length,
      uniqueEntries: uniqueEntries,
      mostFrequent: getFreq(count, noOfRows, uniqueEntries, true),
      leastFrequent: getFreq(count, noOfRows, uniqueEntries, false)
    };
    stats.push(obj);
  });
  return stats;
}

/**
 * Calculate the freq of the most and least entires
 * @param  {object} count    count from lodash
 * @param  {number} noOfRows number of entires
 * @param  {number} unique   number of unique entires
 * @param  {bool} which      true for most freq, false for least freq
 * @return {string}          most or least frequent
 */
function getFreq(count, noOfRows, unique, which) {
  const freq = Object.keys(count).reduce(function(a, b) {
    if (which) {
      return count[a] > count[b] ? a : b;
    } else {
      return count[a] < count[b] ? a : b;
    }
  });
  //
  //if the entire column is made up all unique entries
  //
  if (noOfRows === unique) {
    return "--";
  } else if (unique === 1) {
    //
    // if entire column is made up of the same value
    // most frequent makes sense here - but least frequent is empty
    //
    if (which) {
      return freq + " (" + count[freq].toString() + ")";
    } else {
      return "--";
    }
  } else {
    //
    // if there is something in between
    // need to check if this is the absolute most/least frequent or there are
    // others - if so return "--"
    // regardless of most or least frequent
    //
    const edges = _.countBy(Object.values(count), function(item) {
      return item === count[freq];
    });
    if (edges.true === 1) {
      return freq + " (" + count[freq].toString() + ")";
    } else {
      return "multiple detected";
    }
  }
}
